export default function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.title}</h3>
      ))}
    </>
  );
}
