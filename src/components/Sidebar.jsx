import { useState } from "react";
import { Link } from "react-router-dom";

import { navigationMenu } from "../utils/data";
import Projects from "./Projects";

import CloseButton from "../assets/chevron-left.svg";
import Logo from "../assets/logo.svg";

export default function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  function handleToggleSidebar() {
    setToggleSidebar((prevToggleSidebar) => !prevToggleSidebar);
  }

  return (
    <div className="no-scroll sticky top-0 hidden h-screen min-w-max overflow-auto border-r border-border sm:block">
      <div className="flex items-center justify-between gap-2 border-b border-border p-6">
        <img src={Logo} alt="Workflow" />
        <p className="mr-4 flex-1 text-xl font-semibold">Project M.</p>
        <button>
          <img
            src={CloseButton}
            alt="Close sidebar"
            onClick={handleToggleSidebar}
          />
        </button>
      </div>

      <div className="mx-3 flex flex-col gap-2 border-b border-border py-6 font-medium text-secondary">
        {navigationMenu?.map((navItem) => (
          <Link
            key={navItem.name}
            to="/"
            className="flex items-center gap-3 rounded-md p-2 leading-5 hover:bg-border"
          >
            <img src={navItem.icon} alt="home" />
            <span className="capitalize">{navItem.name}</span>
          </Link>
        ))}
      </div>

      <Projects />
    </div>
  );
}
