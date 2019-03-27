
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;
var uri = 'mongodb://oscar_admin:y2cglgn3ir3hzWAp@cluster0-shard-00-00-jcacl.mongodb.net:27017,cluster0-shard-00-01-jcacl.mongodb.net:27017,cluster0-shard-00-02-jcacl.mongodb.net:27017/dbwebaee?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(uri, (err)=>{
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log("La Base de Datos Esta Corriendo Exitosamente");
        app.listen(port,function(){
            console.log("Servidor corriendo en el puerto localhost:"+port);
        })
    }
});



