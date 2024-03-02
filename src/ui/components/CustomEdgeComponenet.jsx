import { BaseEdge, getSimpleBezierPath } from 'reactflow';

// React Component to render edge
function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
	const [edgePath] = getSimpleBezierPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
	});

	return (
		<>
			<BaseEdge id={id} path={edgePath} />
		</>
	);
}

export default CustomEdge;
