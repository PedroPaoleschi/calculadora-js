const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const btnSomar = document.querySelector("#btnSomar");
const btnSub = document.querySelector("#btnSub");
const btnMult = document.querySelector("#btnMult");
const btnDiv = document.querySelector("#btnDiv");
const resultado = document.querySelector("#resultado");


function limpar(){
    valor1.value = '';
    valor2.value = '';
}

/*setTimeout (function(){
    console.log("0")
}, 2000);
*/

function sumir (){
    setTimeout (function(){
        document.getElementById("resultado").innerHTML = ("0")
    }, 2000);
}

function digitar1(){
    if(valor1.value == ''){
        alert("digite o valor1");
        return false;
    }
    
}

function digitar2(){
    if(valor2.value == ''){
        alert("digite o valor2");
        return false;
    }
    
}


/*console.log(typeof Number(valor1))
console.log(typeof valor2)*/

btnSomar.addEventListener("click", function(){
    /*console.log(valor1.value)
    console.log(valor2.value)*/
    console.log(Number(valor1.value) + Number(valor2.value))

    let soma = (Number(valor1.value) + Number(valor2.value))

    
    
    //document.getElementById("resultado").innerHTML = (Number(valor1.value) + Number(valor2.value));         MESMA COISA
    resultado.textContent = soma;

    setTimeout (function(){
        document.getElementById("resultado").innerHTML = ("0")
    }, 2000);


    if(valor1.value == ''){
            alert("digite o valor1");
            return false;
        }
        
    if(valor2.value == ''){
            alert("digite o valor2");
            return false;
        }

    valor1.value = '';
    valor2.value = '';
    
   
    /* document.getElementById("valor1") = valor1.value;
    document.getElementById("valor2") = valor2.value;
    document.getElementById("btnSomar") = valor1 + valor2.value
    document.getElementById("resultado").innerHTML = resultado.value;

    valor1.value = '';
    valor2.value = '';
    btnSomar.value = '';
    resultado.value = ''; */
})


btnSub.addEventListener("click", function(){
    let sub = Number(valor1.value) - Number(valor2.value)
    resultado.textContent = sub

    setTimeout (function(){
        document.getElementById("resultado").innerHTML = ("0")
    }, 2000);

    digitar1();
    digitar2();
    valor1.value = '';
    valor2.value = '';
})

btnMult.addEventListener("click", function(){
    let mult = Number(valor1.value) * Number(valor2.value)
    resultado.textContent = mult

    setTimeout (function(){
        resultado.textContent = 0;
    }, 2000);

    digitar1();
    digitar2();
    valor1.value = '';
    valor2.value = '';
})

btnDiv.addEventListener("click", function(){
    let div = Number(valor1.value) / Number(valor2.value)
    resultado.textContent = div

    digitar1();
    digitar2();
    limpar();
    sumir();
})