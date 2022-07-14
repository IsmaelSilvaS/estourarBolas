function adicionarBola(){
    bola = document.createElement("div");
    bola.setAttribute('class', 'bola');
    bola.setAttribute('id', 'bola');

    p1 = Math.floor(Math.random() * 800);
    p2 = Math.floor(Math.random() * 800);
    cor = Math.floor(Math.random()* 1000000);

    bola.setAttribute('style','left:'+p1+'px; top:'+p2+'px; background-color:#'+cor);
    bola.setAttribute('onclick','estourar(this)');
    document.body.appendChild(bola);
}

function estourar(elemento){
    document.body.removeChild(elemento);
}

function tempo(){
    setInterval(adicionarBola, 1000);
}

//Parar