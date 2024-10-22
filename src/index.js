import express from "express"
import transaccionesRoutes from "./routes/transacciones.routes.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new transaccionesRoutes().start())


app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))