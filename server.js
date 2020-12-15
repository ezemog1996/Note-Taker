//bring in necessary lib and routes
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//create express isntance
const server = express();

//set up a PORt to listen to
const PORT = process.env.PORT || 3005;

//add some body parswers
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//serve up public folder to client side
server.use(express.static("public"));

//attach routes
server.use(apiRoutes);
server.use(htmlRoutes);

server.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT + ".....");
})