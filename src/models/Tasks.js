import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
}, {
    versionKey: false,
    timestamps: true,
});

const Tasks = model('Tasks', TaskSchema);

export default Tasks;