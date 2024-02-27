import { Panel, useNodes } from 'reactflow';

import styles from './SidePanel.module.css';

function SidePanel() {
	const nodes = useNodes();

	return (
		<Panel position="top-right">
			<div className={styles.container}>
				<button className={styles.button}>Add Text Maessage node</button>

				{nodes.map((item) => {
					if (item.selected) {
						return (
							<textarea
								placeholder="enter text message"
								className={styles.textarea}
							></textarea>
						);
					}
				})}
			</div>
		</Panel>
	);
}

export default SidePanel;
