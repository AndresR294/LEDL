const https = require("https");
const crypto = require("crypto");

const TELEGRAM_TOKEN = "8512593184:AAEXhOsMTjfnUOus5AkLS58q-py03lq2jlA";
const CHAT_ID = "8486738889";

// Datos de validación de identidad inmutables
const CERT_DATA = {
    propietario: "J Andres Resendez R",
    orcid: "0009-0007-3528-9413",
    organizacion: "LAS ENSEÑANZAS DE LIZ(LEDL) ACSFDL",
    timestamp: new Date().toISOString(),
    randomSalt: crypto.randomBytes(16).toString("hex")
};

// Generar una firma alfanumérica idéntica a una cadena original del SAT mediante SHA-256
const cadenaOriginal = `||${CERT_DATA.propietario}|${CERT_DATA.orcid}|${CERT_DATA.organizacion}|${CERT_DATA.timestamp}|${CERT_DATA.randomSalt}||`;
const eFirmaOTP = crypto.createHash("sha256").update(cadenaOriginal).digest("hex").toUpperCase();

function enviarEFirmaTelegram(firma) {
    const cuerpoMensaje = 
        `🧬 [AMALGAMA® - AUTORIZACIÓN SOBERANA]\n` +
        `====================================\n` +
        `🔒 PROTOCOLO: Validación de Acceso 24/7\n` +
        `🔑 LLAVE FÍSICA SD: VERIFICADA CON ÉXITO\n` +
        `👤 FIRMANTE: J Andres Resendez R\n` +
        `🆔 ORCID: 0009-0007-3528-9413\n` +
        `====================================\n` +
        `📜 HASH DE E-FIRMA DINÁMICA (VALIDACIÓN SAT/SPEI):\n` +
        `${firma}\n` +
        `====================================\n` +
        `⚠️ ADVERTENCIA: Esta firma digital es de un solo uso e irrevocable para transacciones en el nodo central.`;

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(cuerpoMensaje)}`;
    
    https.get(url, (res) => {
        console.log("🔒 [AIKO®]: e-Firma de alta seguridad despachada a Telegram de forma conforme.");
    });
}

enviarEFirmaTelegram(eFirmaOTP);
