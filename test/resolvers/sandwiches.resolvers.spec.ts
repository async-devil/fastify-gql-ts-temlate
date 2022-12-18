import { createMercuriusTestClient } from "mercurius-integration-testing";

import { SandwichesRepository } from "src/resolvers/sandwiches/sandwiches.repository";
import { server } from "src/server";
import { sandwichEntityStub } from "test/stubs/sandwich.entity.stub";

describe("Sandwiches resolvers", () => {
	const app = createMercuriusTestClient(server, {
		url: "/api/graphql",
	});

	describe("getSandwich resolver tests", () => {
		test("Should return valid sandwich on valid data", async () => {
			jest
				.spyOn(SandwichesRepository.prototype, "getOneById")
				.mockReturnValueOnce(sandwichEntityStub());

			const result = await app.query(`
        query {
          getSandwich(id: "0") {
            id
            name
            ingredients
          }
        }
      `);

			expect(result.data).toEqual({ getSandwich: sandwichEntityStub() });
		});

		test("Should return error on non found sandwich", async () => {
			jest.spyOn(SandwichesRepository.prototype, "getOneById").mockImplementationOnce(() => {
				throw new Error("Not found");
			});

			const result = await app.query(`
      query {
        getSandwich(id: "0") {
          id
          name
          ingredients
        }
      }
    `);

			expect(result.errors).not.toBeUndefined();
		});

		test("Should return error on invalid data", async () => {
			const result = await app.query(`
        query {
          getSandwich(id: []) {
            id
            name
            ingredients
          }
        }
      `);

			expect(result.errors).not.toBeUndefined();
		});
	});
});
