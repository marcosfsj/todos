import React, {useRef} from 'react';
import './DragDrop.css';

const DragDrop = () => {
  const containerRef = useRef();

  const handleDragStart = event => {
    event.target.classList.add('dragging');
  };

  const handleDragEnd = event => {
    event.target.classList.remove('dragging');
  };

  const handleDragOver = event => {
    event.preventDefault();
    const afterElement = getDragAfterElement(containerRef, event.clientY);
    const dragging = [...containerRef.current.querySelectorAll('.dragging')][0];
    if (afterElement) {
      containerRef.current.insertBefore(dragging, afterElement);
    } else {
      containerRef.current.appendChild(dragging);
    }
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.current.querySelectorAll(':not(.dragging)')];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return {offset: offset, element: child};
        } else {
          return closest;
        }
      },
      {offset: Number.NEGATIVE_INFINITY},
    ).element;
  };

  return (
    <div className="container" ref={containerRef} onDragOver={handleDragOver}>
      <div className="box" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        1
      </div>
      <div className="box" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        2
      </div>
      <div className="box" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        3
      </div>
      <div className="box" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        4
      </div>
    </div>
  );
};

export default DragDrop;
