class Calculator {
    leftOperand = 0;
    rightOperand = 0;

    read() {
        var inputLeftOperand = prompt('Enter first value');
        var inputRightOperand = prompt('Enter second value');
        this.leftOperand = inputLeftOperand ? Number(inputLeftOperand) : this.leftOperand;
        this.rightOperand = inputRightOperand ? Number(inputRightOperand) : this.rightOperand;
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
