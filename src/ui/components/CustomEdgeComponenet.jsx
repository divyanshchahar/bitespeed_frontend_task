import { BaseEdge, getSimpleBezierPath } from 'reactflow';

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
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
