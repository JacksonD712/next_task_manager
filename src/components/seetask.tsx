import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
interface Task {
  id: number;
  title: string;
  type: string;
  date: string;
  isCompleted: boolean;
  image?: string;
}
export default function See() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('active');
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        fetchTasks();
    }, []);
    const fetchTasks = async () => {
        try {
            const response = await fetch('/api/hello');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setTasks(data.tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };
    const handleDeleteTask = async (id: number) => {
        try {
            const response = await fetch(`/api/hello?id=${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete task');
            }
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
    const handleCompleteTask = (id: number) => {
        try {
            setTasks(prevTasks => {
                const updatedTasks = prevTasks.map(task => {
                    if (task.id === id) {
                        return { ...task, isCompleted: true };
                    }
                    return task;
                });
                return updatedTasks;
            });
        } catch (error) {
            console.error('Error marking task as completed:', error);
        };
    };
    const handleActiveTask = (id: number) => {
        try {
            const updatedTasks = tasks.map(task => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };
    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen flex justify-center items-center rounded-lg">
            <div className="w-full max-w-lg rounded-lg shadow-md overflow-hidden dark:bg-gray-800 h-80">
                <div className="flex  justify-center bg-gray-200 dark:bg-gray-700">
                    <button
                        className={`px-4 py-2 focus:outline-none ${
                            activeTab === 'active'
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-800 dark:text-gray-300'
                        }`}
                        onClick={() => handleTabChange('active')}
                    >
                        Active Tasks
                    </button>
                    <button
                        className={`px-4 py-2 ml-4 focus:outline-none ${
                            activeTab === 'completed'
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-800 dark:text-gray-300'
                        }`}
                        onClick={() => handleTabChange('completed')}
                    >
                        Completed Tasks
                    </button>
                </div>
                <div className="p-4 text-white">
                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {tasks.filter(task => activeTab === 'active' ? !task.isCompleted : task.isCompleted).map(task => (
                            <div key={task.id} className="border-b py-2">
                                <p className="font-semibold">{task.title}</p>
                                <p>Type: {task.type}</p>
                                <p>Date: {task.date}</p>
                                <p>Completed: {task.isCompleted ? 'Yes' : 'No'}</p>
                                <div className="mt-2">
                                    {!task.isCompleted && (
                                        <input
                                            type="checkbox"
                                            onChange={() => handleCompleteTask(task.id)}
                                            className="mr-2"
                                        />
                                    )}
                                     {task.isCompleted && (
                                        <input
                                            type="checkbox"
                                            onChange={() => handleActiveTask(task.id)}
                                            className="mr-2"
                                            checked 
                                        />
                                    )}
                                    <button onClick={() => handleDeleteTask(task.id)} className="mr-2 bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
                                    <Link href={{ pathname: '/taskdetails', query: { id: task.id, title: task.title, type: task.type, date: task.date, image: task.image } }} passHref>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}