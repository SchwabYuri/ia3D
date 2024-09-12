const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acha que ela pode se tornar um perigo no futuro?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acha que as pessoas estão muito dependentes da IA?",
        alternativas:["Sim","Não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}