import styles from '../cart.module.css';
function EmptyCart() {
	return (
		<>
			<p class={styles.icon}>
				<span role="img" aria-label="hot dog">
					🌭
				</span>
			</p>
			<p class={styles.empty}>
				Your cart is empty! add a sandwich kit or two and give flavor a chance!
			</p>
		</>
	);
}

export default EmptyCart;
