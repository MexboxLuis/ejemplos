function abrirRegalo(){
    const newHeader = document.createElement('h1');
    newHeader.textContent = 'Felicidades';

    const newImage = document.createElement('img');
    newImage.src = "resources/giphy.gif"
    
    const container = document.querySelector('#container');
    container.innerHTML = '';
    container.appendChild(newHeader);
    container.appendChild(newImage);

}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);