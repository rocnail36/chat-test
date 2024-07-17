const Server = require("./structure/Server")
const Socket = require("./structure/socket")


const App = new Server()
const Io = new Socket(App.server)


Io.start()
App.start()