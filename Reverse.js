function invertString(inputString) {
    let invertedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        invertedString += inputString[i];
    }
    return invertedString;
}

function reverseString() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite uma string para inverter: ', (inputString) => {
        const invertedString = invertString(inputString);
        console.log(`String invertida: ${invertedString}`);
        readline.close();
    });
}

reverseString();