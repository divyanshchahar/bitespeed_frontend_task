import React from 'react';
import { Handle, Position } from 'reactflow';
import styles from './CustomTextNodeComponent.module.css';

function CustomTextNodeComponent() {
	return (
		<>
			<div
				// style={{ background: 'red', padding: '5px', borderRadius: '5px' }}
				className={styles.container}
			>
				<p className={styles.paragraph}>Text Message</p>
				<input
					type="text"
					id="text"
					placeholder="input text mesage"
					// className="nodrag"
					className={styles.input}
					// style={{ padding: '5px' }}
				/>
			</div>
			<Handle type="target" position={Position.Left} />
			<Handle type="source" position={Position.Right} />
		</>
	);
}

export default CustomTextNodeComponent;
