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

  console.log(active);
  useEffect(() => {
    if (active === "all") {
      dispatch(getAllTodosAPI()).catch((err) => {
        console.log(err);
      });
    } else if (active === status.TODO) {
      dispatch(getTodoByStatusAPI("todo")).catch((err) => {
        console.log(err);
      });
    } else if (active === status.PROGRESS) {
      dispatch(getTodoByStatusAPI("in-progress")).catch((err) => {
        console.log(err);
      });
    } else if (active === status.DONE) {
      dispatch(getTodoByStatusAPI("done")).catch((err) => {
        console.log(err);
      });
    }
  }, [dispatch, active]);

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
            className={`${active === status.TODO ? "bg-gray-300" : ""}`}
          />
          <Button
            text="List to In progress"
            onClick={() => {
              setActive(status.PROGRESS);
            }}
            className={`${active === status.PROGRESS ? "bg-gray-300" : ""}`}
          />
          <Button
            text="List to Done"
            onClick={() => {
              setActive(status.DONE);
            }}
            className={`${active === status.DONE ? "bg-gray-300" : ""}`}
          />
        </div>
        <h1
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
