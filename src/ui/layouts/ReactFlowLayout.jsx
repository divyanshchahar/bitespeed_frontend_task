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
import CustomEdgeComponenet from '../components/CustomEdgeComponenet';

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

const initialEdges = [
	{
		id: 'n1=>n2',
		type: 'customEdgeComponent',
		source: 'node-1',
		target: 'node-2',
	},
];

const nodeTypes = { customTextNode: CustomTextNodeLayout };
const edgeTypes = { customEdgeComponent: CustomEdgeComponenet };

function ReactFlowLayout() {
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);

	// function to handle node changes like dragging ang deletion
	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);

	// function to handle change in edges
	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),

		[setEdges]
	);

	//function to handle connections
	const onConnect = useCallback(
		(connection) => {
			const edge = { ...connection, type: 'customEdgeComponent' };
			setEdges((eds) => addEdge(edge, eds));
		},
		[setEdges]
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
			</ReactFlow>
		</div>
	);
}
export default ReactFlowLayout;
