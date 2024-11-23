const elementos = require('../data.json');  // Asegúrate de que data.json esté correctamente ubicado

module.exports = (req, res) => {
    const { id } = req.query;

    const elemento = elementos.find(e => e.id === id);

    if (elemento) {
        res.status(200).json(elemento); // Devuelve los datos como JSON
    } else {
        res.status(404).send('Elemento no encontrado');
    }
};
