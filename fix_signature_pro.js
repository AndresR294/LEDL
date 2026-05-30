const raw = process.argv[2];

if (!raw || !raw.startsWith("0x")) {
  console.log("❌ Firma inválida");
  process.exit(1);
}

// eliminar padding
const hex = raw.slice(2);

// buscar posible firma (130 hex chars)
const matches = hex.match(/[0-9a-fA-F]{130}/g);

if (!matches) {
  console.log("❌ No se encontró firma");
  process.exit(1);
}

// tomar la más probable (última)
const signature = "0x" + matches[matches.length - 1];

console.log("✅ Firma extraída:");
console.log(signature);
