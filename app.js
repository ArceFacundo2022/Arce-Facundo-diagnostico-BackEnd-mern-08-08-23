import express from 'express'
import cors from 'cors'
import dbConnection from "./src/db/conexion.js"
import dotenv from 'dotenv'
import morgan from 'morgan'
import Taskrouter from './src/routes/tasks.routes.js'

//Inicializaciones

const app = express()
dotenv.config()
dbConnection()

//Settings
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))

//Routes
app.use(Taskrouter)


//Inicializar servidor
app.listen(port,()=>{
    console.log(`Servidor inicializado en el puerto ${port}`)
})