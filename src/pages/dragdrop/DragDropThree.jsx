import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Box = styled.div`
  border: 3px solid #666;
  background-color: #ddd;
  border-radius: 0.5em;
  padding: 10px;
  cursor: move;
`;

const DragDrop = () => {
  let dragSrcEl = null;

  const handleDragStart = e => {
    e.target.style.opacity = '0.5';
    dragSrcEl = e;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  };

  const handleDragOver = e => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  };

  const handleDragEnter = e => {
    // some code
  };

  const handleDragLeave = e => {
    // some code
  };

  const handleDrop = e => {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl != e) {
      dragSrcEl.target.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  };

  const handleDragEnd = e => {
    e.target.style.opacity = '1';
  };

  return (
    <Container>
      <Box
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragEnd={handleDragEnd}
      >
        A
      </Box>
      <Box
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragEnd={handleDragEnd}
      >
        B
      </Box>
      <Box
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragEnd={handleDragEnd}
      >
        C
      </Box>
    </Container>
  );
};

export default DragDrop;
