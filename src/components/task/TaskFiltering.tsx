import { useEffect } from "react"
import { useState } from "react"
import { IoSearch } from "react-icons/io5"

type TTaskFilteringProps = {
  onFilterChange: (value: React.ChangeEvent<HTMLInputElement> | string) => void
}

export default function TaskFiltering({onFilterChange}: TTaskFilteringProps) {

  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const handler = setTimeout(() => onFilterChange(searchTerm), 500)
    return () => clearTimeout(handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  return (
    <section className="w-full max-w-lg mx-auto flex flex-col justify-stretch mb-8 gap-4">
      <div className='flex flex-col w-full p-1 rounded-full bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10'>      
        <div className="relative flex flex-col">
          <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Task Title ....." 
            className="w-full py-2 pl-4 pr-12 placeholder:text-gray-500 rounded-full bg-gray-100 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
          />
          <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-black dark:text-white" />
        </div>
      </div>

      <div className="flex justify-evenly gap-4 px-6 py-2 rounded-full bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="filter"
            value="all"
            defaultChecked={true}
            onChange={onFilterChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700 dark:text-gray-300 uppercase font-semibold text-[15px]">All</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="filter"
            value="completed"
            onChange={onFilterChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700 dark:text-gray-300 uppercase font-semibold text-[15px]">Completed</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="filter"
            value="pending"
            onChange={onFilterChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700 dark:text-gray-300 uppercase font-semibold text-[15px]">Pending</span>
        </label>
      </div>
    </section>
  )
}
