const IPFS_GATEWAYS = [
  "https://ipfs.io/ipfs/",
  "https://cloudflare-ipfs.com/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
  "http://localhost:8080/ipfs/"
];

let currentGateway = IPFS_GATEWAYS[0];

async function checkIPFS() {
  const statusEl = document.getElementById('ipfs-status');
  for (const gw of IPFS_GATEWAYS) {
    try {
      const res = await fetch(gw + 'Qm...tu-hash-de-prueba', {mode: 'no-cors'});
      currentGateway = gw;
      statusEl.textContent = `IPFS: ✅ ${gw}`;
      statusEl.style.color = 'lime';
      return true;
    } catch(e) {}
  }
  statusEl.textContent = `IPFS: ⚠️ Usando gateways públicos`;
  statusEl.style.color = 'orange';
}

// Acciones
async function inspeccionar(cid) {
  if (!cid) {
    cid = prompt("Ingresa CID (Qm... o bafy...):");
  }
  if (cid) {
    window.open(currentGateway + cid, '_blank');
  }
}

function navegar(seccion) {
  const content = document.getElementById('content');
  if (seccion === 'inspeccionar') {
    content.innerHTML = `
      <h2>🔍 Inspector IPFS</h2>
      <input type="text" id="cid-input" placeholder="Pega QmHash o bafyHash" style="width:80%; padding:12px;">
      <button onclick="inspeccionar(document.getElementById('cid-input').value)">Navegar →</button>
      <p><small>Acciones: inspeccionar • navegar • verificar</small></p>
    `;
  }
  // Agrega más secciones...
}
