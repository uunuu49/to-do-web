import { useState } from "react";
import Buttons from "./components/Buttons";
import Task from "./components/Task";
import tasks from "./components/mock/task";

function App() {
  const [inputValue, SetinputValue] = useState("");
  const [data, setData] = useState(tasks);
  const [filteredData, setFilteredData] = useState(data);

  const completedNumber = data.filter(
    (task) => task.status === "completed"
  ).length;

  const createTask = () => {
    const newTask = {
      id: Math.random(),
      text: inputValue,
      status: "active",
    };

    setData([...data, newTask]);
    setFilteredData([...data, newTask]);
    SetinputValue("");
  };

  const deleteTask = (id) => {
    const filteredData = data.filter((task) => task.id !== id);
    setData(filteredData);
    setFilteredData(filteredData);
    alert("Are you sure you want to delete this task?");
  };

  const toggleStatus = (id) => {
    const changedData = data.map((task) => {
      if (task.id === id) {
        const isDone = task.status === "active" ? false : true;
        task.status = isDone ? "active" : "completed";
        return task;
      }
      return task;
    });
    setData(changedData);
    setFilteredData(changedData);
  };

  const clearCompleted = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setData(filteredData);
    setFilteredData(filteredData);
    alert("Are you sure you want to clear all completed tasks?");
  };

  const filterCompleted = () => {
    const filteredData = data.filter((task) => task.status === "completed");
    setFilteredData(filteredData);
  };

  const filterActive = () => {
    const filteredData = data.filter(
      (task) =>
        task.status === "active" && (
          <p className="text-center text-[#6b7280]  text-sm my-5">
            No task yet. Add one above
          </p>
        )
    );

    setFilteredData(filteredData);
  };

  const clearFilter = () => {
    setFilteredData(data);
  };

  return (
    <div className="flex  justify-center  bg-[#f3f4f6]  h-screen w-screen">
      <div className=" items-center flex-col mt-[60px] size-fit shadow-md w-[377px]  flex   bg-white  rounded-md py-[24px] px-[16px]">
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-xl font-semibold  text-center">To-Do list</h1>
          <div className="flex gap-[6px]">
            <input
              onChange={(event) => {
                SetinputValue(event.target.value);
              }}
              value={inputValue}
              className="h-[40px] border w-full border-[#e4e4e7] rounder-md pl-4"
              type="text "
              placeholder="Add a new tast ..."
            />
            <Buttons text="Add" handleClick={createTask} />
          </div>

          <div className="gap-[6px] flex">
            <Buttons
              isSmall={true}
              handleClick={clearFilter}
              text="All"
              isAll={true}
            />
            <Buttons
              isGray={true}
              isSmall={true}
              handleClick={filterActive}
              text="Active"
              isActive
            />
            <Buttons
              text="Completed"
              isGray={true}
              isSmall={true}
              handleClick={filterCompleted}
              isCompleted
            />
          </div>

          {filteredData.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                status={task.status}
                deleteTask={deleteTask}
                toggleStatus={toggleStatus}
              />
            );
          })}
          {filteredData.length === 0 && (
            <p className="text-center text-[#6b7280]  text-sm my-5">
              No task yet. Add one above
            </p>
          )}
          <div className="pt-4 pb-1 border-t border-[#e4e4e7] flex justify-between text-sm">
            <p className="text-[#6b7280]">
              {completedNumber} of {data.length} task completed
            </p>
            <button onClick={clearCompleted} className="text-[#ef4444]">
              Clear completed
            </button>
          </div>
        </div>

        <p className="mt-10 text-xs text-[#6b7280] ">
          Power by{" "}
          <a href="" className="text-[#3b73ed]">
            Pinecone academy
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
