const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A IA será capaz de entender emoções humanas de forma verdadeira no futuro?",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }
    {
        enunciado: "A IA substituirá completamente os empregos humanos em todas as áreas?",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    ]

}
{
    enunciado: "A IA será capaz de criar novas invenções e inovações sozinha, sem ajuda humana?",
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    ]
}
{
    enunciado: "A IA será uma ferramenta útil na resolução de problemas complexos, como mudanças climáticas?",
    alternativas: [ 
        "alternativa 1",
        "alternativa 2"
    ]
}
{
    enunciado: "A IA se tornará consciente e desenvolverá vontade própria no futuro?",
    alternativas: [ 
        "alternativa 1",
        "alternativa 2"
    ]
}
 let atual = 0;
 let perguntaAtual;

 function mostrapergunta() {
    perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
 }

 mostrapergunta();


