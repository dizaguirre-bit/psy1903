// function celsiusToFahrenheit(celsius) {
//     let celsiusToFahrenheit = (celsius * 1.8) + 32
//     return celsiusToFahrenheit
// }
// console.log(celsiusToFahrenheit(10)); // Expected output: 50
// console.log(celsiusToFahrenheit(-5)); // Expected output: 23

function convertTemp(temp, convertTo) {
    if (convertTo == 'c') {
        let convertTemp = (temp * 1.8) + 32;
        return convertTemp
    }

    else if (convertTo == 'f') {
        let convertTemp = (temp - 32) / 1.8;
        return convertTemp
    }
}

console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
console.log(convertTemp(10, 'f')); // Expected output: 50