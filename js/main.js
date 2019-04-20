
document.getElementById('btnRegister').addEventListener("click", function(){
  document.getElementById('registerUser').style.transform = 'translateX(0%)';
});

document.getElementById('registerClose').addEventListener("click", function(){
  document.getElementById('registerUser').style.transform = 'translateX(100%)';
});

document.getElementById('btnLogin').addEventListener("click", function(){
  document.getElementById('logIn').style.transform = 'translateX(0%)';
});

document.getElementById('loginClose').addEventListener("click", function(){
  document.getElementById('logIn').style.transform = 'translateX(100%)';
});

document.getElementById('btnMenu').addEventListener("click", close);

document.getElementById('menuClose').addEventListener("click", function(){
  document.getElementById('mainMenu').style.transform = 'translateX(100%)';
});

function close(){
  document.getElementById('mainMenu').style.transform = 'translateX(0%)';
}



