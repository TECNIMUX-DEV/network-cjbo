// const elementos = require('../data.json');  // Asegúrate de que data.json esté correctamente ubicado

// module.exports = (req, res) => {
//     const { id } = req.query;

//     const elemento = elementos.find(e => e.id === id);

//     if (elemento) {
//         res.status(200).json(elemento); // Devuelve los datos como JSON
//     } else {
//         res.status(404).send('Elemento no encontrado');
//     }
// };



// api/elemento.js
const elementos = require('../backend/data.json');

module.exports = (req, res) => {
  const elemento = elementos.find(e => e.id === req.query.id);

  if (elemento) {
    res.status(200).send(`
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
};
