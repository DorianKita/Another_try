export default function ProjectPage({ displayProject }) {
  const date = new Date(displayProject.date).toLocaleDateString();

  return (
    <main className=" w-2/3 mx-32 my-12">
      <h2 className="text-4xl text-stone-500">{displayProject.title}</h2>
      <p className=" text-sm">{date}</p>
      <p className="text-xl mt-12 border-b-2">{displayProject.description}</p>
    </main>
  );
}
