import { motion } from "framer-motion";

export default function Button({ text, onClick, showAddTask }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`px-7 py-2 ${
        showAddTask === true
          ? "bg-orange-100 text-gray-600"
          : "bg-orange-400 text-white"
      } text-lg rounded-md`}
    >
      {text}
    </motion.button>
  );
}
