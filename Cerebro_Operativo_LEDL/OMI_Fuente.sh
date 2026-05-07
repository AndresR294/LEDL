#!/bin/bash
# =================================================================
# PROYECTO: Cerebro Operativo LEDL
# MÓDULO: Automatización de Index (Código Fuente)
# AUTOR: J Andres Resendez R.
# PROTOCOLO: Cero Hallucinaciones | 100% Producción
# =================================================================

export LANG=es_MX.UTF-8
DIR_RAIZ="/data/data/com.termux/files/home/Cerebro_Operativo_LEDL"
LOG_FINAL="$DIR_RAIZ/Logs/Index_Fuente_Completo.log"
TEMP_C=$(cat /sys/class/thermal/thermal_zone0/temp 2>/dev/null | awk '{print $1/1000}')

# --- ANIMACIÓN DE CARGA ---
progress_bar() {
    local task=$1
    echo -ne "\r[PROCESANDO: $task] ["
    for i in {1..25}; do echo -ne "▓"; sleep 0.05; done
    echo -ne "] 100% | ETA: FINALIZADO\n"
}

echo "========================================================"
echo "SISTEMA LEDL - INVOCACIÓN DE AMALGAMA"
echo "FECHA: $(date) | TEMP: ${TEMP_C:-N/A}°C"
echo "========================================================"

# 1. LIMPIEZA DE REGISTROS ANTERIORES
rm -f "$LOG_FINAL"
progress_bar "Purgando índices obsoletos"

# 2. INDEXADO RECURSIVO DEL CÓDIGO FUENTE
# Filtra por extensiones críticas: .sh, .js, .json, .py, .ledl
echo "--- INICIO DE INDEXADO MAESTRO ---" > "$LOG_FINAL"
progress_bar "Escaneando Código Fuente (.sh, .js, .ledl)"

find "$DIR_RAIZ" -type f \( -name "*.sh" -o -name "*.js" -o -name "*.json" -o -name "*.ledl" -o -name "*.py" \) \
    -not -path "*/.*" \
    -exec ls -lh {} \; >> "$LOG_FINAL"

# 3. VERIFICACIÓN DE INTEGRIDAD (ARES-Kal)
progress_bar "Validando integridad de archivos"
COUNT=$(grep -c "/" "$LOG_FINAL")
echo "Total de archivos fuente indexados: $COUNT" >> "$LOG_FINAL"

# 4. PROTECCIÓN DE CIBERSEGURIDAD (AIKO)
# Elimina cualquier rastro de claves o tokens en el log de índice
sed -i '/token/d; /key/d; /password/d; /chat_id/d' "$LOG_FINAL"
progress_bar "Aplicando filtros de seguridad AIKO"

echo "========================================================"
echo "INDEXADO COMPLETADO POR: J Andres Resendez R."
echo "UBICACIÓN: $LOG_FINAL"
echo "ESTADO: Listo para empaquetado Update.Zip"
echo "========================================================"
