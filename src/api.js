import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
