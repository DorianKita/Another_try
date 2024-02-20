import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SideBar from "./components/SideBar.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

export default function App() {
  const [state, setState] = useState({
    projectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleSaveTask(newTaskData) {
    setState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: Math.random(),
        text: newTaskData,
        projectId: prevState.projectId,
      };

      return {
        ...prevState,
        id: taskId,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  const selectedTasks = state.tasks.filter(
    (task) => task.projectId === state.projectId
  );

  function handleDeleteTask(id) {
    setState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject() {
    setState((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.projectId
        ),
      };
    });
  }

  function handleProjectSelect(id) {
    setState((prevState) => {
      return {
        ...prevState,
        projectId: id,
      };
    });
  }

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

  const selectedProject = state.projects.find(
    (project) => project.id === state.projectId
  );

  const selectedProjectTasks = state.tasks.filter(
    (task) => task.id === selectedProject.id
  );

  console.log(selectedProject);

  let content = (
    <ProjectPage
      displayProject={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleSaveTask}
      tasks={selectedTasks}
      onDeleteTask={handleDeleteTask}
    />
  );

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
        onSelect={handleProjectSelect}
        selectedProject={state.projectId}
      />
      {content}
    </div>
  );
}
