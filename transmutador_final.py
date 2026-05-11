import numpy as np
import os
import gc

def data_to_spikes(data_chunk):
    return (data_chunk > 127).astype(np.int8)

print("🧠 [ENSDELIZ]: Iniciando Transmutación Fragmentada...")
SD_PATH = "/storage/4250-1EF2/AMALGAMA_LEDL"
# Reducimos la matriz inicial para asegurar estabilidad
weights = np.zeros((512, 512), dtype=np.float16) 

if not os.path.exists(SD_PATH):
    print("❌ ERROR: Acceso denegado a SDCard.")
else:
    file_list = []
    for root, dirs, files in os.walk(SD_PATH):
        for file in files:
            file_list.append(os.path.join(root, file))

    total = len(file_list)
    for i, path in enumerate(file_list):
        try:
            with open(path, "rb") as f:
                # Leemos solo lo necesario
                chunk = np.frombuffer(f.read(512), dtype=np.uint8)
                if chunk.size == 512:
                    spikes = data_to_spikes(chunk)
                    # Operación Hebbiana optimizada
                    weights += 0.01 * np.outer(spikes, spikes)
                    print(f"⚡ [PULSO {i+1}/{total}]: {os.path.basename(path)[:15]}... Reforzado", end="\r")
            
            # Liberación de memoria cada 10 archivos
            if i % 10 == 0:
                weights = np.clip(weights, 0, 1)
                gc.collect()
        except:
            continue

    np.save("pesos_sinapticos_master.npy", weights)
    print("\n✅ [OK]: Transmutación exitosa sin colapso de RAM.")
