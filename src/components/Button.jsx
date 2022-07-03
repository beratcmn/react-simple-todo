export default function Button({ text, onClick, showAddTask }) {
  return (
    <button
      onClick={onClick}
      className={`px-7 py-2 ${
        showAddTask === true ? "bg-orange-100 text-gray-600" : "bg-orange-400 text-white"
      } text-lg rounded-md hover:rounded-2xl hover:scale-95 transition-all duration-300`}
    >
      {text}
    </button>
  );
}
