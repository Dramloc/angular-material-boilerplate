const express = require('express');

const router = express.Router();
const tasks = [];
let lastId = 0;

router.get('/', (req, res) => {
  if (undefined !== req.query.q) {
    const query = req.query.q;
    const lowerCaseQuery = query.toLowerCase();
    const matches = tasks.filter(task => task.name.toLowerCase().indexOf(lowerCaseQuery) > -1);
    return res.json(matches);
  }
  return res.json(tasks);
});

router.get('/:id(\\d+)', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const matches = tasks.filter(task => task.id === id);
  if (matches.length === 0) {
    return res.status(404).send({ error: 'Task not found' });
  }
  if (matches.length > 1) {
    return res.status(400).send({ error: 'Multiple tasks found' });
  }
  return res.json(matches[0]);
});

router.post('/', (req, res) => {
  const task = req.body;
  task.id = lastId += 1;
  tasks.push(task);
  return res.location(`${req.baseUrl}/${task.id}`).sendStatus(201);
});

router.put('/:id(\\d+)', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = req.body;
  task.id = id;
  const matches = tasks.filter(t => t.id === id);
  if (matches.length === 0) {
    return res.status(404).send({ error: 'Task not found' });
  }
  if (matches.length > 1) {
    return res.status(400).send({ error: 'Multiple tasks found' });
  }
  tasks[tasks.indexOf(matches[0])] = task;
  return res.sendStatus(204);
});

router.delete('/:id(\\d+)', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const matches = tasks.filter(task => task.id === id);
  if (matches.length === 0) {
    return res.status(404).send({ error: 'Task not found' });
  }
  if (matches.length > 1) {
    return res.status(400).send({ error: 'Multiple tasks found' });
  }
  tasks.splice(tasks.indexOf(matches[0]), 1);
  return res.sendStatus(204);
});

module.exports = router;
