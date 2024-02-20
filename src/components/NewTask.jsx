import Button from "./Button";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleText(e) {
    setTask(e.target.value);
  }

  function handleSaveTask() {
    if (task === "") return;
    setTask("");
    onAddTask(task);
  }

  return (
    <div className="flex justify-between mt-2">
      <input
        onChange={handleText}
        value={task}
        type="text"
        className="border-2 w-full rounded-md px-2 focus:outline-none focus:border-b-2 focus:border-black text-stone-500 focus:text-stone-800"
      />
      <Button onClick={handleSaveTask}>Add</Button>
    </div>
  );
}
