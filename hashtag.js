const { readFileSync, promises: fsPromises, writeFile } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  return contents;
}

async function main() {
  const messages = syncReadFile("./input.txt"); //input text

  var test = messages.match(/#[\p{L}\p{N}]+/ugi).sort();

  writeFile(
    'output.json',
    test.toString().split(',').join('\n'),
    function (err) {
        if (err) {
            console.error('something wrong');
        }
    }
  );
}

main().catch((err) => {
  console.log("Error occurred: ", err);
  process.exit(1);
});
