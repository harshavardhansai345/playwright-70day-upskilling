// ==========================================
// DAY 3: FUNCTIONS, ARROW FUNCTIONS & SCOPE
// ==========================================

// ------------------------------------------
// 1. Hoisting Difference: Declaration vs Expression
// ------------------------------------------
console.log("Hoisted Declaration:", formatLocator("#username")); // Works!

function formatLocator(selector) {
  return `css=${selector}`;
}

// console.log(formatLocatorExpr("#password")); // ❌ ReferenceError (TDZ)
const formatLocatorExpr = function(selector) {
  return `css=${selector}`;
};

// ------------------------------------------
// 2. Refactoring to ES6 Arrow Functions
// ------------------------------------------

// Traditional Function
function calculateTimeout(retries, baseDelay) {
  return retries * baseDelay;
}

// Concise Arrow Function (Implicit Return)
const calculateTimeoutArrow = (retries, baseDelay = 1000) => retries * baseDelay;

console.log("Calculated Timeout:", calculateTimeoutArrow(3)); // 3000ms (uses default)

// ------------------------------------------
// 3. Rest Parameters (...args) vs Arguments Object
// ------------------------------------------
// Rest parameters collect indefinite arguments into a real array
const logTestSteps = (testName, ...steps) => {
  console.log(`\nTest Case: ${testName}`);
  steps.forEach((step, index) => {
    console.log(`  Step ${index + 1}: ${step}`);
  });
};

logTestSteps("Verify Checkout", "Navigate to Cart", "Apply Coupon", "Click Pay");

// ------------------------------------------
// 4. Lexical 'this' Demonstration
// ------------------------------------------
const testRunner = {
  suiteName: "Smoke Suite",
  tests: ["Login", "Search", "Logout"],
  
  // Traditional method using arrow function callback
  execute() {
    this.tests.forEach((test) => {
      // Arrow function preserves 'this.suiteName' from execute()
      console.log(`[${this.suiteName}] Running ${test}...`);
    });
  }
};

testRunner.execute();