// ==============================================================================
// DAY 5: ASYNC JAVASCRIPT - CALLBACKS, PROMISES & ASYNC/AWAIT
// ==============================================================================

// ------------------------------------------------------------------------------
// 1. Simulated Custom Delay / Wait Utility (Core Automation Helper)
// ------------------------------------------------------------------------------
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ------------------------------------------------------------------------------
// 2. Simulated Network/Locator Promise Factory
// ------------------------------------------------------------------------------
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log(`[Pending] Fetching data for user ID: ${userId}...`);
    
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, username: "harsha_qa", role: "SDET" });
      } else {
        reject(new Error(`Invalid User ID: ${userId}. ID must be greater than 0.`));
      }
    }, 1000);
  });
}

// ------------------------------------------------------------------------------
// 3. Comparison: Promise Chaining (.then/.catch) vs. async/await
// ------------------------------------------------------------------------------

// Approach A: Legacy ES6 Promise Chaining
function runLegacyPromiseFlow() {
  console.log("\n--- Starting Legacy Promise Chain ---");
  fetchUserData(101)
    .then((user) => {
      console.log("User fetched:", user.username);
      return delay(500); // Chain another promise
    })
    .then(() => {
      console.log("Wait completed after fetch.");
    })
    .catch((err) => {
      console.error("Error occurred:", err.message);
    });
}

// Approach B: Modern async/await with robust try/catch
async function runModernAsyncFlow() {
  console.log("\n--- Starting Modern async/await Flow ---");
  try {
    const user = await fetchUserData(202);
    console.log("User fetched:", user.username);

    console.log("Waiting 500ms before next test step...");
    await delay(500);

    console.log("Test step completed successfully.");
  } catch (error) {
    console.error("Caught async error:", error.message);
  } finally {
    console.log("Cleanup: Closing mock connection.");
  }
}

// ------------------------------------------------------------------------------
// 4. Concurrency Mechanics: Promise.all vs. Promise.allSettled vs. Promise.race
// ------------------------------------------------------------------------------
async function demonstratePromiseCombinators() {
  console.log("\n--- Concurrency Mechanics (Parallel Test Execution) ---");

  const task1 = delay(300).then(() => "UI Element Rendered");
  const task2 = delay(600).then(() => "API Response Received");
  const task3 = delay(400).then(() => "Auth Token Generated");

  // Promise.all: Runs tasks in parallel; rejects immediately if ANY fail
  const allResults = await Promise.all([task1, task2, task3]);
  console.log("Promise.all Results:", allResults);

  // Promise.allSettled: Waits for all to finish regardless of success/failure
  const failingTask = delay(200).then(() => {
    throw new Error("Network 500: Database Timeout");
  });

  const settledResults = await Promise.allSettled([task1, failingTask]);
  console.log("Promise.allSettled Outcomes:", settledResults);

  // Promise.race: Resolves/rejects as soon as the FASTEST task settles
  const fastest = await Promise.race([task1, task2]);
  console.log("Promise.race (Fastest):", fastest);
}

// ------------------------------------------------------------------------------
// Execution Controller
// ------------------------------------------------------------------------------
async function main() {
  runLegacyPromiseFlow();
  await delay(1600); // Wait for legacy chain to finish before proceeding

  await runModernAsyncFlow();
  await demonstratePromiseCombinators();
}

main();