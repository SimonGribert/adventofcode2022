const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

const content =
  "noop\nnoop\naddx 5\naddx 31\naddx -30\naddx 2\naddx 7\nnoop\nnoop\naddx -4\naddx 5\naddx 6\nnoop\naddx -1\naddx 5\naddx -1\naddx 5\naddx 1\nnoop\naddx 5\nnoop\naddx -1\naddx -35\naddx 3\nnoop\naddx 2\naddx 3\naddx -2\naddx 2\nnoop\naddx 8\naddx -3\naddx 5\naddx -17\naddx 22\naddx -2\naddx 2\naddx 5\naddx -2\naddx -26\naddx 31\naddx 2\naddx 5\naddx -40\naddx 30\naddx -27\naddx 4\naddx 2\naddx 3\naddx -3\naddx 8\nnoop\nnoop\naddx 2\naddx 21\naddx -15\naddx -2\naddx 2\nnoop\naddx 15\naddx -16\naddx 8\nnoop\naddx 3\naddx 5\naddx -38\nnoop\nnoop\nnoop\naddx 5\naddx -5\naddx 6\naddx 2\naddx 7\nnoop\nnoop\naddx 4\naddx -3\nnoop\nnoop\naddx 7\naddx 2\naddx 2\naddx -1\nnoop\naddx 3\naddx 6\nnoop\naddx 1\nnoop\nnoop\naddx -38\nnoop\nnoop\naddx 7\naddx 3\nnoop\naddx 2\naddx -2\naddx 7\naddx -2\naddx 5\naddx 2\naddx 5\naddx -4\naddx 2\naddx 5\naddx 2\naddx -21\naddx 9\naddx 15\nnoop\naddx 3\naddx -38\naddx 7\nnoop\nnoop\naddx 18\naddx -17\naddx 4\nnoop\naddx 1\naddx 2\naddx 5\naddx 3\nnoop\nnoop\naddx 14\naddx -9\nnoop\nnoop\naddx 4\naddx 1\nnoop\naddx 4\naddx 3\nnoop\naddx -8\nnoop\n";

const main = () => {
  const program = content.split("\n");

  let x = 1;
  let addxActive = false;

  let cycles = [];
  let currRow = "";

  for (let i = 1; i <= 240; i++) {
    let [instruction, nr] = program[0].split(" ");
    let pos = (i - 1) % 40;

    if (pos === x || pos === x - 1 || pos === x + 1) {
      currRow += "#";
    } else {
      currRow += " ";
    }

    if (i % 40 === 0) {
      console.log(pos, i, x);
      cycles.push(currRow);
      currRow = "";
    }

    if (instruction === "noop") {
      program.shift();
    } else if (instruction === "addx") {
      if (addxActive) {
        addxActive = false;

        x += Number(nr);
        program.shift();
      } else {
        addxActive = true;
      }
    }
  }
  cycles.map((c) => {
    console.log(c);
  });
};

main();
