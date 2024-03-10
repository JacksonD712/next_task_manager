import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/actions';
import { Task } from '../store/types';
import React, { useEffect, useState } from 'react';

export default function AddTask() {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState<Task>({
    title: '',
    type: '',
    date: '',
    isCompleted: false,
  });
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      if (response.ok) {
        const task = await response.json();
        dispatch(addTask(task)); 
        setMessage('Task added successfully.');
        setTaskData({ title: '', type: '', date: '', isCompleted: false, });
      } else {
        console.error('Failed to add task:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setTaskData(prevData => ({
        ...prevData,
        [name]: files[0] 
      }));
    } else {
      setTaskData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-black rounded-lg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add task
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" name="title" id="title" value={taskData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title of task" required />
              </div>
              <div>
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select name="type" id="type" value={taskData.type} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  <option value="">Select Type</option>
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="Study">Study</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="date" name="date" id="date" value={taskData.date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Task</button>
              {message && (
                <div className="text-blue-600 dark:text-blue-400 text-sm mt-2">{message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
