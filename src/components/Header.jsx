import {
  AddSquare,
  CalendarDate,
  DownArrow,
  Edit,
  Filter,
  GridView,
  Link,
  ListView,
  Share,
  User1,
  User2,
  User3,
  User4,
} from "../assets";

const users = [User1, User2, User3, User4];

export default function Header() {
  return (
    <div className="p-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-grow items-baseline gap-2">
          <h1 className="mr-2 text-5xl font-semibold">Mobile App</h1>
          <button>
            <img src={Edit} alt="Edit profile" />
          </button>
          <button>
            <img src={Link} alt="Share profile link" />
          </button>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 font-medium text-actionItem">
            <img src={AddSquare} alt="Invite user" />
            <span>Invite</span>
          </button>

          <div className="flex items-center">
            {users.map((user, i) => (
              <img
                key={`user-${i}`}
                src={user}
                alt="user"
                className={`rounded-full border border-white ${
                  i !== 0 ? "-ml-2" : ""
                }`}
              />
            ))}
            <div className="pointer-events-none -ml-2 flex aspect-square h-full items-center rounded-full border border-white bg-[#F4D7DA] pl-[0.3rem] text-lg font-medium text-[#D25B68]">
              +2
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex flex-grow gap-2 text-secondary">
          <button className="mr-2 flex items-center gap-1 rounded-md border border-secondary px-3 py-1 hover:bg-border">
            <img src={Filter} alt="" />
            <span> Filter </span>
            <img src={DownArrow} alt="" />
          </button>
          <button className="flex items-center gap-1 rounded-md border border-secondary px-3 py-1 hover:bg-border">
            <img src={CalendarDate} alt="" />
            <span> Today </span>
            <img src={DownArrow} alt="" />
          </button>
        </div>

        <div className="flex items-center gap-4 text-secondary">
          <button className="flex items-center gap-1 rounded-md border border-secondary px-3 py-1 hover:bg-border">
            <img src={Share} alt="" />
            <span> Share</span>
          </button>
          <div className="h-6 border border-secondary" />
          <button>
            <img src={ListView} alt="List view" className="h-8" />
          </button>
          <button className="rounded-md p-1 hover:bg-border">
            <img src={GridView} alt="Grid view" />
          </button>
        </div>
      </div>
    </div>
  );
}
