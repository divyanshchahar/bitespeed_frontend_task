import { DndContext } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { ReactFlowProvider } from 'reactflow';
import ReactFlowLayout from './ui/layouts/ReactFlowLayout';
import SidePanel from './ui/layouts/SidePanel';
import TopNavBar from './ui/layouts/TopNavBar';
import { nodeAdded } from './redux/nodesSlice';
import { v4 as uuidv4 } from 'uuid';
import { nodesList } from './react-flow/nodes';

const nodeNames = nodesList.map((item) => item.name);

function App() {
	const dispatch = useDispatch();

	function handleDragEnd(e) {
		const { active } = e;

		console.log(nodeNames.includes(active.id));

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
			<TopNavBar />
			<ReactFlowProvider>
				<DndContext
					onDragEnd={(e) => {
						handleDragEnd(e);
					}}
				>
					<ReactFlowLayout />
					<SidePanel />
				</DndContext>
			</ReactFlowProvider>
		</>
	);
}

export default App;
