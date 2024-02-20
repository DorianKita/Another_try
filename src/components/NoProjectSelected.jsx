import img from "../assets/6027813_35946.jpg";
export default function NoProjectSelected() {
  return (
    <div className="w-2/3 text-center">
      <img
        src={img}
        alt="empty project page"
        className="w-72 object-cover pt-32 mx-auto"
      />
      <h2 className="text-3xl mt-8 text-stone-400">No project was selected.</h2>
      <p> Create a new project or pick existing one from sidebar.</p>
    </div>
  );
}
