class Calculator {
    leftOperand = 0;
    rightOperand = 0;

    read() {
        this.leftOperand = prompt('Enter first value') || this.leftOperand;
        this.rightOperand = prompt('Enter second value') || this.rightOperand;
    }

    add() {
        return this.leftOperand + this.rightOperand;
    }

    subtract() {
        return this.leftOperand - this.rightOperand;
    }

    multiply() {
        return this.leftOperand * this.rightOperand;
    }

    divide() {
        return this.leftOperand / this.rightOperand;
    }
}

var calculator = new Calculator();
calculator.read();

console.log('Sum = ' + calculator.add());
console.log('Min = ' + calculator.subtract());
console.log('Mul = ' + calculator.multiply());
console.log('Div = ' + calculator.divide());
