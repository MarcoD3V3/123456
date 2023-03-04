const enviar = document.querySelector('#enviar');
enviar.addEventListener('click', imprimir);

function imprimir(e) {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value;
    const fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#contraseña').value;
    if(nombre == ''){
        alert('El nombre es obligatorio')
    }else if(fechaNacimiento == ''){
        alert('la fecha de nacimiento es obligatoria')
    }else if(email == ''){
        alert('el email es obligatorio')
    }else if(contraseña == ''){
        alert('el password es obligatorio')
    }else if(nombre == 'marco'){
        console.log('hola marco')
    }

    if(fechaNacimiento < 18 || !fechaNacimiento){
        alert('no puedes entrar a la disco')
        console.log('estas afuera de la disco')
    }else{
        alert('si puedes entrar a la disco')
    }
    console.log("HOLA " + nombre + " como estas... tu fecha de nachimiento es el " + fechaNacimiento +' y tu correo es '+ email +' y tu password es: '+ contraseña)
}

