import { useEffect, useState } from 'react'
import Task from '@/components/task/Task'
import AsyncGridList from '@/components/shared/AsyncGridList'
import useStoreCacheApiCall from '@/hooks/useStoreCacheApiCall'
import { getTasks } from '@/store/taskSlice'
import { useAppSelector } from '@/store/store'
import CreateTask from '@/components/task/CreateTask'
import ITask from '@/models/taskModel'
import TaskFiltering from '@/components/task/TaskFiltering'
import Button from '@/components/shared/Button'

type FilterType = 'all' | 'completed' | 'pending'
  
export default function TasksPage() {  
  
  const tasks = useAppSelector((state) => state.task)
  useStoreCacheApiCall(getTasks, tasks.lastFetch)

  const [showCreateTask, setShowCreateTask] = useState<boolean>(false)

  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(tasks.list)
  const [filters, setFilters] = useState<{searchTerm: string, status: FilterType}>({searchTerm: '', status: 'all'})

  useEffect(() => {
    const newList = tasks.list.filter((task) => {
      return task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && (
        filters.status === 'all' || 
        (filters.status === 'completed' && task.status) || 
        (filters.status === 'pending' && !task.status)
    )})
    setFilteredTasks(newList)
  }, [tasks.list, filters])

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if(typeof e === 'string'){
      setFilters(filters => ({...filters, searchTerm: e}))
    }
    else{
      const value: FilterType = e.target.value as FilterType
      setFilters(filters => ({...filters, status: value}))
    }
  }

  return (
    <main>
      <Button 
        title={showCreateTask? 'Done Creating Tasks': 'Create Tasks'} 
        clickHandler={() => setShowCreateTask(!showCreateTask)}
        extraStyle={`mb-4 ${showCreateTask? 'from-red-700 to-gray-500 hover:from-red-600 hover:to-gray-400': 'bg-green-500'}`} 
      />
      {showCreateTask && <CreateTask />}
      <TaskFiltering onFilterChange={onFilterChange}/>
      <AsyncGridList
        view='list'
        list={filteredTasks} 
        loading={tasks.loading} 
        error={tasks.error}
        Component={Task} 
      />
    </main>
  )
}