function calcular(){
    let titulo = document.getElementById("titulo").value;
    let total = document.getElementById("total").value;
    let tipo = document.getElementById("tipo").value;
    let form = document.getElementById("form");
    
    let divResultado = document.getElementById("resultados");

    if(titulo != "" && total != ""){

        let newDiv = document.createElement("div");
        let resTitulo = document.createElement("p");
        let resTotal = document.createElement("span");

        resTitulo.innerHTML = titulo;
        resTotal.innerHTML = total;
        
        divResultado.appendChild(newDiv);
        newDiv.appendChild(resTitulo);
        newDiv.appendChild(resTotal);

        //const negativo = classList.add("negativo");
        //const positivo = classList.add("positivo");

        if(tipo == "receita"){
            resTotal.classList.add("positivo");
        }else if(tipo == "despesa"){
            resTotal.classList.add("negativo");

        }
        form.reset();

        document.getElementById("titulo").focus();
        
    } else{
        alert("Por favor, preencha todos os campos para adicionar!")
    }  
    
}

