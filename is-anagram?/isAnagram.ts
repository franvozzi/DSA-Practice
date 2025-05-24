function isAnagram(s:string, t: string): boolean {
    if (s.length == t.length) { //Si la longitud es igual, continuar
        const sArray = s.split(""); //split de primer palabra a array
        const tArray = t.split("") //split de segunda palabra a array

        return sArray.sort().join("") == tArray.sort().join("") //comparamos las palabras ordenadas (letra por letra), si son iguales return true
    }
    return false; //si no son iguales, return false
}

console.log(isAnagram("anagram", "nagaram"))