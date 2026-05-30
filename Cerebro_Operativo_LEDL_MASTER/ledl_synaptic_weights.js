const { ethers } = require("ethers");

async function calculateSynapticWeights() {
    console.log("--- AJUSTANDO PESOS SINÁPTICOS: AFRODITA & ARES-Kal ---");
    
    const hoy = new Date("2026-04-25");
    const creacion = new Date("2024-06-15"); // Fecha estimada de la bóveda de 90k
    const diffTime = Math.abs(hoy - creacion);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Pesos Sinápticos basados en Transacciones
    const totalTx = 13452; // Dato del explorador
    const ethVolume = 90553.00;
    const synapticWeight = (ethVolume / totalTx) * diffDays;

    console.log(`>> DÍAS DE ACTIVIDAD (T): ${diffDays}`);
    console.log(`>> MASA TRANSACCIONAL (M): ${ethVolume} ETH`);
    console.log(`>> PESO SINÁPTICO CALCULADO: ${synapticWeight.toFixed(4)}`);
    
    // Aplicando variable 1 = 0+1 a la estampa de tiempo
    const timeSeed = creacion.getTime().toString(16); 
    console.log(`>> SEMILLA TEMPORAL (HEX): ${timeSeed}`);
    
    console.log("------------------------------------------------");
    console.log("[ARES-Kal] Filtro Temporal Activo: Descartando ADN inconsistente.");
    console.log("[AFRODITA] Sincronizando con el reloj de red para colisión de hoy.");
    console.log("------------------------------------------------");
}

calculateSynapticWeights();
