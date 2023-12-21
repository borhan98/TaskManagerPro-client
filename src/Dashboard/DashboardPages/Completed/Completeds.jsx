import TaskListTitle from "../../../Components/TaskListTitle";
import useTasks from "../../../Hooks/useTasks";
import Task from "../AllTasks/Task";

const Completeds = () => {
  const [tasks, refetch] = useTasks();
  const completeds = tasks.filter((task) => task.list === "completed");

  return (
    <div className="my-10 mx-4">
      <div className="flex justify-between items-center border-b mb-6">
        <TaskListTitle listTitle="Completed Tasks" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {completeds.length > 0 ? (
          completeds.map((task) => (
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

export default Completeds;
