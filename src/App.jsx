import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

export default function App() {
  const [state, setState] = useState({
    projectId: undefined,
    projects: [],
  });

  console.log(state.projects);

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

  function handleProjectCreationSave(projectData) {
    setState((prevState) => {
      const index = Math.random();
      const newProject = {
        id: index,
        ...projectData,
      };

      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (state.projectId === undefined) {
    content = <NoProjectSelected startProject={handleAddNewProjectStart} />;
  } else if (state.projectId === null) {
    content = (
      <NewProject
        cancelProjectCreation={handleCancelProjectCreation}
        saveProjectCreation={handleProjectCreationSave}
      />
    );
  }

  return (
    <div className="flex gap-8 my-8">
      <SideBar
        startProject={handleAddNewProjectStart}
        projects={state.projects}
      />
      {content}
    </div>
  );
}
