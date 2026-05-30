const http = require("http");
const https = require("https");

const TELEGRAM_TOKEN = "8512593184:AAEXhOsMTjfnUOus5AkLS58q-py03lq2jlA";
const CHAT_ID = "8486738889";

function enviarTokenTelegram(codigo) {
    const mensaje = encodeURIComponent("🧬 [AMALGAMA® ALERT]: Intento de acceso remoto detectado.\n🔑 Llave Física: COMPROBADA\n🔐 Código OTP de Acceso: " + codigo + "\n\nAutor de la Licencia: J Andres Resendez R");
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${mensaje}`;
    
    https.get(url, (res) => {
        console.log("🔒 [AIKO®]: Alerta y token de inicio de sesión despachado a Telegram.");
    });
}

// Generador de código temporal de 6 dígitos aleatorios
const codigoOTP = Math.floor(100000 + Math.random() * 900000);
enviarTokenTelegram(codigoOTP);
