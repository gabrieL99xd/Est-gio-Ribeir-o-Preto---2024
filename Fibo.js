function isFibonacci(number) {
    let a = 0;
    let b = 1;

    while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === number;
}

function checkFibonacci() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (inputNumber) => {
        inputNumber = parseInt(inputNumber);

        if (isNaN(inputNumber)) {
            console.log("Por favor, digite um número válido.");
            readline.close();
            return;
        }

        if (isFibonacci(inputNumber)) {
            console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
        }
        readline.close();
    });
}

checkFibonacci();
