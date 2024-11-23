// const QRCode = require('qrcode');
// const fs = require('fs');
// const elementos = require('./data.json');

// const outputFolder = '../qrs';

// // Comprobar que la carpeta de salida exista
// if (!fs.existsSync(outputFolder)) {
//     fs.mkdirSync(outputFolder);
// }

// elementos.forEach((elemento) => {
//     const url = `http://localhost:3000/elemento/${elemento.id}`;
//     // const url = `https://network-cjbo.vercel.app/elemento/${elemento.id}`;

//     const nombreArchivo = `${outputFolder}/qr_${elemento.id}.png`;

//     QRCode.toFile(nombreArchivo, url, { width: 300}, (err) => {
//         if (err) console.error(`Error generado QR para ${elemento.id}:`, err);
//         else console.log(`QR generado para ${elemento.id}: ${nombreArchivo}`);    
//     });
//  });

// V-02
const QRCode = require('qrcode');
const fs = require('fs');
const elementos = require('./data.json');

const outputFolder = '../qrs';

// Comprobar que la carpeta de salida exista
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

elementos.forEach((elemento) => {
    const url = `https://network-cjbo.vercel.app/elemento/${elemento.id}`;  // Cambiar a la URL de producción

    const nombreArchivo = `${outputFolder}/qr_${elemento.id}.png`;

    QRCode.toFile(nombreArchivo, url, { width: 300 }, (err) => {
        if (err) console.error(`Error generado QR para ${elemento.id}:`, err);
        else console.log(`QR generado para ${elemento.id}: ${nombreArchivo}`);    
    });
});
