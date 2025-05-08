import React from "react";
import { useState } from "react";

const Multiselection = () => {
  const programmingLanguages = [
    { id: 10, name: "Typescript" },
    { id: 1, name: "Go" },
    { id: 2, name: "Java" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Next.js" },
    { id: 5, name: "Node.js" },
    { id: 6, name: "Python" },
    { id: 7, name: "React" },
    { id: 8, name: "Ruby" },
    { id: 9, name: "Rust" },
  ];
  const [labels, setLabels] = useState([]);
  const addLabel = (labelName) => {
    // JavaScript
    if (!labels.includes(labelName)) {
      setLabels([...labels, labelName]);
    }
  };
  console.log("labels", addLabel);
  return (
    <div className="flex justify-center flex-col  items-center gap-1 ">
      <div className=" mt-40 border border-[red] w-[400px] h-[50px] overflow-auto flex">
        {labels.map((label) => {
          return (
            <div class="bg-blue-100 text-blue-800 text-xs font-medium py-0.5 px-1 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 flex items-center gap-1 justify-center">
              {label}
              <button className="text-black">x</button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-[400px] border border-red-700">
        <li className=" list-none cursor-pointer over">
          {programmingLanguages.map((label) => {
            return (
              <ul onClick={() => addLabel(label.name)} key={label.id}>
                {label.name}
              </ul>
            );
          })}
        </li>
      </div>
    </div>
  );
};

export default Multiselection;
