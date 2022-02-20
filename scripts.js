let order = [];
let clickedOrder = [];
let score = 0;

//0 verde 
//1 vermelho
//2 amarelo
//3 azul

const blue = document.querySelector('.blue');
const yelow = document.querySelector('.yelow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//criando ordem aleat´roa
let randonguynumber = () =>{
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {

        let elementColor = createColorElement(order[i]);
        lightcolor(elementColor,Number(i)+1);
    }
}

//acemder as cores na ordem
let lightcolor = (element, number ) =>{
    number = number*500;
    setTimeout(()=>{
        element.classList.add('selected');
    },number - 250 );

    setTimeout(()=>{
        element.classList.remove('selected');
    });
}

//checar se os botoes clicados batem com a ordem correta
let checkOrder = () =>{

    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontos: ${score}\n boa! vamos pro proximo.`);
        nextLevel();
    }
}

//onclick do jogador 
let click = (color)=>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//funcao para retornar o numero da cor especifica
let createColorElement = (color) =>{
    if(color ==0){
        return green;
    }else if (color == 1){
        return red;
    }else if (color ==2){
        return yelow;
    }else if(color ==3){
        return blue;
    }
}


//funcao para o proximo nivel

let nextLevel = () =>{
    score++;
    randonguynumber();
}


//funcao para perdeuo jogo

let lose = () =>{
    alert('Ruim! vc perdeu...' + score);
    order = [];
    clickedOrder = [];

    playGame();
}


//iniciar o jogo

let playGame = () =>{
    score = 0;
    alert(' iniciando novo jogo ');

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yelow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));


//eventos onclik para cores
green.onclick = () =>click(0);
red.onclick = () =>click(1);
yelow.onclick = () =>click(2);
blue.onclick = () =>click(3);

playGame();