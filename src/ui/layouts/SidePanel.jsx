import { Panel, useNodes } from 'reactflow';
import { nodesList } from '../../react-flow/nodes';

import styles from './SidePanel.module.css';

function NodesList({ nodesList }) {
	return (
		<>
			{nodesList.map((item) => {
				return (
					<button key={item.name} className={styles.button}>
						{item.displayText}
					</button>
				);
			})}
		</>
	);
}

function SidePanel() {
	const nodes = useNodes();

	return (
		<Panel position="top-right">
			<div className={styles.container}>
				<NodesList nodesList={nodesList} />

				{nodes.map((item) => {
					if (item.selected) {
						return (
							<textarea
								key={item.id}
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
