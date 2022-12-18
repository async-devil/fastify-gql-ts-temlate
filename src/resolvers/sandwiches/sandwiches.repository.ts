import { randomBytes } from "crypto";

import { CreateSandwichDto } from "./dto/create-sandwich.dto";
import { SandwichEntity } from "./dto/sandwich.entity";
import { UpdateSandwichDto } from "./dto/update-sandwich.dto";

export class SandwichesRepository {
	private sandwiches: SandwichEntity[] = [
		{
			id: "0",
			name: "Chicken sandwich",
			ingredients: ["Bread", "Chicken", "Cheese"],
		},
		{
			id: "1",
			name: "Giga cheese sandwich",
			ingredients: ["Bread", "Blue cheese", "Cheese"],
		},
	];

	public getOneById(id: string) {
		const sandwich = this.sandwiches.find((sandwich) => sandwich.id === id);

		if (!sandwich) throw new Error("Not found");

		return sandwich;
	}

	public getAll() {
		return this.sandwiches;
	}

	public createOne(dto: CreateSandwichDto) {
		const sandwich = { ...dto, id: randomBytes(3).toString("hex") };

		this.sandwiches.push(sandwich);

		return sandwich;
	}

	public updateOneById(id: string, dto: UpdateSandwichDto) {
		const sandwich = this.getOneById(id);

		Object.assign(sandwich, dto);

		return sandwich;
	}

	public deleteOneById(id: string) {
		this.sandwiches = this.sandwiches.filter((sandwich) => sandwich.id !== id);

		return true;
	}
}
