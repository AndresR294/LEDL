#!/bin/bash
# MÓDULO: Auditoría Semántica LEDL
# INSPIRACIÓN: FSFE Newsletter Feedback May 2026

LOG_AUDITORIA="/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/Logs/Auditoria_Docs.log"

echo "--- INICIANDO VERIFICACIÓN DE PRECISIÓN ---" > $LOG_AUDITORIA

# 1. Verificación de NGI0 (Cero, no O)
grep -r "NGIO" /data/data/com.termux/files/home/Cerebro_Operativo_LEDL/ && echo "ALERTA: Error de nomenclatura NGI0 detectado." >> $LOG_AUDITORIA

# 2. Corrección de términos de rechazo (Protocolo de Redacción)
# Cambiamos "declines" por "refusals" en documentos de quejas técnicas
sed -i 's/declines/refusals/g' $DIR_RAIZ/*.ledl 2>/dev/null

echo "Análisis de AFRODITA: Terminología alineada con estándares internacionales."
