const signin = document.querySelector('#signin');
var formulario = document.getElementById('formulario');
const signup = document.querySelector('#signup');
var formulario2 = document.getElementById('formulario2');
var container = document.querySelector('.container');
var espacioforgot = document.querySelector("#botonn");


signin.addEventListener('click',function(){
signup.classList.remove('signup-activo');
signin.classList.add('signin-activo');
signup.setAttribute("style", "color: rgb(255, 255, 255);");
if(document.getElementsByClassName('signin-activo')){
    formulario2.setAttribute("style", "display:none;");
    espacioforgot.setAttribute("style", " margin: 12px 0 130px 0;");
    signin.setAttribute("style", "color: #00a6e0;");
    formulario.setAttribute("style", "display:block;");
}else{
    formulario2.setAttribute("style", "display:block;");
}
});

signup.addEventListener('click', function(){
signup.classList.add('signup-activo');
signin.classList.remove('signin-activo');
signin.setAttribute("style", "color: rgb(255, 255, 255);");
if(document.getElementsByClassName('signup-activo')){
    formulario.setAttribute("style", "display:none;");
    espacioforgot.setAttribute("style", " margin: 12px 0 58px 0;");
    signup.setAttribute("style", "color: #00a6e0;");
    formulario2.setAttribute("style", "display:block;");
}else{
    formulario.setAttribute("style", "display:block;");
}
});

