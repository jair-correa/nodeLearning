//HTTPS
//METODOS -->> POST, GET, OPTIONS,PUT, DELETE
//CRUD -->> (CREATE,READ,UPDATE,DELETE)

//import { createServer } from "http";
//
//const server = createServer((request, response) => {
//  console.log(request.method);
//  response.writeHead(200, { "Content-Type": "text/plain" });
//  response.end("hello world");
//});
//
//server.listen(3000, () => {
//  console.log("Server running at http://localhost:3000/");
//});
//################################

import fastify from "fastify";

const app = fastify();

app.listen({ port: 3000 });

app.get("/health", (request, reply) => {
  reply.status(204).send("I´am alive!");
});

app.register(userRoutes ,{prefix: "users"});
