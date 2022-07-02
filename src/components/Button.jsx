export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-7 py-2 bg-orange-400 text-lg text-white rounded-md hover:rounded-2xl transition-all duration-300"
    >
      {text}
    </button>
  );
}
