function capitalizeWords(str: string): string {
    const words = str.trim().split(/\s+/);
    let result: string[ ]= [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalized);
    }

    return result.join(" ");
}

console.log(capitalizeWords("hola  fran"))