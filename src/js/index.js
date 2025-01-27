/*
Mostrar o próximo cartão quando clicar em avançar
passo 1 = puxar o elemento HTML da seta avançar
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function(){
        const cartaVirada = cartao.querySelector(".carta-virada");

        // virar o cartao
        cartao.classList.toggle("virar");
        // mostrar o fundo da carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");

    });
});


// refatorar coisas que a gente repete em funções para usarmos sem repetir

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarcartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");       
}

btnAvancar.addEventListener("click", function(){

    if (cartaoAtual === cartoes.length - 1){
        return
    }
    escondercartaoselecionado();

    cartaoAtual ++;
    mostrarcartao(cartaoAtual);
});



// Mostrar o cartão anterior quando clicar em voltar
btnVoltar.addEventListener("click", function(){
    
    if (cartaoAtual === 0){
        return
    }
    escondercartaoselecionado();

    cartaoAtual --;
    mostrarcartao(cartaoAtual);
});




