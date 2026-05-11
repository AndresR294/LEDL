const { ethers } = require('ethers');
const fs = require('fs');

const RPC_URL = 'https://mainnet.base.org';
const PROXY_ADDRESS = '0x00000110dcdedc9581cb5ecb8467282f2926534d';
const PK = process.env.PK_LEDL;

async function deploy() {
    if (!PK || PK.length < 64) {
        console.error('❌ ERROR: Llave privada inválida. Asegúrate de hacer: export PK_LEDL="tu_llave"');
        return;
    }

    // Detector de versión para evitar el TypeError
    let provider, wallet;
    const pkFormatted = PK.startsWith('0x') ? PK : '0x' + PK;

    if (ethers.JsonRpcProvider) { // Ethers v6
        provider = new ethers.JsonRpcProvider(RPC_URL);
        wallet = new ethers.Wallet(pkFormatted, provider);
    } else { // Ethers v5
        provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        wallet = new ethers.Wallet(pkFormatted, provider);
    }

    console.log('🚀 [ORQUESTADOR]: Iniciando reclamación desde:', wallet.address);

    const abi = ["function reclamarPropiedadLEDL() public pure returns (string memory)"];
    
    // Ruta corregida al binario generado
    const binPath = './build/CoinbaseSmartWalletLEDL.bin';
    if (!fs.existsSync(binPath)) {
        console.error('❌ ERROR: No se encontró el binario en ' + binPath);
        return;
    }
    const bytecode = "0x" + fs.readFileSync(binPath, 'utf8').trim();

    try {
        const Factory = new ethers.ContractFactory(abi, bytecode, wallet);
        console.log('⏳ Desplegando implementación Lógica LEDL...');
        
        const logicContract = await Factory.deploy();
        
        // Manejo de espera por versión
        if (logicContract.waitForDeployment) {
            await logicContract.waitForDeployment();
        } else {
            await logicContract.deployed();
        }
        
        const logicAddress = await logicContract.address || await logicContract.getAddress();
        console.log('✅ Lógica LEDL inyectada en:', logicAddress);
        console.log('🔗 SOBERANÍA: Registrada para J Andres Resendez R.');
    } catch (e) {
        console.error('❌ Error en despliegue:', e.message);
    }
}

deploy();
