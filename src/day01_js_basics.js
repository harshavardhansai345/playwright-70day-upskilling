// ==========================================
// DAY 1: JS SCOPE, VARIABLES & TYPES
// ==========================================

// ------------------------------------------
// 1. Scope & Hoisting Demonstration
// ------------------------------------------
function scopeTest() {
  if (true) {
    var functionScopedVar = "I leak outside the block!";
    let blockScopedLet = "I stay inside this block!";
    const blockScopedConst = "I also stay inside!";
  }

  console.log("var output:", functionScopedVar); // Works!
  
  try {
    console.log(blockScopedLet);
  } catch (err) {
    console.log("let error caught successfully:", err.message); // ReferenceError
  }
}

scopeTest();

// ------------------------------------------
// 2. const Immutability vs Mutation
// ------------------------------------------
const testConfig = { timeout: 5000, browser: "chromium" };
// testConfig = {}; // ❌ Uncaught TypeError: Assignment to constant variable.

testConfig.timeout = 10000; // ✅ Allowed! Mutating property inside the object.
console.log("Updated config:", testConfig);

// ------------------------------------------
// 3. Interview Challenge: Type Coercion & Equality
// ------------------------------------------
function runCoercionCheck(val1, val2) {
  console.log(`Comparing ${JSON.stringify(val1)} and ${JSON.stringify(val2)}:`);
  console.log(`  Loose  (==) :`, val1 == val2);
  console.log(`  Strict (===):`, val1 === val2);
}

runCoercionCheck(0, false);
runCoercionCheck("10", 10);
runCoercionCheck(null, undefined); // Unique case: null == undefined is true!