function compressingStrings(s: string): string {
    //Se espera recibir un string y devolver un string comprimido
    //Devolver la cantidad de veces que se repite un caracter
    let count = 1;
    let result = "";

    for (let i = 0; i < s.length; i ++) {
        if (s[i] === s[i + 1]) { //Detección de caracteres consecutivos
            count++
        } else {
            result += s[i] + count; //Sino, se agrega el caracter y la cantidad de veces que se repite
            count = 0;
        }
    }

    result += s[s.length - 1] + count;

    return result;
}

console.log(compressingStrings("aaabbbcccaaa"));