import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useRef } from "react";

export default function NewProject({
  cancelProjectCreation,
  saveProjectCreation,
}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSaveProject() {
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      date.current.value === ""
    ) {
      return;
    }

    saveProjectCreation({
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    });
  }

  return (
    <div className="px-8 py-16 w-2/6">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl text-stone-500 pb-16">Create new project.</h2>
        <div className="flex w-40 mx-4">
          <button
            onClick={cancelProjectCreation}
            className="mx-2 text-stone-400 hover:text-stone-900"
          >
            Cancel
          </button>
          <Button onClick={handleSaveProject}>Save</Button>
        </div>
      </div>

      <Input ref={title} type="text" label="Title" />
      <Input ref={description} label="Description" textarea />
      <Input ref={date} type="date" label="Due Date" />
    </div>
  );
}
