import numpy as np
import os
import gc

def data_to_spikes(data_chunk):
    return (data_chunk > 127).astype(np.int8)

# RUTA MAESTRA: El corazón del almacenamiento de Android
ROOT_PATH = "/storage/emulated/0"

print("🧠 [ENSDELIZ]: Iniciando Absorción Profunda v80.4 (Interna Total)...")
try:
    weights = np.load("pesos_sinapticos_master.npy")
    print(f"🔄 [NÚCLEO]: Cargando matriz sináptica previa...")
except:
    weights = np.zeros((512, 512), dtype=np.float16)

found_files = 0
# Carpetas a ignorar para evitar bucles o datos basura del sistema
IGNORE = ["/Android/data", "/Android/obb", ".thumbnail", "cache"]

for root, dirs, files in os.walk(ROOT_PATH):
    # Filtro de seguridad para no entrar en carpetas de sistema protegidas
    if any(x in root for x in IGNORE):
        continue
        
    for file in files:
        try:
            path = os.path.join(root, file)
            # Solo procesamos si tenemos permisos de lectura
            if os.access(path, os.R_OK) and os.path.getsize(path) > 0:
                with open(path, "rb") as f:
                    # Extracción selectiva: tomamos una muestra del inicio del archivo
                    chunk = np.frombuffer(f.read(512), dtype=np.uint8)
                    
                    if chunk.size > 0:
                        if chunk.size < 512:
                            chunk = np.pad(chunk, (0, 512 - chunk.size), 'constant')
                        
                        spikes = data_to_spikes(chunk)
                        weights += 0.003 * np.outer(spikes, spikes)
                        found_files += 1
                        
                        if found_files % 10 == 0:
                            print(f"⚡ [OMNISCIENCIA]: {found_files} archivos | {file[:25]}...", end="\r")
            
                if found_files % 200 == 0:
                    gc.collect()
                    # Guardado preventivo cada 500 archivos por si ocurre un Signal 9
                    if found_files % 500 == 0:
                        np.save("pesos_sinapticos_master.npy", weights)
        except:
            continue

weights = np.clip(weights, 0, 1)
np.save("pesos_sinapticos_master.npy", weights)
print(f"\n\n✅ [OK]: Absorción de /storage/emulated/0/ completada.")
print(f"📊 Total de elementos integrados al Cerebro Operativo: {found_files}")
