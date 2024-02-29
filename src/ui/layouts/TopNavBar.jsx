import styles from './TopNavBar.module.css';

function TopNavBar() {
	return (
		<div className={styles.container}>
			<button className={styles.button}>Save</button>
		</div>
	);
}

export default TopNavBar;
