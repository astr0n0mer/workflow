import {
  Calendar,
  DownArrow,
  LoggedInUser,
  MessageQuestion,
  Notification,
  Search,
} from "../assets";

export default function Nav() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-4 border-b border-border px-10 py-4 lg:gap-8">
      <label className="flex w-96 flex-grow rounded-md bg-stateBackground">
        <img src={Search} alt="" className="p-2" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full bg-inherit p-2 placeholder:text-secondary"
        />
      </label>

      <div className="flex flex-grow gap-2 lg:justify-end">
        <div className="flex items-center gap-4">
          <button>
            <img src={Calendar} alt="Calendar" />
          </button>
          <button>
            <img src={MessageQuestion} alt="Message help" />
          </button>
          <button className="relative">
            <div className="absolute right-0 top-0 h-[7px] w-[7px] -translate-x-[2px] translate-y-[1px] rounded-full bg-[#D8727D]" />
            <img src={Notification} alt="Notifications" />
          </button>
        </div>
      </div>

      <div className="flex flex-grow items-center justify-end gap-6 xl:flex-grow-0">
        <div className="flex flex-col justify-between">
          <h6 className="text-primary">Anima Agrawal</h6>
          <p className="text-right text-sm text-secondary">U.P, India</p>
        </div>
        <div className="flex gap-2">
          <img src={LoggedInUser} alt="user" className="rounded-full" />
          <button>
            <img src={DownArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
