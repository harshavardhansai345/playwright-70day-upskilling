// ==========================================
// DAY 2: CONTROL FLOW, CONDITIONS & LOOPS
// ==========================================

// ------------------------------------------
// 1. Truthy/Falsy Check in Conditionals
// ------------------------------------------
function evaluateElementStatus(statusText) {
  // If statusText is empty string "" or null, it evaluates to false
  if (statusText) {
    console.log(`Status found: ${statusText}`);
  } else {
    console.log("Status missing or empty (Falsy value detected)");
  }
}

evaluateElementStatus("Passed");
evaluateElementStatus("");

// ------------------------------------------
// 2. Iterating Over Test Datasets (for vs for...of)
// ------------------------------------------
const testResults = [
  { testId: "TC101", name: "Login Flow", status: "PASS", durationMs: 1200 },
  { testId: "TC102", name: "Checkout Flow", status: "FAIL", durationMs: 4500 },
  { testId: "TC103", name: "Profile Update", status: "PASS", durationMs: 800 },
  { testId: "TC104", name: "Payment Gateway", status: "FAIL", durationMs: 5100 }
];

console.log("\n--- Failed Tests Breakdown (for...of) ---");
for (const test of testResults) {
  if (test.status === "FAIL") {
    console.log(`[ALERT] ${test.testId} - ${test.name} failed after ${test.durationMs}ms`);
  }
}

// ------------------------------------------
// 3. Polling Simulation using while Loop (Retry Logic)
// ------------------------------------------
console.log("\n--- Polling Simulation ---");
let attempts = 0;
const maxRetries = 3;
let isElementReady = false;

while (attempts < maxRetries && !isElementReady) {
  attempts++;
  console.log(`Polling attempt ${attempts} of ${maxRetries}...`);
  
  // Simulate element becoming ready on attempt 3
  if (attempts === 3) {
    isElementReady = true;
    console.log("✅ Element is now visible and ready for interaction.");
  }
}

if (!isElementReady) {
  console.log("❌ Timeout: Element failed to load.");
}

// ------------------------------------------
// 4. Object Key Iteration with for...in
// ------------------------------------------
console.log("\n--- Config Parsing (for...in) ---");
const environmentConfig = {
  baseUrl: "https://staging.example.com",
  browser: "chromium",
  headless: true,
  workers: 4
};

for (const key in environmentConfig) {
  console.log(`Setting -> ${key}: ${environmentConfig[key]}`);
}