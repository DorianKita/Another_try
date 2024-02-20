import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import { useRef } from "react";

export default function NewProject({
  cancelProjectCreation,
  saveProjectCreation,
}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSaveProject() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      date.current.value.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    saveProjectCreation({
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close"></Modal>
      <div className="px-8 py-16 w-1/3">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl text-stone-500 pb-16">Create new project.</h2>
          <div className="flex">
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
    </>
  );
}
