/**
 * Escribí una función que reciba un string y retorne true si es una palabra
 * compuesta únicamente por letras, false en caso contrario.
 * 
 * isOnlyletters("abc") ➞ true
 * isOnlyletters("123") ➞ false
 * isOnlyletters("abc123") ➞ false
 * isOnlyletters("abc123!") ➞ false
 */

function isOnlyletters(s: string): boolean {
    return /^[a-zA-Z]+$/.test(s);
}

console.log(isOnlyletters("abc"));
console.log(isOnlyletters("123"));
console.log(isOnlyletters("abc123"));
console.log(isOnlyletters("abc123!"));
console.log(isOnlyletters("abc123!"));