import { useState } from "react";
import { motion } from "framer-motion";

export default function AddTask({ onAdd, isOn }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [deadline, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please enter a title");
      return;
    }

    if (!description) {
      alert("Please enter a description");
      return;
    }

    if (!deadline) {
      alert("Please enter a deadline");
      return;
    }

    onAdd({ title, description, deadline, reminder });

    setTitle("");
    setDesc("");
    setTime("");
    setReminder(false);
  };

  let visibleStatus = isOn === true ? "block" : "hidden";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${visibleStatus}`}
    >
      <form className="flex flex-col space-y-5" onSubmit={submitTask}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="font-medium">
            Title
          </label>
          <input
            className="border border-orange-400 py-2 px-2 rounded-lg outline-orange-700"
            type="text"
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="font-medium">
            Description
          </label>
          <input
            className="border border-orange-400 py-2 px-2 rounded-lg outline-orange-700"
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="" className="font-medium">
            Time
          </label>
          <input
            className="border border-orange-400 py-2 px-2 rounded-lg outline-orange-700"
            type="text"
            placeholder="Add Time"
            value={deadline}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="font-medium">
            Set Reminder
          </label>
          <input
            className="ml-3 mt-1 cursor-pointer"
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input
          type="submit"
          value="Save Task"
          className="place-self-center w-fit mt-4 bg-orange-400 px-7 py-2 cursor-pointer text-lg text-white rounded-md hover:rounded-2xl transition-all duration-300"
        />
      </form>
    </motion.div>
  );
}
