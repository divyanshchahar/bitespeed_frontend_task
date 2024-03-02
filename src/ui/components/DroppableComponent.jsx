import { useDroppable } from '@dnd-kit/core';

// React component to make UI(children) a drop zone
function DroppableComponent({ children }) {
	const { setNodeRef } = useDroppable({
		id: 'droppable',
	});

	return <div ref={setNodeRef}>{children}</div>;
}

export default DroppableComponent;
