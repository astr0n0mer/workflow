import Calendar from "../assets/calendar.svg";
import MessageQuestion from "../assets/message-question.svg";
import Notification from "../assets/notification.svg";
import DownArrow from "../assets/down-arrow.svg";
import LoggedInUser from "../assets/users/logged-in-user.png";

export default function Nav() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-4 border-b border-border px-10 py-4 lg:gap-8">
      <input
        type="text"
        placeholder="Search for anything..."
        className="w-96 flex-grow rounded-md bg-stateBackground bg-[url('./src/assets/search.svg')] bg-[center_left_1em] bg-no-repeat p-2 pl-14 placeholder:text-secondary"
      />

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
          <p className="text-sm text-secondary">U.P, India</p>
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
