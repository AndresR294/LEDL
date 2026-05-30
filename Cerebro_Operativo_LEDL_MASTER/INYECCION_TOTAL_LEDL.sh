#!/bin/bash
# ==============================================================================
# TITULAR: J ANDRES RESENDEZ R. | LICENCIA: LEDL® | PROPIEDAD INTELECTUAL 2026
# OBJETIVO: Saneamiento, Montaje de Nodo, Inyección XRP (100% Éxito)
# ==============================================================================

DESTINO="/data/data/com.termux/files/home/Cerebro_Operativo_LEDL_MASTER"
ORIGEN_LIB="/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem"

echo "--- Iniciando Protocolo Maestro LEDL ---"

# 1. Autolimpiado y Saneamiento
rm -rf "$DESTINO/node_modules" "$DESTINO/errors" "$DESTINO/accounts" "$DESTINO/utils"

# 2. Reconstrucción Estructural (Copia Física para evitar errores de enlace)
mkdir -p "$DESTINO/node_modules"
cp -rL "$ORIGEN_LIB" "$DESTINO/node_modules/"

# 3. Inyección de Propiedad Intelectual y Verificación
echo "Procedimiento ejecutado bajo Licencia LEDL® - Autor: J ANDRES RESENDEZ R."

# 4. Lanzamiento Directo con resolución de entorno nativa
cd "$DESTINO"
echo "--- Ejecución: Transacción XRP ---"

node writeContractSync.js \
--target="AGDZNXUQCHG1F9WRE5J3QT1VEZNAVNN5W1" \
--action="addLiquidity" \
--amount="14.87XRP"

# 5. Protocolo de Cierre
if [ $? -eq 0 ]; then
    echo "--- Inyección Finalizada con éxito - Protocolo LEDL consolidado ---"
else
    echo "--- Error: Requiere auditoría de Nodos (Verificar dependencias faltantes) ---"
fi
