const igual = document.querySelector('#igual');


igual.addEventListener('click', resultado)

function resultado(){
    const numero1 = parseInt(document.querySelector('#numero1').value);
    const numero2 = parseInt(document.querySelector('#numero2').value);
    const resultado = document.querySelector('#rellename');
    let operador = document.querySelector('#operador').value;
    if(operador == `*`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `+`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `-`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `/`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `**`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `sumar`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `restar`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `dividir`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `multiplicar`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `potencia`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `suma`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `resta`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `divicion`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `multiplicacion`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `potenciar`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `mas`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `menos`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `entre`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `por`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `elevado`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `Mas`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `Menos`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `Entre`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `Por`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `Elevado`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `Suma`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `Resta`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `Divicion`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `Multiplicacion`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `Potenciar`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `sumado`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `restado`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `dividido`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `multiplicado`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `potenciado`){
        resultado.textContent = numero1 ** numero2;
    }
    else if(operador == `SUMAR`){
        resultado.textContent = numero1 + numero2;
    }
    else if(operador == `RESTA`){
        resultado.textContent = numero1 - numero2;
    }
    else if(operador == `DIVIDIR`){
        resultado.textContent = numero1 / numero2;
    }
    else if(operador == `MULTIPLICAR`){
        resultado.textContent = numero1 * numero2;
    }
    else if(operador == `POTENCIAR`){
        resultado.textContent = numero1 ** numero2;
    }
    else{
        resultado.textContent = `operador invalido`
    }
    console.log(resultado)
}