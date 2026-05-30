const { ethers } = require("ethers");

const message = "ENSDELIZ_EVIDENCIA";
const signature = process.argv[2];

try {
  const addr = ethers.verifyMessage(message, signature);
  console.log("✅ Firma válida");
  console.log("👤 Address:", addr);
} catch (e) {
  console.log("❌ Firma inválida");
}
