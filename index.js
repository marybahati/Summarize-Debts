const fs = require("fs"); // Import the fs module to read file contents

const summarizeDebts = (inputFile) => {
  const debts = {}; // Create an empty object to store debts information
  const summarizeDebts = []; // Create an empty array to store the summarized debts
  const inputLines = fs.readFileSync(inputFile, "utf8").split("\n"); // Read the file and split into an array of lines using the newline character ('\n')

  for (const line of inputLines) {
    if (line.trim() === "") continue; // Skip any empty lines

    const [borrower, lender, amount] = line.trim().split(",");
    if (!borrower || !lender || !amount) continue; // Skip any invalid lines (lines with missing information)

    // Create nested objects in the debts object to store the debt information
    if (!debts[borrower]) debts[borrower] = {};
    if (!debts[borrower][lender]) debts[borrower][lender] = 0;

    debts[borrower][lender] += parseFloat(amount); // Add the debt amount to the corresponding borrower and lender
  }

  for (const borrower in debts) {
    for (const lender in debts[borrower]) {
      let amount = debts[borrower][lender].toFixed(2); // Format the debt amount to two decimal places
      summarizeDebts.push(`${borrower},${lender},${amount}`); // Push the formatted string to the summarizeDebts array
    }
  }

  return summarizeDebts.join("\n"); // Join the summarized debts array into a string using newline character as separator
};

module.exports = summarizeDebts;

const inputFilePath = "./input.csv";
const summary = summarizeDebts(inputFilePath);
console.log(summary);

