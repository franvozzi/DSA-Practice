/**💬 Descripción
Escribí una función que determine si un string es un palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda.

La comparación debe ignorar mayúsculas/minúsculas y espacios.

🧠 Requisitos
El algoritmo debe ser sensible a letras y números, pero ignorar espacios y no distinguir entre mayúsculas y minúsculas.

No se requiere eliminar signos de puntuación (eso puede ser parte de un extra opcional).
 * 
 */

export function isPalindrome(str: string): boolean {
    let normalized = str.toLowerCase().replace(/ /g, "");
    let i = 0;
    let j = normalized.length - 1;

    while (i < j) {
        if (normalized[i] !== normalized[j]) {
            return false
        }
        i++;
        j--;
    }
    return true
} 