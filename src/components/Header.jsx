import Button from "./Button";

export default function Header(props) {
  return (
    <header className="w-full flex flex-row justify-between">
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <Button
        text={props.showAddTask === true ? "Close" : "Add"}
        onClick={props.onAdd}
        showAddTask={props.showAddTask}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
