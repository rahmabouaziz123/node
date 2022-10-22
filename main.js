const http = require("http");
const fs = require("fs");

const generatePassword=require("./password-generator")

const mailPro=require("./email-sender")

const requestListener = function (req, res) {
fs.readFile("./hello-world.js", "utf8", (err, data) => {
     res.writeHead(200);
    res.write(data);
    return res.end();
  });

  fs.readFile("./welcome.txt", "utf8", (err, data) => {
    res.writeHead(200);
   res.write(data);
   return res.end();
 });
 
};
generatePassword();
mailPro();

const server = http.createServer(requestListener);
server.listen(3000);
