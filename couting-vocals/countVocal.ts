/**
 * 💬 Descripción
Escribí una función que reciba un string y retorne la cantidad total de vocales que contiene.
Debe contar tanto mayúsculas como minúsculas.


 */
function countVocal (str: string): number {
    let vowels = ["a", "e", "i", "o", "u"]
    let lowercaseString = str.toLowerCase()
    let count = 0

    for (let i = 0; i < lowercaseString.length ; i++) {
        if (vowels.includes(lowercaseString[i])) {
            count++
        }
    }

    return count
}

console.log(countVocal("Hola mundo"));  // 4
console.log(countVocal("XYZ"));         // 0
console.log(countVocal(""));            // 0
console.log(countVocal("Vocales"));     // 3

