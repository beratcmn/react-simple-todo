import Button from "./Button";

export default function Header(props) {
  const onClick = (e) => {
    console.log("saa");
  };

  return (
    <header className="w-full flex flex-row justify-between">
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <Button text="Add" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
