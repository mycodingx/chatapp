const express = require("express");
const sockertio = require("socket.io");
const http = require("http");

const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = sockertio(server);

io.on("connection", (socket) => {
  console.log("We have a new socket connection..!!");
  socket.on("disconnect", () => {
    console.log("Connection off...!!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
