function removeVowels(str: string): string {
    let vowels = ["a", "e", "i", "o", "u"]
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        if(!vowels.includes(str[i].toLowerCase())) {
            newString += str[i]
        }
    }

    return newString
}