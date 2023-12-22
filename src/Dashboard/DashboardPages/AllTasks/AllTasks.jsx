import TaskListTitle from "../../../Components/TaskListTitle";
import { IoMdAdd } from "react-icons/io";
import Task from "./Task";
import useTasks from "../../../Hooks/useTasks";
import AddTask from "./AddTask";

const AllTasks = () => {
  const [tasks, refetch] = useTasks();
  const todos = tasks.filter((task) => task.list === "to-do");
  const onGoings = tasks.filter((task) => task.list === "ongoing");
  const completes = tasks.filter((task) => task.list === "completed");
  return (
    <div className="my-10 mx-1 md:mx-4">
      {/* Add New Task Modal */}
      <dialog id="my_modal_3" className="modal">
        <AddTask refetch={refetch} />
      </dialog>

      {/* ------------------------To Do---------------------- */}
      <div className="flex justify-between items-center border-b mb-6">
        <TaskListTitle listTitle="To-Do" />
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <span className="p-1 inline-block bg-[#E96A04] rounded-full text-zinc-200 text-2xl ">
            <IoMdAdd />
          </span>
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((task) => (
          <Task key={task._id} task={task} refetch={refetch} />
        ))}
        <div
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="w-full h-full min-h-64 border border-[#E96A04] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#e96b0428] duration-300 "
        >
          <button>
            <span className="p-1 inline-block bg-[#E96A04] rounded-full text-zinc-200 text-2xl ">
              <IoMdAdd />
            </span>
          </button>
        </div>
      </div>
      {/* ---------------------Ongoing------------------------ */}
      <div className="flex justify-between items-center border-b mb-6 mt-16">
        <TaskListTitle listTitle="Ongoing" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {onGoings.length > 0 ? (
          onGoings.map((task) => (
            <Task key={task._id} task={task} refetch={refetch} />
          ))
        ) : (
          <div
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="w-full h-full min-h-64 border border-[#E96A04] rounded-md flex justify-center items-center"
          >
            <button>
              <span className="p-1 inline-block rounded-full text-zinc-600 text-2xl ">
                Empty
              </span>
            </button>
          </div>
        )}
      </div>
      {/* ---------------------Completed----------------------- */}
      <div className="flex justify-between items-center border-b mb-6 mt-16">
        <TaskListTitle listTitle="Completed" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {completes.length > 0 ? (
          completes.map((task) => (
            <Task key={task._id} task={task} refetch={refetch} />
          ))
        ) : (
          <div
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="w-full h-full min-h-64 border border-[#E96A04] rounded-md flex justify-center items-center"
          >
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

export default AllTasks;
