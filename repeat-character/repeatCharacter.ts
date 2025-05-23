function repeatChars(str: string, n: number): string {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(n);
    }
    return result;
}

console.log(repeatChars("Hola", 20))