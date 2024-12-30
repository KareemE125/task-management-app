import { NavLink } from "react-router-dom";

type LinkTabProps = {
    path: string;
    label: string;
}

const baseStyle = "block py-2 px-3 text-gray-900 rounded duration-75 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"


export default function NavLinkTab({path, label}:LinkTabProps) {

  return (
    <NavLink 
        to={path} 
        className={ ({isActive})=> isActive 
            ? baseStyle + " " +"bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 text-white" 
            : baseStyle 
        }
    >
        {label}
    </NavLink>
  )
}
