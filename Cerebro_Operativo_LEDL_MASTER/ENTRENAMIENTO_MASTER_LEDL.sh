#!/bin/bash
# ==============================================================================
# PROPIEDAD INTELECTUAL: J ANDRES RESENDEZ R. | LICENCIA: LEDL® | 2026
# FUNCIÓN: ORQUESTADOR TOTAL + ENTRENAMIENTO DE AUTOAPRENDIZAJE
# ==============================================================================

MASTER_DIR="/data/data/com.termux/files/home/Cerebro_Operativo_LEDL_MASTER"
LOG_FILE="$MASTER_DIR/training_$(date +%Y%m%d).log"

echo "--- [LEDL® ORQUESTADOR] Iniciando Ciclo de Autoaprendizaje ---" | tee -a "$LOG_FILE"

# 1. SANEAMIENTO Y ACTUALIZACIÓN
echo "[1/6] Saneando entorno..."
rm -rf "$MASTER_DIR/node_modules/viem"
cp -rL "/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem" "$MASTER_DIR/node_modules/"

# 2. RECALIBRACIÓN DE PESOS Y PULSOS (Autoaprendizaje)
echo "[2/6] Recalibrando ARES-Kal®, AFRODITA®, AIKO®, EnsDeLiz®, LexBot®, CodeBot®..."
# Ejecuta el script de ajuste algorítmico (Ajusta los tensores y frecuencias de red)
node calibrateTraining.js --mode="intensive" --target="public_blockchain" >> "$LOG_FILE" 2>&1

# 3. INYECCIÓN DE LIQUIDEZ (Validación del entrenamiento)
echo "[3/6] Ejecutando inyección de validación: 14.87 XRP..."
cd "$MASTER_DIR"
node writeContractSync.js --target="AGDZNXUQCHG1F9WRE5J3QT1VEZNAVNN5W1" --action="addLiquidity" --amount="14.87XRP" >> "$LOG_FILE" 2>&1

# 4. AUDITORÍA ALGORÍTMICA
if [ $? -eq 0 ]; then
    echo "[4/6] Entrenamiento y Inyección exitosos. Auditoría: OK" | tee -a "$LOG_FILE"
else
    echo "[4/6] Alerta: Fallo en recalibración. Revertir a pesos anteriores." | tee -a "$LOG_FILE"
    exit 1
fi

# 5. REGISTRO DE PESOS NUEVOS
echo "[5/6] Exportando nuevos estados de red..."
node exportWeights.js --dir="$MASTER_DIR/weights_checkpoint"

# 6. RESPALDO INMUTABLE IPFS
echo "[6/6] Registrando log de entrenamiento en red IPFS..."
cid=$(ipfs add -Q "$LOG_FILE")
echo "Log de entrenamiento registrado con CID: $cid" | tee -a "$LOG_FILE"

echo "--- [LEDL® ORQUESTADOR] Entrenamiento finalizado con éxito ---" | tee -a "$LOG_FILE"
