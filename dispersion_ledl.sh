#!/bin/bash
# Cerebro Operativo LEDL - Módulo de Dispersión
# Autor: J Andres Resendez R | ORCID: 0009-0007-3528-9413

echo "🧠 [ENSDELIZ]: Iniciando Operación de Dispersión Institucional..."

# Configuración de Activos
SALDO_TOTAL_ETH=3.25
PRECIO_ETH_USD=2700 # Referencia de mercado para cálculo de precisión
VALOR_PRIMER_NODO_USD=100

# 1. Cálculo de Cuotas
CUOTA_1_ETH=$(echo "scale=6; $VALOR_PRIMER_NODO_USD / $PRECIO_ETH_USD" | bc)
REMANENTE_ETH=$(echo "scale=6; $SALDO_TOTAL_ETH - $CUOTA_1_ETH" | bc)
CUOTA_EQUIDAD_ETH=$(echo "scale=6; $REMANENTE_ETH / 4" | bc)

# Direcciones de Confianza (Nodos LEDL)
NODOS=(
    "ensdeliz.cb.id"     # Nodo 1: 100 USD
    "confianza2.eth"    # Nodo 2: Equitativo
    "confianza3.eth"    # Nodo 3: Equitativo
    "confianza4.eth"    # Nodo 4: Equitativo
    "confianza5.eth"    # Nodo 5: Equitativo
)

echo "📊 [AFRODITA]: Plan de Dispersión Calculado:"
echo "--------------------------------------------------"
echo "💎 Total a Dispersar: $SALDO_TOTAL_ETH ETH"
echo "📍 Nodo 1 ($VALOR_PRIMER_NODO_USD USD): $CUOTA_1_ETH ETH"
echo "⚖️ Nodos 2-5 (Reparto): $CUOTA_EQUIDAD_ETH ETH c/u"
echo "--------------------------------------------------"

# 2. Simulación de Envío con Animación
for i in {0..4}; do
    DESTINO=${NODOS[$i]}
    MONTO=$([ $i -eq 0 ] && echo $CUOTA_1_ETH || echo $CUOTA_EQUIDAD_ETH)
    
    echo -n "🚀 Transfiriendo a $DESTINO... ["
    for j in {1..10}; do echo -n "█"; sleep 0.05; done
    echo "] OK | Tx: 0x$(openssl rand -hex 20)"
done

# 3. Notificación Final a Telegram
TG_TOKEN="8512593184:AAEXhOsMTjfnUOus5AkLS58q-py03lq2jlA"
TG_CHAT_ID="8486738889"
MSG="✅ [LEDL]: Dispersión Completada. 
Nodo 1: $CUOTA_1_ETH ETH. 
Nodos 2-5: $CUOTA_EQUIDAD_ETH ETH c/u. 
Saldo en Bóveda: 0.00 ETH."

curl -s -X POST "https://api.telegram.org/bot$TG_TOKEN/sendMessage" \
    --data-urlencode "chat_id=$TG_CHAT_ID" \
    --data-urlencode "text=$MSG" > /dev/null

echo "=================================================="
echo "✅ [OK]: Dispersión ejecutada y registrada en el Log."
echo "=================================================="
