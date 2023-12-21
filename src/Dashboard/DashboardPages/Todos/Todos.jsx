import { IoMdAdd } from "react-icons/io";
import TaskListTitle from "../../../Components/TaskListTitle";
import useTasks from "../../../Hooks/useTasks";
import Task from "../AllTasks/Task";
import AddTask from "../AllTasks/AddTask";

const Todos = () => {
  const [tasks, refetch] = useTasks();
  const todos = tasks.filter((task) => task.list === "to-do");

  return (
    <div className="my-10 mx-4">
      {/* Add New Task Modal */}
      <dialog id="my_modal_3" className="modal">
        <AddTask refetch={refetch} />
      </dialog>
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
    </div>
  );
};

export default Todos;
