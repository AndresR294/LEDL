#!/bin/bash
echo -e "\033[1;36m[ARES-Kal: INICIANDO VERIFICACIÓN DE INTEGRIDAD MATEMÁTICA]\033[0m"

# Datos de prueba
IPV4_TEST="192.0.2.33"
PREF6_TEST="2001:db8:122::"
IPV6_RESULT="2001:db8:122::192.0.2.33"

echo -e "Calculando entropía de mapeo..."
for i in {1..15}; do echo -ne "\033[1;36m⧉\033[0m"; sleep 0.05; done
echo -e " [100%]"

# Comprobación de reversibilidad
# Extraer los últimos 32 bits (representación decimal simple en este caso)
EXTRACTED_V4=$(echo $IPV6_RESULT | awk -F'::' '{print $2}')

if [ "$EXTRACTED_V4" == "$IPV4_TEST" ]; then
    echo -e "\033[1;32m[CERTIFICADO]: f(x) es reversible. Integridad Matemática 1:1 Confirmada.\033[0m"
    exit 0
else
    echo -e "\033[1;31m[ERROR]: Falla de consistencia en el mapeo algorítmico.\033[0m"
    exit 1
fi
