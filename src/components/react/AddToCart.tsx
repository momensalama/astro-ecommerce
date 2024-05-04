/** @jsxImportSource react */
import { addItemToCart } from '../../stores/cart';

function AddToCart({ item }: { item: ShopItem }) {
	return (
		<button
			className="big-link"
			onClick={() => {
				addItemToCart(item);
				console.log('Added to cart:', item);
			}}
		>
			Add To Cart
		</button>
	);
}

export default AddToCart;
