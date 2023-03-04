const btn_login = document.querySelector('#btn-login');


btn_login.addEventListener('click', logueado);


function logueado(e){
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if(username === 'admin' && password === 'admin'){
        window.location.href = 'admin_area.html';
    }
    else{
        window.location.href = 'usuario_nuevo.html';
    }
}
