import React from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

const Todos = () => {
  const onDragEnd = (result) => {
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>Todos</DragDropContext>
  )
}

export default Todos