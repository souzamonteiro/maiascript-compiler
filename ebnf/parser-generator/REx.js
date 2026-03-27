#!/usr/bin/env node
'use strict';

// Transitional REx CLI replacement.
// - Uses the generated self-hosted parser (rex-parser.js) for validation.
// - Uses legacy REx-main.js only as an XML serializer to preserve exact output compatibility.
//
// This keeps REx-main.js untouched as reference, while enabling a drop-in command name.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const EBNF_ROOT = path.join(ROOT, '..');
const SELF_HOSTED_PARSER = path.join(ROOT, 'rex-parser.js');
const LEGACY_REX_MAIN = path.join(EBNF_ROOT, 'REx-main.js');

function usage() {
  console.error('Usage: node REx.js [-i] INPUT...');
  console.error('');
  console.error('  INPUT can be:');
  console.error('    - a filename');
  console.error('    - literal text enclosed in braces: { ... }');
  console.error('');
  console.error('  Option:');
  console.error('    -i     accepted for CLI compatibility (currently ignored)');
}

function readInput(input) {
  if (/^{[\s\S]*}$/.test(input)) {
    return input.substring(1, input.length - 1);
  }

  const content = fs.readFileSync(input, 'utf8');
  return content.length > 0 && content.charCodeAt(0) === 0xfeff
    ? content.substring(1)
    : content;
}

function validateWithSelfHostedParser(inputText, inputLabel) {
  const Parser = require(SELF_HOSTED_PARSER);
  const parser = new Parser(inputText);

  try {
    parser.parse();
  } catch (err) {
    const message = err && err.message ? err.message : String(err);
    throw new Error(`Self-hosted parser validation failed for ${inputLabel}: ${message}`);
  }
}

function serializeWithLegacy(inputArg) {
  const serializerArg = /^{[\s\S]*}$/.test(inputArg)
    ? inputArg
    : path.resolve(process.cwd(), inputArg);

  return execFileSync(process.execPath, [LEGACY_REX_MAIN, serializerArg], {
    cwd: EBNF_ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  });
}

function main(argv) {
  if (!fs.existsSync(SELF_HOSTED_PARSER)) {
    throw new Error(`Missing self-hosted parser: ${SELF_HOSTED_PARSER}`);
  }
  if (!fs.existsSync(LEGACY_REX_MAIN)) {
    throw new Error(`Missing legacy serializer: ${LEGACY_REX_MAIN}`);
  }

  const args = argv.slice(2);
  if (args.length === 0) {
    usage();
    process.exitCode = 1;
    return;
  }

  const inputs = [];
  for (const arg of args) {
    if (arg === '-i') {
      continue;
    }
    inputs.push(arg);
  }

  if (inputs.length === 0) {
    usage();
    process.exitCode = 1;
    return;
  }

  for (const inputArg of inputs) {
    const inputText = readInput(inputArg);
    validateWithSelfHostedParser(inputText, inputArg);

    const xml = serializeWithLegacy(inputArg);
    process.stdout.write(xml);
  }
}

try {
  main(process.argv);
} catch (error) {
  console.error(error && error.message ? error.message : String(error));
  process.exit(1);
}
