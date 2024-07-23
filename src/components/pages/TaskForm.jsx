import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedBy, setAssignedBy] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueHours, setDueHours] = useState('');
  const [taskStatus, setTaskStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      Task_Name: taskName,
      Task_Description: taskDescription,
      Assigned_By: assignedBy,
      Assigned_TO: assignedTo,
      Start_Date: startDate,
      Due_Hours: dueHours,
      Task_Status: taskStatus,
    };

    try {
      const response = await axios.post('http://localhost:5000/TaskSubmission', taskData);
      console.log('Server response:', response.data);
      toast.success('Task created successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error creating task. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const resetForm = () => {
    setTaskName('');
    setTaskDescription('');
    setAssignedBy('');
    setAssignedTo('');
    setStartDate('');
    setDueHours('');
    setTaskStatus('Pending');
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white shadow-lg rounded-lg w-full p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="taskName" className="block text-gray-700 font-semibold mb-1">Task Name</label>
              <input
                type="text"
                id="taskName"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="assignedBy" className="block text-gray-700 font-semibold mb-1">Assigned By</label>
              <input
                type="text"
                id="assignedBy"
                value={assignedBy}
                onChange={(e) => setAssignedBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="assignedTo" className="block text-gray-700 font-semibold mb-1">Assigned To</label>
              <input
                type="text"
                id="assignedTo"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="dueHours" className="block text-gray-700 font-semibold mb-1">Due Hours</label>
              <input 
                type="number"
                id="dueHours"
                value={dueHours}
                onChange={(e) => setDueHours(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="startDate" className="block text-gray-700 font-semibold mb-1">Start Date</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="taskStatus" className="block text-gray-700 font-semibold mb-1">Task Status</label>
              <select
                id="taskStatus"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Create Task</button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default TaskForm;
