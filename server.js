let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let data = fs.readFileSync("./public/index.html", "utf-8");
    res.end(data);
  } else if (req.url == "/about") {
    let data = fs.readFileSync("./public/about.html", "utf-8");
    res.end(data);
  } else if (req.url == "/contact") {
    let data = fs.readFileSync("./public/contact.html", "utf-8");
    res.end(data);
  }
  else {
    let data = fs.readFileSync("./public/error.html", "utf-8");
    res.end(data);
  }
});

server.listen(3000);
console.log("Server run with 3000 port");
