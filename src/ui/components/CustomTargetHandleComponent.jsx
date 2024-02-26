import { Handle, Position } from 'reactflow';
import styles from './CustomTargetHandleComponent.module.css';

function CustomTargetHandleComponent() {
	return (
		<Handle
			type="target"
			position={Position.Left}
			className={styles.container}
		/>
	);
}

export default CustomTargetHandleComponent;
