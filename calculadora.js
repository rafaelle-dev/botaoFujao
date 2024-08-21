const campo1 = document.querySelector("#campo1"); //const= não muda o programa no site.
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
let resposta = document.querySelector("#resposta"); //let= muda o programa no site.

botao.addEventListener("click" ,calcular);

function calcular(){

    if(campo1.value==='' || campo2.value==='' ){
        resposta.classList.add("problema");
        resposta.innerHTML="Campo vazio";
        setTimeout(()=>{
            resposta.classList.remove("problema");  
            resposta.innerHTML='';
        },3000); //,3= tempo.
    }
    else{ //A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

        const valor1 = parseInt(campo1.value); //parseInt= analisa um argumento string e retorna um inteiro na base especificada.
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        if(operacao==="somar") //=== serve para comparar o conteúdo.
        resposta.innerHTML = valor1 + valor2;
        if(operacao==="subtrair")
        resposta.innerHTML = valor1 - valor2;
        if(operacao==="multiplicar")
        resposta.innerHTML = valor1 * valor2; // * = multiplicar.
        if(operacao==="dividir")
        resposta.innerHTML = valor1 / valor2; // / = dividir.
    }
}

//botão pipe | = shift+tecla à esquerda da tecla z.