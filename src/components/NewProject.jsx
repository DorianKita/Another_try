import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="px-8 py-16 w-2/3">
      <h2 className="text-2xl text-stone-500 pb-16">Create new project.</h2>
      <Input type="text" label="Title" />
      <Input label="Description" textarea />
      <Input type="date" label="Due Date" />
    </div>
  );
}
