const http = require("http");
const app = require("./src/server.js");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server run ${PORT}`));
