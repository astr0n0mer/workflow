import Home from "../assets/navigation-home.svg";
import Members from "../assets/navigation-members.svg";
import Messages from "../assets/navigation-messages.svg";
import Settings from "../assets/navigation-settings.svg";
import Tasks from "../assets/navigation-tasks.svg";

export const navigationMenu = [
  { name: "home", icon: Home },
  { name: "messages", icon: Messages },
  { name: "tasks", icon: Tasks },
  { name: "members", icon: Members },
  { name: "settings", icon: Settings },
];

export const boards = [
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
  {
    name: "Website Redesign",
    accentColor: "bg-[#FFA500]",
  },
  {
    name: "Design System",
    accentColor: "bg-[#E4CCFD]",
  },
  {
    name: "Wireframes",
    accentColor: "bg-[#76A5EA]",
  },
];
