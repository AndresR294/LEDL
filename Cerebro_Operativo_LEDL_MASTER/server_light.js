const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
    <!DOCTYPE html>
    <html lang="es-MX">
    <head>
        <meta charset="UTF-8">
        <title>AMALGAMA® - Dashboard</title>
        <style>
            body { background: #06020b; color: #00ffcc; font-family: "Courier New", monospace; text-align: center; padding: 40px; }
            .card { border: 2px solid #8800ff; padding: 30px; display: inline-block; background: #0f081d; box-shadow: 0 0 25px #8800ff; border-radius: 12px; }
            .alert { color: #ff3366; font-weight: bold; border: 1px dashed #ff3366; padding: 10px; margin: 15px 0; background: rgba(255,51,102,0.1); }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🧬 INTERFAZ VISUAL AMALGAMA® v12.1</h1>
            <p>Soberanía Digital: J Andres Resendez R</p>
            <hr style="border-color: #8800ff;">
            <div class="alert">🔴 RETENCIÓN SPEI DETECTADA: 200 USDT en Red Centralizada | Contingencia Activada</div>
            <p>Pesos Sinápticos: <span style="color:#55ff55">CONSOLIDADOS (Update.Zip Listo)</span></p>
            <p>Pulsos Neurales: <span style="color:#55ff55">SINCRO TOTAL (Módulo EnsDeLiz Preventiva)</span></p>
        </div>
    </body>
    </html>
    `);
});
server.listen(8080, "127.0.0.1", () => {
    process.exit(0); // Cierre controlado de pre-vuelo
});
