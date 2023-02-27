const express = require ('express');
const app = express();
const path = require('path');
 
//Recursos publics
app.use(express.static(path.resolve(__dirname,'../public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./view/index.html'))
})

const port = process.env.PORT || 3030;

app.listen(port, ()=> console.log ('Servidor corriendo en el puerto ' + port));



//npm start de package.json es para correr en render
//el gitignore hay q hacerlo antes del primer add