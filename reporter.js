class CustomReporter {
    onTestEnd(test, result) {
      console.log(`Test: ${test.title}`);
      console.log(`Expected status: ${test.expectedStatus}`);
      console.log(`Actual status: ${result.status}`);
      if (test.expectedStatus !== result.status) {
        console.warn(`Test status mismatch for "${test.title}"`);
      }
    }
  }
  
  module.exports = CustomReporter;