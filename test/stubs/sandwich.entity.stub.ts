import { SandwichEntity } from "src/resolvers/sandwiches/dto/sandwich.entity";

export const sandwichEntityStub = (updates: Partial<SandwichEntity> = {}): SandwichEntity => {
	return Object.assign(
		{
			id: "0",
			name: "Chicken sandwich",
			ingredients: ["Bread", "Chicken", "Cheese"],
		},
		updates
	);
};

export const sandwichEntityStubSecondary = (
	updates: Partial<SandwichEntity> = {}
): SandwichEntity => {
	return Object.assign(
		{
			id: "1",
			name: "Giga cheese sandwich",
			ingredients: ["Bread", "Blue cheese", "Cheese"],
		},
		updates
	);
};
