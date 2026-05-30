// Conversión de valor de transacción para auditoría LEDL®
const valorDecimal = 14.87;

const hexValue = valorDecimal.toString(16).toUpperCase();
const octValue = Math.floor(valorDecimal).toString(8);

console.log(`Valor Hexadecimal: 0x${hexValue}`);
console.log(`Valor Octal: ${octValue}`);

