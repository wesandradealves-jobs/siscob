export interface IShoppingItem {
	shoppingId: number;
	shoppingName: string;
	active: boolean;
}

export interface IShoppingsState {
	items: IShoppingItem[];
}
