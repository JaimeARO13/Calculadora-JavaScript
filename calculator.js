//Definición de variables

const operation = document.getElementById("operation");
const result = document.getElementById("result");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const allClear = document.getElementById("allClear");
const del = document.getElementById("del");
const minusButton = document.getElementById("plus-minus");

//Eventos para los botones numéricos
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Máximo número el la pantalla de operación
        if (operation.textContent.length <= 15) {
            //Para evitar escribir dos puntos seguidos
            if (button.innerText === '.' && operation.textContent.includes('.')) {}
            else {
                operation.textContent = operation.textContent + button.innerText;
            }
        }
    })
})

minusButton.addEventListener("click", () => {
    operation.textContent = operation.textContent + '-';
})


//Eventos para los botones de operaciones
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        //No se podrá imprimir dos veces el signo del operando
        if (operation.textContent.includes(button.innerText)) {}
        else {
            operation.textContent = operation.textContent + button.innerText;
        }
    })
});

function selectOperation(operation){
    //Proceso si se solicita una potencia
    if (operation.includes('^')) {
        base = operation.toString().slice(0,operation.toString().indexOf("^"));
        exponent = operation.toString().slice(operation.toString().indexOf("^")+1);
        resultofOperation = Math.pow(base,exponent);
        //Proceso si se solicita raiz cuadrada
    } else if (operation.includes('√')) {
        number = operation.toString().slice(operation.toString().indexOf("√")+1);
        resultofOperation  = Math.sqrt(number);
        //Proceso si se requiere el residuao de una división y otras operaciones básicas
    } else {
        resultofOperation = eval(operation);
    }
    return resultofOperation;
}

//Evento del botrón igual
equalsButton.addEventListener("click", () => {
    selectOperation(operation.textContent);
    //Para evitar que exceda el tamaño de la pantalla
    result.textContent = resultofOperation.toString().slice(0,11);
})

//Evento del botón borrar todo
allClear.addEventListener("click",() => {
    operation.textContent = '';
    result.textContent = '';
})

//Evento del boton borrar último dígito
del.addEventListener("click", () => {
    operation.textContent = operation.textContent.toString().slice(0,-1);
})