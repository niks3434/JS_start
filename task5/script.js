const  testTextField = document.querySelector('#duplicateField');
const  input = document.querySelector('input');
input.addEventListener('input', function() {
    testTextField.textContent = input.value;
});

document.querySelector('#button').addEventListener('click', 
  (event) => {
    event.preventDefault();
    console.log(input.value);
    input.value = '';
    testTextField.textContent = '';
});
