const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia da iteligência artificial?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acha que ela poderia ser um futuro perigo?",
        alternativas:["Acho","Não acho"]
    },
    {
        enunciado: "Você concorda com a meneira que ela é usada atualmente?",
        alternativas:["Concordo","Não concordo"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas [posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
    
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas;
    }
}

