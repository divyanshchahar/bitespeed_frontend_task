import { useDraggable } from '@dnd-kit/core';

// React component to make UI(children) drabggable
function DraggableComponent({ children, id, key }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
	});

	const style = transform
		? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
		: undefined;

	return (
		<div
			id={id}
			key={key}
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			{children}
		</div>
	);
}

export default DraggableComponent;
