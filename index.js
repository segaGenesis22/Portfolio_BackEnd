require("dotenv").config();
const app = require("./app");

// const http = require("http");

// const errorHandler = error => {
//     if (error.syscall !== 'listen') {
//       throw error;
//     }
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
//     switch (error.code) {
//       case 'EACCES':
//         console.error(bind + ' requires elevated privileges.');
//         process.exit(1);
//         break;
//       case 'EADDRINUSE':
//         console.error(bind + ' is already in use.');
//         process.exit(1);
//         break;
//       default:
//         throw error;
//     }
//   };

// const server = http.createServer(app);

// server.on('error', errorHandler);
// server.on('listening', () => {
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
//     console.log('Listening on ' + bind);
// });

app.listen(process.env.PORT || 5000, () => console.log('Server Started')) 