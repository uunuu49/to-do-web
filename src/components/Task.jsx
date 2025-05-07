const Task = (props) => {
  const isDone = props.status === "active" ? false : true;

  return (
    <div
      key={props.id}
      className="w-full rounded-md bg-[#f3f4f6] p-4 flex   justify-between items-center text-sm "
    >
      <div className="gap-[10px] flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={isDone}
          onChange={() => {
            props.toggleStatus(props.id);
          }}
        />
        <p p className={`${isDone ? "line-through" : ""}`}>
          {props.text}
        </p>
      </div>
      <button
        className="w-[67px] h-[30px] text-[#ef4444] bg-[#fef2f2] rounded-md"
        onClick={() => props.deleteTask(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
