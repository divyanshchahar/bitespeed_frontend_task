import { useCallback, useState } from 'react';
import ReactFlow, {
	Background,
	Controls,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';

// importing custom ui componenents
import CustomTextNodeLayout from '../layouts/CustomTextNodeLayout';

import styles from './ReactFlowLayout.module.css';

// mock list of nodes
const initialNodes = [
	{
		id: 'node-1',
		type: 'customTextNode',
		position: { x: 0, y: 0 },
	},
	{
		id: 'node-2',
		type: 'customTextNode',
		position: { x: 100, y: 100 },
	},
	{
		id: 'node-3',
		type: 'customTextNode',
		position: { x: 200, y: 200 },
	},
];

const nodeTypes = { customTextNode: CustomTextNodeLayout };

function ReactFlowLayout() {
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState([]);

	// function to handle node changes like dragging ang deletion
	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);

	// function to handle change in edges
	const onEdgesChange = useCallback(
		(changes) => {
			console.log(changes);
			return setEdges((eds) => applyEdgeChanges(changes, eds));
		},
		[setEdges]
	);

	//function to handle connections
	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);

	return (
		<div
			// style={{ height: '100vh', width: '80vw', overflow: 'hidden' }}
			className={styles.container}
		>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				fitView
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
}
export default ReactFlowLayout;
