
import io from 'socket.io'

function socketServer(server) {

  return io(server).on('connection', ( socket ) => {
    socket.emit('connected', 'connected')
    socket.on()
  })
}

export default socketServer