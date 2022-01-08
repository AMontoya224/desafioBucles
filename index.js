console.log("1. Imprimir impares 1-20");
for (let i=1; i<=20; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

console.log("2. Disminuir múltiplos de 3");
for (let i=100; i>=0; i--){
    if (i % 3 === 0){
        console.log(i);
    }
}

console.log("3. Imprime la secuencia");
let i = 4;
while(i>-4) {
    console.log(i);
    i = i-1.5;
}

console.log("4. Sigma");
let sum = null;
for (let i=1; i<=100; i++){
    sum = sum + i;
}
console.log(sum);

console.log("5. Factorial");
let product = 1;
for (let i=1; i<=12; i++){
    product = product * i;
}
console.log(product);