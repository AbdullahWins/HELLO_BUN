import figlet from "figlet";

//env imports
const port = process.env.PORT || 3000;
const author = process.env.AUTHOR;
const firstName = process.env.FIRSTNAME;
const lastName = process.env.LASTNAME;

const server = Bun.serve({
  port: port,
  fetch() {
    const body = figlet.textSync(`${author} is ${firstName} ${lastName}!`);
    return new Response(body);
  },
});

console.log(`Listening on Port: ${server.port}`);
