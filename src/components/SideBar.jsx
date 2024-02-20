export default function SideBar({ startProject }) {
  return (
    <aside className="bg-stone-700 w-1/3 md:w-72 px-8 py-16 h-screen">
      <h2 className="uppercase text-stone-300 mb-8">Your Projects</h2>
      <button
        onClick={startProject}
        className="bg-stone-500 py-1 px-2 rounded text-stone-400 mt-4 mb-16 hover:text-stone-100 hover:bg-stone-600"
      >
        + Add project
      </button>

      <ul className="text-stone-400">
        <li>lista projektów</li>
      </ul>
    </aside>
  );
}
