const notepad = document.getElementById("notepad");

// Mapping: real letter → wrong letter/symbol
const wrongMap = {
    'a': '@', 'b': '#', 'c': '$', 'd': '%', 'e': '^',
    'f': '&', 'g': '*', 'h': '!', 'i': '(', 'j': ')',
    'k': '-', 'l': '+', 'm': '=', 'n': 'b', 'o': '{',
    'p': '}', 'q': '[', 'r': ']', 's': ':', 't': ';',
    'u': '"', 'v': '<', 'w': '>', 'x': '/', 'y': '?',
    'z': '~'
};

let lastWrong = ""; // To avoid repeating the same wrong character

notepad.addEventListener("input", function (event) {
    let inputText = notepad.value;
    let lastChar = inputText[inputText.length - 1];

    // Convert to lowercase for mapping
    let lower = lastChar.toLowerCase();

    if (wrongMap[lower]) {
        let wrongChar = wrongMap[lower];

        // Make sure it's not the same as the last wrong char
        if (wrongChar === lastWrong) {
            // If it's the same, replace with a random wrong character
            let keys = Object.values(wrongMap);
            wrongChar = keys[Math.floor(Math.random() * keys.length)];
        }

        lastWrong = wrongChar;

        // Replace last typed char with wrong char
        notepad.value = inputText.slice(0, -1) + wrongChar;
    }
});