//1-ое задание классы
class NumberAnalyzer {
    constructor(massive) {
        this.massive = massive;
        this.ch = 0;
        this.nch = 0;
        this.mas = this.parseArray();
    }

    parseArray() {
        const masArray = this.massive.split(',');
        return masArray.map(item => parseFloat(item));
    }

    analyzeNumbers() {
        for (let i = 0; i < this.mas.length; i++) {
            if (typeof(this.mas[i]) === 'number') {
                if (this.mas[i] % 2 === 0) {
                    this.ch++;
                } else {
                    this.nch++;
                }
            } else {
                console.log(this.mas[i]);
            }
        }
        console.log("Четные: " + this.ch);
        console.log("Нечетные: " + this.nch);
    }
}



//2-ое задание классы
class PrimeNumberChecker {
    constructor() {
        this.number = this.getInputNumber();
    }

    getInputNumber() {
        const input = prompt('Введите число от 0 до 1000:');
        return parseInt(input);
    }

    isPrimeNumber() {
        if (this.number <= 1 || this.number > 1000 || isNaN(this.number)) {
            console.log("Данные неверны. Введите число от 2 до 1000.");
            return;
        }

        for (let i = 2; i <= Math.sqrt(this.number); i++) {
            if (this.number % i === 0) {
                console.log(this.number + " - не является простым числом.");
                return;
            }
        }

        console.log(this.number + " - простое число.");
    }
}

//3-е задание классы
class AdderCreator {
    constructor(x) {
        this.x = x;
    }

    createAdder() {
        return function(y) {
            return this.x + y;
        }.bind(this);
    }
}



//4-ое задание классы
class NumberPrinter {
    constructor(a, b) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.intervalId = null;
    }

    startPrinting() {
        this.intervalId = setInterval(() => {
            console.log(this.a, this.b);
        }, 1000);

        setTimeout(() => {
            this.stopPrinting();
        }, 5000);
    }

    stopPrinting() {
        clearInterval(this.intervalId);
        console.log("Интервал остановлен.");
    }





// 5-ое задание классы
class PowerCalculator {
    constructor(x, n) {
        this.x = parseInt(x);
        this.n = parseInt(n);
    }

    calculatePower() {
        return Math.pow(this.x, this.n);
    }
}
