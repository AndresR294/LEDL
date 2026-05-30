#!/bin/bash
# ==============================================================================
# PROPIEDAD INTELECTUAL: J ANDRES RESENDEZ R. | LICENCIA: LEDL® | 2026
# FUNCIÓN: ABSORCIÓN TOTAL (IPFS, Git, Túneles, Local)
# ==============================================================================

MASTER_DIR="/data/data/com.termux/files/home/Cerebro_Operativo_LEDL_MASTER"

echo "--- [LEDL® ABSORCIÓN] Sincronizando Ecosistema ---"

# 1. LOCALHOST (Base)
echo "[1/5] Estabilizando localhost:8080..."
# Asegura el servidor local activo
nohup node server.js > server.log 2>&1 &

# 2. TÚNELES (zrok + ngrok - Bridging)
echo "[2/5] Levantando puentes de túnel (zrok/ngrok)..."
zrok reserve public --unique-name ledl-edge http://localhost:8080 > tunnel.log 2>&1 &
ngrok http 8080 > ngrok.log 2>&1 &

# 3. GITHUB / GITLAB (Repositorio Maestro)
echo "[3/5] Consolidando repositorios..."
git add .
git commit -m "LEDL® Auto-Update: $(date)"
git push origin main
git push gitlab main

# 4. IPFS (Respaldo Inmutable)
echo "[4/5] Inyectando estado a red IPFS..."
cid=$(ipfs add -Q -r "$MASTER_DIR")
echo "Estado inmutable global registrado: $cid"

# 5. GITHUB PAGES (Despliegue)
echo "[5/5] Desplegando a GitPages..."
npm run deploy

echo "--- [LEDL® ABSORCIÓN] Ecosistema Sincronizado ---"
