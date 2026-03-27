// test.js
const Parser = require('./arithmetic-parser');

const input = "3 + 5 * 2";
const parser = new Parser(input);

try {
  parser.parse();
  console.log('✅ Parsing successful!');
} catch (error) {
  console.log('❌ Error:', error.message);
}