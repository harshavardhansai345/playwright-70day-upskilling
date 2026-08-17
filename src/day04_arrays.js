// ==============================================================================
// COMPLETE JAVASCRIPT ARRAY METHODS REFERENCE (SDET / PLAYWRIGHT EDITION)
// ==============================================================================

const testExecutionData = [
  { id: "TC01", title: "Login with valid credentials", status: "passed", durationMs: 450, tags: ["smoke", "auth"] },
  { id: "TC02", title: "Reset password with invalid email", status: "failed", durationMs: 1200, tags: ["auth"] },
  { id: "TC03", title: "Add item to shopping cart", status: "passed", durationMs: 850, tags: ["smoke", "checkout"] },
  { id: "TC04", title: "Apply expired discount coupon", status: "passed", durationMs: 310, tags: ["checkout"] },
  { id: "TC05", title: "Process credit card payment", status: "failed", durationMs: 3400, tags: ["payment", "critical"] }
];

// ==============================================================================
// 1. SEARCHING & LOCATING METHODS
// ==============================================================================

// find(): Returns the FIRST element matching the condition (or undefined)
const firstFailedTest = testExecutionData.find((t) => t.status === "failed");
console.log("find -> First Failed:", firstFailedTest.id);

// findIndex(): Returns index of FIRST matching element (or -1)
const slowTestIndex = testExecutionData.findIndex((t) => t.durationMs > 2000);
console.log("findIndex -> Slow Test Index:", slowTestIndex);

// findLast() & findLastIndex(): Searches from right to left
const lastAuthTest = testExecutionData.findLast((t) => t.tags.includes("auth"));
const lastAuthIndex = testExecutionData.findLastIndex((t) => t.tags.includes("auth"));
console.log(`findLast -> ID: ${lastAuthTest.id} at index ${lastAuthIndex}`);

// includes(): Strict primitive match check (true/false)
const sampleTags = ["smoke", "regression", "auth"];
console.log("includes -> Has regression tag?", sampleTags.includes("regression"));

// indexOf() & lastIndexOf(): Primitive index lookup
const browserPriority = ["chromium", "firefox", "webkit", "chromium"];
console.log("indexOf -> First chromium:", browserPriority.indexOf("chromium"));
console.log("lastIndexOf -> Last chromium:", browserPriority.lastIndexOf("chromium"));

// ==============================================================================
// 2. BOOLEAN PREDICATE CHECKS
// ==============================================================================

// some(): True if AT LEAST ONE element matches condition
const hasFlakyOrFailed = testExecutionData.some((t) => t.status === "failed");
console.log("some -> Suite has failures?", hasFlakyOrFailed);

// every(): True ONLY if ALL elements match condition
const isEveryTestFast = testExecutionData.every((t) => t.durationMs < 5000);
console.log("every -> All tests under 5s?", isEveryTestFast);

// ==============================================================================
// 3. FLATTENING & TRANSFORMATION METHODS
// ==============================================================================

// flat(): Flattens nested arrays up to specified depth
const rawMatrixLogs = [["Step 1", "Step 2"], ["Step 3", ["Sub-step 3.1", "Sub-step 3.2"]]];
console.log("flat -> Flattened level 1:", rawMatrixLogs.flat(1));
console.log("flat -> Flattened fully:", rawMatrixLogs.flat(Infinity));

// flatMap(): Maps each item then flattens the result by 1 level (extracting unique tags)
const allTagsFlat = testExecutionData.flatMap((t) => t.tags);
const uniqueTags = [...new Set(allTagsFlat)];
console.log("flatMap -> Unique Tags:", uniqueTags);

// ==============================================================================
// 4. EXTRACTION & COMBINATION (NON-MUTATING)
// ==============================================================================

// slice(start, end): Extracts shallow copy slice without modifying original
const top3Tests = testExecutionData.slice(0, 3);
console.log("slice -> First 3 tests count:", top3Tests.length);

// concat(): Merges two or more arrays
const extraTests = [{ id: "TC06", title: "Logout", status: "passed", durationMs: 200, tags: ["auth"] }];
const fullSuite = testExecutionData.concat(extraTests);
console.log("concat -> Combined suite length:", fullSuite.length);

// join(): Combines elements into a formatted string
const tagList = ["ui", "e2e", "chromium"].join(" | ");
console.log("join -> Formatted header:", tagList);

// ==============================================================================
// 5. MUTATING METHODS (MODIFY ORIGINAL ARRAY)
// ==============================================================================

const dynamicQueue = ["TC01", "TC02", "TC03"];

// push() & pop(): Add/remove from the END (LIFO)
dynamicQueue.push("TC04"); // returns new length: 4
const removedEnd = dynamicQueue.pop(); // returns "TC04"
console.log(`push/pop -> Removed: ${removedEnd}, Remaining:`, dynamicQueue);

// unshift() & shift(): Add/remove from the START (FIFO)
dynamicQueue.unshift("TC00"); // adds to index 0
const removedStart = dynamicQueue.shift(); // removes "TC00"
console.log(`unshift/shift -> Removed: ${removedStart}, Remaining:`, dynamicQueue);

// splice(start, deleteCount, ...itemsToAdd): Inserts/deletes anywhere in-place
const locatorList = ["#header", "#nav", "#old-banner", "#footer"];
locatorList.splice(2, 1, "#new-banner", "#notification-bell"); // Replaces #old-banner
console.log("splice -> Updated locators:", locatorList);

// sort(): Sorts in-place (Must supply comparator for numbers/objects!)
const sortedByDuration = [...testExecutionData].sort((a, b) => b.durationMs - a.durationMs);
console.log(`sort -> Slowest test: ${sortedByDuration[0].id} (${sortedByDuration[0].durationMs}ms)`);

// reverse(): Reverses array in-place
const stepOrder = [1, 2, 3, 4];
stepOrder.reverse();
console.log("reverse -> Reversed steps:", stepOrder);

// fill(): Fills array elements with a static value
const retrySlots = new Array(3).fill("PENDING");
console.log("fill -> Initialized slots:", retrySlots);

// ==============================================================================
// 6. MODERN NON-MUTATING ALTERNATIVES (ES2023)
// ==============================================================================

const baselinePriorities = ["P3", "P1", "P2"];

// toSorted(): Returns new sorted array without mutating original
const sortedPriorities = baselinePriorities.toSorted();
console.log("toSorted ->", sortedPriorities, "| Original remains:", baselinePriorities);

// toReversed(): Returns new reversed array
const reversedPriorities = baselinePriorities.toReversed();
console.log("toReversed ->", reversedPriorities);

// toSpliced(): Returns new spliced array
const splicedPriorities = baselinePriorities.toSpliced(1, 1, "P0");
console.log("toSpliced ->", splicedPriorities);

// with(index, value): Returns new array with updated element at specific index
const updatedFirst = baselinePriorities.with(0, "CRITICAL");
console.log("with ->", updatedFirst);

// ==============================================================================
// 7. UTILITY & CONVERSION METHODS
// ==============================================================================

// Array.from(): Converts array-like or iterable objects into true arrays
const letterArray = Array.from("PLAYWRIGHT");
console.log("Array.from -> Characters:", letterArray.slice(0, 4));

// Array.isArray(): Safe array type checking
console.log("Array.isArray -> Is testExecutionData an array?", Array.isArray(testExecutionData));