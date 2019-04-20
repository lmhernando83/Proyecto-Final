
document.getElementById('addTask').addEventListener("click", function(){
  document.getElementById('newTask').style.transform = 'scale(1)';
});

document.getElementById('taskClose').addEventListener("click", function(){
  document.getElementById('newTask').style.transform = 'scale(0)';
});

document.getElementById('assigTask').addEventListener("click", function(){
  document.getElementById('assignedTask').style.transform = 'scale(1)';
});

document.getElementById('taskClose').addEventListener("click", function(){
  document.getElementById('assignedTask').style.transform = 'scale(0)';
});
