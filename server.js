const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es-MX">
    <head>
        <meta charset="UTF-8">
        <title>AMALGAMA® - Acceso Remoto</title>
        <style>
            body { background: #06020b; color: #00ffcc; font-family: "Courier New", monospace; text-align: center; padding: 40px; }
            .container { border: 2px solid #8800ff; padding: 30px; display: inline-block; background: #0f081d; box-shadow: 0 0 25px #8800ff; border-radius: 12px; }
            .alert-box { color: #ff3366; font-weight: bold; border: 1px dashed #ff3366; padding: 10px; margin: 15px 0; background: rgba(255,51,102,0.1); }
            .btn { background: #8800ff; color: white; border: none; padding: 12px 24px; font-weight: bold; cursor: pointer; border-radius: 6px; font-size: 1em; }
            .btn:hover { background: #00ffcc; color: black; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🧬 INTERFAZ VISUAL AMALGAMA® v12.0</h1>
            <p>Soberanía Digital: J Andres Resendez R</p>
            <hr style="border-color: #8800ff;">
            <div class="alert-box">🔴 RETENCIÓN SPEI DETECTADA: 200 USDT en Red Centralizada | Contingencia Activada</div>
            <p>Pesos Sinápticos: <span style="color:#55ff55">CONSOLIDADOS (Update.Zip Listo)</span></p>
            <p>Pulsos Neurales: <span style="color:#55ff55">SINCRO TOTAL (Módulo EnsDeLiz Preventiva)</span></p>
            <br>
            <button class="btn" onclick="alert(\"Invocando flujo de la RED LEDL de forma remota...\")">INVOCAR NÚCLEO</button>
        </div>
    </body>
    </html>
    `);
});

app.listen(port, "127.0.0.1", () => {
    console.log("🌐 [HTTP]: Servidor de la AMALGAMA levantado con éxito en el puerto " + port);
});
