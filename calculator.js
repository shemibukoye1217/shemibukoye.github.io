
let validResults = [];   // stores only the numeric (non-error) results
let keepGoing = true;
 
// Start the results table
document.write("<h2>Calculation Results</h2>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
 
while (keepGoing) {
 
  // Prompt 1: first number
  let xInput = prompt("Enter the first number (x):");
  if (xInput === null) {
    keepGoing = false;
    break;
  }
 
  // Prompt 2: operator
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) {
    keepGoing = false;
    break;
  }
 
  // Prompt 3: second number
  let yInput = prompt("Enter the second number (y):");
  if (yInput === null) {
    keepGoing = false;
    break;
  }
 

  let x = parseFloat(xInput);
  let y = parseFloat(yInput);
  let result;
 
  // Check for non-numeric input first
  if (isNaN(x) || isNaN(y)) {
    result = "Error: Non-numeric input";
  }
  // Check for a valid operator
  else if (operator !== "+" && operator !== "-" && operator !== "*" &&
           operator !== "/" && operator !== "%") {
    result = "Error: Invalid operator";
  }
  // Otherwise, do the math
  else {
    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        if (y === 0) {
          result = "Error: Division by zero";
        } else {
          result = x / y;
        }
        break;
      case "%":
        if (y === 0) {
          result = "Error: Division by zero";
        } else {
          result = x % y;
        }
        break;
    }
  }
 
  // Write this row to the results table
  document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" +
                  yInput + "</td><td>" + result + "</td></tr>");
 
  // Only keep numeric results for the summary table
  if (typeof result === "number") {
    validResults.push(result);
  }
}
 
document.write("</table>");
 
// Build the summary table from the valid numeric results
document.write("<h2>Summary of Valid Results</h2>");
 
if (validResults.length > 0) {
  let min = Math.min(...validResults);
  let max = Math.max(...validResults);
  let total = validResults.reduce((sum, val) => sum + val, 0);
  let avg = total / validResults.length;
 
  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" +
                  avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p>No valid calculations were performed.</p>");
}