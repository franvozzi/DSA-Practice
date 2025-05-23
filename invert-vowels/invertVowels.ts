// Función que invierte las vocales en una cadena de texto
function reverseVowels(s: string): string {
    // Conjunto que contiene todas las vocales (mayúsculas y minúsculas)
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Convertir la cadena en un array de caracteres para poder modificarla
    let char = s.split("");

    // Inicializar punteros para el inicio y final de la cadena
    let left = 0;
    let right = char.length - 1;

    while (left < right) {
        // Si el carácter de la izquierda no es una vocal, avanzar
        if(!vowels.has(char[left])) {
            left++;
            continue
        }
        // Si el carácter de la derecha no es una vocal, retroceder
        if(!vowels.has(char[right])) {
            right--;
            continue
        }
        // Intercambiar las vocales encontradas
        [char[left], char[right]] = [char[right], char[left]];
        left++;
        right--;
    }
    // Unir el array de caracteres de nuevo en una cadena
    return char.join("");
}

// Ejemplo de uso
console.log(reverseVowels("hello"));