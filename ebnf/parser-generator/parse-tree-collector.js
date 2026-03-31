class ParseTreeCollector {
  constructor() {
    this.stack = [];
    this.root = null;
  }

  checkpoint() {
    return {
      stack: structuredClone(this.stack),
      root: structuredClone(this.root)
    };
  }

  restore(mark) {
    if (!mark) return;
    this.stack = mark.stack;
    this.root = mark.root;
  }

  startNonterminal(name) {
    this.stack.push({ kind: 'nonterminal', name, children: [] });
  }

  terminal(expectedType, tokenValue) {
    if (this.stack.length === 0) return;
    const parent = this.stack[this.stack.length - 1];
    parent.children.push({
      kind: 'terminal',
      token: expectedType,
      value: tokenValue
    });
  }

  endNonterminal() {
    const node = this.stack.pop();
    if (!node) return;

    if (this.stack.length === 0) {
      this.root = node;
    } else {
      this.stack[this.stack.length - 1].children.push(node);
    }
  }

  abortNonterminal() {
    this.stack.pop();
  }
}

function getNodeLabel(node) {
  if (!node) return '(null)';
  if (node.kind === 'terminal') {
    return `${node.token}: ${JSON.stringify(node.value)}`;
  }
  return node.name;
}

function printTree(node, prefix = '', isLast = true, isRoot = true) {
  if (!node) return;

  const branch = isRoot ? '' : isLast ? '└─ ' : '├─ ';
  console.log(prefix + branch + getNodeLabel(node));

  if (!Array.isArray(node.children) || node.children.length === 0) {
    return;
  }

  const childPrefix = isRoot ? '' : prefix + (isLast ? '   ' : '│  ');
  for (let index = 0; index < node.children.length; index++) {
    const child = node.children[index];
    const childIsLast = index === node.children.length - 1;
    printTree(child, childPrefix, childIsLast, false);
  }
}

module.exports = {
  ParseTreeCollector,
  printTree,
  getNodeLabel
};
