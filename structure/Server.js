const express = require("express")
const path = require("path")
const http = require('http');

class Server  {

        constructor(){
            this.App = express()
            this.App.use(express.static(path.join(__dirname,"../public")))
            this._server = http.createServer(this.App)
            this.Port = 8080
            
        }
    

        start(){
            this.server.listen(this.Port,() => {
                console.log("server running")
            })

        }

        get server(){
            return this._server
        }

}


module.exports = Server