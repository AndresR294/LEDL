import fs from "fs";
import http from "http";
import { exec } from "child_process";

const hash = fs.readFileSync("logs/hash.txt", "utf-8").trim();

const html = `
<!DOCTYPE html>
<html>
<head><title>ENSDELIZ SIGN</title></head>
<body>
<h2>Firmar evidencia ENSDELIZ</h2>
<button onclick="firmar()">Firmar</button>

<script src="https://cdn.jsdelivr.net/npm/ethers@6.7.0/dist/ethers.umd.min.js"></script>

<script>
async function firmar() {
  if (!window.ethereum) {
    alert("Instala MetaMask o Coinbase Wallet");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  const signature = await signer.signMessage("${hash}");

  document.body.innerHTML += "<p>Firma: " + signature + "</p>";
}
</script>
</body>
</html>
`;

// Servidor local
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(8080, () => {
  console.log("[ENSDELIZ] Servidor en http://localhost:8080");

  // Abrir navegador
  exec("termux-open-url http://localhost:8080");
});
