function countPecahan(uang) {
    let pecahan = [100000, 50000, 20000, 5000, 100, 50];
    let totalPecahan = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < pecahan.length; i++) {
        totalPecahan[i] = Math.floor(uang / pecahan[i]);
        uang %= pecahan[i];
    }

    return totalPecahan;
}

let totalUang = 1575250;
let totalPecahan = countPecahan(totalUang);

console.log("Total Pecahan Rp. 100.000: " + totalPecahan[0]);
console.log("Total Pecahan Rp. 50.000: " + totalPecahan[1]);
console.log("Total Pecahan Rp. 20.000: " + totalPecahan[2]);
console.log("Total Pecahan Rp. 5.000: " + totalPecahan[3]);
console.log("Total Pecahan Rp. 100: " + totalPecahan[4]);
console.log("Total Pecahan Rp. 50: " + totalPecahan[5]);
