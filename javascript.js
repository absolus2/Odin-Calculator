function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}

function operate(a, b, operator){
    switch(operator){
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b)
    }
}

const btns = document.querySelectorAll('.btn-calc');
const display = document.querySelector('.calculator-display');

let n = [];
let operator = [];
btns.forEach(btn => btn.addEventListener('click', function(e){
    if(e.target.value === 'clear'){
        display.textContent = ''
        n = [];
        operator = [];
    }else{

        display.textContent += e.target.value
        if(e.target.value !== '='){
            n.push(e.target.value)
        }
        if(btn.value === '+' || btn.value === '-' || btn.value === '*' ||
        btn.value === '/'){ 
            operator.push(btn.value)
        }
        let a = Number(n.slice(0, n.indexOf(operator)-1).join(''))
        let b = Number(n.slice(n.indexOf(operator)).join(''))
        let op = operator[0]
        if(btn.value === '='){
            display.textContent = operate(a, b, op);
        }
    }
}))

