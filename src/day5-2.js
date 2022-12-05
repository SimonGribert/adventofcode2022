const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

const moves =
  "\n\nmove 2 from 4 to 6\nmove 1 from 9 to 5\nmove 3 from 2 to 4\nmove 8 from 4 to 7\nmove 2 from 9 to 7\nmove 3 from 8 to 3\nmove 2 from 1 to 2\nmove 5 from 7 to 9\nmove 1 from 9 to 4\nmove 1 from 8 to 3\nmove 1 from 3 to 4\nmove 2 from 4 to 9\nmove 7 from 3 to 5\nmove 6 from 1 to 8\nmove 11 from 7 to 9\nmove 12 from 5 to 3\nmove 6 from 6 to 9\nmove 3 from 3 to 8\nmove 4 from 2 to 7\nmove 3 from 5 to 7\nmove 1 from 5 to 7\nmove 2 from 2 to 5\nmove 1 from 5 to 2\nmove 5 from 8 to 9\nmove 7 from 7 to 2\nmove 3 from 8 to 7\nmove 1 from 8 to 9\nmove 4 from 3 to 6\nmove 1 from 5 to 1\nmove 9 from 9 to 6\nmove 7 from 9 to 6\nmove 20 from 6 to 5\nmove 12 from 9 to 8\nmove 5 from 5 to 1\nmove 3 from 7 to 4\nmove 6 from 2 to 7\nmove 2 from 3 to 1\nmove 4 from 3 to 8\nmove 1 from 4 to 1\nmove 7 from 7 to 5\nmove 4 from 8 to 2\nmove 3 from 6 to 2\nmove 3 from 2 to 9\nmove 4 from 1 to 7\nmove 2 from 1 to 2\nmove 3 from 9 to 5\nmove 11 from 8 to 5\nmove 1 from 6 to 9\nmove 1 from 8 to 5\nmove 1 from 1 to 2\nmove 24 from 5 to 4\nmove 2 from 1 to 6\nmove 11 from 5 to 4\nmove 2 from 7 to 9\nmove 1 from 6 to 2\nmove 4 from 2 to 1\nmove 28 from 4 to 2\nmove 1 from 7 to 8\nmove 9 from 2 to 5\nmove 2 from 9 to 6\nmove 4 from 4 to 2\nmove 1 from 7 to 4\nmove 3 from 4 to 7\nmove 1 from 6 to 9\nmove 21 from 2 to 3\nmove 3 from 1 to 6\nmove 5 from 6 to 2\nmove 7 from 2 to 3\nmove 1 from 9 to 3\nmove 1 from 8 to 4\nmove 1 from 7 to 8\nmove 3 from 5 to 8\nmove 1 from 1 to 7\nmove 2 from 7 to 9\nmove 2 from 8 to 4\nmove 1 from 9 to 2\nmove 1 from 8 to 6\nmove 11 from 3 to 4\nmove 1 from 7 to 8\nmove 6 from 5 to 9\nmove 2 from 8 to 7\nmove 1 from 6 to 5\nmove 7 from 3 to 8\nmove 9 from 3 to 6\nmove 1 from 8 to 3\nmove 1 from 7 to 4\nmove 2 from 3 to 5\nmove 4 from 5 to 7\nmove 4 from 6 to 8\nmove 2 from 7 to 9\nmove 11 from 4 to 2\nmove 1 from 4 to 2\nmove 6 from 8 to 9\nmove 1 from 7 to 1\nmove 1 from 3 to 7\nmove 3 from 7 to 8\nmove 6 from 8 to 9\nmove 6 from 4 to 8\nmove 18 from 9 to 3\nmove 1 from 5 to 8\nmove 5 from 6 to 5\nmove 6 from 8 to 1\nmove 3 from 5 to 4\nmove 1 from 9 to 8\nmove 3 from 4 to 8\nmove 15 from 3 to 6\nmove 2 from 5 to 9\nmove 3 from 3 to 1\nmove 9 from 6 to 4\nmove 2 from 1 to 5\nmove 2 from 5 to 8\nmove 6 from 4 to 2\nmove 6 from 1 to 6\nmove 3 from 4 to 6\nmove 6 from 9 to 1\nmove 4 from 2 to 1\nmove 7 from 8 to 1\nmove 1 from 6 to 7\nmove 17 from 1 to 5\nmove 1 from 7 to 1\nmove 5 from 2 to 1\nmove 1 from 8 to 6\nmove 11 from 6 to 4\nmove 2 from 2 to 3\nmove 3 from 1 to 8\nmove 7 from 2 to 5\nmove 4 from 6 to 7\nmove 4 from 1 to 5\nmove 15 from 5 to 9\nmove 2 from 3 to 7\nmove 2 from 8 to 2\nmove 1 from 1 to 9\nmove 6 from 2 to 6\nmove 7 from 5 to 6\nmove 5 from 7 to 3\nmove 1 from 6 to 1\nmove 2 from 3 to 4\nmove 1 from 3 to 4\nmove 5 from 6 to 4\nmove 14 from 9 to 2\nmove 1 from 8 to 9\nmove 1 from 7 to 8\nmove 1 from 9 to 6\nmove 2 from 9 to 5\nmove 1 from 1 to 2\nmove 7 from 6 to 9\nmove 1 from 3 to 4\nmove 8 from 5 to 2\nmove 1 from 6 to 7\nmove 1 from 7 to 4\nmove 1 from 8 to 4\nmove 1 from 3 to 9\nmove 7 from 9 to 5\nmove 1 from 9 to 1\nmove 6 from 5 to 1\nmove 8 from 2 to 4\nmove 1 from 5 to 6\nmove 1 from 6 to 7\nmove 1 from 7 to 9\nmove 7 from 2 to 9\nmove 1 from 9 to 4\nmove 3 from 9 to 1\nmove 1 from 9 to 6\nmove 11 from 2 to 8\nmove 9 from 1 to 8\nmove 1 from 6 to 4\nmove 1 from 1 to 9\nmove 12 from 4 to 2\nmove 4 from 9 to 3\nmove 3 from 4 to 6\nmove 9 from 8 to 6\nmove 12 from 4 to 9\nmove 8 from 6 to 3\nmove 8 from 2 to 7\nmove 11 from 3 to 4\nmove 2 from 2 to 7\nmove 2 from 6 to 1\nmove 1 from 2 to 3\nmove 2 from 6 to 2\nmove 3 from 2 to 6\nmove 2 from 1 to 6\nmove 1 from 6 to 1\nmove 1 from 6 to 4\nmove 2 from 6 to 3\nmove 1 from 6 to 5\nmove 4 from 3 to 8\nmove 12 from 4 to 5\nmove 5 from 9 to 7\nmove 3 from 8 to 7\nmove 1 from 9 to 1\nmove 3 from 8 to 2\nmove 13 from 5 to 6\nmove 1 from 2 to 9\nmove 13 from 6 to 7\nmove 7 from 9 to 6\nmove 2 from 4 to 6\nmove 1 from 8 to 6\nmove 1 from 1 to 6\nmove 1 from 2 to 9\nmove 1 from 2 to 3\nmove 12 from 7 to 9\nmove 7 from 8 to 4\nmove 1 from 1 to 3\nmove 2 from 7 to 9\nmove 15 from 7 to 4\nmove 8 from 6 to 3\nmove 1 from 8 to 9\nmove 1 from 7 to 2\nmove 10 from 3 to 5\nmove 6 from 5 to 9\nmove 1 from 2 to 8\nmove 1 from 5 to 8\nmove 2 from 8 to 9\nmove 10 from 4 to 9\nmove 20 from 9 to 6\nmove 1 from 7 to 6\nmove 4 from 9 to 3\nmove 1 from 5 to 9\nmove 4 from 4 to 9\nmove 8 from 9 to 7\nmove 2 from 5 to 1\nmove 7 from 4 to 3\nmove 8 from 3 to 2\nmove 6 from 9 to 8\nmove 1 from 3 to 7\nmove 1 from 3 to 1\nmove 7 from 7 to 8\nmove 13 from 8 to 3\nmove 2 from 2 to 8\nmove 1 from 8 to 2\nmove 1 from 4 to 1\nmove 1 from 1 to 8\nmove 2 from 8 to 2\nmove 24 from 6 to 2\nmove 2 from 7 to 8\nmove 5 from 3 to 4\nmove 25 from 2 to 6\nmove 5 from 4 to 9\nmove 2 from 8 to 7\nmove 2 from 7 to 3\nmove 4 from 6 to 2\nmove 2 from 6 to 4\nmove 9 from 2 to 3\nmove 11 from 3 to 7\nmove 10 from 7 to 8\nmove 1 from 7 to 9\nmove 3 from 2 to 4\nmove 8 from 8 to 2\nmove 1 from 2 to 6\nmove 2 from 4 to 1\nmove 1 from 8 to 2\nmove 1 from 6 to 9\nmove 1 from 8 to 3\nmove 6 from 9 to 7\nmove 2 from 9 to 1\nmove 9 from 6 to 8\nmove 7 from 2 to 3\nmove 7 from 8 to 2\nmove 10 from 6 to 8\nmove 7 from 1 to 2\nmove 9 from 3 to 2\nmove 5 from 3 to 8\nmove 4 from 7 to 2\nmove 2 from 3 to 2\nmove 12 from 2 to 3\nmove 6 from 4 to 2\nmove 1 from 7 to 6\nmove 5 from 3 to 5\nmove 16 from 8 to 4\nmove 12 from 2 to 7\nmove 5 from 5 to 7\nmove 1 from 8 to 3\nmove 1 from 6 to 4\nmove 17 from 7 to 4\nmove 1 from 7 to 1\nmove 1 from 1 to 9\nmove 1 from 9 to 5\nmove 11 from 4 to 9\nmove 10 from 2 to 3\nmove 1 from 5 to 4\nmove 1 from 9 to 2\nmove 2 from 2 to 1\nmove 1 from 2 to 3\nmove 23 from 4 to 5\nmove 7 from 9 to 7\nmove 3 from 9 to 1\nmove 20 from 5 to 6\nmove 3 from 5 to 8\nmove 1 from 4 to 1\nmove 2 from 8 to 3\nmove 4 from 6 to 4\nmove 7 from 7 to 2\nmove 1 from 8 to 4\nmove 19 from 3 to 9\nmove 5 from 1 to 7\nmove 7 from 2 to 6\nmove 3 from 7 to 5\nmove 2 from 3 to 4\nmove 1 from 5 to 4\nmove 1 from 1 to 4\nmove 1 from 7 to 6\nmove 13 from 6 to 7\nmove 6 from 9 to 3\nmove 1 from 3 to 5\nmove 2 from 3 to 4\nmove 2 from 6 to 2\nmove 3 from 4 to 3\nmove 8 from 9 to 1\nmove 2 from 2 to 1\nmove 8 from 6 to 7\nmove 2 from 9 to 4\nmove 20 from 7 to 1\nmove 2 from 7 to 5\nmove 2 from 5 to 1\nmove 8 from 1 to 8\nmove 8 from 8 to 6\nmove 1 from 6 to 9\nmove 8 from 6 to 1\nmove 1 from 5 to 3\nmove 7 from 3 to 2\nmove 1 from 5 to 2\nmove 2 from 9 to 7\nmove 1 from 5 to 8\nmove 18 from 1 to 4\nmove 1 from 8 to 9\nmove 3 from 2 to 3\nmove 2 from 7 to 4\nmove 5 from 2 to 4\nmove 3 from 3 to 8\nmove 8 from 1 to 7\nmove 2 from 9 to 2\nmove 32 from 4 to 5\nmove 1 from 9 to 7\nmove 1 from 2 to 1\nmove 6 from 1 to 6\nmove 1 from 2 to 4\nmove 3 from 8 to 1\nmove 3 from 6 to 5\nmove 1 from 3 to 6\nmove 2 from 1 to 9\nmove 4 from 4 to 7\nmove 31 from 5 to 4\nmove 4 from 5 to 6\nmove 1 from 6 to 1\nmove 7 from 6 to 5\nmove 1 from 9 to 4\nmove 19 from 4 to 2\nmove 1 from 5 to 9\nmove 5 from 5 to 6\nmove 3 from 4 to 2\nmove 2 from 7 to 1\nmove 4 from 7 to 8\nmove 3 from 8 to 6\nmove 2 from 6 to 7\nmove 6 from 7 to 8\nmove 3 from 1 to 5\nmove 4 from 5 to 9\nmove 15 from 2 to 1\nmove 4 from 6 to 4\nmove 2 from 6 to 3\nmove 1 from 3 to 7\nmove 4 from 1 to 2\nmove 1 from 3 to 4\nmove 2 from 7 to 4\nmove 5 from 9 to 3\nmove 2 from 7 to 3\nmove 16 from 4 to 8\nmove 8 from 8 to 5\nmove 2 from 1 to 5\nmove 1 from 9 to 6\nmove 1 from 6 to 5\nmove 7 from 5 to 9\nmove 3 from 1 to 8\nmove 1 from 8 to 4\nmove 8 from 2 to 7\nmove 3 from 1 to 3\nmove 1 from 3 to 9\nmove 2 from 4 to 2\nmove 7 from 8 to 5\nmove 7 from 9 to 1\nmove 6 from 3 to 5\nmove 6 from 7 to 4\nmove 3 from 4 to 1\nmove 3 from 2 to 5\nmove 1 from 7 to 8\nmove 1 from 7 to 5\nmove 1 from 9 to 8\nmove 2 from 2 to 4\nmove 15 from 1 to 6\nmove 8 from 5 to 9\nmove 3 from 3 to 4\nmove 4 from 4 to 3\nmove 1 from 9 to 7\nmove 6 from 9 to 4\nmove 1 from 9 to 2\nmove 6 from 4 to 9\nmove 2 from 4 to 6\nmove 5 from 6 to 9\nmove 1 from 3 to 1\nmove 8 from 6 to 8\nmove 12 from 5 to 3\nmove 1 from 5 to 3\nmove 1 from 3 to 8\nmove 4 from 6 to 1\nmove 11 from 3 to 8\nmove 1 from 2 to 1\nmove 23 from 8 to 2\nmove 3 from 1 to 2\nmove 1 from 1 to 9\nmove 2 from 2 to 3\nmove 6 from 3 to 6\nmove 1 from 7 to 6\nmove 1 from 4 to 7\nmove 1 from 4 to 3\nmove 1 from 7 to 3\nmove 4 from 8 to 4\nmove 2 from 1 to 8\nmove 3 from 8 to 1\nmove 4 from 6 to 2\nmove 7 from 9 to 1\nmove 1 from 9 to 6\nmove 2 from 2 to 3\nmove 3 from 9 to 4\nmove 1 from 9 to 3\nmove 10 from 2 to 8\nmove 16 from 2 to 5\nmove 2 from 3 to 6\nmove 6 from 1 to 8\nmove 1 from 1 to 5\nmove 8 from 8 to 5\nmove 11 from 5 to 9\nmove 2 from 1 to 8\nmove 1 from 1 to 8\nmove 4 from 4 to 6\nmove 3 from 3 to 9\nmove 14 from 9 to 3\nmove 15 from 8 to 5\nmove 9 from 5 to 4\nmove 7 from 6 to 1\nmove 1 from 6 to 3\nmove 4 from 4 to 7\nmove 2 from 6 to 2\nmove 4 from 7 to 4\nmove 4 from 1 to 4\nmove 10 from 4 to 3\nmove 14 from 3 to 6\nmove 5 from 4 to 1\nmove 6 from 5 to 7\nmove 1 from 2 to 6\nmove 3 from 7 to 2\nmove 2 from 2 to 3\nmove 3 from 7 to 8\nmove 2 from 8 to 2\nmove 2 from 2 to 7\nmove 6 from 6 to 2\nmove 1 from 8 to 7\nmove 8 from 2 to 7\nmove 1 from 4 to 1\nmove 5 from 5 to 3\nmove 3 from 3 to 2\nmove 5 from 1 to 3\nmove 7 from 5 to 8\nmove 6 from 6 to 3\nmove 1 from 5 to 9\nmove 10 from 7 to 9\nmove 26 from 3 to 4\nmove 1 from 5 to 1\nmove 6 from 8 to 2\nmove 9 from 2 to 9\nmove 1 from 7 to 5\nmove 1 from 8 to 5\nmove 2 from 6 to 2\nmove 20 from 9 to 6\nmove 1 from 1 to 6\nmove 1 from 4 to 2\nmove 1 from 5 to 8\nmove 1 from 5 to 7\nmove 3 from 1 to 3\nmove 1 from 3 to 6\nmove 12 from 4 to 8\nmove 11 from 4 to 5\nmove 1 from 7 to 5\nmove 1 from 2 to 8\nmove 1 from 1 to 8\nmove 2 from 2 to 5\nmove 8 from 6 to 2\nmove 5 from 6 to 4\nmove 2 from 5 to 3\nmove 12 from 8 to 4\nmove 5 from 2 to 6\nmove 3 from 8 to 1\nmove 11 from 6 to 8\nmove 10 from 4 to 6\nmove 5 from 4 to 6\nmove 12 from 6 to 5\nmove 22 from 5 to 6\nmove 3 from 6 to 5\nmove 3 from 8 to 5\nmove 1 from 3 to 8\nmove 4 from 8 to 1\nmove 6 from 1 to 7\nmove 5 from 6 to 9\n";

const crates = [
  ["N", "B", "D", "T", "V", "G", "Z", "J"],
  ["S", "R", "M", "D", "W", "p", "F"],
  ["V", "C", "R", "S", "Z"],
  ["R", "T", "J", "Z", "P", "H", "G"],
  ["T", "C", "J", "N", "D", "Z", "Q", "F"],
  ["N", "V", "P", "W", "G", "S", "F", "M"],
  ["G", "C", "V", "B", "P", "Q"],
  ["Z", "B", "P", "N"],
  ["W", "P", "J"],
];

const simplifyMoves = (move) => {
  if (!move) return;

  const moveArr = move.split(" ");

  return {
    moves: Number(moveArr[1]),
    from: Number(moveArr[3]) - 1,
    to: Number(moveArr[5]) - 1,
  };
};

const main = () => {
  const movesArray = moves.split("\n");

  for (let i = 0; i < movesArray.length; i++) {
    const m = movesArray[i];

    if (!m) continue;

    const sm = simplifyMoves(m);

    const crate = crates[sm.from].splice(
      crates[sm.from].length - sm.moves,
      sm.moves
    );
    crates[sm.to].push(...crate);
  }

  console.log(crates);
};

main();
