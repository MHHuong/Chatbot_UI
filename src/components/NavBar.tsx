const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[25px] font-semibold">
          Summer Project{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Chatbot
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
