import { Handle, Position } from 'reactflow';
import styles from './CustomSourceHandleComponent.module.css';

function CustomSourceHandleComponent() {
	return (
		<Handle
			type="source"
			position={Position.Right}
			className={styles.container}
		/>
	);
}

export default CustomSourceHandleComponent;
