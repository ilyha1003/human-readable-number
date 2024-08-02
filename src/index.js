module.exports = function toReadable (number) {
    const numbersObject = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "hundred"
    }

    switch(number.toString().length) {
        case 1: 
            return number ? numbersObject[number] : 'zero'; 
        case 2: 
            return (number > 20 ? numbersObject[number - number%10] + ' ' + (number%10 === 0 ? '' : numbersObject[number%10]) : numbersObject[number]).trim();
        case 3:
            return (numbersObject[Math.floor(number/100)] + ' ' + numbersObject[100] + ' ' + (number%100 > 20 ? numbersObject[number%100 - number%100%10] + ' ' + (number%100%10 === 0 ? '' : numbersObject[number%100%10]) : (number%100 >= 10 ? numbersObject[number%100] : (number%100 ? numbersObject[number%100%10] : '')))).trim(); 
    }
}