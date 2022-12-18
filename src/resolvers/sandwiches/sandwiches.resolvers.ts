import { IResolvers } from "mercurius";

import { CreateSandwichDto } from "./dto/create-sandwich.dto";
import { SelectSandwichByIdDto } from "./dto/select-sandwich-by-id.dto";
import { UpdateSandwichDto } from "./dto/update-sandwich.dto";
import { SandwichesRepository } from "./sandwiches.repository";

const sandwichesRepository = new SandwichesRepository();

export const sandwichResolvers: IResolvers = {
	Query: {
		getSandwich: async (_, dto: SelectSandwichByIdDto) => {
			return sandwichesRepository.getOneById(dto.id);
		},
		getSandwiches: async () => {
			return sandwichesRepository.getAll();
		},
	},
	Mutation: {
		createSandwich: async (_, { dto }: { dto: CreateSandwichDto }) => {
			return sandwichesRepository.createOne(dto);
		},
		updateSandwich: async (_, { id, dto }: { id: string; dto: UpdateSandwichDto }) => {
			return sandwichesRepository.updateOneById(id, dto);
		},
		deleteSandwich: async (_, dto: SelectSandwichByIdDto) => {
			return sandwichesRepository.deleteOneById(dto.id);
		},
	},
};
