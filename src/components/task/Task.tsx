import { memo, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit} from "react-icons/fa";
import LoadingTask from "@/components/task/LoadingTask";
import { useAppDispatch } from "@/store/store";
import { deleteTask } from "@/store/taskSlice";
import ITask from "@/models/taskModel";
import TComponentWithLoadingProps from "@/customTypes/componentWithLoadingProps";
import EditableTask from "./EditableTask";


const Task = memo(({ item: task, isLoading }: TComponentWithLoadingProps<ITask>) => {

  const dispatcher = useAppDispatch()
  const [isEdit, setIsEdit] = useState<boolean>(false)

  if(isLoading) return <LoadingTask />
  if(!task) return null
  if(isEdit) return <EditableTask task={task} closeEditing={() => setIsEdit(false)} />

  const editHandler = () => setIsEdit(true)
  const deleteHandler = () => dispatcher(deleteTask(task.id))

  return (
    <div className="min-h-32 flex flex-col md:flex-row justify-between items-stretch gap-4 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-10  dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20">
      <section className="w-full px-4 xs:px-8 py-4">
        <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
        <p className="text-sm">{task.description}</p>
      </section>
      <section className="flex md:flex-col justify-between items-end">
        <div className={`w-28 p-1 pb-2 text-center rounded-tr-lg rounded-bl-lg ${task.status? 'bg-green-500': 'bg-red-500'}`} >
          <span className="text-white text-xs">{task.status ?  'Completed': 'Pending'}</span>
        </div>
        <div className="w-28 flex mt-auto divide-x-2 rounded-tl-lg rounded-br-lg overflow-hidden">
          <div onClick={editHandler} className="w-full bg-black bg-opacity-20 hover:bg-green-500 p-2 px-4 cursor-pointer flex justify-center items-center">
            <FaRegEdit className="text-white text-lg" />
          </div>
          <div onClick={deleteHandler} className="w-full bg-black bg-opacity-20 hover:bg-red-500 p-2 px-4 cursor-pointer flex justify-center items-center">
            <FaRegTrashCan className="text-white text-lg"  />
          </div>
        </div>
      </section>
    </div>
  )
})

export default Task