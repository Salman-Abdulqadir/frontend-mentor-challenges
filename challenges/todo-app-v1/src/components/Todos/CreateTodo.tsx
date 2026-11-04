import { useTodos } from "../../contexts/TodosContext";
import { TodosService } from "../../services/todos.service";

const CreateTodo = () => {
  const {
    inputValue = "",
    setInputValue = () => {},
    refreshTodos = () => {},
  } = useTodos();
  const saveTodo = () => {
    if (inputValue) {
      TodosService.addTodo(inputValue);
      setInputValue("");
      refreshTodos();
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo();
      }}
    >
      <input
        className="text-black text-2xl p-4 border-none rounded-md w-full text-inherit"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default CreateTodo;
