export default function Navbar(props) {
  return (
    <nav className="w-full h-16 bg-orange-400 text-white">
      <div className="w-full max-w-7xl h-full mx-auto flex items-center justify-between">
        <div className="">
          <h1 className="w-full">
            <span className="text-3xl">Task Tracker App</span>{" "}
            <span className="ml-1 font-semibold cursor-pointer">
              by Berat Çimen
            </span>
          </h1>
        </div>

        <div className="flex flex-row gap-x-5 font-medium">
          <div className="">Seçenek 1</div>
          <div className="">Seçenek 2</div>
          <div className="">Seçenek 3</div>
        </div>
      </div>
    </nav>
  );
}
