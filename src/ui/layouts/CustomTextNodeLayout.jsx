import React from 'react';
import styles from './CustomTextNodeLayout.module.css';

import CustomSourceHandleComponent from '../components/CustomSourceHandleComponent';
import CustomTargetHandleComponent from '../components/CustomTargetHandleComponent';

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
