import figlet from "figlet";

//env imports
const port = process.env.PORT || 5000;
const author = process.env.AUTHOR;
const firstName = process.env.FIRSTNAME;
const lastName = process.env.LASTNAME;

//initiating bun server
const server = Bun.serve({
  port: port,
  fetch(req) {
    //getting the url from request
    const url = new URL(req.url);
    //handling home route
    if (url.pathname === "/") {
      const body = figlet.textSync(`${author} is ${firstName} ${lastName}!`);
      return new Response(body);
    }
    //handling blog route
    if (url.pathname === "/blog") return new Response("Blog!");
    //handling video route
    if (url.pathname === "/video") {
      return new Response("Video!");
    }
    //handling unspecified routes
    return new Response("Route doesn't exists!");
  },
});
//listening on port
console.log(`Listening on Port: ${server.port}`);
