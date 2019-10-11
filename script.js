window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let result = document.querySelector('.container-result'),
        buttons = document.querySelectorAll('.digit'),
        deleteButton = document.querySelector('.row-delete'),
        equal = document.getElementById('result');
    
    
        buttons.forEach(function(button){
            button.addEventListener('click', setValue);
        })
    
        deleteButton.addEventListener('click', clearValue);
        equal.addEventListener('click', calcResult);
    
        function setValue() {
            result.textContent += this.textContent;
        }
    
        function clearValue() {
            result.innerHTML = "";
        }
    
        function calcResult() {
            if ((eval(result.innerHTML)) != parseInt) {
                result.innerHTML = (eval(result.innerHTML)).toFixed(2)
            }
            result.innerHTML = eval(result.innerHTML);
        }
    
    }); 
      