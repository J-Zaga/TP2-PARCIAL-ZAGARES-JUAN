import fs from "fs"

class transaccionesFsModel {
    constructor() {
        this.transacciones = "transacciones.txt"
    }

    async getAllTransacciones() {
        try {
            const file = await fs.promises.readFile(this.transacciones, "utf-8")
            const transacciones = JSON.parse(file)
            return transacciones
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
            return "Error"
        }
    }

    async getCantTransacciones() {
        try {
            const file = await fs.promises.readFile(this.transacciones, "utf-8")
            const transacciones = JSON.parse(file)
            return `Cantidad de transacciones en cuenta: ${transacciones.length}`
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
            return "Error"
        }
    }

    async postTransacciones(data) {
        try {
            const file = await fs.promises.readFile(this.transacciones, "utf-8")
            const transacciones = JSON.parse(file)
            if (transacciones.length === 0) {
                data.id = 1
            } else {
                data.id = transacciones[transacciones.length - 1].id + 1
            }
            transacciones.push(data)
            const updateData = JSON.stringify(transacciones, null, 2)
            await fs.promises.writeFile("transacciones.txt", updateData, "utf-8")
            return data
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
            return "Error"
        }
    }

    async deleteTransacciones(id){
        try{
            const file = await fs.promises.readFile(this.transacciones, "utf-8")
            const transacciones = JSON.parse(file)
            const index = transacciones.findIndex((e) => e.id == id)
            if (index == -1) {
                return "El ID no existe"
            }
            transacciones.splice(index, 1)
            const updateData = JSON.stringify(transacciones, null, 2)
            await fs.promises.writeFile("transacciones.txt", updateData, "utf-8")
            return "La transacciones fue borrada"
        }catch(error){
            console.error("Ha ocurrido un error", error)
            return "Error"
        }
    }
}

export default transaccionesFsModel