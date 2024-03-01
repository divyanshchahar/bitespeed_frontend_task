import ReactFlowLayout from './ui/layouts/ReactFlowLayout';
import TopNavBar from './ui/layouts/TopNavBar';
import SidePanel from './ui/layouts/SidePanel';
import { ReactFlowProvider } from 'reactflow';

function App() {
	return (
		<>
			<TopNavBar />
			<ReactFlowProvider>
				<ReactFlowLayout />
				<SidePanel />
			</ReactFlowProvider>
		</>
	);
}

export default App;
