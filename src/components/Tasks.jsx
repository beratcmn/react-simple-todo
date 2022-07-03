import Task from "./Task";

export default function Tasks({ tasks, onDelete }) {
  return (
    <div className="flex flex-col gap-y-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}
