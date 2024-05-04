import { useStore } from '@nanostores/solid';
import { Show, createSignal } from 'solid-js';
import { subtotal, $cart as cart, removeItemFromCart } from '../../stores/cart';
import styles from '../cart.module.css';
import EmptyCart from '../solid/EmptyCart';
import { formatCurrency } from '../../utils/helper';
import CheckoutNotice from '../solid/CheckoutNotice';

function Cart() {
	const [showNotice, setShowNotice] = createSignal<boolean>(false);
	const $subtotal = useStore(subtotal);
	const $cart = useStore(cart);

	return (
		<aside class={styles.cart}>
			<h2>Your Cart</h2>

			<Show when={Object.values($cart()).length > 0} fallback={<EmptyCart />}>
				<ul class={styles.items}>
					{Object.values($cart()).map((entry) => {
						if (!entry) {
							return null;
						}
						return (
							<li class={styles.item}>
								<span class={styles.quantity}>{entry.quantity}</span>
								<span class={styles.name}>{entry.item.title}</span>
								<span class={styles.remove}>
									<button
										title="remove item"
										onClick={() => removeItemFromCart(entry.item.id)}
									>
										&times;
									</button>
								</span>
								<span class={styles.price}>
									{formatCurrency(entry.item.price)}
								</span>
							</li>
						);
					})}
				</ul>
				<div class={styles.details}>
					<p class={styles.subtotal}>
						<span class={styles.label}>Subtotal:</span>{' '}
						{formatCurrency($subtotal())}
					</p>
					<p class={styles.shipping}>
						<span class={styles.label}>Shipping:</span>
						<del>$10.00</del>
						<ins>FREE</ins>
					</p>
					<p class={styles.total}>
						<span class={styles.label}>Total:</span>{' '}
						{formatCurrency($subtotal())}
					</p>

					<p class={styles.checkout}>
						<button class="big-link" onClick={() => setShowNotice(true)}>
							Check Out
						</button>
					</p>

					<Show when={showNotice()}>
						<CheckoutNotice />
					</Show>
				</div>
			</Show>
		</aside>
	);
}

export default Cart;
