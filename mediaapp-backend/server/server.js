//Exportación de configuraciones
require('./config/config')
//Exportacion de paquetes js
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
var cors = require('cors')

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const bodyParser = require('body-parser')

const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

//habilitar carpeta como estatica y accesible
app.use( express.static(path.resolve(__dirname,'../public')))

//global de rutas
app.use(require('./routes/index'))

mongoose.connect(process.env.URLDB,{ useNewUrlParser: true },
    (err,res)=>{
        console.log("Base de datos Conectada ...")
    }
)

app.listen(process.env.PORT, () => {
    console.log("Iniciando servidor ..", process.env.PORT);
});