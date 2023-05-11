// const http = require('http');

// const servidor = http.createServer((req, resp) =>{
//     console.log('Se realizo con exito la peticion');
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
//     resp.end('Fin del llamado')
// });


// const PUERTO = 3000;
// servidor.listen(PUERTO, ()=>{
//     console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
// });




function numeroAleatorio() {
  return Math.floor(Math.random() * 10);
}

const segundoEjemplo = new Promise((resolve, reject) => {
  let numero = numeroAleatorio();
  if (numero === 0) {
    reject(`El número es ${numero}, por lo que no entra en par ni impar.`);
  } else if (numero % 2 === 0) {
    resolve(`El número ${numero} es par.`);
  } else {
    resolve(`El número ${numero} es impar.`);
  }
});

segundoEjemplo
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));



