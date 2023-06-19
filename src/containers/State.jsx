import TaskCard from "../components/TaskCard";
import AddSquare from "../assets/add-square.svg";

export default function State({ name, accentColor, tasks, setTasks }) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-stateBackground p-4">
      <header
        className="flex items-center justify-between border-b-[3px] pb-3"
        style={{ borderColor: accentColor }}
      >
        <div className="flex items-center gap-2">
          <div
            className="aspect-square w-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <h3 className="font-medium text-primary">{name}</h3>

          {tasks && (
            <div className="aspect-square rounded-full bg-[#E0E0E0] px-[8px] py-[3px] text-xs">
              {tasks.length}
            </div>
          )}
        </div>

        <button>
          <img src={AddSquare} alt="Add task" className="w-5" />
        </button>
      </header>

      {tasks && tasks.map((task) => <TaskCard key={task.title} {...task} />)}
    </section>
  );
}
