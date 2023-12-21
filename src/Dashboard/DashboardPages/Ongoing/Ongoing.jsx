import TaskListTitle from "../../../Components/TaskListTitle";
import useTasks from "../../../Hooks/useTasks";
import Task from "../AllTasks/Task";

const Ongoing = () => {
  const [tasks, refetch] = useTasks();
  const ongoings = tasks.filter((task) => task.list === "ongoing");

  return (
    <div className="my-10 mx-4">
      <div className="flex justify-between items-center border-b mb-6">
        <TaskListTitle listTitle="Ongoing Tasks" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ongoings.length > 0 ? (
          ongoings.map((task) => (
            <Task key={task._id} task={task} refetch={refetch} />
          ))
        ) : (
          <div className="w-full h-full min-h-64 border border-[#E96A04] rounded-md flex justify-center items-center">
            <button>
              <span className="p-1 inline-block rounded-full text-zinc-600 text-2xl ">
                Empty
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ongoing;
