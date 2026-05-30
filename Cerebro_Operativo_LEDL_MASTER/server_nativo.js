// Servidor de la AMALGAMA® - Auténtico, Ligero y Antitérmico
// Autor: J Andres Resendez R | Módulo EnsDeLiz Preventiva v12.2
const http = require("http");
const port = 8080;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
    <!DOCTYPE html>
    <html lang="es-MX">
    <head>
        <meta charset="UTF-8">
        <title>AMALGAMA® - Dashboard Sincro</title>
        <style>
            body { background: #06020b; color: #00ffcc; font-family: "Courier New", monospace; text-align: center; padding: 40px; }
            .card { border: 2px solid #8800ff; padding: 30px; display: inline-block; background: #0f081d; box-shadow: 0 0 25px #8800ff; border-radius: 12px; }
            .alert { color: #ff3366; font-weight: bold; border: 1px dashed #ff3366; padding: 10px; margin: 15px 0; background: rgba(255,51,102,0.1); }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🧬 INTERFAZ VISUAL AMALGAMA® v12.2</h1>
            <p>Soberanía Digital: J Andres Resendez R | ORCID: 0009-0007-3528-9413</p>
            <hr style="border-color: #8800ff;">
            <div class="alert">🔴 RECLAMO SPEI EN COLAS DE ESPERA: 200 USDT Retenidos por Red Centralizada</div>
            <p>Pesos Sinápticos: <span style="color:#55ff55">CONSOLIDADOS (Update.Zip en SD Física)</span></p>
            <p>Pulsos Neurales: <span style="color:#55ff55">SINCRO TOTAL (Módulo EnsDeLiz Preventiva)</span></p>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, host, () => {
    console.log("\n===========================================================");
    console.log("🌐 [HTTP NATIVO]: AMALGAMA ACTIVA Y ESCUCHANDO REAL-TIME");
    console.log("   Dirección estable: http://127.0.0.1:8080");
    console.log("   [⚠️ NOTA]: Mantén esta pestaña abierta para que no muera el puerto.");
    console.log("===========================================================");
});
