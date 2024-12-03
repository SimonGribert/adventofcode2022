const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

const content =
  "Monkey 0:\n  Starting items: 64\n  Operation: new = old * 7\n  Test: divisible by 13\n    If true: throw to monkey 1\n    If false: throw to monkey 3\n\nMonkey 1:\n  Starting items: 60, 84, 84, 65\n  Operation: new = old + 7\n  Test: divisible by 19\n    If true: throw to monkey 2\n    If false: throw to monkey 7\n\nMonkey 2:\n  Starting items: 52, 67, 74, 88, 51, 61\n  Operation: new = old * 3\n  Test: divisible by 5\n    If true: throw to monkey 5\n    If false: throw to monkey 7\n\nMonkey 3:\n  Starting items: 67, 72\n  Operation: new = old + 3\n  Test: divisible by 2\n    If true: throw to monkey 1\n    If false: throw to monkey 2\n\nMonkey 4:\n  Starting items: 80, 79, 58, 77, 68, 74, 98, 64\n  Operation: new = old * old\n  Test: divisible by 17\n    If true: throw to monkey 6\n    If false: throw to monkey 0\n\nMonkey 5:\n  Starting items: 62, 53, 61, 89, 86\n  Operation: new = old + 8\n  Test: divisible by 11\n    If true: throw to monkey 4\n    If false: throw to monkey 6\n\nMonkey 6:\n  Starting items: 86, 89, 82\n  Operation: new = old + 2\n  Test: divisible by 7\n    If true: throw to monkey 3\n    If false: throw to monkey 0\n\nMonkey 7:\n  Starting items: 92, 81, 70, 96, 69, 84, 83\n  Operation: new = old + 4\n  Test: divisible by 3\n    If true: throw to monkey 4\n    If false: throw to monkey 5\n";

const formatContent = () => {
  const monkeys = content.split("\n\n");

  const cleaned = monkeys?.map((m) => {
    let rows = m?.split("\n");

    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i]?.trim();
    }

    let items = rows[1]?.replaceAll(",", "").split(" ");
    items.shift();
    items.shift();

    let operation = rows[2]?.replace("Operation: ", "").split(" ");
    let op = { type: operation[3], a: "old", b: operation[4] };

    let test = Number(rows[3]?.replace("Test: divisible by ", ""));

    let t = rows[4].replace("If true: throw to monkey ", "");
    let ts = `Monkey ${t}:`;

    let f = rows[5].replace("If false: throw to monkey ", "");
    let fs = `Monkey ${f}:`;

    return {
      name: rows[0],
      items,
      operation: op,
      test,
      t: ts,
      f: fs,
      inspections: 0,
    };
  });

  return cleaned;
};

const main = () => {
  let monkeys = formatContent();

  let m = 1; // answer from subbreddit, I dont know how you even come up with this
  for (let i = 0; i < monkeys.length; i++) {
    m *= monkeys[i].test;
  }

  // Rounds
  for (let i = 0; i < 10000; i++) {
    // Monkeys
    for (let j = 0; j < monkeys.length; j++) {
      let monkey = JSON.parse(JSON.stringify(monkeys[j]));
      // Second problem was not realizing when im
      // shifitng this array its only taking every 2nd item
      // Making sure this is a clone of the array fixed the issue

      // Items
      monkey.items.forEach((_item) => {
        let item = Number(_item);

        if (monkey.operation.type === "+") {
          item =
            item +
            (monkey.operation.b === "old" ? item : Number(monkey.operation.b));
        } else if (monkey.operation.type === "*") {
          item =
            item *
            (monkey.operation.b === "old" ? item : Number(monkey.operation.b));
        }

        //item = Math.floor(item / 3); // First problem was not reading "round down"
        item = item % m;
        if (item % monkey.test === 0) {
          let index = monkeys.findIndex((m) => m.name === monkey.t);

          monkeys[index].items.push(item);
          monkeys[j].items.shift();
        } else {
          let index = monkeys.findIndex((m) => m.name === monkey.f);

          monkeys[index].items.push(item);
          monkeys[j].items.shift();
        }

        monkeys[j].inspections++;
      });
    }
  }

  console.log(monkeys);
};

main();
