import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/main-bg.webp')" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Summer project
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Chatbot
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Make anything possible with my chatbot
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              to="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            {/* <Link
              to="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              to="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link> */}
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          to="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          to="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          to="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <img
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <img
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="max-w-full"
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <img
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <img
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </div>
  );
};

export default Home;
