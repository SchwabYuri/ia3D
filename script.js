const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia da Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "Você gosta da ideia da Inteligência Artificial"
            },
            {
                texto: "Não",
                afirmação: "Você gosta não da ideia da Inteligência Artificial"
            }
        ]
    },
    {
        enunciado: "Você acha que estamos muito dependentes da IA?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "Estamos muito dependentes da IA"
            },
            {
                texto: "Não",
                afirmação: "Não estamos muito dependentes da IA"
            }
        ]
    },
    {
        enunciado: "Ela pode se tornar um perigo futuro?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "Ela se tornará um perigo futuro"
            },
            {
                texto: "Não",
                afirmação: "Ela não se tornará um perigo futuro"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado() {
    caixaPergunta.textContent = " Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = " ";

}
mostraPergunta();