const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { v4: uuidv4 } = require('uuid');

const adapter = new FileSync('db.json');
const db = low(adapter);

const app = express();

app.use(cors());
app.use(bodyParser.json());

db.defaults({ tasks: [] }).write();

app.get('/tasks', (req, res) => {
  const tasks = db.get('tasks').value();
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  task.id = uuidv4();
  db.get('tasks').push(task).write();
  res.json(task);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  db.get('tasks').find({ id: taskId }).assign(updatedTask).write();
  res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  db.get('tasks').remove({ id: taskId }).write();
  res.json({ id: taskId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
