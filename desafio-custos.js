function calcular(){ // função linkada ao botão ADICIONAR do html
    let titulo = document.getElementById("titulo").value; //pega o valor do input título e guarda na variável
    let total = document.getElementById("total").value; //pega o valor do input total e guarda na variável
    let tipo = document.getElementById("tipo").value; // pega o valor da seleção do option e guarda na variável
    let form = document.getElementById("form"); // usado para alterar atributos do forme
    
    let divResultado = document.getElementById("resultados"); // pega a div do html, onde será adicionado os conteúdos dinamicamente via javascript conforme preenchido os inputs e clicado no botão ADICIONAR

    if(titulo != "" && total != ""){ // só entra na função se os campos título e total estiver preenchido

        let newDiv = document.createElement("div"); // cria um elemento div
        let resTitulo = document.createElement("p"); // cria um elemento p
        let resTotal = document.createElement("span"); // cria um elemento span

        resTitulo.innerHTML = titulo; // coloca o valor recebido no input no novo elemento p
        resTotal.innerHTML = total; // coloca o valor recebido no input no novo elemento span
        
        divResultado.appendChild(newDiv); // coloca dentro da div principal a nova div
        newDiv.appendChild(resTitulo); // coloca dentro da nova div o titulo recebido no input
        newDiv.appendChild(resTotal); // coloca dentro da nova div o total recebido no input

        
        if(tipo == "receita"){ // se o tipo da seleção for receita 
            resTotal.classList.add("positivo"); // adiciona uma classe (positivo - muda cor do texto para verde) no elemento novo span 
        }else if(tipo == "despesa"){// se o tipo da seleção for despesa
            resTotal.classList.add("negativo");// adiciona uma classe (negativo - muda cor do texto para vermelha) no elemento novo span

        }
        form.reset(); // limpa todos os campos após clicar em no botão - ADICIONAR

        document.getElementById("titulo").focus(); // volta o foco para o elemento título automaticamente
        
    } else{ // da um alerta se algum dos campos não estiverem preenchidos
        alert("Por favor, preencha todos os campos para adicionar!")
    }  
    
}

