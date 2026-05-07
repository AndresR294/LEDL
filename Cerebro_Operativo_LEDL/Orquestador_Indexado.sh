#!/bin/bash
# =================================================================
# PROYECTO: Cerebro Operativo LEDL
# MÓDULO: Orquestador de Indexado (EnsDeLiz Preventiva)
# AUTOR: J Andres Resendez R.
# =================================================================

export LANG=es_MX.UTF-8
TEMP_C=$(cat /sys/class/thermal/thermal_zone0/temp 2>/dev/null | awk '{print $1/1000}')

show_progress() {
    local duration=$1
    local task=$2
    echo -ne "\r[TASK: $task] ["
    for i in {1..20}; do
        echo -ne "▓"
        sleep $(echo "$duration / 20" | bc -l)
    done
    echo -ne "] 100% | ETA: 00:00:00\n"
}

echo "--------------------------------------------------------"
echo "SISTEMA: EnsDeLiz® | MÓDULO: Indexado Soberano"
echo "USUARIO: Andres | TEMP: ${TEMP_C:-N/A}°C"
echo "--------------------------------------------------------"

show_progress 1.0 "Inicializando Directorios"
show_progress 1.5 "Indexando Activos LEDL"
find /data/data/com.termux/files/home/ -maxdepth 2 > /data/data/com.termux/files/home/Cerebro_Operativo_LEDL/index_master.log

show_progress 0.5 "Protección AIKO (Cybersecurity)"
sed -i '/token/d; /chat_id/d' /data/data/com.termux/files/home/Cerebro_Operativo_LEDL/index_master.log

echo "--------------------------------------------------------"
echo "RESULTADO: Operación Exitosa. Archivo guardado y listo."
echo "--------------------------------------------------------"
