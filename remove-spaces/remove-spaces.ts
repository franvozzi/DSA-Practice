function removeSpaces(str: string): string {
    let textWithSpaces = str
    let textWithoutSpaces = str.replace(/\s/g, "");

    console.log(textWithoutSpaces);
    return(textWithoutSpaces)
}

console.log(removeSpaces("hola mundo"))