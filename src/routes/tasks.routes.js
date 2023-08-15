import {Router} from 'express'
const Taskrouter = Router()

import ctrlTask from '../controllers/tasks.controllers.js'

const {getTasks,postTasks,putTasks,deleteTask, putStatusTasks} = ctrlTask

Taskrouter.get("/tareas",getTasks)
Taskrouter.post("/tareas",postTasks)
Taskrouter.put("/tareas/:id",putTasks)
Taskrouter.delete("/tareas/:id",deleteTask)
Taskrouter.put("/statusTarea/:id",putStatusTasks)

export default Taskrouter