import { useMemo, useState } from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from 'yup';
import Button from '@/components/shared/Button';
import { useAppDispatch } from "@/store/store";
import { updateTask } from "@/store/taskSlice";
import ITask from "@/models/taskModel";


const validationSchema = Yup.object({
    id: Yup.number().required('Id is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required')
})

type TEditableTaskProps = {
    task: ITask,
    closeEditing: () => void
}

export default function EditableTask({ task, closeEditing }: TEditableTaskProps) {

  const dispatcher = useAppDispatch()
  const initialData: ITask = useMemo(() => task, [task])
  const [isCompleted, setIsCompleted] = useState(task.status)
 
  const checkBoxHandle = (event: React.ChangeEvent<HTMLInputElement>) => setIsCompleted(event.target.checked)

  const onSubmit = async (newTask: ITask) => {    
    dispatcher(updateTask({...newTask, status: isCompleted}))
    closeEditing()
  }

  return (
    <div className="form-layout-row min-h-32 flex justify-between items-stretch gap-4 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-10  dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20">
        <Formik
          initialValues={initialData} 
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <section className="flex flex-col gap-2 w-full px-4 xs:px-8 py-4">
                <div>
                <Field id="title" name="title" placeholder="Title" defaultValue={task.title}/>
                <ErrorMessage name="title" component="p" />
                </div>

                <div>
                <Field id="description" name="description" placeholder="Description" defaultValue={task.description}/>
                <ErrorMessage name="description" component="p" />
                </div>
            </section>
            
            <section className="flex md:flex-col justify-between items-end">
                <div className={`flex flex-row items-center w-28  gap-2 px-2 py-2 pb-2.5 text-center rounded-tr-lg rounded-bl-lg ${isCompleted? 'bg-green-500': 'bg-red-500'}`} >
                    <input type="checkbox" className="w-fit" defaultChecked={isCompleted} onChange={checkBoxHandle} />
                    <span className="text-white text-xs">{isCompleted ?  'Completed': 'Pending'}</span>
                </div>               
                <Button title='Submit' extraStyle="mt-auto rounded-bl-none rounded-tr-none"/>
            </section>
          </Form>
        </Formik>
    </div>
  )
}

