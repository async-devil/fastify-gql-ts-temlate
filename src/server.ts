import { readFileSync } from "fs";
import { join } from "path";

import fastify from "fastify";
import mercurius from "mercurius";
import mercuriusValidation from "mercurius-validation";

import { sandwichResolvers } from "./resolvers/sandwiches/sandwiches.resolvers";

export const server = fastify();

const schema = readFileSync(join(__dirname, "./schema.graphql"), { encoding: "utf-8" });

void server.register(mercurius, {
	schema: `${mercuriusValidation.graphQLTypeDefs} ${schema}`,
	resolvers: sandwichResolvers,
	prefix: "api/",
});

void server.register(mercuriusValidation);
