import { DndContext } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { ReactFlowProvider } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import { nodesList } from './react-flow/nodes';
import { nodeAdded } from './redux/nodesSlice';
import ReactFlowLayout from './ui/layouts/ReactFlowLayout';
import SidePanelLayout from './ui/layouts/SidePanelLayout';
import TopNavBarLayout from './ui/layouts/TopNavBarLayout';

const nodeNames = nodesList.map((item) => item.name);

function App() {
	const dispatch = useDispatch();

	// function to add nodes to flow when they are dopped in the flow
	function handleDragEnd(e) {
		const { active } = e;

		// nodes will only be added if they are present in ./src/react-flow/nodes.js
		if (nodeNames.includes(active.id)) {
			dispatch(
				nodeAdded({
					id: uuidv4(),
					type: active.id,
					position: { x: 0, y: 0 },
					data: '',
				})
			);
		}
	}

	return (
		<>
			<TopNavBarLayout />
			<ReactFlowProvider>
				<DndContext
					onDragEnd={(e) => {
						handleDragEnd(e);
					}}
				>
					<ReactFlowLayout />
					<SidePanelLayout />
				</DndContext>
			</ReactFlowProvider>
		</>
	);
}

export default App;
