
const {Server} = require('socket.io')

class Socket {

constructor(server){

    this.io = new Server(server)

}


 start(){

    this.io.on("connection", (socket) => {
      
        socket.emit("saludo", "te haz conectado")


        socket.on("message-to-server", (data) => {
            this.io.emit("message-to-client",data)
        })
    })

 }


}

module.exports = Socket