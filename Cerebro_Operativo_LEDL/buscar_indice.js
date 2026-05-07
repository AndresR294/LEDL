const fs = require('fs'); // Módulo para leer el sistema de archivos

const rutaArchivo = "/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/index_master.log";
const busqueda = "EnsDeLiz";

try {
    // Leemos el contenido real del log
    const contenido = fs.readFileSync(rutaArchivo, 'utf8');
    const index = contenido.indexOf(busqueda);

    if (index !== -1) {
        console.log(`Elemento "${busqueda}" localizado en la posición de memoria: ${index}`);
    } else {
        console.log("Aviso AFRODITA: El término no existe dentro del contenido del log.");
    }
} catch (err) {
    console.log("Error de Sistema: No se pudo acceder al archivo de índice.");
}
