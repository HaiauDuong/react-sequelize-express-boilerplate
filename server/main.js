const PORT = 1337
const app = require('./index')
const {db} = require('./db')
// const socketio = require('socket.io')

const init = async (PORT) => {

  // await db.sync() //uncomment this once you've setup /server/db/db.js

  server = app.listen(PORT, () => console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

  `))

  // const io = socketio(server)

  // io.on('connection', (socket) => {
  //   console.log(`${socket.id} has connected`)

  //   socket.on('disconnect', () => {
  //     console.log(`${socket.id} has disconnected`)
  //   })

  // })
}

init(PORT)