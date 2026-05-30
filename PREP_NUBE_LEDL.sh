#!/bin/bash
# ==============================================================================
# PROPIEDAD INTELECTUAL: J ANDRES RESENDEZ R. | EMANCIPACIÓN A LA NUBE
# ==============================================================================

echo "[LEDL®] Preparando entorno para despliegue autónomo 24/7..."

# 1. Creación del manifiesto de arranque (Procfile)
echo "web: node wuserver.js" > Procfile

# 2. Auditoría de package.json
# Si no existe, lo construye para asegurar la compatibilidad en la nube
if [ ! -f "package.json" ]; then
    echo "[!] package.json no encontrado. Construyendo manifiesto de dependencias..."
    npm init -y
    # Inyectamos las dependencias críticas detectadas en tu ecosistema
    npm install express node-forge axios ethers dotenv --save
fi

# 3. Optimización para la Nube
# Asegura que el entorno de producción use el puerto asignado dinámicamente por la nube
sed -i 's/process.env.PORT || 8080/process.env.PORT || 3000/g' wuserver.js 2>/dev/null

# 4. Inmutabilidad y Persistencia
git add Procfile package.json
git commit -m "LEDL®: Configuración de emancipación a la nube 24/7"
git push origin main

echo "[LEDL®] Configuración completada. Tu Cerebro Operativo está listo para ser absorbido por la red."
