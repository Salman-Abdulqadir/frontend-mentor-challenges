import { ReactNode, createContext, useContext, useState } from "react";
import { ITodo } from "../types/types";
import { TodosService } from "../services/todos.service";

type contextType = {
  todos?: ITodo[];
  setTodos?: (todos: ITodo[]) => void;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  refreshTodos?: () => void;
};
const TodosContext = createContext<contextType>({});

export const useTodos = () => {
  return useContext(TodosContext);
};

export const TodosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<ITodo[]>(TodosService.getAllTodos());
  const [inputValue, setInputValue] = useState("");

  const refreshTodos = () => {
    setTodos(TodosService.getAllTodos());
  };
  return (
    <TodosContext.Provider
      value={{ todos, setTodos, inputValue, setInputValue, refreshTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
};
