var ch = 0;
var nch = 0;

var massiv = prompt('Введите массив чисел через запятую (например, 1,2,3):');
var masArray = massive.split(',');

var mas = masArray.map(function (item) {
    return parseFloat(item);
});

function abMas() {
    for (var i = 0; i < mas.length; i++) {
        if (typeof(mas[i])=='number') {
            if (mas[i] % 2 == 0) {
                ch=ch+1;
    
            } else {
                nch =nch + 1;
            }
        } else {
        console.log(mas[i]);
        }
    }
    console.log(ch);
    console.log(nch);
}

abMas();





//второе задание
var inbCh = prompt('Введите число от 0 до 1000:');

var number = parseInt(inbCh);

function isPrimeNumber(number) {
    if (number <= 1 || number > 1000) {
        console.log("Данные неверны. Введите число от 2 до 1000.");
        return;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(number + " - не является простым числом.");
            return;
        }
    }

    console.log(number + " - простое число.");
}


isPrimeNumber();




//третье задание
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

// Пример использования:
var addFive = createAdder(5);
var result = addFive(3);

console.log(result);



//четвертое задание
var a = prompt("Введите a:");
var b = prompt("Введите b:");

// Преобразуем введенные значения в числа
a = parseFloat(a);
b = parseFloat(b);

const intervalId = setInterval(function () {
    console.log(a, b);
}, 1000);

// Остановка интервала через 5 секунд
setTimeout(function () {
    clearInterval(intervalId);
}, 5000);


//пятое задание
var x = prompt("Vvedite x");
var n = prompt("Vvedite n");
x = parseInt(x);
n = parseInt(n);

const power = (x, n) => {
    return Math.pow(x, n);
};

// Пример использования:
const result = power(x, n);
console.log(result);






