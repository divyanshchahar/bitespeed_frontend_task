import { useSelector } from 'react-redux';
import styles from './TopNavBar.module.css';

function TopNavBar() {
	const edges = useSelector((state) => state.edges);
	const nodes = useSelector((state) => state.nodes);

	const clickHandler = () => {
		const nodeCount = nodes.map((node) => node.id);

		const edgeCount = edges.map((edge) => edge.target);

		if (nodeCount.length - edgeCount.length <= 1) {
			alert('performing mock save');
			return;
		}

		alert("Model can't be saved as some nodes don't have a source");
	};

	return (
		<div className={styles.container}>
			<button className={styles.button} onClick={() => clickHandler()}>
				Save
			</button>
		</div>
	);
}

export default TopNavBar;
