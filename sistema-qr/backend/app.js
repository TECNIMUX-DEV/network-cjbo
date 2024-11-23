//  const express = require('express');
//  const QRCode = require('qrcode');
//  const fs = require('fs');
//  const path = require('path');
//  const app = express();
//  const PORT = 3000
//  // Cargar datos
//  const elementos = require('./data.json')
//  // Ruta para servir páginas de elementos
//  app.get('/elemento/:id', (req, res) => {
//      const elemento = elementos.find(e => e.id === req.params.id)
//      if (elemento) {
//          res.send(`
//              <html>
//                  <head><title>${elemento.id}</title></head>
//                  <body>
//                      <h1>${elemento.id}</h1>
//                      <p>${elemento.numeroInventario}</p>
//                      <p>${elemento.marca}</p>
//                      <p>${elemento.modelo}</p>
//                      <p>${elemento.serial}</p>
//                      <p>${elemento.aula}</p>
//                  </body>
//              </html>
//              `);
//      } else {
//          res.status(404).send('Elemento no encontrado');
//      }
//  })
//  // Ruta principal
//  app.get('/', (req, res) => {
//      res.send('Bienvenido a la aplicación de QR');
//  })
//  // Inicia el servidor 
//  app.listen(PORT, () => {
//      console.log(`Servidor corriendo en http://localhost:${PORT}`);
//  });

// // V-02
// const express = require('express');
// const QRCode = require('qrcode');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// // Cargar datos
// const elementos = require('./data.json');

// // Ruta para servir páginas de elementos
// app.get('/elemento/:id', (req, res) => {
//     const elemento = elementos.find(e => e.id === req.params.id);

//     if (elemento) {
//         res.send(`
//             <html>
//                 <head><title>${elemento.id}</title></head>
//                 <body>
//                     <h1>${elemento.id}</h1>
//                     <p>${elemento.numeroInventario}</p>
//                     <p>${elemento.marca}</p>
//                     <p>${elemento.modelo}</p>
//                     <p>${elemento.serial}</p>
//                     <p>${elemento.aula}</p>
//                 </body>
//             </html>
//         `);
//     } else {
//         res.status(404).send('Elemento no encontrado');
//     }
// });

// // Ruta principal
// app.get('/', (req, res) => {
//     res.send('Bienvenido a la aplicación de QR');
// });

// // Exportar la app para que Vercel la use
// module.exports = app;


// // V-03
// const express = require('express');
// const app = express();
// const path = require('path');

// // Servir archivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));

// // Ruta para servir páginas de elementos
// app.get('/elemento/:id', (req, res) => {
//     const elemento = elementos.find(e => e.id === req.params.id);

//     if (elemento) {
//         res.send(`
//             <html>
//                 <head><title>${elemento.id}</title></head>
//                 <body>
//                     <h1>${elemento.id}</h1>
//                     <p>${elemento.numeroInventario}</p>
//                     <p>${elemento.marca}</p>
//                     <p>${elemento.modelo}</p>
//                     <p>${elemento.serial}</p>
//                     <p>${elemento.aula}</p>
//                 </body>
//             </html>
//         `);
//     } else {
//         res.status(404).send('Elemento no encontrado');
//     }
// });

// // Ruta principal
// app.get('/', (req, res) => {
//     res.send('Bienvenido a la aplicación de QR');
// });

// // Exportar la app para que Vercel la use
// module.exports = app;

// // V-04
// const express = require('express');
// const app = express();
// const path = require('path');

// // Cargar datos (asegúrate de tener el archivo 'data.json' correctamente)
// const elementos = require('./data.json');

// // Servir archivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));

// // Ruta para servir páginas de elementos
// app.get('/elemento/:id', (req, res) => {
//     const elemento = elementos.find(e => e.id === req.params.id);

//     if (elemento) {
//         res.send(`
//             <html>
//                 <head><title>${elemento.id}</title></head>
//                 <body>
//                     <h1>${elemento.id}</h1>
//                     <p>${elemento.numeroInventario}</p>
//                     <p>${elemento.marca}</p>
//                     <p>${elemento.modelo}</p>
//                     <p>${elemento.serial}</p>
//                     <p>${elemento.aula}</p>
//                 </body>
//             </html>
//         `);
//     } else {
//         res.status(404).send('Elemento no encontrado');
//     }
// });

// // Ruta principal
// app.get('/', (req, res) => {
//     res.send('Bienvenido a la aplicación de QR');
// });

// // Configura el puerto
// const PORT = process.env.PORT || 3000;  // Vercel asigna el puerto automáticamente

// // Inicia el servidor (esto no es necesario en Vercel, ya que el servidor se ejecuta de manera automática)
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// // Exportar la app para que Vercel la use
// module.exports = app;


// V-05
const express = require('express');
const app = express();
const path = require('path');
const elementos = require('./data.json');

// Servir archivos estáticos (si los tienes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir páginas de elementos
app.get('/elemento/:id', (req, res) => {
    const elemento = elementos.find(e => e.id === req.params.id);

    if (elemento) {
        res.send(`
            <html>
                <head><title>${elemento.id}</title></head>
                <body>
                    <h1>${elemento.id}</h1>
                    <p>${elemento.numeroInventario}</p>
                    <p>${elemento.marca}</p>
                    <p>${elemento.modelo}</p>
                    <p>${elemento.serial}</p>
                    <p>${elemento.aula}</p>
                </body>
            </html>
        `);
    } else {
        res.status(404).send('Elemento no encontrado');
    }
});

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la aplicación de QR');
});

// Exportar la app para Vercel
module.exports = app;
