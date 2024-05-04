import { computed, map } from 'nanostores';

export const $cart = map<Record<number, CartItem | undefined>>({});

export function addItemToCart(item: ShopItem) {
	const cart = $cart.get()[item.id];
	const quantity = cart ? cart.quantity : 0;

	$cart.setKey(item.id, {
		item,
		quantity: quantity + 1,
	});
}

export function removeItemFromCart(itemId: number) {
	$cart.setKey(itemId, undefined);
}

export const subtotal = computed($cart, (entries) => {
	let total = 0;
	const entriesValues = Object.values(entries);

	for (const entry of entriesValues) {
		if (!entry) continue;
		total += entry.item.price * entry.quantity;
	}
	return total;
});
