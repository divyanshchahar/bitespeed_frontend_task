import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';
import { nodeTypes } from '../../react-flow/nodes';
import { edgesAdded, edgesDeleted } from '../../redux/edgesSlice';
import { nodeUpdated } from '../../redux/nodesSlice';
import CustomEdgeComponenet from '../components/CustomEdgeComponenet';
import DroppableComponent from '../components/DroppableComponent';
import styles from './ReactFlowLayout.module.css';

const edgeTypes = { customEdgeComponent: CustomEdgeComponenet };

function ReactFlowLayout() {
	const dispatch = useDispatch();
	const edges = useSelector((state) => state.edges);
	const nodes = useSelector((state) => state.nodes);

	// function to handle node changes like dragging ang deletion
	const onNodesChange = useCallback(
		(changes) => {
			dispatch(nodeUpdated(changes));
		},

		[nodes]
	);

	// function to handle change in edges
	const onEdgesChange = useCallback(
		(changes) => {
			if (changes[0].type === 'remove') {
				dispatch(edgesDeleted(changes[0]));
			}
		},
		[dispatch]
	);

	//function to handle connections
	const onConnect = useCallback(
		(connection) => {
			const edge = { ...connection, id: uuidv4(), type: 'customEdgeComponent' };
			const matchingSource = edges.filter(
				(item) => item.source === edge.source
			);

			if (matchingSource.length > 0) {
				alert('Only 1 edge can orignate from one source');
				return;
			}

			dispatch(edgesAdded(edge));
		},
		[dispatch, edges]
	);

	return (
		<DroppableComponent>
			<div className={styles.container}>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					edgeTypes={edgeTypes}
					fitView
				>
					<Background />
					<Controls />
				</ReactFlow>
			</div>
		</DroppableComponent>
	);
}
export default ReactFlowLayout;
