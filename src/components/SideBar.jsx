export default function SideBar({
  startProject,
  projects,
  onSelect,
  selectedProject,
}) {
  let cssStyle = "w-full text-left rounded-md px-2";

  return (
    <aside className="bg-stone-700 w-1/3 md:w-72 px-8 py-16 h-screen rounded-r-md">
      <h2 className="uppercase text-stone-300 mb-8">Your Projects</h2>
      <button
        onClick={startProject}
        className="bg-stone-500 py-1 px-2 rounded text-stone-400 mt-4 mb-16 hover:text-stone-100 hover:bg-stone-600"
      >
        + Add project
      </button>

      <ul className="text-stone-400 ">
        {projects.map((project) => {
          if (selectedProject === project.id) {
            cssStyle += " bg-stone-500 text-stone-100";
          } else {
            cssStyle = "w-full text-left rounded-md px-2";
          }

          return (
            <li key={project.id} className={cssStyle}>
              <button onClick={() => onSelect(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
