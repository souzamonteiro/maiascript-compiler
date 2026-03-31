// test.js
const Parser = require('./arithmetic-parser');
const { ParseTreeCollector, printTree } = require('./parse-tree-collector');

const input = "3 + 5 * 2";
const collector = new ParseTreeCollector();
const parser = new Parser(input, collector);

try {
  parser.parse();
  console.log('✅ Parsing successful!');
  console.log('🌳 Árvore sintática:');
  printTree(collector.root);
  console.log('🧩 Árvore sintática (JSON):');
  console.log(JSON.stringify(collector.root, null, 2));
} catch (error) {
  console.log('❌ Error:', error.message);
}