import Input from "./Input.jsx";
import Button from "./Button.jsx";

export default function NewProject({ cancelProjectCreation }) {
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
          <Button>Save</Button>
        </div>
      </div>

      <Input type="text" label="Title" />
      <Input label="Description" textarea />
      <Input type="date" label="Due Date" />
    </div>
  );
}
