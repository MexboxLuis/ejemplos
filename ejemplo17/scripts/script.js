class Aplicacion{
  constructor(contenedorRegalo, contenedorTitulo) {
    this.contenedorRegalo = contenedorRegalo;
    this.contenedorTitulo - contenedorTitulo;

  }
  this.regaloAbierto = this.regaloAbierto.bind(this);
  this.regalos = []; 
  this.cargarContenedorRegalo();
  this.regalosAbiertos = 0;
}

const contenedorRegalo = document.querySelector('#regalo');
const contenedorTitulo = document.querySelector('#titulo');
const app = new Aplicacion(contenedorRegalo, contenedorTitulo);