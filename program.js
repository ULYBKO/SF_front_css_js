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






