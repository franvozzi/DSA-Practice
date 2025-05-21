/**Invertir un string sin usar métodos de inversión
 * 
💬 Descripción
Escribí una función que reciba un string como parámetro y retorne un nuevo string con los caracteres en orden inverso.
No podés usar métodos como .reverse() ni .split() ni .join().

🧠 Requisitos
No se permite el uso de funciones o métodos nativos de JavaScript/TypeScript que inviertan directamente el string (como .reverse(), .split(), .join()).

La lógica debe implementarse manualmente, utilizando bucles y acceso por índices.

✨ Ejemplos
ts
Copiar código
reverseString("hola") ➞ "aloh"
reverseString("12345") ➞ "54321"
reverseString("a") ➞ "a"
reverseString("") ➞ ""
✅ Input
str: string de longitud n (0 ≤ n ≤ 10⁵)

Puede contener letras, números, símbolos, o espacios

✅ Output
Nuevo string con los caracteres de str en orden inverso
 * 
*/

function reversedString(str: string): string {
    // Inicializamos una variable para almacenar el resultado
    let reversed = '';
    
    // Iteramos desde el último carácter hasta el primero
    // str.length - 1 nos da el índice del último carácter
    // i >= 0 asegura que lleguemos hasta el primer carácter
    // i-- nos mueve de derecha a izquierda
    for (let i = str.length - 1; i >= 0; i--) {
        // Concatenamos cada carácter al resultado
        // str[i] accede al carácter en la posición i
        reversed += str[i];
    }
    
    // Retornamos el string invertido
    return reversed;
}

// Ejemplo de uso:
// reversedString("hola") -> "aloh"
// reversedString("12345") -> "54321"
// reversedString("a") -> "a"
// reversedString("") -> ""