// Defining Add, Subtract, Multipy & Divide functions for operation

const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b
};

const divide = function(a,b) {
    return (a / b).toFixed(5);
};

// Adding logic for operators "+, -, *, /"

const operators = function (a,o,b) {
        
    switch (o) {
        case "+": return add(a,b);
            
        case "-": return subtract(a,b);
            
        case "*": return multiply(a,b);
            
        case "/": return divide(a,b);

    }

}