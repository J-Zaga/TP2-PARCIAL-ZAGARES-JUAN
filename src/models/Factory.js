import transaccionesMemModel from "./DAO/transacciones.models.mem.js"
import transaccionesFsModel from "./DAO/transacciones.models.fs.js" 

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en la memoria del servidor")
                return new transaccionesMemModel()
            case "FS":
                console.warn("Persistencia en memoria File System")
                return new transaccionesFsModel()
            default:
                console.warn("Persistencia en memoria default")
                return new transaccionesMemModel()
        }
    }
}
export default Factory