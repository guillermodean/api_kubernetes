const mongoose =require('mongoose');

const ENTORNO = require('/config.json')

mongoose.connect('mongodb+srv://'+ENTORNO.Produccion.user+':'+ENTORNO.Produccion.psw+'@cluster0.tqdy8.mongodb.net/kubernetes?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    

})
.then(db => console.log('Database is connected'))
.catch(err=> console.log(err))