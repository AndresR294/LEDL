const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "../queue");

function push(event) {
  const file = path.join(DIR, Date.now() + ".json");
  fs.writeFileSync(file, JSON.stringify(event, null, 2));
}

function readAll() {
  return fs.readdirSync(DIR).map(f =>
    JSON.parse(fs.readFileSync(path.join(DIR, f)))
  );
}

module.exports = { push, readAll };
