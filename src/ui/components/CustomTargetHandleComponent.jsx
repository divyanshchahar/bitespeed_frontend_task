import { Handle, Position } from 'reactflow';
import styles from './CustomTargetHandleComponent.module.css';

// React component to render target handle
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
