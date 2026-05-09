const display = document.querySelector('#display');

// 1. Keyboard Support
window.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '(', ')', '%'].includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clearValue();
    }
});

// 2. Optimized Append with Validation
function appendValue(val) {
    const operators = ['+', '-', '*', '/', '%', '.'];
    const lastChar = display.innerText.slice(-1);

    // Prevent starting with an operator (except minus)
    if (display.innerText === '0' && operators.includes(val) && val !== '-') return;

    // Prevent double operators
    if (operators.includes(val) && operators.includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + val;
        return;
    }

    if (display.innerText === '0' || display.innerText === 'ERROR!') {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

function appendPI() {
    if (display.innerText === '0') {
        display.innerText = Math.PI.toFixed(4);
    } else {
        display.innerText += Math.PI.toFixed(4);
    }
}

function clearValue() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateSqrt() {
    try {
        const result = Math.sqrt(eval(display.innerText));
        display.innerText = isNaN(result) ? "ERROR!" : parseFloat(result.toFixed(8));
    } catch {
        display.innerText = "ERROR!";
    }
}

function calculate() {
    try {
        // Replace visual x and ÷ with math operators if you used them, 
        // though our code uses * and / directly.
        let result = eval(display.innerText);
        
        // Handle long decimals
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(8));
        }
        
        display.innerText = result;
    } catch {
        display.innerText = 'ERROR!';
    }
}