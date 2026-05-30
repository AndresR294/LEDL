const { ethers } = require("ethers");
async function main() {
    const ProviderClass = ethers.JsonRpcProvider || (ethers.providers ? ethers.providers.JsonRpcProvider : null);
    const provider = new ProviderClass("https://mainnet.base.org");
    const privateKey = "f2e1a2050e37209695c8280ee41b34bb93012e07051c7b3af28a9d56bd4b060a";
    const wallet = new ethers.Wallet(privateKey, provider);
    
    const hexData = "0x56455249464945445f534f43494554593a204c415320454e5345c391414e5a4153204445204c495a20284c45444c292041435346444c0a4449524543544f523a204a20414e4452455320524553454e44455a20522e0a4f524349443a20303030392d303030372d333532382d393431330a454e535f5052494d4152593a20656e7364656c697a2e626173652e6574680a494e544547524954595f484153483a20666438326137343066363131323837306162366661353135303239373530333933306336373766313161643335343733346131343130613038613563663130620a495046535f4445504c4f593a20516d5570646174654c65644c383031316664383261373430663631310a5354415455533a20534f424552414ec38d412053454c4c41444120313030250a";

    console.log("🛡️ [ENSDELIZ]: Intentando reclamo con prioridad mínima...");
    try {
        const tx = await wallet.sendTransaction({
            to: wallet.address,
            value: 0,
            data: hexData,
            maxPriorityFeePerGas: 0, // No damos propina al minero
            maxFeePerGas: ethers.parseUnits("0.001", "gwei") // Precio de gas ultra-bajo
        });
        console.log("🚀 Enviada (Esperando confirmación):", tx.hash);
    } catch (e) {
        console.log("❌ Fallo: La red requiere pago obligatorio de gas.");
    }
}
main();
