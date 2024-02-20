import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

export default function App() {
  const [state, setState] = useState({
    projectId: undefined,
    projects: [],
  });

  function handleAddNewProjectStart() {
    setState((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  }

  function handleCancelProjectCreation() {
    setState((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
      };
    });
  }

  let content;

  if (state.projectId === undefined) {
    content = <NoProjectSelected startProject={handleAddNewProjectStart} />;
  } else if (state.projectId === null) {
    content = (
      <NewProject cancelProjectCreation={handleCancelProjectCreation} />
    );
  }

  return (
    <div className="flex gap-8 my-8">
      <SideBar startProject={handleAddNewProjectStart} />
      {content}
    </div>
  );
}
