const express = require ('express');
const app = express();
const path = require('path');
 
//Recursos publics
app.use(express.static(path.resolve(__dirname,'../public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./view/index.html'))
})


app.listen(3030, ()=> console.log ('Servidor corriendo en el puerto 3030'));