import React, { useEffect, useState } from "react";
import { NavLinks } from "./index.ts";
import { Link, useLocation } from "react-router-dom";
import Transition from "./Transition.tsx";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== location.pathname) {
      setIsRouting(true);
    }
  }, [location.pathname, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(location.pathname);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} to={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              location.pathname === nav.link ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
