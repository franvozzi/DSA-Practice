/*
Escribí una función que reciba un string comprimido en el formato "a3b2"
 y retorne el string expandido, repitiendo cada carácter la cantidad indicada.

*/

function expandCompressed(s: string): string {
    let result = "";
    for (let i = 0; i < s.length; i += 2) {
        const char = s[i];
        const count = parseInt(s[i + 1]);
        result += char.repeat(count);
    }

    return result;
}

console.log(expandCompressed("a3b2c1"));
console.log(expandCompressed("x1y0z5"));
console.log(expandCompressed("a1"));
console.log(expandCompressed(""));