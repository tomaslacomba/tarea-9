
function calcularAreaCirculo(radio) {
    
    return Math.PI * Math.pow(radio, 2);
}

let radio = 5;
let area = calcularAreaCirculo(radio);
console.log(`El área del círculo con radio ${radio} es ${area}`);
