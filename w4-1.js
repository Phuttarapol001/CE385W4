function operation (type, a, b) {
    if(type === "add") {
        return a + b;
    }
    else if(type === "subtract") {
        return a - b;
    }
    else if(type === "multiply") {
        return a * b;
    }
    else if(type === "divide") {
        return a / b;
    }
    else {
        return "Invalid operation type";
    }
}


console.log(operation("add", 4, 5));        // Ans 9
console.log(operation("subtract", 10, 3));  // Ans 7
console.log(operation("multiply", 5, 6));   // Ans 30
console.log(operation("divide", 8, 2));     // Ans 4
console.log(operation("mod", 8, 2));      // Ans Invaild operation
