import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { useTodos } from "../../contexts/TodosContext";
import { TodosService } from "../../services/todos.service";
import { ITodo } from "../../types/types";
import { useMemo, useState } from "react";

const filterOptions: any = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
const DNDTodoList = () => {
  const {
    todos = [],
    setTodos = () => {},
    refreshTodos = () => {},
  } = useTodos();
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    filterOptions.All
  );

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    TodosService.storeTodos(items);
    setTodos(items);
  };

  const handleUpdateTodo = (todo: ITodo) => {
    TodosService.updateTodo(todo.id, !todo.completed);
    refreshTodos();
  };

  const handleClearCompleted = () => {
    TodosService.clearCompleted();
    refreshTodos();
  };

  const activeTodoCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed)?.length;
  }, [todos]);

  let filteredTodos = Array.from(todos);
  if (selectedFilterOption !== filterOptions.All) {
    const filterCompleted = selectedFilterOption === filterOptions.Completed;
    filteredTodos = filteredTodos?.filter(
      (todo) => todo.completed === filterCompleted
    );
  }
  return (
    <div className="bg-base-100 rounded-md shadow-md flex-1 overflow-hidden flex flex-col">
      {todos?.length ? (
        <>
          <div className="flex-1 overflow-scroll">
            {filteredTodos?.length ? (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todos">
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {filteredTodos.map((todo, index) => {
                        const { id, title, completed } = todo;
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                className="px-8 py-4 border-b-[1px] flex gap-2 items-center"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <input
                                  type="checkbox"
                                  className="checkbox checkbox-primary"
                                  checked={completed}
                                  onChange={() => handleUpdateTodo(todo)}
                                />
                                <p
                                  className={`text-xl font-semibold ${
                                    completed
                                      ? "line-through text-light-light-grayish-blue"
                                      : "text-light-very-dark-grayish-blue"
                                  }`}
                                >
                                  {title}
                                </p>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-3">
                <span>No todos for the applied filter</span>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => setSelectedFilterOption(filterOptions.All)}
                >
                  Remove filters
                </button>
              </div>
            )}
          </div>
          <div className="px-8 py-4 w-full flex items-center justify-between">
            <span>{activeTodoCount} items left</span>
            <ul className="flex items-center gap-3">
              {Object.keys(filterOptions).map((option, index) => (
                <li
                  onClick={() => setSelectedFilterOption(filterOptions[option])}
                  key={`filter-option-${index}-${option}`}
                  className={`font-bold cursor-pointer ${
                    selectedFilterOption !== filterOptions[option]
                      ? "text-light-dark-grayish-blue"
                      : "text-primary"
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            <span
              className="text-light-dark-grayish-blue cursor-pointer"
              onClick={() => handleClearCompleted()}
            >
              clear completed
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col h-full items-center justify-center">
          You don't have any todos
        </div>
      )}
    </div>
  );
};

export default DNDTodoList;
