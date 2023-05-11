const http = require('http');

const servidor = http.createServer((req, resp) =>{
    console.log('Se realizo con exito la peticion');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    resp.end('Fin del llamado')
});


const PUERTO = 3000;
servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});


