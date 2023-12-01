import { useSelector } from "react-redux";

const TodoLists = ({ active }) => {
  const { allTodos, todoStatus, todoByStatus } = useSelector(
    (state) => state.todo
  );
  const todoLists = active === "all" ? allTodos : todoByStatus;

  if (todoStatus === "pending") {
    return <h1 className="w-full text-center">loading....</h1>;
  }

  if (todoLists === undefined) {
    return (
      <h1 className="w-full text-center text-red-600">
        error happen while fetching data
      </h1>
    );
  }

  if (todoStatus === "success") {
    return (
      <div
        className="p-2 border border-black rounded-md"
        data-testid="todoList-container"
      >
        <table className="w-full table-auto " data-testid="todoList-table">
          <thead className="w-full ">
            <tr className="text-lg uppercase">
              <th className=" text-start">title</th>
              <th className=" text-start">description</th>
              <th className=" text-start">status</th>
            </tr>
          </thead>
          <tbody className="">
            {todoLists.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default TodoLists;
