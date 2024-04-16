import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import "../styles/board.css";

const Board = () => {
  const onDragEnd = (result) => {
    // TODO: Handle task reordering
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        <h2>My Board</h2>
        <div className="columns">
          <Column title="To Do" />
          <Column title="In Progress" />
          <Column title="Done" />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
