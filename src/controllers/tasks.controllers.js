import Tasks from '../models/Tasks.js';

const ctrlTask = {};

ctrlTask.getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();

        return res.json({
            message: "Tareas de todos los usuarios",
            tasks,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

ctrlTask.postTasks = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        const newTask = new Tasks({
            titulo,
            descripcion
        });

        const task = await newTask.save();

        return res.json({
            message: "Tarea guardada",
            task,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

ctrlTask.putTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, descripcion } = req.body;

        const tareaUpdate = await Tasks.findByIdAndUpdate(
            id,
            { titulo, descripcion },
            { new: true }
        );

        return res.json({
            message: "Tarea actualizada",
            tareaUpdate,
        });
    } catch (error) {
        console.log("No se pudo actualizar");
        console.log(error);
        return res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

ctrlTask.putStatusTasks = async (req, res) => {
    const id = req.params.id;
    let {state} = req.body
    
    try {

        console.log(state)

        switch(state){
            case "Pendiente":
                state = "Completado"
                break
            case "Completado":
                state = "Pendiente"
                break
            default:
                state = "Pendiente"
                console.log("que paso aca 🙃")
                break
        }
        const tareaUpdate = await Tasks.findByIdAndUpdate(
            id,
            {state},
            { new: true }
        );

        return res.json({
            message: "Estado de la tarea actualizado",
            tareaUpdate,
        });
    } catch (error) {
        console.log("No se pudo actualizar");
        console.log(error);
        return res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

ctrlTask.deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        const tareaDelete = await Tasks.deleteOne({ _id: id });

        return res.json({
            tareaDelete,
            message: "Tarea eliminada con exito",
        });
    } catch (error) {
        console.log("No se pudo eliminar");
        console.log(error);
        return res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export default ctrlTask;