import { main } from "./2024/day2-2.js";

import http from "http";

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

main();
