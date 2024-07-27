const h1 = document.getElementById("h1");
const chute = document.getElementById("chute");
const chutar = document.getElementById("chutar");
const iniciar = document.getElementById("iniciar");
let tentativas = 0;
let numero;

function reiniciar(){
    h1.style.opacity = "100%";
    h1.innerText = "Adivinhe um número de 1 a 100";
    chute.style.opacity = "100%";
    chutar.style.opacity = "100%";
    iniciar.innerText = "Reiniciar";
    iniciar.style.backgroundColor = "crimson";
    iniciar.addEventListener('mouseenter', () => {iniciar.style.backgroundColor = 'hsl(348, 83%, 67%)';});
    iniciar.addEventListener('mouseleave', () => {iniciar.style.backgroundColor = 'hsl(348, 83%, 47%)';});
    tentativas = 0;
    numero = Math.random().toFixed(2) * 100;
}

function chutarNumero(){
    tentativas += 1;
    let numeroChutado = chute.value;
    
    if(numeroChutado == ''){
        h1.innerText = "Por favor, insira um número de 1 a 100";
    }

    else if(numeroChutado > numero){
        h1.innerText = "ERROU! O número está abaixo";
        setTimeout(() => h1.innerText = "Adivinhe outro número de 1 a 100", 1500);
    }

    else if(numeroChutado < numero){
        h1.innerText = "ERROU! O número está acima";
        setTimeout(() => h1.innerText = "Adivinhe outro número de 1 a 100", 1500);
    }
    
    else{
        h1.innerText = "Você acertou na sua " + tentativas + "ª tentativa!";
    }
}