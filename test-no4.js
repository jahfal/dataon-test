let angka = 1225441;
let angkaString = angka.toString();
let output = "";

for (let i = 0; i < angkaString.length; i++) {
  let digit = parseInt(angkaString[i], 10);
  let placeValue = Math.pow(10, angkaString.length - i - 1);
  output += digit * placeValue + "\n";
}

console.log(output);
