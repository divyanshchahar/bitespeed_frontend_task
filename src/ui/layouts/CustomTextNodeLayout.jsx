import React from 'react';
import { Handle, Position } from 'reactflow';
import styles from './CustomTextNodeLayout.module.css';

import CustomTargetHandleComponent from '../components/CustomTargetHandleComponent';
import CustomSourceHandleComponent from '../components/CustomSourceHandleComponent';

function CustomTextNodeComponent() {
	return (
		<>
			<div className={styles.container}>
				<p className={styles.paragraph}>Text Message</p>

				<input
					type="text"
					id="text"
					placeholder="input text mesage"
					className={`nodrag ${styles.input}`}
				/>
			</div>

			<CustomTargetHandleComponent />

			<CustomSourceHandleComponent />
		</>
	);
}

export default CustomTextNodeComponent;
