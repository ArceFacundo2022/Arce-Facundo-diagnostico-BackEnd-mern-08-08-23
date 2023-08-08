import mongoose from 'mongoose'

const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    console.log(`Conectado a la Base de Datos`)
    } catch (error) {
        console.log('Error al conectar BD')
        console.log(error)
    }
}

export default dbConnection;