import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDelete }) {
  const border = task.reminder === true ? "border-2 border-orange-400" : "";
  return (
    <div
      className={
        "flex flex-col gap-y-2 w-full py-4 px-6 bg-orange-100 rounded-xl " +
        border
      }
    >
      <div className="flex flex-row justify-between">
        <div className="text-xl font-semibold">{task.title}</div>
        <button onClick={() => onDelete(task.id)}>
          <FaTimes className="text-orange-700" />
        </button>
      </div>
      <div className="font-medium">{task.description}</div>
      <div className="text-gray-500">{task.deadline}</div>
    </div>
  );
}
