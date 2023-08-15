import mongoose, { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        default: "Pendiente",
    }
}, {
    versionKey: false,
    timestamps: true,
});


export default model('Tasks', TaskSchema);