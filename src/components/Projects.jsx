import { useState } from "react";
import { Link } from "react-router-dom";
import { Add, Bulb, Ellipses } from "../assets";
import { boards } from "../utils/data";

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <div className="mx-3 hidden py-6 md:block">
      <div className="flex items-center justify-between px-3 text-xs font-bold text-secondary">
        <h2 className="uppercase">My Projects</h2>
        <button>
          <img src={Add} alt="Add project" />
        </button>
      </div>

      <div className="flex flex-col gap-2 py-6 font-medium text-secondary">
        {boards?.map((project, i) => (
          <Link
            key={project.name}
            to="/"
            className={`flex items-center gap-3 rounded-md px-4 py-2 leading-5 hover:bg-projectBackground ${
              selectedProjectIndex === i ? "text-primary" : ""
            }`}
          >
            <div className={`h-2 w-2 rounded-full ${project.accentColor}`} />
            <div className="flex-1">{project.name}</div>
            {selectedProjectIndex === i && (
              <button>
                <img src={Ellipses} alt="Project options" />
              </button>
            )}
          </Link>
        ))}
      </div>

      <div className="relative mx-3 mt-10 flex max-w-[13rem] flex-col gap-3 rounded-2xl bg-stateBackground p-3 pt-10 text-center">
        <div className="radial-gradient absolute left-1/2 top-0 flex aspect-square w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-stateBackground">
          <img src={Bulb} alt="" />
        </div>

        <h6 className="text-sm font-medium">Thoughts Time</h6>
        <p className="text-xs text-secondary">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <input
          type="text"
          className="rounded bg-white p-2 font-medium text-primary placeholder:text-center placeholder:text-primary"
          placeholder="Write a message"
        />
      </div>
    </div>
  );
}
