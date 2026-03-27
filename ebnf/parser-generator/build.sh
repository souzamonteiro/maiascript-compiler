#!/bin/sh

node ../REx-main.js sample-grammar.ebnf > grammar.xml
node index.js grammar.xml arithmetic-parser.js
