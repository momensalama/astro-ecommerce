/** @jsxImportSource react */
import { addItemToCart } from '../../stores/cart';

function AddToCart({ item }: { item: ShopItem }) {
	return (
		<button className="big-link" onClick={() => addItemToCart(item)}>
			Add To Cart
		</button>
	);
}

export default AddToCart;
