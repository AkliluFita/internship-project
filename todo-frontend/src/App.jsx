import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllTodosAPI, getTodoByStatusAPI } from "./redux/todosAPI";
import TodoLists from "./components/TodoLists";
import Button from "./components/Button";
import { status } from "./utils/contant";

function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(status.ALL);

  useEffect(() => {
    if (active === status.ALL) {
      dispatch(getAllTodosAPI());
    } else if (active === status.TODO) {
      dispatch(getTodoByStatusAPI(status.TODO));
    } else if (active === status.PROGRESS) {
      dispatch(getTodoByStatusAPI(status.PROGRESS));
    } else if (active === status.DONE) {
      dispatch(getTodoByStatusAPI(status.DONE));
    }
  }, [dispatch, active]);

  const activeButtonStyle = (status) => {
    return active === status ? "bg-gray-300" : "";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-2 border border-black">
      <div className="lg:max-w-[35rem] w-auto border border-black flex flex-col gap-4 rounded-lg p-4 min-h-[29rem]">
        <h1 className="text-3xl font-bold text-center uppercase">todo app</h1>
        <div className="flex gap-4">
          <Button
            text="List to do"
            onClick={() => {
              setActive(status.TODO);
            }}
            className={activeButtonStyle(status.TODO)}
          />
          <Button
            text="List to In progress"
            onClick={() => {
              setActive(status.PROGRESS);
            }}
            className={activeButtonStyle(status.PROGRESS)}
          />
          <Button
            text="List to Done"
            onClick={() => {
              setActive(status.DONE);
            }}
            className={activeButtonStyle(status.DONE)}
          />
        </div>
        <h1
          title="heading"
          onClick={() => {
            setActive(status.ALL);
          }}
          className="w-[5rem] px-2 border border-black text-end cursor-pointer rounded-md"
        >
          Refresh
        </h1>
        <TodoLists active={active} />
      </div>
    </div>
  );
}

export default App;
