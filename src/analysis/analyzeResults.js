const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '../../test-results'); // Updated path // Folder hasil pengujian
const results = {
    total: 0,
    passed: 0,
    failed: 0,
    duration: 0
};

fs.readdir(resultsPath, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (path.extname(file) === '.json') {
            const data = JSON.parse(fs.readFileSync(path.join(resultsPath, file), 'utf8'));

            results.total += data.suites.reduce((acc, suite) => acc + suite.tests.length, 0);
            results.passed += data.suites.reduce((acc, suite) => acc + suite.tests.filter(test => test.status === 'passed').length, 0);
            results.failed += data.suites.reduce((acc, suite) => acc + suite.tests.filter(test => test.status === 'failed').length, 0);
            results.duration += data.duration;
        }
    });

    // Simpan hasil analisis ke file JSON
    fs.writeFileSync(path.join(__dirname, 'results.json'), JSON.stringify(results, null, 2));

    console.log(`Total Tests: ${results.total}`);
    console.log(`Passed Tests: ${results.passed}`);
    console.log(`Failed Tests: ${results.failed}`);
    console.log(`Total Duration: ${results.duration} ms`);
});
