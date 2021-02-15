const express = require("express");
const sockertio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = sockertio(server);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
