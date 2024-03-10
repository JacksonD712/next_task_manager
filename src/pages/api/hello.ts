
import type { NextApiRequest, NextApiResponse } from "next";

type Task = {
  id: number;
  title: string;
  type: string;
  date: string; 
  isCompleted: boolean; 
  image?: string; 
};

type Data = {
  tasks: Task[];
};

let tasks: Task[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method === 'GET') {
  
    res.status(200).json({ tasks });
  } else if (req.method === 'POST') {
   
    const { title, type, date, isCompleted, image } = req.body;
    const id = tasks.length + 1;
    const newTask: Task = { id, title, type, date, isCompleted };
    
   
    if (image) {
    
      newTask.image = `/images/${id}.jpg`; 
    }

    tasks.push(newTask);
    res.status(201).json({ tasks });
  } else if (req.method === 'DELETE') {
   
    const taskId = Number(req.query.id); 
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.status(200).json({ tasks });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } else {
    
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
