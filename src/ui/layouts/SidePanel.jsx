import { useDispatch } from 'react-redux';
import { Panel, useNodes } from 'reactflow';
import { nodesList } from '../../react-flow/nodes';
import { nodeAdded, textUpdated } from '../../redux/nodesSlice';
import { v4 as uuidv4 } from 'uuid';
import { UseDispatch } from 'react-redux';
import styles from './SidePanel.module.css';

function NodesList({ nodesList }) {
	const dispatch = useDispatch();

	const onClickHandler = (e, nodeName) => {
		dispatch(
			nodeAdded({
				id: uuidv4(),
				type: nodeName,
				position: { x: 0, y: 0 },
				data: '',
			})
		);
	};

	return (
		<>
			{nodesList.map((item) => {
				return (
					<button
						key={item.name}
						className={styles.button}
						onClick={(e) => onClickHandler(e, item.name)}
					>
						{item.displayText}
					</button>
				);
			})}
		</>
	);
}

function SidePanel() {
	const nodes = useNodes();
	const dispatch = useDispatch();

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
								value={item.data}
								onChange={(e) => {
									dispatch(textUpdated({ id: item.id, data: e.target.value }));
								}}
							></textarea>
						);
					}
				})}
			</div>
		</Panel>
	);
}

export default SidePanel;
