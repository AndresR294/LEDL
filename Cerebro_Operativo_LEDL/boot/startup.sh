#!/bin/bash
# =================================================================
# NOMBRE: startup.sh (LEDL BOOTLOADER)
# FUNCIÓN: Inicialización de Red Soberana y Despliegue de Update.Zip
# =================================================================

echo -e "\033[1;32m[SISTEMA OPERATIVO LEDL]: INICIANDO NODO HUÉSPED...\033[0m"

# Simulación de carga de Kernel LEDL
for i in {1..20}; do echo -ne "\033[1;32m█\033[0m"; sleep 0.05; done
echo -e " [READY]"

# Invocación del Módulo de Red Certificado
if [ -f "./update_pkg/core/network/mapeo_soberano_v6.sh" ]; then
    bash ./update_pkg/core/network/mapeo_soberano_v6.sh
else
    echo -e "\033[1;31m[ERROR]: Activos de red no localizados.\033[0m"
fi
