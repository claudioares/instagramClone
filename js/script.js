
let time = 5000,
    currentImageIndex = 0,
    imagens = document.querySelectorAll('#slider img')
    max = imagens.length;




function nextImagem() {
    imagens[currentImageIndex].classList.remove('select');
    currentImageIndex++
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    imagens[currentImageIndex].classList.add('select');
}

function start() {
    setInterval(() => {
        //troca de imagem
        nextImagem()
    }, time)
}
window.addEventListener('load', start);