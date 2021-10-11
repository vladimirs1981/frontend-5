class Calculator {
    constructor(previousNumberTextElement, currentNumberTextElement) {
        this.previousNumberTextElement = previousNumberTextElement;
        this.currentNumberTextElement = currentNumberTextElement;
        this.reset();
    }
    //clear screen
    reset() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
    }
    //backspace
    delete() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }
    //append number to screen
    addNumberToScreen(number) {
        //prevent '.' multiple times
        if (number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber = this.currentNumber.toString() + number.toString();
    }

    chooseOperation(operation) {
        //prevent opration if there is no number
        if (this.currentNumber === '') return;
        //do calculation if operation button is clicked
        if (this.currentNumber != '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    calculate() {
        let calculation;

        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        //check for numbers
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case '*':
                calculation = prev * current;
                break;
            case '/':
                calculation = prev / current;
                break;
            default:
                return;
        }
        this.currentNumber = calculation;
        this.operation = undefined;
        this.previousNumber = '';
    }

    updateScreen() {
        currentNumberTextElement.innerText = this.currentNumber;
        if (this.operation != null) {
            previousNumberTextElement.innerText = `${this.previousNumber} ${this.operation} `;
        } else {
            previousNumberTextElement.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalButton = document.querySelector('[data-equal]');
const previousNumberTextElement = document.querySelector(
    '[data-previous-number]'
);
const currentNumberTextElement = document.querySelector(
    '[data-current-number]'
);

const calculator = new Calculator(
    previousNumberTextElement,
    currentNumberTextElement
);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.addNumberToScreen(button.innerText);
        calculator.updateScreen();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateScreen();
    });
});

equalButton.addEventListener('click', (button) => {
    calculator.calculate();
    calculator.updateScreen();
});

resetButton.addEventListener('click', (button) => {
    calculator.reset();
    calculator.updateScreen();
});

deleteButton.addEventListener('click', (button) => {
    calculator.delete();
    calculator.updateScreen();
});
