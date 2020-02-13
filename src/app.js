const express = require('express');
process.env.NODE_ENV = 'development';
const routes = require('./routes');

const config = require('./config/config.js');
const app = express();
app.use(routes);

  
function startServer(){
    
    app.listen(global.gConfig.node_port, () => {
        console.log("Server is now running on port: " + global.gConfig.node_port);
    });
}

startServer();