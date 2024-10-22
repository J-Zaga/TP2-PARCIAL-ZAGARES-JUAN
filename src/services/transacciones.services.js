import Factory from "../models/Factory.js"


class transaccionesService {
    constructor() {
        this.model = Factory.get("FS")
    }

    async getAllTransacciones(){
        return await this.model.getAllTransacciones()
    }

    async getCantTransacciones(){
        return await this.model.getCantTransacciones()
    }

    async postTransacciones(data){
        return await this.model.postTransacciones(data)
    }

    async deleteTransacciones(id) {
        return this.model.deleteTransacciones(id)
    }

}

export default transaccionesService