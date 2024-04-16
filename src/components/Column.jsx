import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <Droppable droppableId={title}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {/* Render tasks here */}
            <Task id="Task 1" title="Task 1" index={0} />
            <Task title="Task 2" index={1} />
            <Task title="Task 3" index={2} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
