class transaccionesMemModel {
    constructor() {
        this.transacciones = [
        ]
    }

    async getAllTransacciones() {
        try {
        return this.transacciones
        } catch (error) {
        console.error("Ha ocurrido un error: ", error)
    }
    }

    async getCantTransacciones(){
        try {
            return `Cantidad de transacciones en cuenta: ${this.transacciones.length}`
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
        }
    }

    async postTransacciones(data) {
        try {
            if (this.transacciones.length === 0) {
                data.id = 1
            } else {
                data.id = this.transacciones[this.transacciones.length - 1].id + 1
            }
            this.transacciones.push(data)
            return data;
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
        }
    }

    async deleteTransacciones(id) {
        try {
            const index = this.transacciones.findIndex((e) => e.id == id)
            if (index == -1) {
                return "El ID no existe"
            }
            this.transacciones.splice(index, 1)
            return "La transaccion fue borrada"
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
        }
    }
}

export default transaccionesMemModel