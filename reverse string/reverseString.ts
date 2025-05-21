function reverseString (str: string): string {
    const reversed = str.split("").reverse().join("")
    return reversed
}

const result = reverseString("fran")
console.log(result)

