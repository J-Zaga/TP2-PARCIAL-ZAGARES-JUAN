import transaccionesService from "../services/transacciones.services.js"

class transaccionesController {
  constructor() {
    this.service = new transaccionesService()
  }

  async getAllTransacciones(req, res) {
    const data = await this.service.getAllTransacciones()
    res.send(data)
  }

  async getCantTransacciones(req, res){
    const data = await this.service.getCantTransacciones()
    res.json(data)
  } 

  async postTransacciones(req, res){
    const data = req.body
    const postTransacciones = await this.service.postTransacciones(data)
    res.send(postTransacciones)
  }

    async deleteTransacciones(req, res) {
    const { id } = req.params 
    if(isNaN(id)) {
      res.send("El ID debe ser un numero")
    }else{
    const deleteTransacciones = await this.service.deleteTransacciones(id)
    res.send(deleteTransacciones)
    }
}
}

export default transaccionesController