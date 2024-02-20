import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex gap-8 my-8">
      <SideBar />
      <NewProject />
    </div>
  );
}
