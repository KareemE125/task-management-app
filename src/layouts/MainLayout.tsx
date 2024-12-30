import Navbar from "@/layouts/components/navbar/Navbar";
import Footer from "@/layouts/components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  return (
    <main className='min-h-screen h-full flex flex-col dark:text-white
            dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-700 dark:to-gray-300 
            bg-gradient-to-br from-gray-200 to-gray-100
          '
    >
      <nav className="z-[99999] sticky top-0 left-0 right-0">
        <Navbar />
      </nav>

      <main className="px-2 py-4 md:px-8 md:py-8 mb-16 w-full max-w-7xl mx-auto">
        <Outlet />
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </main>
  );
}
