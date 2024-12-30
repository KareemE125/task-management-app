import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from 'yup';
import Button from '@/components/shared/Button';
import '@/styles/form.css'


const initialData = {
  name: '',
  email: '',
  message: '',
}

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
})


export default function ContactPage() {

  const onSubmit = (data: typeof initialData, { resetForm }) => {
    console.log(data);
    resetForm();
  }

  return (
    <main className='max-w-4xl m-auto'>
      <h2 className="w-fit text-4xl font-bold mb-4 border-b-2 border-gray-900 dark:border-white pl-1 pr-6 pb-2">Contact</h2>
      <p className="font-semibold mb-6">If you want to contact us, don't hesitate. go ahead an send us a message now.</p>
      <section className='form-layout-col max-w-2xl mt-8 mx-auto p-8 bg-gray-300 dark:bg-gray-900 rounded-lg'>
        <h3 className='text-3xl text-center font-semibold mb-6'>Message Form</h3>
        <Formik
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage name="name" component="p" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="p" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Field id="message" name="message" as="textarea" />
              <ErrorMessage name="message" component="p" />
            </div>

            <Button title='Submit' />
          </Form>
        </Formik>
      </section>
    </main>
  )

}
