document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    alert('Метод для Вывода в консоль');
    console.log('Приветик!');
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Метод для Вывода в alert');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    console.log(prompt('Метод для Ввода в prompt'));
})