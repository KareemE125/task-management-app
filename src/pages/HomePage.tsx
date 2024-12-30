import task_management from '@/assets/mng.jpg'
import Button from '@/components/shared/Button'
import { Link } from 'react-router-dom'

export default function HomePage() {

  return (
    <main className='flex flex-col lg:flex-row gap-12 lg:gap-6 px-4 lg:pt-12'>
      <section className="flex-1">
        <h2 className="text-4xl font-bold mb-6">Welcome to Task Manager</h2>
        <p className="text-xl mb-8 lg:mb-16">
          Welcome to your ultimate task management hub! 
          Stay <b className="text-teal-600 dark:text-teal-500"> organized</b>,  
          <b className="text-pink-600 dark:text-pink-500"> focused</b>, and 
          <b className="text-blue-600 dark:text-blue-500"> efficient </b> with our powerful task manager. 
          Start managing your tasks effortlessly today!
        </p>
        <Link to="/tasks">
          <Button title="Get Started" />
        </Link>
      </section>
      <section className="flex-1">
        <img className='w-full mx-auto max-w-[600px] rounded-[160px] rounded-tr-none rounded-bl-none' src={task_management} alt="task management photo" />
      </section>
    </main>
  )
}