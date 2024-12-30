import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import HomePage from "@/pages/HomePage"
import TasksPage from "@/pages/TasksPage"
import AboutPage from "@/pages/AboutPage"
import ErrorPage from "@/pages/ErrorPage"
import ContactPage from "@/pages/ContactPage"


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/tasks',
                element: <TasksPage />
            },
            {
                path: '/about-us',
                element: <AboutPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
        ]
    }
])

export default appRouter