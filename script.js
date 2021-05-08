class Calculator {
constructor(previousOperandTextElement, currentOperandTextElement) {
this.previousOperandTextElement = previousOperandTextElement
this.currentOperandTextElement = currentOperandTextElement
}

clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNan(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
        computation = prev + current
        break
        case '-':
        computation = prev - current
        break
        case '*':
        computation = prev * current
        break
        case '/':
        computation = prev / current
        break
    }
   
}

updatedisplay() {
this.currentOperandTextElement.innerText = this.currentOperand
this.previousOperandTextElement.innerText = this.previousOperand
}
}

const numberButtons = document.querySelectorAll('[data-number]')
const numberButtons = document.querySelectorAll('[data-number]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector(
    '[data-previous-operand]')
    const currentOperandTextElement = document.querySelector(
        '[data-current-operand]')

        const calculator = new Calculator(previousOperandTextElement, 
            currentOperatorTextelElement)

            numberButtons.forEach(button => {
                button.addEventListener('click',() => {
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
            })
         })
            operationButtons.forEach(button => {
                button.addEventListener('click',() => {
                calculator.chooseOperation(button.innerText)
                calculator.updateDisplay()
            })
        })

        equalsButton.addEventListener('click',() => {
            calculator.compute()
            calculator.updatedisplay()
        })
        
        allClearButton.addEventListener('click',() => {
            calculator.clear()
            calculator.updatedisplay()
        })

        deleteButton.addEventListener('click',() => {
            calculator.delete()
            calculator.updatedisplay()
        })