import { main } from "./2024/day5-2.js";

import http from "http";

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

main();
