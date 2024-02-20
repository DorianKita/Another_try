import Button from "./Button";

export default function ProjectPage({ displayProject, onDelete }) {
  const date = new Date(displayProject.date).toLocaleDateString();

  return (
    <main className=" w-1/3 mx-32 my-12">
      <div className="flex justify-between">
        <h2 className="text-4xl text-stone-500">{displayProject.title}</h2>
        <Button onClick={onDelete}>Delete</Button>
      </div>

      <p className=" text-sm">{date}</p>
      <p className="text-xl mt-12 border-b-2 whitespace-pre-wrap">
        {displayProject.description}
      </p>
    </main>
  );
}
