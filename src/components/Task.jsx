import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ title, index }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => (
        <div
          className="task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{title}</p>
          <div className="task-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
