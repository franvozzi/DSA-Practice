import { isPalindrome } from './palindrome';

// Test cases for palindromes
const testCases = [
    { input: "racecar", expected: true, description: "Simple palindrome" },
    { input: "madam", expected: true, description: "Another palindrome" },
    { input: "level", expected: true, description: "Palindrome with even length" },
    { input: "deed", expected: true, description: "Another even-length palindrome" },
    { input: "a", expected: true, description: "Single character palindrome" },
    { input: "", expected: true, description: "Empty string" },
    { input: "not a palindrome", expected: false, description: "Non-palindrome" },
    { input: "A man a plan a canal Panama", expected: true, description: "Palindrome with spaces" },
    { input: "Was it a car or a cat I saw", expected: true, description: "Palindrome with spaces and mixed case" },
    { input: "12321", expected: true, description: "Numeric palindrome" },
    { input: "hello", expected: false, description: "Non-palindrome word" }
];

// Run tests
console.log("🧪 Running tests for isPalindrome function:\n");

testCases.forEach((test, index) => {
    const result = isPalindrome(test.input);
    const passed = result === test.expected;
    
    console.log(`Test ${index + 1}: ${test.description}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Got: ${result}`);
    console.log(`Status: ${passed ? "✅ PASSED" : "❌ FAILED"}`);
    console.log("-------------------\n");
}); 