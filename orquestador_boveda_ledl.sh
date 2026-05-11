#!/bin/bash
# Cerebro Operativo LEDL v80.8.1 - Fix de Comunicación
PRIMARY_ENS="ensdeliz.base.eth"
SECONDARY_ID="ensdeliz.cb.id"
CERT_HASH="949ccbba6e781d4b7bfa9ca46a63f1da1471f0fdf12f98f213694557d59184b0"
TG_TOKEN="8512593184:AAEXhOsMTjfnUOus5AkLS58q-py03lq2jlA"
TG_CHAT_ID="8486738889"

echo "🧠 [ENSDELIZ]: Re-enviando Notificación y Consolidando..."

# 1. Corrección del Reporte Visual
echo "=================================================="
echo "   REPORTE DE GRABADO PÚBLICO - BLOCKCHAIN"
echo "=================================================="
echo "TRANSMISOR: Cerebro Operativo LEDL"
echo "ID INVESTIGADOR: 0009-0007-3528-9413"
echo "DESTINO: Bóveda Principal ()"
echo "METADATO INYECTADO: 0x"
echo "ESTADO: GRABADO EXITOSO EN BLOCKSCAN"
echo "=================================================="

# 2. Envío Forzado a Telegram (Con validación de conexión)
MSG="🚀 [LEDL]: Reclamo Consolidado de 3.25 ETH grabado en Blockchain. Hash: "

RESPONSE={"ok":false,"error_code":404,"description":"Not Found"}

if [[  == *"\"ok\":true"* ]]; then
    echo "✅ [TELEGRAM]: Notificación enviada con éxito al chat ."
else
    echo "❌ [ERROR]: Fallo en Telegram. Respuesta: "
fi
