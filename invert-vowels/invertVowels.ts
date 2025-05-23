function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let char = s.split("");

    let left = 0;
    let right = char.length - 1;

    while (left < right) {
        if(!vowels.has(char[left])) {
            left++;
            continue
        }
        if(!vowels.has(char[right])) {
            right--;
            continue
        }
        [char[left], char[right]] = [char[right], char[left]];
        left++;
        right--;
    }
    return char.join("");
}

console.log(reverseVowels("hello"));