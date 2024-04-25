const http = require("http");

const requestListener = (request, response) => {
  const { method, url } = request;

  if (method === "GET") {
    if (url === "/home") {
      response.end("<h1>Home Page Area ^_^</h1>");
    } else {
      response.end("<h1>Halaman tidak ditemukan T_T</h1>");
    }
  }
  if (method === "POST") {
    if (url === "/about") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Hai, ${name}! Kamu ada diabout</h1>`);
      });
    } else {
      response.end("<h1>Halaman tidak ditemukan T_T</h1>");
    }
  }
  if (method === "PUT") {
    response.end("<h1>Putting Data ^_^</h1>");
  }
  if (method === "DELETE") {
    response.end("<h1>Deleting Data ^_^</h1>");
  }

  response.setHeader = ("Content-Type", "text/html");
  response.setCode = 200;
};

const server = http.createServer(requestListener);

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
