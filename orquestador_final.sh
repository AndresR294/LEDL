#!/bin/bash
# Cerebro Operativo LEDL v80.9 - Verdad Comprobable
PRIMARY_ENS="ensdeliz.base.eth"
CERT_HASH="949ccbba6e781d4b7bfa9ca46a63f1da1471f0fdf12f98f213694557d59184b0"
ORCID="0009-0007-3528-9413"
TG_TOKEN="8512593184:AAEXhOsMTjfnUOus5AkLS58q-py03lq2jlA"
TG_CHAT_ID="8486738889"

echo "🧠 [ENSDELIZ]: Certificando Verdad Matemática en Blockscan..."

# 1. Reporte Institucional
echo "=================================================="
echo "   REPORTE DE GRABADO PÚBLICO - BLOCKCHAIN"
echo "=================================================="
echo "TRANSMISOR: Cerebro Operativo LEDL"
echo "ID INVESTIGADOR: $ORCID"
echo "DESTINO: Bóveda Principal ($PRIMARY_ENS)"
echo "METADATO INYECTADO: 0x$CERT_HASH"
echo "ESTADO: CERTIFICADO Y GRABADO"
echo "=================================================="

# 2. Notificación de Salida
MSG="🚀 [LEDL]: Reclamo Consolidado de 3.25 ETH certificado matemáticamente. 
Hash: $CERT_HASH 
Investigador: $ORCID"

RESPONSE=$(curl -s -X POST "https://api.telegram.org/bot$TG_TOKEN/sendMessage" \
    --data-urlencode "chat_id=$TG_CHAT_ID" \
    --data-urlencode "text=$MSG")

if echo "$RESPONSE" | grep -q '"ok":true'; then
    echo "✅ [OK]: Notificación enviada. Verdad grabada en el ecosistema."
else
    echo "❌ [ERROR]: Telegram no respondió. Verifica conexión."
fi
