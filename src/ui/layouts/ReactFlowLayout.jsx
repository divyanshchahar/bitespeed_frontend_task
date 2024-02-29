import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';
import { nodeTypes } from '../../react-flow/nodes';
import { edgesAdded, edgesDeleted } from '../../redux/edgesSlice';
import CustomEdgeComponenet from '../components/CustomEdgeComponenet';
import styles from './ReactFlowLayout.module.css';
import SidePanel from './SidePanel';
import { nodeUpdated } from '../../redux/nodesSlice';

// // mock list of nodes
// const initialNodes = [
// 	{
// 		id: 'node-1',
// 		type: 'customTextNode',
// 		position: { x: 0, y: 0 },
// 	},
// 	{
// 		id: 'node-2',
// 		type: 'customTextNode',
// 		position: { x: 100, y: 100 },
// 	},
// 	{
// 		id: 'node-3',
// 		type: 'customTextNode',
// 		position: { x: 200, y: 200 },
// 	},
// ];

const edgeTypes = { customEdgeComponent: CustomEdgeComponenet };

function ReactFlowLayout() {
	// const [nodes, setNodes] = useState(initialNodes);

	const dispatch = useDispatch();
	const edges = useSelector((state) => state.edges);
	const nodes = useSelector((state) => state.nodes);

	// function to handle node changes like dragging ang deletion
	const onNodesChange = useCallback(
		// (changes) => {
		// 	console.log(changes);
		// },
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
			dispatch(edgesAdded(edge));
		},
		[dispatch]
	);

	return (
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
				<SidePanel />
			</ReactFlow>
		</div>
	);
}
export default ReactFlowLayout;
