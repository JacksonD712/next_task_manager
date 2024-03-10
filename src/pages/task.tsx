// TaskPage.tsx
import React from 'react';
import Navbar from '../components/navbar';
import AddTask from '../components/addtask';
import See from '../components/seetask';

const TaskPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 ">
        <AddTask />
        <See />
      </div>
    </>
  );
};

export default TaskPage;
