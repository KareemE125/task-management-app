import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { FaMoon, FaSun } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/store/store";
import useStoreCacheApiCall from "@/hooks/useStoreCacheApiCall";
import { getTasks } from "@/store/taskSlice";
import useTheme from "@/hooks/useTheme";
import ScrollToTop from "@/layouts/components/ScrollToTop"
import '@/styles/shared.css'

export default function NavbarOptions({children}) {
  const {list, lastFetch} = useAppSelector(state => state.task)
  const [theme, toggleTheme] = useTheme()
  const [bounceCartIcon, setBounceCartIcon] = useState<boolean>(false)
  
  useStoreCacheApiCall(getTasks, lastFetch)
  
  useEffect(() => {
    if (list.length === 0 ) return

    setBounceCartIcon(true)
    const timeout = setTimeout(() => setBounceCartIcon(false), 300)

    return () => clearTimeout(timeout)
  }, [list.length])

  return (
    <div className="flex items-center gap-6">
      <ScrollToTop />
      <Toaster richColors closeButton theme={theme === 'light' ? 'light' : 'dark'} />

      {/* Theme Button */}
      <button
        className="text-white text-xl"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <FaSun className="text-yellow-500"/> : <FaMoon className="text-purple-600" />}
      </button>

      {/* Cart Button */}
      <NavLink
        to={"/tasks"}
        className="pr-2 relative cursor-pointer"
      >
        <div 
          className={` ${bounceCartIcon && "beat-animation "} absolute -top-2.5 left-3 rounded-full px-1 min-w-4  h-4 flex justify-center items-center text-xs font-semibold bg-green-500 bg-opacity-90 text-white`}
        >
          {list.length}
        </div>
        <FaTasks  className="dark:text-white text-blue-700 text-xl" />
      </NavLink>

      {/* Children */}
      {children}
    </div>
  )
}
