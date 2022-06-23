import { Router } from 'express';
import { createTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from '../controllers/tasks'

const router = Router();
/**
* @swagger
* tags:
*   name: Tasks
*   description: Tasks endpoint
*/


/** 
* @swagger 
* /tasks:
*   get:
*       summary: Get all tasks
*       tags: [Tasks]
*/
router.get('/tasks', getTasks);

/** 
* @swagger 
* /tasks/count:
*   get:
*       summary: Get number of tasks in database
*       tags: [Tasks]
*/
router.get('/tasks/count', getTaskCount);

/** 
* @swagger 
* /tasks/:id:
*   get:
*       summary: Get data specific task
*       tags: [Tasks]
*/
router.get('/tasks/:id', getTask);

/** 
* @swagger 
* /tasks:
*   post:
*       summary: Save a new task
*       tags: [Tasks]
*/
router.post('/tasks', createTask);

/** 
* @swagger 
* /tasks/:id:
*   delete:
*       summary: Delete a task
*       tags: [Tasks]
*/
router.delete('/tasks/:id', deleteTask);

/** 
* @swagger 
* /tasks/:id:
*   put:
*       summary: Update a task
*       tags: [Tasks]
*/
router.put('/tasks/:id', updateTask);

export default router;