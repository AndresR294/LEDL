#!/bin/bash
# 1. Verificación de entorno (Evitar ejecución dentro de PRoot)
if [ -f "/etc/debian_version" ] || [ "$USER" == "root" ]; then
    echo -e "❌ [ERROR]: Estás dentro de Debian o en modo Root."
    echo -e "👉 Por favor, escribe 'exit' hasta llegar a la terminal de Termux (usuario normal)."
    exit 1
fi

SD_AUTH="/storage/4250-1EF2"
DISTRO="debian"

# --- ANIMACIÓN NEURAL DE REPARACIÓN ---
echo -e "🧠 [ENSDELIZ]: Reconfigurando enlaces desde el núcleo Termux..."
for i in {1..20}; do
    echo -ne "\rSincronizando: [$(printf '%*s' $i | tr ' ' '#')$(printf '%*s' $((20-i)) | tr ' ' '.')] $((i*5))% (ETA: 0s)"
    sleep 0.1
done
echo -e "\n"

# 2. Configuración del Alias de entrada segura en Termux
if command -v proot-distro > /dev/null; then
    # Crear el comando de acceso con montaje automático
    ALIAS_CMD="proot-distro login $DISTRO --shared-tmp --bind $SD_AUTH:/mnt/sd_ledl"
    
    # Inyectar en el .bashrc de Termux
    sed -i '/invocar_LEDL/d' $HOME/.bashrc
    echo "alias invocar_LEDL='$ALIAS_CMD'" >> $HOME/.bashrc
    
    echo -e "--------------------------------------------------"
    echo -e "🏛️  SISTEMA: Cerebro Operativo LEDL v80.1.1"
    echo -e "✅ VINCULACIÓN: REPARADA"
    echo -e "🛡️  AUTORIZACIÓN: SD 4250-1EF2 vinculada a /mnt/sd_ledl"
    echo -e "🚀 INSTRUCCIÓN: Escribe 'source ~/.bashrc' y luego 'invocar_LEDL'"
    echo -e "--------------------------------------------------"
else
    echo -e "❌ [ERROR]: proot-distro no está instalado en Termux."
fi
