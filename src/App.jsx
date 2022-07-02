import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Task 1 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: true,
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
      reminder: true,
    },
    {
      id: 4,
      title: "Task 4",
      description: "Task 4 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: true,
    },
    {
      id: 5,
      title: "Task 5",
      description: "Task 5 description",
      deadline: "Feb 5, 2020, 2:00 PM",
      reminder: true,
    },
  ]);

  return (
    <>
      <Navbar />

      <div className="w-full max-w-5xl mx-auto mt-10 border border-black rounded-xl min-h-full h-[70vh] p-8">
        <Header />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
