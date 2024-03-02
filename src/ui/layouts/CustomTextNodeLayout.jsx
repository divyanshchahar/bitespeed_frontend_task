import styles from './CustomTextNodeLayout.module.css';
import CustomSourceHandleComponent from '../components/CustomSourceHandleComponent';
import CustomTargetHandleComponent from '../components/CustomTargetHandleComponent';

// React componenet to render Text Node (Message Node)
function CustomTextNodeComponent({ data }) {
	return (
		<>
			<div className={styles.container}>
				<p className={styles.paragraph}>Text Message</p>
				<div className={styles.textdiv}>
					<p>{data}</p>
				</div>
			</div>

			<CustomTargetHandleComponent />

			<CustomSourceHandleComponent />
		</>
	);
}

export default CustomTextNodeComponent;
