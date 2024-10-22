import transaccionesController from "../controllers/transacciones.controllers.js"
import express from "express"

class Router {
    constructor() {
        this.router = express.Router()
        this.controller = new transaccionesController()
    }

    start(){
        this.router.get("/transacciones", this.controller.getAllTransacciones.bind(this.controller))
        this.router.get("/transacciones/cant", this.controller.getCantTransacciones.bind(this.controller))
        this.router.post("/transacciones", this.controller.postTransacciones.bind(this.controller))
        this.router.delete("/transacciones/:id", this.controller.deleteTransacciones.bind(this.controller))
        return this.router
    }
}

export default Router