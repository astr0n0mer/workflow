import Ellipses from "../assets/ellipses.svg";
import Files from "../assets/files.svg";
import User1 from "../assets/users/user-1.png";
import User2 from "../assets/users/user-2.png";
import User3 from "../assets/users/user-3.png";
import User4 from "../assets/users/user-4.png";
import User5 from "../assets/users/user-5.png";
import Message from "../assets/navigation-messages.svg";
import Dog from "../assets/task-assets/dog.png";
import Flower from "../assets/task-assets/flower.png";
import MobileAppDesign from "../assets/task-assets/mobile-app-design.png";
import Plant from "../assets/task-assets/plant.png";

const avatars = [User1, User2, User3, User4, User5];
const taskAssets = {
  "dog.png": Dog,
  "flower.png": Flower,
  "mobile-app-design.png": MobileAppDesign,
  "plant.png": Plant,
};

const priorityColors = {
  low: "bg-[#DFA87433] text-[#D58D49]",
  high: "bg-[#D8727D1A] text-[#D8727D]",
  completed: "bg-[#83C29D33] text-[#68B266]",
};

export default function TaskCard({
  title,
  contentType,
  content,
  priority,
  comments,
  files,
  users,
}) {
  return (
    <figure className="rounded-2xl bg-white p-5" draggable>
      <div className="flex items-center justify-between">
        <div
          className={`inline-block rounded-md px-2 py-1 text-sm capitalize ${priorityColors[priority]}`}
        >
          {priority}
        </div>
        <button className="px-2 py-3">
          <img src={Ellipses} alt="Task options" />
        </button>
      </div>

      <h3 className="my-1 text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap justify-between gap-3 2xl:flex-nowrap">
        {content.map((c, i) =>
          contentType === "image" ? (
            <img key={i} src={taskAssets[c]} className="flex-1" />
          ) : (
            <p key={i} className="text-xs text-secondary">
              {c}
            </p>
          )
        )}
      </div>

      <div className="mt-6 flex justify-between gap-2">
        <div className="flex items-center">
          {users.map((user, i) => (
            <img
              key={`user-${user}`}
              src={avatars[user]}
              alt="user"
              className={`w-6 rounded-full border border-white ${
                i !== 0 ? "-ml-1" : ""
              }`}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-secondary xl:gap-4">
          <button className="flex gap-2">
            <img src={Message} alt="" className="w-4" />
            <span>{comments} comments</span>
          </button>
          <button className="flex gap-2">
            <img src={Files} alt="" className="w-4" />
            <span>{files} files</span>
          </button>
        </div>
      </div>
    </figure>
  );
}
