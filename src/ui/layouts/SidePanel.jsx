import { useDispatch } from 'react-redux';
import { useNodes } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import { nodesList } from '../../react-flow/nodes';
import { nodeAdded, textUpdated } from '../../redux/nodesSlice';
import DraggableComponent from '../components/DraggableComponent';
import styles from './SidePanel.module.css';

// React component to render buttons to add nodes (this is an extensible componenet as requested)

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

	// note: more nodes can be easily added by modifying ./src/react-flow/node.js
	return (
		<>
			{nodesList.map((item) => {
				return (
					<DraggableComponent id={item.name} key={item.name}>
						<button
							key={item.name}
							className={styles.button}
							onClick={(e) => onClickHandler(e, item.name)}
						>
							{item.displayText}
						</button>
					</DraggableComponent>
				);
			})}
		</>
	);
}

// React Componenet to render side panel
function SidePanelLayout() {
	const nodes = useNodes();
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			<NodesList nodesList={nodesList} />

			{/* text are is rendered conditionally only if a node is selected */}
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
	);
}

export default SidePanelLayout;
