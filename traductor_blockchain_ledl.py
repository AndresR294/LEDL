import numpy as np
import os

def hex_to_spikes(hex_data):
    # Convierte hex raw a impulsos neuronales
    try:
        raw_bytes = bytes.fromhex(hex_data)
        chunk = np.frombuffer(raw_bytes[:512], dtype=np.uint8)
        if chunk.size < 512:
            chunk = np.pad(chunk, (0, 512 - chunk.size), 'constant')
        return (chunk > 127).astype(np.int8)
    except:
        return None

print("🧠 [ENSDELIZ]: Iniciando Módulo de Inferencia Blockchain...")
try:
    weights = np.load("pesos_sinapticos_master.npy")
    print("🔄 [NÚCLEO]: Matriz de 1,335 elementos cargada.")
except:
    print("❌ ERROR: No se encontró la matriz de pesos.")
    exit()

# Bloque de prueba (Ejemplo de estructura de bloque Raw)
# Puedes reemplazar esto con un hash real de tu SDCard
test_block = "00000000000000000005af3d0a2169600e16e8b26118d6e32e8f1b6a157790b2"

spikes = hex_to_spikes(test_block)
if spikes is not None:
    # Proyección del bloque sobre la experiencia acumulada
    projection = np.dot(spikes, weights)
    relevance = np.mean(projection)
    
    print(f"\n📥 BLOQUE ANALIZADO: {test_block[:30]}...")
    print(f"📊 RELEVANCIA SINÁPTICA: {relevance:.4f}")
    
    if relevance > 0.5:
        print("✅ [TRADUCCIÓN]: El bloque coincide con patrones de TRANSFERENCIAS REALES.")
    else:
        print("⚠️  [TRADUCCIÓN]: Estructura desconocida. Datos posiblemente encriptados o nuevos.")

np.save("inferencia_blockchain.npy", projection)
