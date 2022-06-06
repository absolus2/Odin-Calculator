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
    if(a === 0|| b === 0){
        return alert(`Can't divide by zero!`)
    }
    if(Math.floor(a/b) === a/b){
        return a / b
    }else{
        return Math.round(a/b)
    }
    
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

let numbers = [];
let operator = [];
const operators = ['-', '/', '*', '+']


window.addEventListener('keydown', function(e){
    console.log(e.code)
    let code  = e.code
    keyClick(code)
    
})

function keyClick(code){
    switch(code){
        case 'Digit7': document.querySelector('#buttonSeven').click();break;
        case 'Digit8': document.querySelector('#buttonEight').click();break;
        case 'Digit9': document.querySelector('#buttonNine').click();break;
        case 'Digit6': document.querySelector('#buttonSix').click();break;
        case 'Digit5': document.querySelector('#buttonFive').click();break;
        case 'Digit4': document.querySelector('#buttonFour').click();break;
        case 'Digit3': document.querySelector('#buttonThree').click(); break;
        case 'Digit2': document.querySelector('#buttonTwo').click();break;
        case 'Digit1': document.querySelector('#buttonOne').click();break;
        case 'Digit0': document.querySelector('#buttonZero').click();break;
        case 'NumpadAdd': document.querySelector('#add').click();break;
        case 'NumpadSubtract': document.querySelector('#substract').click();break;
        case 'Slash': document.querySelector('#substract').click();break;
        case 'NumpadMultiply': document.querySelector('#multiply').click();break;
        case 'NumpadDivide': document.querySelector('#divide').click();break;
        case 'Enter': document.querySelector('#equal').click();break;
    }
}

btns.forEach(btn => btn.addEventListener('click', function(e){
    let button = e.target;
    display.textContent += button.value;

    if(button.classList.contains('operator')){
        if(operator[0]){
            calculate(button.value)
        }
    }

    if(button.value !== '=' && button.value !== 'clear'){
        if(operators.includes(button.value)){
            operator.push(button.value)
        }
        numbers.push(button.value)
    }
    
    if(button.value === 'clear'){
        setDefault()
    }

    if(button.value === '='){
       calculate(button.value)
    }
    
}))

function calculate(button){
    if(button === '='){
        let n = splitByOperator(numbers, operator)
        display.textContent = operate(n[0], n[1], operator[0]);
        numbers = [operate(n[0], n[1], operator[0])]
        operator = [];
    }else{
        let n = splitByOperator(numbers, operator)
        numbers = [operate(n[0], n[1], operator[0])]
        display.textContent = `${operate(n[0], n[1], operator[0])} ${button}`;
        operator = [];
    }
}

function splitByOperator(array, operator){
    let newArray = []
    newArray.push(Number(array.slice(0, array.indexOf(operator[0])).join('')));
    newArray.push(Number(array.slice(array.indexOf(operator[0]) +1).join('')));
    return newArray
}

function setDefault(){
    display.textContent = '';
    numbers = [];
    operator = [];
}

// Works but looks ugly, gonna try to improve it
/* btns.forEach(btn => btn.addEventListener('click', function(e){
    let a = Number(n.slice(0, n.indexOf(operator[0])).join(''));
    let op = operator[0];
    let b = Number(n.slice(n.indexOf(op)+1).join(''));
    console.log(op, operator, n);
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
            if(operator.includes('-')||operator.includes('+')||
            operator.includes('/')||operator.includes('*')){
                n = [operate(a, b, op), btn.value]
                display.textContent = `${n.join('')}`;
                operator = [];
            }
            operator.push(btn.value)
        }
     
        if(btn.value === '='){
            n = [operate(a, b, op)]
            display.textContent = `${n.join('')}`;
            operator = [];
        }
    }
}))
 */
