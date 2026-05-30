const crypto = require("crypto");

function sign(payload) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(payload))
    .digest("hex");
}

module.exports = { sign };
