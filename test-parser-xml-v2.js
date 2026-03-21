#!/usr/bin/env node
/**
 * Test suite for MaiaScript parser  
 * Validates that the parser generates correct XML output for each example
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const EXAMPLES_DIR = path.join(__dirname, 'examples');
const PARSER_PATH = path.join(__dirname, 'grammar', 'MaiaScript-main.js');

const TEST_CASES = [
  'test',
  'variables',
  'operators',
  'conditionals',
  'loops',
  'functions',
  'exception',
  'namespaces'
];

console.log('MaiaScript Parser XML Output Test Suite\n');
console.log('='.repeat(60) + '\n');

let passed = 0;
let failed = 0;
const failures = [];

for (const testCase of TEST_CASES) {
  const miaFile = path.join(EXAMPLES_DIR, `${testCase}.maia`);
  const expectedXmlFile = path.join(EXAMPLES_DIR, `${testCase}.xml`);
  const generatedXmlFile = path.join(EXAMPLES_DIR, `${testCase}.generated.xml`);
  
  if (!fs.existsSync(miaFile)) {
    console.log(`⊘ ${testCase}.maia - File not found`);
    continue;
  }
  
  process.stdout.write(`Testing ${testCase}.maia ... `);
  
  try {
    // Invoke the parser via command line
    const cmd = `node "${PARSER_PATH}" "${miaFile}"`;
    const output = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    
    // Normalize whitespace in generated XML for comparison
    const normalizeXml = (xml) => {
      return xml
        .replace(/\s+/g, ' ')
        .trim();
    };
    
    const generatedNormalized = normalizeXml(output);
    
    // Check if expected XML exists
    if (fs.existsSync(expectedXmlFile)) {
      const expectedXml = fs.readFileSync(expectedXmlFile, 'utf8');
      const expectedNormalized = normalizeXml(expectedXml);
      
      // Compare hashes
      const genHash = crypto.createHash('md5').update(generatedNormalized).digest('hex');
      const expHash = crypto.createHash('md5').update(expectedNormalized).digest('hex');
      
      if (genHash === expHash) {
        console.log('✓ PASS');
        passed++;
      } else {
        console.log('✗ FAIL (XML mismatch)');
        failed++;
        
        failures.push({
          test: testCase,
          reason: `XML output mismatch`,
          details: {
            expectedHash: expHash,
            generatedHash: genHash,
            expectedLen: expectedNormalized.length,
            generatedLen: generatedNormalized.length
          }
        });
      }
    } else {
      // No expected XML file, just note it was generated
      console.log('? GENERATED (no expected output to compare)');
      passed++;
    }
    
    // Save generated XML for inspection
    fs.writeFileSync(generatedXmlFile, output, 'utf8');
    
  } catch (err) {
    let message = 'Unknown error';
    if (err && err.message) {
      message = err.message;
    }
    
    console.log(`✗ FAIL (${message})`);
    failed++;
    failures.push({
      test: testCase,
      reason: message
    });
  }
}

console.log('\n' + '='.repeat(60));
console.log(`\nResults: ${passed} passed, ${failed} failed\n`);

if (failures.length > 0) {
  console.log('Failures:\n');
  failures.forEach((failure, index) => {
    console.log(`${index + 1}. ${failure.test}: ${failure.reason}`);
    if (failure.details) {
      console.log(`   Expected hash: ${failure.details.expectedHash}`);
      console.log(`   Generated hash: ${failure.details.generatedHash}`);
      console.log(`   Expected length: ${failure.details.expectedLen}, Generated length: ${failure.details.generatedLen}`);
    }
    console.log();
  });
}

process.exit(failed > 0 ? 1 : 0);
