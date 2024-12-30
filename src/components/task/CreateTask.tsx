import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from 'yup';
import Button from '@/components/shared/Button';
import '@/styles/form.css'
import ITask from "@/models/taskModel";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createTask } from "@/store/taskSlice";


const initialData: ITask = {
  title: '',
  description: '',
  status: false,
}

const validationSchema = Yup.object({
  title: Yup.string().min(3, 'Title must be at least 3 characters').required('Title is required'),
  description: Yup.string().min(3, 'Description must be at least 3 characters').required('Description is required'),
})


export default function CreateTask() {

  const loading = useAppSelector((state) => state.task.loading)
  const dispatcher = useAppDispatch()

  const onSubmit =  (data: ITask, { resetForm }) => {
    dispatcher(createTask(data))
    resetForm();
  }

  return (
      <section className='form-layout-col mx-auto p-8 mb-8 rounded-lg  bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10'>
        <h3 className='text-3xl text-left font-semibold mb-6'>Create Task</h3>
        <Formik
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" />
              <ErrorMessage name="title" component="p" />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Field id="description" name="description" as="textarea"/>
              <ErrorMessage name="description" component="p"  />
            </div>
            
            <Button title='Submit' isDisabled={loading === 'pending'} />
          </Form>
        </Formik>
      </section>
  
  )

}
