import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import NoTasks from "./components/NoTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Task 1 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Task 2 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: true,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Task 3 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: false,
    },
    {
      id: 4,
      title: "Task 4",
      description: "Task 4 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: false,
    },
    {
      id: 5,
      title: "Task 5",
      description: "Task 5 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: true,
    },
    {
      id: 6,
      title: "Task 6",
      description: "Task 6 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: true,
    },
    {
      id: 7,
      title: "Task 7",
      description: "Task 7 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: false,
    },
  ]);

  //? Deleting the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //?Set the title of page
  document.title =
    tasks.length >= 1
      ? "(" + tasks.length + ") Task Tracker App"
      : "Task Tracker App";

  return (
    <>
      <Navbar />

      <div className="w-full max-w-5xl mx-auto flex flex-col space-y-5 my-10 border border-black rounded-xl min-h-[50vh] p-8">
        <Header />
        {tasks.length >= 1 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          <NoTasks />
        )}
      </div>
    </>
  );
}

export default App;
