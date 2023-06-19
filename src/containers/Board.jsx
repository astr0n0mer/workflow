import { useState } from "react";
import State from "./State";

const boards = [
  {
    name: "Mobile App",
    accentColor: "bg-[#7AC555]",
    states: [
      {
        name: "To Do",
        accentColor: "#5030E5",
        tasks: [
          {
            title: "Brainstorming",
            contentType: "text",
            content: [
              "Brainstorming brings team members' diverse experience into play.",
            ],
            priority: "low",
            comments: 12,
            files: 0,
            users: [0, 3, 2],
          },
          {
            title: "Research",
            contentType: "text",
            content: [
              "User research helps you to create an optimal product for users.",
            ],
            priority: "high",
            comments: 10,
            files: 3,
            users: [1, 4],
          },
          {
            title: "Wireframes",
            contentType: "text",
            content: [
              "Low fidelity wireframes include the most basic content and visuals.",
            ],
            priority: "high",
            comments: 11,
            files: 2,
            users: [0, 4, 3],
          },
        ],
      },
      {
        name: "On Progress",
        accentColor: "#FFA500",
        tasks: [
          {
            title: "Onboarding Illustrations ",
            contentType: "image",
            content: ["flower.png"],
            priority: "low",
            comments: 14,
            files: 15,
            users: [2, 3, 0],
          },
          {
            title: "Moodboard",
            contentType: "image",
            content: ["plant.png", "dog.png"],
            priority: "low",
            comments: 9,
            files: 10,
            users: [2],
          },
        ],
      },
      {
        name: "Done",
        accentColor: "#8BC48A",
        tasks: [
          {
            title: "Mobile App Design",
            contentType: "image",
            content: ["mobile-app-design.png"],
            priority: "completed",
            comments: 12,
            files: 15,
            users: [4, 3],
          },
          {
            title: "Design System",
            contentType: "text",
            content: ["It just needs to adapt the UI from what you did before"],
            priority: "completed",
            comments: 12,
            files: 15,
            users: [0, 2, 3],
          },
        ],
      },
    ],
  },
];

export default function Board() {
  const [todoTasks, setTodoTasks] = useState(() => boards[0].states[0].tasks);
  const [onProgressTasks, setOnProgressTasks] = useState(
    () => boards[0].states[1].tasks
  );
  const [doneTasks, setDoneTasks] = useState(() => boards[0].states[2].tasks);

  return (
    <div className="grid items-start gap-4 p-10 pt-0 lg:grid-cols-3">
      <State
        name={boards[0].states[0].name}
        accentColor={boards[0].states[0].accentColor}
        tasks={todoTasks}
        setTasks={setTodoTasks}
      />
      <State
        name={boards[0].states[1].name}
        accentColor={boards[0].states[1].accentColor}
        tasks={onProgressTasks}
        setTasks={setOnProgressTasks}
      />
      <State
        name={boards[0].states[2].name}
        accentColor={boards[0].states[2].accentColor}
        tasks={doneTasks}
        setTasks={setDoneTasks}
      />
    </div>
  );
}
