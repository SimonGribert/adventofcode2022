const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

const content =
  "U 1\nL 1\nD 2\nU 2\nR 2\nD 1\nL 1\nD 2\nR 2\nD 2\nU 1\nL 1\nD 2\nU 1\nD 2\nL 2\nR 1\nU 1\nL 1\nR 1\nU 1\nR 2\nL 1\nD 2\nU 1\nR 1\nL 2\nR 2\nL 2\nR 2\nL 2\nU 1\nL 2\nU 1\nD 2\nL 2\nR 2\nD 2\nL 2\nU 2\nL 1\nU 1\nD 2\nL 1\nD 1\nR 1\nU 1\nL 2\nD 2\nU 2\nL 1\nD 1\nR 2\nD 1\nR 2\nD 1\nR 2\nU 2\nR 2\nL 2\nR 1\nD 1\nU 1\nR 2\nD 1\nU 1\nR 2\nL 2\nU 2\nR 2\nU 1\nD 1\nR 2\nL 1\nU 1\nL 2\nD 1\nR 1\nU 2\nL 1\nD 2\nL 1\nR 2\nD 2\nL 2\nR 2\nU 2\nR 2\nD 2\nL 1\nR 2\nU 1\nR 2\nU 1\nL 1\nR 1\nL 2\nU 2\nL 1\nD 2\nL 2\nU 2\nD 2\nR 2\nD 2\nR 1\nU 2\nL 1\nU 1\nL 2\nR 1\nD 1\nR 1\nL 1\nD 2\nL 2\nR 2\nD 3\nR 2\nD 2\nL 3\nR 1\nL 2\nU 3\nD 1\nU 1\nL 2\nD 2\nL 2\nR 2\nL 1\nU 2\nD 2\nU 2\nD 1\nL 1\nD 1\nR 2\nD 3\nU 3\nD 3\nL 2\nR 2\nU 1\nL 3\nR 2\nU 2\nD 2\nL 3\nD 2\nR 3\nD 3\nU 2\nR 2\nD 2\nU 1\nL 3\nR 3\nU 3\nL 3\nD 3\nL 3\nD 2\nL 1\nR 2\nL 1\nR 2\nD 1\nL 3\nR 2\nD 3\nL 1\nR 1\nL 2\nU 1\nL 2\nR 2\nU 2\nL 1\nD 1\nR 3\nL 1\nR 2\nU 2\nD 1\nR 2\nU 1\nR 3\nU 1\nD 3\nR 3\nL 1\nD 1\nU 1\nD 3\nR 2\nU 1\nR 1\nU 1\nL 3\nD 2\nU 3\nR 2\nD 1\nR 1\nU 2\nL 1\nU 1\nR 3\nU 2\nD 1\nR 2\nU 3\nD 2\nU 1\nR 2\nL 2\nU 3\nL 1\nR 1\nL 2\nD 2\nU 1\nD 2\nR 3\nD 3\nU 4\nR 3\nD 2\nU 4\nL 4\nU 3\nL 1\nU 2\nL 2\nR 3\nU 4\nD 1\nL 1\nD 2\nL 2\nR 1\nL 2\nU 1\nL 3\nD 1\nL 2\nD 3\nR 3\nD 4\nL 2\nU 4\nL 3\nR 4\nD 4\nR 2\nD 2\nL 2\nR 2\nU 4\nL 3\nD 1\nR 1\nL 2\nD 1\nU 1\nL 2\nU 1\nL 1\nU 2\nD 4\nL 4\nU 2\nR 2\nL 2\nR 3\nU 2\nD 3\nU 4\nD 3\nR 2\nL 4\nU 2\nR 2\nU 3\nD 4\nR 4\nL 2\nR 4\nD 4\nU 3\nL 3\nD 4\nL 4\nR 2\nL 1\nR 3\nD 2\nU 4\nR 3\nU 1\nR 2\nU 1\nD 1\nR 1\nL 4\nU 4\nR 1\nD 4\nL 3\nU 1\nD 2\nR 2\nL 2\nD 2\nU 4\nR 3\nL 4\nD 1\nR 1\nU 3\nR 4\nL 2\nR 2\nU 3\nL 4\nR 1\nL 3\nD 3\nR 2\nD 2\nL 2\nD 2\nU 4\nD 5\nL 4\nU 2\nD 3\nL 1\nU 4\nR 5\nD 5\nU 4\nR 5\nL 2\nD 4\nR 2\nL 2\nR 1\nU 1\nD 5\nU 1\nD 2\nR 5\nL 4\nD 4\nR 2\nL 3\nR 3\nL 1\nU 4\nR 2\nL 4\nU 5\nR 5\nD 3\nU 4\nL 2\nU 5\nR 3\nU 5\nL 4\nR 2\nU 2\nR 3\nL 5\nD 2\nR 5\nL 2\nR 5\nD 4\nU 4\nL 5\nU 1\nD 4\nU 5\nL 5\nD 2\nL 2\nD 4\nL 2\nD 2\nR 4\nU 4\nD 2\nL 1\nD 3\nU 3\nR 2\nD 2\nL 5\nD 3\nR 2\nL 2\nU 3\nD 5\nR 1\nL 4\nD 1\nL 5\nR 3\nL 3\nD 3\nL 2\nU 5\nL 5\nR 4\nD 5\nU 2\nR 2\nL 3\nU 1\nD 1\nU 2\nR 3\nU 2\nL 4\nU 4\nL 3\nU 3\nD 3\nR 2\nL 5\nR 5\nU 2\nD 2\nU 4\nD 3\nU 1\nL 1\nD 4\nR 3\nL 1\nD 5\nR 3\nU 1\nL 6\nU 5\nD 4\nR 4\nL 5\nU 2\nD 6\nL 4\nR 2\nU 4\nL 2\nR 1\nU 6\nD 6\nR 1\nL 2\nU 4\nL 2\nD 6\nL 6\nR 3\nL 3\nD 5\nU 6\nD 5\nU 5\nL 6\nR 6\nU 3\nR 6\nU 2\nD 1\nU 3\nR 6\nD 5\nL 3\nR 1\nD 6\nR 3\nD 2\nU 2\nD 3\nL 6\nU 3\nL 3\nU 1\nR 6\nU 2\nD 3\nR 1\nU 3\nR 6\nL 2\nR 4\nL 1\nR 5\nL 1\nR 4\nU 6\nD 3\nU 2\nL 4\nR 1\nL 2\nR 4\nU 5\nR 1\nL 2\nU 1\nR 2\nU 6\nR 1\nD 2\nL 1\nU 2\nD 2\nL 1\nU 1\nR 4\nD 5\nL 4\nD 6\nL 2\nU 3\nD 3\nL 1\nR 3\nD 1\nL 6\nD 1\nU 6\nL 1\nD 6\nU 3\nR 5\nL 2\nR 4\nD 5\nL 4\nD 6\nU 1\nD 6\nL 6\nU 3\nD 3\nU 2\nL 1\nR 5\nU 5\nL 6\nU 5\nR 5\nD 4\nU 7\nR 7\nL 2\nD 3\nR 3\nL 1\nD 6\nR 3\nL 2\nU 2\nD 2\nU 2\nL 7\nR 4\nU 3\nL 3\nR 2\nL 5\nU 3\nR 6\nU 5\nL 7\nU 7\nL 4\nU 5\nL 7\nD 1\nL 1\nD 2\nU 3\nR 5\nD 1\nR 6\nL 3\nU 5\nD 6\nL 4\nD 3\nU 3\nR 3\nU 1\nR 2\nL 7\nD 7\nR 4\nL 6\nD 7\nL 7\nD 2\nU 1\nR 2\nU 3\nL 2\nD 2\nL 5\nD 4\nR 5\nD 7\nU 5\nD 1\nL 4\nU 2\nR 5\nD 6\nL 4\nR 7\nU 6\nD 2\nL 4\nD 4\nL 1\nR 4\nL 1\nR 5\nU 5\nR 5\nL 1\nD 2\nR 1\nU 5\nL 4\nD 2\nU 3\nL 2\nR 5\nU 4\nL 1\nR 5\nL 1\nD 5\nR 7\nL 5\nU 5\nL 7\nU 3\nD 6\nU 2\nL 2\nR 5\nU 7\nD 1\nR 2\nU 4\nR 7\nU 6\nL 3\nU 5\nD 3\nU 5\nD 6\nR 2\nU 8\nR 7\nL 5\nU 1\nD 3\nL 3\nU 6\nL 6\nU 5\nD 7\nU 3\nL 6\nU 1\nD 3\nR 5\nL 2\nR 1\nD 6\nR 2\nL 1\nR 5\nD 3\nL 1\nR 3\nL 6\nD 5\nU 5\nL 5\nD 3\nL 4\nR 7\nD 6\nL 8\nR 6\nU 8\nD 6\nR 3\nU 4\nR 1\nU 6\nR 3\nL 6\nD 2\nU 5\nR 2\nD 5\nU 7\nD 2\nU 2\nR 3\nL 3\nU 4\nR 3\nU 7\nL 2\nD 3\nR 2\nD 4\nL 4\nD 8\nR 2\nU 2\nL 7\nR 8\nU 8\nL 4\nU 3\nR 3\nU 8\nD 2\nU 5\nD 8\nR 8\nL 8\nR 4\nD 8\nL 7\nU 6\nL 4\nD 6\nU 2\nL 4\nU 8\nR 8\nU 6\nD 1\nR 5\nU 5\nL 8\nU 2\nR 3\nU 7\nL 5\nU 5\nL 7\nD 8\nR 7\nU 4\nD 7\nU 4\nL 3\nR 3\nD 5\nU 1\nL 6\nD 3\nU 5\nD 3\nR 1\nU 2\nL 3\nR 8\nU 1\nD 6\nR 6\nU 9\nD 4\nU 4\nD 2\nL 1\nR 2\nL 6\nU 6\nL 1\nR 1\nU 9\nD 1\nR 4\nL 3\nD 8\nU 7\nD 1\nR 7\nL 6\nU 3\nR 2\nL 2\nD 6\nU 5\nD 6\nL 6\nU 8\nL 5\nR 4\nU 6\nL 1\nU 8\nL 4\nR 1\nD 7\nR 9\nU 2\nD 3\nR 6\nL 8\nU 6\nR 4\nD 1\nU 7\nR 1\nD 9\nL 8\nD 9\nR 1\nU 6\nR 7\nD 2\nU 7\nR 4\nD 9\nR 7\nD 2\nU 1\nR 3\nD 4\nL 5\nU 7\nR 7\nD 2\nU 8\nR 8\nL 4\nU 6\nL 3\nD 8\nL 8\nD 9\nR 7\nL 5\nU 5\nR 4\nU 9\nR 3\nU 9\nR 1\nU 2\nR 9\nU 8\nL 8\nU 7\nR 1\nD 9\nU 4\nL 7\nR 3\nU 5\nL 6\nD 1\nL 4\nD 4\nU 6\nR 7\nL 7\nU 3\nL 8\nD 8\nL 7\nU 3\nD 4\nR 8\nD 1\nR 8\nU 10\nL 1\nU 2\nD 4\nU 3\nR 8\nU 3\nD 5\nR 8\nD 10\nR 8\nD 4\nR 9\nD 1\nL 3\nU 7\nR 7\nL 1\nD 8\nR 6\nD 4\nU 5\nL 2\nU 3\nR 7\nU 10\nL 1\nU 7\nR 1\nU 7\nD 2\nL 10\nU 2\nL 4\nD 6\nR 10\nD 4\nU 7\nL 6\nR 4\nU 6\nD 1\nU 6\nD 5\nU 6\nL 4\nD 2\nL 2\nU 7\nR 2\nU 9\nL 9\nD 2\nU 9\nR 9\nU 9\nD 3\nR 5\nD 3\nL 10\nU 3\nD 10\nL 10\nD 1\nU 2\nD 3\nR 8\nL 1\nU 6\nL 2\nR 9\nU 3\nD 5\nL 8\nU 4\nR 8\nD 5\nL 6\nU 7\nD 8\nR 9\nU 9\nR 8\nD 4\nR 5\nU 6\nL 8\nR 2\nD 3\nL 8\nD 6\nR 7\nL 10\nU 9\nR 6\nL 7\nU 8\nR 5\nL 1\nD 1\nR 6\nD 1\nR 9\nL 1\nU 5\nR 3\nD 7\nU 8\nD 6\nL 6\nU 11\nD 8\nL 6\nD 6\nL 7\nR 10\nU 5\nD 7\nR 5\nD 3\nL 4\nR 3\nD 2\nL 6\nU 6\nD 3\nL 4\nD 9\nL 6\nU 9\nL 3\nU 10\nR 5\nU 8\nR 2\nD 3\nL 6\nR 2\nU 6\nR 8\nD 2\nU 2\nR 5\nU 9\nL 5\nD 8\nR 2\nU 1\nR 1\nD 6\nU 4\nR 7\nL 7\nD 7\nU 11\nR 6\nU 11\nD 11\nR 6\nL 2\nD 10\nR 6\nD 5\nR 7\nD 11\nR 2\nU 10\nL 6\nD 4\nR 1\nL 3\nD 9\nU 8\nL 6\nU 1\nL 7\nD 10\nU 1\nL 1\nD 2\nU 3\nL 4\nR 6\nU 11\nR 6\nU 3\nL 8\nD 3\nR 7\nL 3\nD 4\nL 5\nU 8\nL 11\nR 1\nU 1\nL 9\nD 5\nU 3\nR 1\nL 6\nU 1\nL 3\nD 1\nL 8\nU 1\nD 9\nR 7\nU 11\nR 10\nU 8\nR 5\nU 3\nL 7\nR 3\nL 4\nU 6\nD 3\nU 3\nR 3\nD 1\nL 7\nU 5\nD 1\nU 6\nL 8\nD 3\nR 6\nU 10\nR 6\nD 1\nU 7\nR 5\nL 6\nR 5\nD 3\nR 9\nU 11\nL 8\nR 9\nU 5\nR 5\nL 1\nU 7\nL 11\nU 5\nR 3\nU 7\nR 9\nL 11\nD 11\nL 3\nU 11\nL 2\nU 3\nR 5\nD 1\nL 10\nR 8\nL 11\nU 1\nD 11\nL 4\nR 8\nL 9\nD 6\nU 10\nL 1\nR 12\nU 2\nD 8\nL 8\nU 1\nL 12\nD 9\nR 3\nU 3\nD 10\nU 11\nD 9\nU 8\nL 7\nD 10\nL 3\nU 9\nD 5\nR 12\nD 3\nR 9\nL 8\nR 12\nU 11\nD 5\nR 10\nD 8\nL 12\nU 7\nL 1\nR 7\nD 1\nR 12\nL 3\nR 7\nL 1\nR 2\nD 4\nU 3\nL 8\nU 2\nR 8\nU 5\nL 5\nR 7\nL 7\nR 7\nU 8\nR 3\nD 4\nL 7\nU 5\nL 5\nU 1\nD 12\nR 11\nL 5\nD 10\nR 8\nU 12\nL 11\nU 2\nR 2\nD 1\nU 4\nD 1\nU 1\nR 11\nD 1\nL 8\nU 5\nL 11\nD 11\nR 12\nL 6\nR 8\nL 13\nU 7\nR 7\nD 1\nR 13\nD 6\nL 5\nR 10\nU 4\nR 11\nD 6\nU 1\nD 6\nR 1\nU 1\nL 12\nU 8\nR 4\nU 9\nR 12\nD 1\nR 8\nD 2\nU 5\nL 7\nU 12\nL 5\nD 10\nR 8\nD 6\nR 13\nD 7\nU 7\nL 9\nD 12\nU 5\nL 7\nD 4\nU 2\nR 13\nU 11\nL 3\nR 6\nD 5\nR 6\nL 11\nU 6\nD 5\nU 6\nL 2\nD 8\nR 4\nU 4\nL 12\nD 6\nU 8\nD 8\nL 5\nD 12\nR 8\nU 11\nD 8\nL 7\nU 13\nL 11\nR 6\nU 5\nD 9\nL 11\nU 10\nD 13\nR 5\nD 8\nR 7\nD 6\nR 7\nD 2\nL 13\nR 11\nU 1\nD 7\nU 13\nR 9\nU 12\nR 13\nL 2\nU 13\nD 2\nU 6\nL 6\nD 5\nR 5\nL 2\nU 1\nR 4\nU 6\nL 10\nR 12\nL 3\nD 3\nL 8\nD 10\nU 2\nL 11\nU 2\nL 11\nR 8\nU 12\nR 3\nU 5\nL 7\nD 6\nU 6\nL 10\nR 4\nL 1\nU 8\nD 4\nR 13\nL 7\nU 6\nL 9\nU 13\nD 13\nL 8\nU 3\nL 13\nD 14\nL 1\nU 9\nD 1\nU 9\nR 12\nD 7\nL 9\nR 13\nD 12\nU 10\nD 4\nL 13\nR 11\nL 2\nD 9\nR 4\nU 10\nL 2\nD 8\nU 11\nL 14\nR 1\nU 2\nD 9\nU 8\nL 4\nD 14\nU 10\nR 3\nD 12\nU 12\nL 1\nU 1\nD 7\nU 8\nR 9\nD 7\nR 11\nD 11\nR 13\nD 14\nL 5\nD 1\nU 12\nD 7\nU 13\nD 9\nU 6\nR 5\nU 13\nL 4\nD 8\nL 3\nU 8\nD 4\nR 4\nD 2\nL 1\nD 12\nR 11\nU 11\nD 6\nR 12\nU 3\nD 2\nR 6\nD 1\nU 11\nL 7\nD 9\nL 8\nR 1\nU 13\nD 7\nL 9\nU 4\nD 8\nL 12\nD 6\nR 4\nD 5\nU 13\nL 2\nD 11\nR 4\nD 5\nL 4\nU 9\nL 12\nU 10\nD 3\nR 15\nL 3\nD 10\nL 4\nR 2\nD 10\nR 1\nU 10\nL 9\nD 7\nL 5\nR 8\nU 3\nD 9\nR 5\nD 8\nU 5\nD 5\nL 8\nU 2\nR 5\nU 4\nD 6\nR 3\nL 1\nU 15\nR 12\nD 14\nR 12\nU 14\nD 8\nU 10\nR 9\nD 8\nL 10\nR 4\nU 5\nD 15\nU 6\nD 4\nR 7\nD 1\nR 15\nU 15\nD 4\nR 6\nL 1\nR 7\nL 12\nU 3\nR 1\nL 6\nD 6\nR 5\nD 15\nR 1\nU 10\nR 4\nD 13\nL 5\nD 10\nL 7\nR 5\nU 15\nL 11\nU 4\nD 9\nU 12\nR 12\nL 9\nD 10\nU 7\nR 3\nL 10\nR 12\nD 2\nU 8\nL 7\nR 3\nU 1\nD 10\nL 11\nR 12\nL 8\nU 1\nD 12\nL 4\nD 4\nL 6\nD 7\nR 3\nL 7\nU 1\nR 4\nL 1\nU 2\nL 6\nD 4\nL 7\nR 7\nL 15\nU 4\nR 7\nD 8\nU 9\nD 3\nL 5\nU 6\nR 2\nD 10\nL 9\nU 16\nL 15\nU 1\nR 15\nU 13\nL 12\nD 10\nR 1\nD 6\nR 3\nD 1\nL 14\nR 10\nD 2\nR 10\nU 12\nR 10\nL 13\nU 14\nD 11\nU 16\nR 6\nU 4\nR 6\nU 13\nR 5\nD 1\nL 12\nU 14\nD 11\nR 11\nD 7\nL 3\nR 7\nL 9\nU 11\nD 6\nU 14\nD 2\nL 1\nR 16\nL 14\nD 10\nU 4\nR 15\nU 11\nR 10\nD 5\nR 8\nU 13\nD 11\nU 9\nR 8\nD 4\nL 11\nU 8\nR 7\nD 14\nU 8\nD 6\nL 13\nR 2\nL 16\nR 10\nU 7\nL 10\nU 2\nL 13\nU 8\nD 5\nU 3\nR 14\nD 15\nR 10\nD 4\nU 10\nD 15\nR 6\nU 13\nR 1\nU 16\nL 2\nU 6\nL 8\nD 2\nL 11\nU 15\nD 5\nU 1\nR 3\nD 16\nL 3\nR 4\nD 8\nR 10\nL 8\nD 1\nU 2\nR 4\nU 3\nD 16\nU 10\nR 11\nL 11\nR 7\nL 3\nU 17\nD 1\nL 10\nD 6\nL 6\nD 6\nR 8\nU 16\nD 15\nU 12\nL 12\nD 17\nU 9\nR 7\nU 12\nL 6\nD 5\nR 2\nL 17\nU 6\nR 1\nD 13\nR 11\nD 17\nR 5\nL 3\nD 3\nU 4\nD 4\nU 4\nL 11\nR 4\nL 15\nD 7\nU 13\nD 12\nU 1\nL 16\nD 2\nL 12\nR 15\nU 11\nR 15\nD 12\nR 4\nL 3\nR 3\nU 3\nL 13\nU 4\nL 16\nU 7\nD 17\nR 14\nU 11\nD 4\nL 11\nU 9\nD 8\nU 3\nR 10\nU 16\nR 5\nL 10\nD 3\nL 7\nU 9\nR 2\nU 14\nL 8\nR 9\nL 6\nD 14\nL 14\nU 3\nD 9\nL 8\nD 14\nU 6\nL 4\nR 7\nD 4\nL 6\nU 11\nR 8\nD 8\nR 5\nU 17\nR 15\nU 1\nL 17\nD 14\nL 2\nD 3\nL 16\nD 7\nL 16\nR 10\nD 6\nR 11\nU 10\nL 14\nR 2\nU 3\nD 1\nR 16\nL 5\nR 2\nD 15\nU 6\nL 3\nD 9\nR 12\nD 13\nU 17\nR 16\nD 15\nU 3\nD 13\nL 7\nR 12\nU 18\nL 12\nU 7\nL 18\nD 12\nL 17\nD 6\nL 8\nD 16\nL 9\nR 8\nU 9\nD 9\nU 16\nL 10\nU 12\nL 9\nU 10\nR 13\nL 7\nU 17\nL 13\nD 18\nL 6\nR 14\nL 9\nU 1\nR 8\nU 3\nR 13\nD 3\nL 14\nD 8\nL 12\nR 3\nL 11\nR 2\nD 7\nR 14\nL 9\nU 1\nD 5\nU 10\nR 5\nD 8\nU 2\nD 17\nL 16\nD 3\nU 15\nR 17\nD 10\nR 16\nL 3\nU 2\nR 5\nL 7\nU 7\nD 12\nL 8\nR 4\nL 18\nR 13\nL 18\nR 11\nU 1\nD 1\nL 12\nU 15\nL 4\nD 12\nU 13\nL 14\nD 14\nL 12\nD 14\nU 14\nL 6\nR 5\nD 6\nL 13\nU 16\nL 11\nU 7\nR 10\nD 6\nU 17\nL 12\nR 11\nD 11\nU 7\nR 2\nU 9\nR 16\nL 5\nD 16\nR 7\nU 4\nD 19\nL 2\nD 18\nR 1\nU 15\nR 13\nD 5\nR 2\nU 2\nD 12\nL 17\nD 11\nU 8\nR 13\nU 11\nR 2\nU 13\nR 11\nU 19\nL 17\nR 17\nD 16\nR 18\nU 9\nL 13\nD 1\nR 16\nD 13\nR 6\nD 9\nR 7\nU 10\nD 10\nU 8\nR 8\nL 2\nR 17\nD 13\nL 9\nU 19\nD 6\nL 14\nR 9\nL 19\nD 17\nR 17\nD 10\nL 1\nU 15\nD 17\nL 12\nR 10\nL 14\nU 16\nL 17\nU 8\nR 8\nU 4\nR 11\nU 14\nR 2\nL 9\nU 11\nD 14\nU 14\nD 9\nL 10\nU 19\nD 10\nR 5\nD 1\nL 3\nU 14\nR 11\nL 17\nR 7\nD 8\nR 1\nU 2\nR 4\nL 2\nR 13\nU 16\nD 2\nL 2\nR 2\nU 16\nL 3\nD 7\nR 7\nU 2\nL 5\nU 7\nR 17\nU 6\nD 12\nU 17\nD 13\nL 19\nR 19\nL 9\nD 14\nR 15\nL 7\nU 11\nR 2\nD 16\nU 6\nL 12\n";

const main = () => {
  const moves = content.split("\n");

  let h = [[0, 0]];
  let t = [[0, 0]];
  for (let i = 0; i < moves.length; i++) {
    const [direction, amount] = moves[i].split(" ");

    if (!direction || !amount) continue;

    for (let j = 0; j < amount; j++) {
      let [hy, hx] = h[h.length - 1];
      let [ty, tx] = t[t.length - 1];

      if (direction === "U") {
        hy--;
      } else if (direction === "D") {
        hy++;
      } else if (direction === "L") {
        hx--;
      } else {
        hx++;
      }

      h.push([hy, hx]);

      let dif_y = ty - hy;
      let dif_x = tx - hx;
      if (dif_y >= 2 || dif_y <= -2) {
        if (dif_x >= 1 || dif_x <= -1) {
          if (dif_x < 0) {
            tx++;
          } else {
            tx--;
          }
        }
        if (dif_y < 0) {
          ty++;
        } else {
          ty--;
        }
      } else if (dif_x >= 2 || dif_x <= -2) {
        if (dif_y >= 1 || dif_y <= -1) {
          if (dif_y < 0) {
            ty++;
          } else {
            ty--;
          }
        }

        if (dif_x < 0) {
          tx++;
        } else {
          tx--;
        }
      }

      t.push([ty, tx]);
    }
  }

  let unique = [...new Set(t.map((cord) => cord.join(".")))];

  console.log(unique.length);
};

main();
