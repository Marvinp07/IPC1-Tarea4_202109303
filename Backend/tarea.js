const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', 5000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/a', (req, res) => {

    // aca dentro
    res.send('<h1>HOLA</h1>');
});



app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ' + app.get('port'));
});