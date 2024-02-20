export default function Tasks({ tasks, deleteTask }) {
  function handleDeleteTask(id) {
    deleteTask(id);
  }

  return (
    <div className="mt-4">
      <ul>
        {tasks.length === 0 && (
          <p>This project have no tasks yet... add new one.</p>
        )}
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between border-b-2 my-6">
            {task.text}
            <button
              className="text-stone-400 hover:text-red-500"
              onClick={() => handleDeleteTask(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
