/**
 * @license
 * Copyright 2020 Roberto Luiz Souza Monteiro,
 *                Renata Souza Barreto,
 *                Hernane Borges de Barros Pereira.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * MaiaScript compiler class.
 * @class
 */
function MaiaCompiler() {
    init();

    /**
     * Creates the attributes of the class.
     */
    function init() {
        binaryExpression = ['Operation',
                            'VariableAssignment',
                            'ConditionalExpression',
                            'LogicalORExpression',
                            'LogicalXORExpression',
                            'LogicalANDExpression',
                            'BitwiseORExpression',
                            'BitwiseXORExpression',
                            'BitwiseANDExpression',
                            'EqualityExpression',
                            'RelationalExpression',
                            'ShiftExpression',
                            'AdditiveExpression',
                            'PowerExpression',
                            'MultiplicativeExpression'];
        codeBlockStatement = ['Program',
                              'NamespaceDeclaration',
                              'FunctionDeclaration',
                              'Do',
                              'While',
                              'For',
                              'ForEach',
                              'If',
                              'Switch',
                              'Try',
                              'Catch',
                              'Test'];
        conditionalExpression = ['Do',
                                 'While',
                                 'For',
                                 'Foreach',
                                 'If',
                                 'Switch',
                                 'Catch',
                                 'Test'];
        operators = {'||': 'core.logicalOR',
                     '&&': 'core.logicalAND',
                     '|':  'core.bitwiseOR',
                     '^':  'core.bitwiseXOR',
                     '&':  'core.bitwiseAND',
                     '==': 'core.equal',
                     '!=': 'core.different',
                     '<':  'core.LT',
                     '<=': 'core.LE',
                     '>=': 'core.GE',
                     '>':  'core.GT',
                     '<<': 'core.leftShift',
                     '>>': 'core.rightShift',
                     '+':  'core.add',
                     '-':  'core.sub',
                     '**': 'core.power',
                     '*':  'core.mul',
                     '/':  'core.div',
                     '%':  'core.mod',
                     '~':  'core.bitwiseNot',
                     '!':  'core.logicalNot'
                    };
    }

    /**
     * Convert XML to JSON.
     * @param {xml}    xml - The XML data.
     * @return {json}  XML data converted to a JSON object.
     */
    this.xmlToJson = function(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
                for (var i = 0; i < xml.children.length; i++) {
                    var item = xml.children.item(i);
                    nodeName = item.nodeName;
                    if (typeof(obj[nodeName]) == 'undefined') {
                        obj[nodeName] = this.xmlToJson(item);
                    } else {
                        if (typeof(obj[nodeName].push) == 'undefined') {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(this.xmlToJson(item));
                    }
                }
            } else {
                obj = xml.textContent;
            }
            return obj;
        } catch (e) {
            system.log(e.message);
        }
    }
    
    /**
     * Compiles the MaiaScript XML tree for Maia Internal Code (MIL).
     * @param {xml}    xml - The XML data.
     * @param {string} itemName - Name of the item being analyzed.
     * @return {json}  XML data converted to a MIL object.
     */
    this.xmlToMil = function(xml, itemName = '') {
        try {
            var obj = {};

            if (itemName == '') {
                if (xml.children.length > 0) {
                    for (var i = 0; i < xml.children.length; i++) {
                        var item = xml.children.item(i);
                        nodeName = item.nodeName;
                        if (typeof(obj[nodeName]) == 'undefined') {
                            obj[nodeName] = this.xmlToMil(item, nodeName);
                        } else {
                            if (typeof(obj[nodeName].push) == 'undefined') {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }
                            obj[nodeName].push(this.xmlToMil(item, nodeName));
                        }
                    }
                } else {
                    obj = xml.textContent;
                }
            } else {
                if (binaryExpression.includes(itemName)) {
                    if (xml.children.length > 1) {
                        for (var i = 0; i < xml.children.length; i++) {
                            var item = xml.children.item(i);
                            nodeName = item.nodeName;
                            if (nodeName != 'TOKEN') {
                                opName = 'Op';
                            } else {
                                opName = nodeName;
                            }
                            if (typeof(obj[opName]) == 'undefined') {
                                obj[opName] = this.xmlToMil(item, nodeName);
                            } else {
                                if (typeof(obj[opName].push) == 'undefined') {
                                    var old = obj[opName];
                                    obj[opName] = [];
                                    obj[opName].push(old);
                                }
                                obj[opName].push(this.xmlToMil(item, nodeName));
                            }
                        }
                    } else if (xml.children.length == 1) {
                        var item = xml.children.item(0);
                        nodeName = item.nodeName;
                        obj = this.xmlToMil(item, nodeName);
                    } else {
                        obj = xml.textContent;
                    }
                } else {
                    if (xml.children.length > 0) {
                        for (var i = 0; i < xml.children.length; i++) {
                            var item = xml.children.item(i);
                            nodeName = item.nodeName;
                            if (typeof(obj[nodeName]) == 'undefined') {
                                obj[nodeName] = this.xmlToMil(item, nodeName);
                            } else {
                                if (typeof(obj[nodeName].push) == 'undefined') {
                                    var old = obj[nodeName];
                                    obj[nodeName] = [];
                                    obj[nodeName].push(old);
                                }
                                obj[nodeName].push(this.xmlToMil(item, nodeName));
                            }
                        }
                    } else {
                        obj = xml.textContent;
                    }
                }
            }
            return obj;
        } catch (e) {
            system.log(e.message);
        }
    }

    /**
     * Compiles a complex number to JSON.
     * @param {string}   text - The expression representing the complex number.
     * @return {string}  Number converted to JSON.
     */
    this.parseComplexNumber = function(text) {
        var complexNumber = {
            'xml': '',
            'text': ''
        }
        maiaScriptComplexNumber = {
            'real': 0,
            'imaginary': 0
        }

        function getXml (data) {
            complexNumber.xml += data;
        }
        var s = new ComplexNumber.XmlSerializer(getXml, true);
        var complexNumberParser = new ComplexNumber(text, s);
        try {
            complexNumberParser.parse_number();
        } catch (pe) {
            if (!(pe instanceof complexNumberParser.ParseException)) {
                throw pe;
            } else {
                var parserError = complexNumberParser.getErrorMessage(pe);
                alert(parserError);
                throw parserError;
            }
        }
        var parser = new DOMParser();
        var xml = parser.parseFromString(complexNumber.xml, "text/xml");
        
        var json = this.xmlToJson(xml);
        if ('Number' in json) {
            var number = json['Number'];
            if ('Complex' in number) {
                var complex = number['Complex'];
                if ('Imaginary' in complex) {
                    var imaginary = complex['Imaginary'];
                    json.Number.Complex.Imaginary = json.Number.Complex.Imaginary.substring(0, json.Number.Complex.Imaginary.length - 2);
                }
            }
            if (typeof json.Number.Complex.Real == 'undefined') {
                json.Number.Complex.Real = 0;
            }
            maiaScriptComplexNumber = {
                'real': core.toNumber(json.Number.Complex.Real),
                'imaginary': core.toNumber(json.Number.Complex.Imaginary)
            }
        }
        complexNumber.text = JSON.stringify(maiaScriptComplexNumber);
        return complexNumber.text;
    }

    /**
     * Compiles the code in Maia Internal Language (MIL) for JavaScript.
     * @param {json}     mil - Code in Maia Internal Language (MIL).
     * @param {string}   parentNodeInfo - Parent node data.
     * @param {boolean}  isKernelFunction - Parent node is a kernel function.
     * @return {string}  MIL code converted to JavaScript.
     */
    this.parse = function(mil, parentNodeInfo, isKernelFunction) {
        var node = {};
        var js = '';
        
        if (typeof isKernelFunction == 'undefined') {
            var isKernelFunction = false;
        }

        if ('Program' in mil) {
            node = mil['Program'];
            var nodeInfo = {
                'parentNode': 'Program',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Program';

            if (typeof node != 'undefined') {
                js = this.parse(node, nodeInfo, isKernelFunction);
                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
            }
        } else if ('Expression' in mil) {
            node = mil['Expression'];
            var nodeInfo = {
                'parentNode': 'Expression',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Expression';

            if (typeof node != 'undefined') {
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        text = this.parse(node[i], nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                        if (codeBlockStatement.includes(parentNodeInfo.parentNode) && (nodeInfo.childNode != 'Comment') && (nodeInfo.childNode != 'Condition')) {
                            if (parentNodeInfo.parentNode == 'NamespaceDeclaration') {
                                if ((parentNodeInfo.terminalNode == 'VariableAssignment') || (parentNodeInfo.terminalNode == 'FunctionDeclaration')) {
                                    js += 'this.' + text + ';';
                                } else {
                                    js += text + ';';
                                }
                            } else {
                                if (conditionalExpression.includes(parentNodeInfo.parentNode)) {
                                    js += text;
                                } else {
                                    js += text + ';';
                                }
                            }
                        } else {
                            js += text;
                        }
                    }
                } else {
                    text = this.parse(node, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    if (codeBlockStatement.includes(parentNodeInfo.parentNode) && (nodeInfo.childNode != 'Comment') && (nodeInfo.childNode != 'Condition')) {
                        if (parentNodeInfo.parentNode == 'NamespaceDeclaration') {
                            if ((parentNodeInfo.terminalNode == 'VariableAssignment') || (parentNodeInfo.terminalNode == 'FunctionDeclaration')) {
                                js += 'this.' + text + ';';
                            } else {
                                js += text + ';';
                            }
                        } else {
                            if (conditionalExpression.includes(parentNodeInfo.parentNode)) {
                                js += text;
                            } else {
                                js += text + ';';
                            }
                        }
                    } else {
                        js += text;
                    }
                }
            }
        } else if ('Block' in mil) {
            node = mil['Block'];
            var nodeInfo = {
                'parentNode': 'Block',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Block';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var nodeExpression = {
                        'Expression': node['Expression']
                    };
                    var body = this.parse(nodeExpression, nodeInfo, isKernelFunction);
                    js = body;
                }
            }
        } else if ('Statement' in mil) {
            node = mil['Statement'];
            var nodeInfo = {
                'parentNode': 'Statement',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Statement';

            if (typeof node != 'undefined') {
                js = this.parse(node, nodeInfo, isKernelFunction);
                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
            }
        } else if ('NamespaceDeclaration' in mil) {
            node = mil['NamespaceDeclaration'];
            var nodeInfo = {
                'parentNode': 'NamespaceDeclaration',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'NamespaceDeclaration';

            if (typeof node != 'undefined') {
                if ('Identifier' in node) {
                    var nodeIdentifier = {
                        'Identifier': node['Identifier']
                    };
                    var name = this.parse(nodeIdentifier, nodeInfo, isKernelFunction);

                    if ('Block' in node) {
                        var nodeBlock = {
                            'Block': node['Block']
                        };
                        var body = this.parse(nodeBlock, nodeInfo, isKernelFunction);
                        js = 'function ' + name + '_' + '() {' + body + '};' + name + ' = new ' + name + '_()' ;
                    }
                }
            }
        } else if ('FunctionDeclaration' in mil) {
            node = mil['FunctionDeclaration'];
            var nodeInfo = {
                'parentNode': 'FunctionDeclaration',
                'childNode': '',
                'terminalNode' : 'FunctionDeclaration'
            };
            parentNodeInfo.childNode = 'FunctionDeclaration';

            if (typeof node != 'undefined') {
                if ('Identifier' in node) {
                    var nodeIdentifier = {
                        'Identifier': node['Identifier']
                    };
                    var name = this.parse(nodeIdentifier, nodeInfo, isKernelFunction);

                    if ('TOKEN' in node) {
                        if (node['TOKEN'].length == 3) {
                            var token = node['TOKEN'][2];
                            if (token == '?=') {
                                var statement = "AsyncFunction";
                                js += name + ' = async function ';
                            } else if (token == ':=') {
                                var statement = "Constructor";
                                nodeInfo.parentNode = 'NamespaceDeclaration';
                                js += name + ' = function ';
                            } else if (token == '#=') {
                                var statement = "KernelFunction";
                                js += name + ' = function ';
                            } else {
                                var statement = "FunctionDeclaration";
                                js += name + ' = function ';
                            }
                        } else {
                            var statement = "FunctionDeclaration";
                            js += name + ' = function ';
                        }
                    } else {
                        var statement = 'FunctionDeclaration';
                        js += name + ' = function ';
                    }
                    
                    if ('Arguments' in node) {
                        var nodeArguments = {
                            'Arguments': node['Arguments']
                        };
                        var args = this.parse(nodeArguments, nodeInfo, isKernelFunction);
                        js += '(' + args + ')';
                    } else {
                        js += '()';
                    }
                    if ('Expression' in node) {
                        var nodeExpression = {
                            'Expression': node['Expression']
                        };
                        if (statement == 'KernelFunction') {
                            var body = this.parse(nodeExpression, nodeInfo, true);
                        } else {
                            var body = this.parse(nodeExpression, nodeInfo, isKernelFunction);
                        }
                        js += ' {' + body + '}';
                    } else {
                        if ('Block' in node) {
                            var nodeBlock = node['Block'];
                            if ('Expression' in nodeBlock) {
                                var nodeExpression = {
                                    'Expression': nodeBlock['Expression']
                                };
                                if (statement == 'KernelFunction') {
                                    var body = this.parse(nodeExpression, nodeInfo, true);
                                } else {
                                    var body = this.parse(nodeExpression, nodeInfo, isKernelFunction);
                                }
                                js += ' {' + body + '}';
                            } else {
                                js += ' {}';
                            }
                        } else {
                            if ('Script' in node) {
                                var nodeScript = node['Script'];
                                var body = nodeScript.replace("/{", "").replace("}/", "")
                                js += ' {' + body + '}';
                            }
                        }
                    }
                }
            }
            parentNodeInfo.terminalNode = 'FunctionDeclaration';
        } else if ('Include' in mil) {
            node = mil['Include'];
            var nodeInfo = {
                'parentNode': 'Include',
                'childNode': '',
                'terminalNode' : 'Include'
            };
            parentNodeInfo.childNode = 'Include';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var returnValue = this.parse(node, nodeInfo, isKernelFunction);
                    js += 'var func_ = core.type(' + returnValue + ') == "function" ? ' + returnValue + ' : ' + returnValue + '.constructor;';
                    js += 'var script_ = func_.toString().substring(func_.toString().indexOf("{") + 1, func_.toString().lastIndexOf("}"));';
                    js += 'eval(script_)';
                }
            }
        } else if ('Local' in mil) {
            node = mil['Local'];
            var nodeInfo = {
                'parentNode': parentNodeInfo.parentNode,
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Local';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var expressionValue = this.parse(node, nodeInfo, isKernelFunction);
                    js += 'let ' + expressionValue;
                }
            }
        } else if ('If' in mil) {
            node = mil['if'];
            var nodeInfo = {
                'parentNode': 'If',
                'childNode': '',
                'terminalNode' : 'If'
            };
            parentNodeInfo.childNode = 'If';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var body = '';
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        var nodeCondition = {
                            'Expression': nodeExpression[0]
                        };
                        var condition = this.parse(nodeCondition, nodeInfo, isKernelFunction);

                        for (var i = 1; i < nodeExpression.length; i++) {
                            var commandLine = nodeExpression[i];
                            var bodyExpression = {
                                'Expression': commandLine
                            };
                            body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }
                        js += 'if (' + condition + ') {' + body + '}';
                    }
                }
                if ('Else' in node) {
                    var body = '';
                    var nodeElse = node['Else'];
                    if ('Expression' in nodeElse) {
                        var nodeExpression = nodeElse['Expression'];
                        if (Array.isArray(nodeExpression)) {
                            for (var i = 0; i < nodeExpression.length; i++) {
                                var commandLine = nodeExpression[i];
                                var bodyExpression = {
                                    'Expression': commandLine
                                };
                                body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                            }
                        } else {
                            var bodyExpression = {
                                'Expression': nodeExpression
                            };
                            body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }
                        js += ' else {' + body + '}';
                    }
                }
            }
            parentNodeInfo.terminalNode = 'If';
        } else if ('Do' in mil) {
            node = mil['Do'];
            var nodeInfo = {
                'parentNode': 'Do',
                'childNode': '',
                'terminalNode' : 'Do'
            };
            parentNodeInfo.childNode = 'Do';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var body = '';
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        for (var i = 0; i < nodeExpression.length - 1; i++) {
                            var commandLine = nodeExpression[i];
                            var bodyExpression = {
                                'Expression': commandLine
                            };
                            body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }

                        var nodeCondition = {
                            'Expression': nodeExpression[nodeExpression.length - 1]
                        };
                        var condition = this.parse(nodeCondition, nodeInfo, isKernelFunction);
                    }
                    js += 'do {' + body + '} while (' + condition + ')';
                }
            }
            parentNodeInfo.terminalNode = 'Do';
        } else if ('While' in mil) {
            node = mil['While'];
            var nodeInfo = {
                'parentNode': 'While',
                'childNode': '',
                'terminalNode' : 'While'
            };
            parentNodeInfo.childNode = 'While';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var body = '';
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        var nodeCondition = {
                            'Expression': nodeExpression[0]
                        };
                        var condition = this.parse(nodeCondition, nodeInfo, isKernelFunction);

                        for (var i = 1; i < nodeExpression.length; i++) {
                            var commandLine = nodeExpression[i];
                            var bodyExpression = {
                                'Expression': commandLine
                            };
                            body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }
                    }
                    js += 'while (' + condition + ') {' + body + '}';
                }
            }
            parentNodeInfo.terminalNode = 'While';
        } else if ('For' in mil) {
            node = mil['For'];
            var nodeInfo = {
                'parentNode': 'For',
                'childNode': '',
                'terminalNode' : 'For'
            };
            parentNodeInfo.childNode = 'For';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var body = '';
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        var nodeExpression = node['Expression'];
                        var nodeBefore = {
                            'Expression': nodeExpression[0]
                        };
                        var before = this.parse(nodeBefore, nodeInfo, isKernelFunction);

                        var nodeCondition = {
                            'Expression': nodeExpression[1]
                        };
                        var condition = this.parse(nodeCondition, nodeInfo, isKernelFunction);

                        var nodeAfter = {
                            'Expression': nodeExpression[2]
                        };
                        var after = this.parse(nodeAfter, nodeInfo, isKernelFunction);

                        for (var i = 3; i < nodeExpression.length; i++) {
                            var commandLine = nodeExpression[i];
                            var bodyExpression = {
                                'Expression': commandLine
                            };
                            body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }
                    }
                    js += 'for (' + before + ';' + condition + ';' + after + ') {' + body + '}';
                }
            }
            parentNodeInfo.terminalNode = 'For';
        } else if ('ForEach' in mil) {
            node = mil['ForEach'];
            var nodeInfo = {
                'parentNode': 'ForEach',
                'childNode': '',
                'terminalNode' : 'ForEach'
            };
            parentNodeInfo.childNode = 'ForEach';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var body = '';
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        var nodeArray = {
                            'Expression': nodeExpression[0]
                        };
                        var arrayName = this.parse(nodeArray, nodeInfo, isKernelFunction);

                        var nodeKeyVar = {
                            'Expression': nodeExpression[1]
                        };
                        var keyVarName = this.parse(nodeKeyVar, nodeInfo, isKernelFunction);

                        var nodeValueVar = {
                            'Expression': nodeExpression[2]
                        };
                        var valueVarName = this.parse(nodeValueVar, nodeInfo, isKernelFunction);

                        for (var i = 3; i < nodeExpression.length; i++) {
                            var commandLine = nodeExpression[i];
                            var bodyExpression = {
                                'Expression': commandLine
                            };
                            body += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }
                    }
                    js += 'for (' + keyVarName + ' in ' + arrayName + ') {var ' + valueVarName + ' = ' + arrayName + '[' + keyVarName + '];' + body + '}';
                }
            }
            parentNodeInfo.terminalNode = 'ForEach';
        } else if ('Try' in mil) {
            node = mil['Try'];
            var nodeInfo = {
                'parentNode': 'Try',
                'childNode': '',
                'terminalNode' : 'Try'
            };
            parentNodeInfo.childNode = 'Try';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var nodeExpression = node['Expression'];
                    var nodeBody = {
                        'Expression': nodeExpression
                    };
                    var body = this.parse(nodeBody, nodeInfo, isKernelFunction);
                    js += 'try {' + body + '}';
                }
                if ('Catch' in node) {
                    nodeInfo.parentNode = 'Catch';
                    var nodeCatch = node['Catch'];
                    if ('Expression' in nodeCatch) {
                        var nodeExpression = nodeCatch['Expression'];
                        if (Array.isArray(nodeExpression)) {
                            var _catch = '';
                            var nodeVar = {
                                'Expression': nodeExpression[0]
                            };
                            var catchVar = this.parse(nodeVar, nodeInfo, isKernelFunction);
                            
                            for (var i = 1; i < nodeExpression.length; i++) {
                                var commandLine = nodeExpression[i];
                                var bodyExpression = {
                                    'Expression': commandLine
                                };
                                _catch += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                            }
                        }
                        js += ' catch (' + catchVar + ') {' + _catch + '}';
                    }
                }
            }
            parentNodeInfo.terminalNode = 'Try';
        } else if ('Test' in mil) {
            node = mil['Test'];
            var nodeInfo = {
                'parentNode': 'Test',
                'childNode': '',
                'terminalNode' : 'Test'
            };
            parentNodeInfo.childNode = 'Test';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        var _script = '';
                        var nodeTimes = {
                            'Expression': nodeExpression[0]
                        };
                        var _times = this.parse(nodeTimes, nodeInfo, isKernelFunction);

                        var nodeValue = {
                            'Expression': nodeExpression[1]
                        };
                        var _value = this.parse(nodeValue, nodeInfo, isKernelFunction);

                        var nodeTolerance = {
                            'Expression': nodeExpression[2]
                        };
                        var _tolerance = this.parse(nodeTolerance, nodeInfo, isKernelFunction);
                        
                        for (var i = 3; i < nodeExpression.length; i++) {
                            var commandLine = nodeExpression[i];
                            var bodyExpression = {
                                'Expression': commandLine
                            };
                            _script += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                        }
                    }
                }
                if ('Catch' in node) {
                    nodeInfo.parentNode = 'Catch';
                    var nodeCatch = node['Catch'];
                    if ('Expression' in nodeCatch) {
                        var nodeExpression = nodeCatch['Expression'];
                        if (Array.isArray(nodeExpression)) {
                            var _catch = '';
                            var nodeVar = {
                                'Expression': nodeExpression[0]
                            };
                            var catchVar = this.parse(nodeVar, nodeInfo, isKernelFunction);

                            for (var i = 1; i < nodeExpression.length; i++) {
                                var commandLine = nodeExpression[i];
                                var bodyExpression = {
                                    'Expression': commandLine
                                };
                                _catch += this.parse(bodyExpression, nodeInfo, isKernelFunction) + ';';
                            }
                        }
                        js += 'core.testScript(' + '\'' + _script + '\',' + _times + ',' + _value + ',' + _tolerance + ',\'' + 'var ' + catchVar + ' = core.testResult.obtained;' + _catch + '\');';
                    }
                }
            }
            parentNodeInfo.terminalNode = 'Test';
        } else if ('Break' in mil) {
            node = mil['Break'];
            var nodeInfo = {
                'parentNode': 'Break',
                'childNode': '',
                'terminalNode' : 'Break'
            };
            parentNodeInfo.childNode = 'Break';

            if (typeof node != 'undefined') {
                js += 'break';
            }
        } else if ('Continue' in mil) {
            node = mil['Continue'];
            var nodeInfo = {
                'parentNode': 'Continue',
                'childNode': '',
                'terminalNode' : 'Continue'
            };
            parentNodeInfo.childNode = 'Continue';

            if (typeof node != 'undefined') {
                js += 'continue';
            }
        } else if ('Return' in mil) {
            node = mil['Return'];
            var nodeInfo = {
                'parentNode': 'Return',
                'childNode': '',
                'terminalNode' : 'Return'
            };
            parentNodeInfo.childNode = 'Return';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var returnValue = this.parse(node, nodeInfo, isKernelFunction);
                    js += 'return (' + returnValue + ')';
                } else {
                    js += 'return';
                }
            }
        } else if ('Throw' in mil) {
            node = mil['Throw'];
            var nodeInfo = {
                'parentNode': 'Throw',
                'childNode': '',
                'terminalNode' : 'Throw'
            };
            parentNodeInfo.childNode = 'Throw';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var returnValue = this.parse(node, nodeInfo, isKernelFunction);
                    js += 'throw (' + returnValue + ')';
                } else {
                    js += 'throw ()';
                }
            }
        } else if ('Operation' in mil) {
            node = mil['Operation'];
            var nodeInfo = {
                'parentNode': 'Operation',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Operation';
            
            if (typeof node != 'undefined') {
                if ('Op' in node) {
                    js += this.parse(node, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                } else {
                    if ('TOKEN' in node) {
                        var primary = node['Primary'];
                        var right = this.parse(primary, nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                        var operator = node['TOKEN'];
                        if (isKernelFunction) {
                            js += operator + right;
                        } else {
                            js += operators[operator] + '(' + right + ')';
                        }
                    } else {
                        js += this.parse(node, nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    }
                }
            }
        } else if ('Op' in mil) {
            node = mil['Op'];
            var nodeInfo = {
                'parentNode': 'Op',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Op';
            if (typeof node != 'undefined') {
                if (Array.isArray(node)) {
                    var nodeInfo = {
                        'parentNode': 'Op',
                        'childNode': '',
                        'terminalNode' : ''
                    };
                    var left = this.parse(node[0], nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    var nodeInfo = {
                        'parentNode': 'op',
                        'childNode': '',
                        'terminalNode' : ''
                    };
                    if ('TOKEN' in node[1]) {
                        var operator = node[1]['TOKEN'];
                        if ((operator == '!') || (operator == '~')) {
                            if (isKernelFunction) {
                                var right = operator + this.parse(node[1], nodeInfo, isKernelFunction);
                            } else {    
                                var right = operators[operator] + '(' + this.parse(node[1], nodeInfo, isKernelFunction) + ')';
                            }
                        } else {
                            var right = this.parse(node[1], nodeInfo, isKernelFunction);
                        }
                    } else {
                        var right = this.parse(node[1], nodeInfo, isKernelFunction);
                    }
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    if ('TOKEN' in mil) {
                        var operator = mil['TOKEN'];
                        var j = 0;
                        if (Array.isArray(operator)) {
                            if (operator[j] == '=') {
                                parentNodeInfo.terminalNode = 'VariableAssignment';
                                js += left + '=' + right;
                            } else if (operator[j] == ':=') {
                                parentNodeInfo.terminalNode = 'VariableAssignment';
                                js += left + '= new ' + right;
                            } else if (operator[j] == '?=') {
                                parentNodeInfo.terminalNode = 'VariableAssignment';
                                js += left + '= await ' + right;
                            } else {
                                if (isKernelFunction) {
                                    js += left + operator[j] + right;
                                } else {    
                                    js += operators[operator[j]] + '(' + left + ',' + right + ')';
                                }
                            }
                            j++;
                            for (var i = 2; i < node.length; i++) {
                                var right = this.parse(node[i], nodeInfo, isKernelFunction);
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                                if (operator[j] == '=') {
                                    parentNodeInfo.terminalNode = 'VariableAssignment';
                                    js += '=' + right;
                                } else if (operator[j] == ':=') {
                                    parentNodeInfo.terminalNode = 'VariableAssignment';
                                    js += '= new ' + right;
                                } else if (operator[j] == '?=') {
                                    parentNodeInfo.terminalNode = 'VariableAssignment';
                                    js += '= await ' + right;
                                } else {
                                    if (isKernelFunction) {
                                        js = js + operator[j] + right;
                                    } else {    
                                        js = operators[operator[j]] + '(' + js + ',' + right + ')';
                                    }
                                }
                                j++;
                            }
                        } else {
                            if (operator == '=') {
                                parentNodeInfo.terminalNode = 'VariableAssignment';
                                js += left + '=' + right;
                            } else if (operator == ':=') {
                                parentNodeInfo.terminalNode = 'VariableAssignment';
                                js += left + '= new ' + right;
                            } else if (operator == '?=') {
                                parentNodeInfo.terminalNode = 'VariableAssignment';
                                js += left + '= await ' + right;
                            } else {
                                if (isKernelFunction) {
                                    js += left + operator + right;
                                } else {    
                                    js += operators[operator] + '(' + left + ',' + right + ')';
                                }
                            }
                        }
                    }
                } else {
                    var nodeInfo = {
                        'parentNode': 'Op',
                        'childNode': '',
                        'terminalNode' : ''
                    };
                    js += this.parse(node, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                }
            }
        } else if ('Primary' in mil) {
            node = mil['Primary'];
            var nodeInfo = {
                'parentNode': parentNodeInfo.childNode,
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Primary';

            if (typeof node != 'undefined') {
                if ('Value' in node) {
                    var value = node['Value'];
                    if ('TOKEN' in value) {
                        js = value['TOKEN'];
                    } else {
                        js = this.parse(node, nodeInfo, isKernelFunction);
                    }
                } else {
                    js = this.parse(node, nodeInfo, isKernelFunction);
                }
                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
            }
        } else if ('Member' in mil) {
            node = mil['Member'];
            var nodeInfo = {
                'parentNode': 'Member',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Member';

            if (typeof node != 'undefined') {
                if ('Identifier' in node) {
                    js += this.parse(node, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                }
                if ('Arguments' in node) {
                    var nodeArguments = {
                        'matrixIndexes': node['Arguments']
                    };
                    var args = this.parse(nodeArguments, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    var tokenType = node['TOKEN'];
                    if (typeof tokenType != 'undefined') {
                        if (tokenType.indexOf('(') != -1) {
                            js += '(' + args.replace(/;/g,',') + ')';
                        } else if (tokenType.indexOf('[') != -1) {
                            var arrayOfArgs = args.split(';');
                            if (Array.isArray(arrayOfArgs)) {
                                for (var i = 0; i < arrayOfArgs.length; i++) {
                                    js += '[' + arrayOfArgs[i] + ']';
                                }
                            } else {
                                js += '[' + arrayOfArgs + ']';
                            }
                        }
                    }
                } else {
                    var tokenType = node['TOKEN'];
                    if (typeof tokenType != 'undefined') {
                        if (tokenType.indexOf('(') != -1) {
                            js += '()';
                        } else if (tokenType.indexOf('[') != -1) {
                            js += '[]';
                        }
                    }
                }
            }
        } else if ('Identifier' in mil) {
            node = mil['Identifier'];
            var nodeInfo = {
                'parentNode': 'Identifier',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Identifier';
            parentNodeInfo.terminalNode = 'Identifier';

            if (typeof node != 'undefined') {
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        if (i < (node.length - 1)) {
                            js += node[i] + '.';
                        } else {
                            js += node[i];
                        }
                    }
                } else {
                    js = node;
                }
            }
        } else if ('Arguments' in mil) {
            node = mil['Arguments'];
            var nodeInfo = {
                'parentNode': 'Arguments',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Arguments';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        for (var i = 0; i < nodeExpression.length; i++) {
                            if (i < (nodeExpression.length - 1)) {
                                js += this.parse(nodeExpression[i], nodeInfo, isKernelFunction) + ',';
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            } else {
                                js += this.parse(nodeExpression[i], nodeInfo, isKernelFunction);
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            }
                        }
                    } else {
                        js += this.parse(nodeExpression, nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    }
                }
            } else {
                js = node;
            }
        } else if ('MatrixIndexes' in mil) {
            node = mil['MatrixIndexes'];
            var nodeInfo = {
                'parentNode': 'Arguments',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Arguments';

            if (typeof node != 'undefined') {
                if ('Expression' in node) {
                    var nodeExpression = node['Expression'];
                    if (Array.isArray(nodeExpression)) {
                        for (var i = 0; i < nodeExpression.length; i++) {
                            if (i < (nodeExpression.length - 1)) {
                                js += this.parse(nodeExpression[i], nodeInfo, isKernelFunction) + ';';
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            } else {
                                js += this.parse(nodeExpression[i], nodeInfo, isKernelFunction);
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            }
                        }
                    } else {
                        js += this.parse(nodeExpression, nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    }
                }
            } else {
                js = node;
            }
        } else if ('Value' in mil) {
            node = mil['Value'];
            var nodeInfo = {
                'parentNode': 'Value',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Value';

            if (typeof node != 'undefined') {
                js = this.parse(node, nodeInfo, isKernelFunction);
                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
            }
        } else if ('Integer' in mil) {
            node = mil['Integer'];
            var nodeInfo = {
                'parentNode': 'Integer',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Integer';
            parentNodeInfo.terminalNode = 'Integer';

            if (typeof node == 'String') {
                js = node;
            }
        } else if ('Real' in mil) {
            node = mil['Real'];
            var nodeInfo = {
                'parentNode': 'Real',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Real';
            parentNodeInfo.terminalNode = 'Real';

            if (typeof node == 'String') {
                js = node;
            }
        } else if ('Complex' in mil) {
            node = mil['Complex'];
            var nodeInfo = {
                'parentNode': 'Complex',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Complex';
            parentNodeInfo.terminalNode = 'Complex';

            if (typeof node == 'String') {
                js = this.parseComplexNumber(node);
            }
        } else if ('Character' in mil) {
            node = mil['Character'];
            var nodeInfo = {
                'parentNode': 'Character',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Character';
            parentNodeInfo.terminalNode = 'Character';

            if (typeof node == 'String') {
                js += node.replace("'", "");
            }
        } else if ('String' in mil) {
            node = mil['String'];
            var nodeInfo = {
                'parentNode': 'String',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'String';
            parentNodeInfo.terminalNode = 'String';

            if (typeof node == 'String') {
                js += node;
            }
        } else if ('Array' in mil) {
            node = mil['Array'];
            var nodeInfo = {
                'parentNode': 'Array',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Array';

            if (typeof node != 'undefined') {
                if ('Element' in node) {
                    var nodeElements = node['Element'];
                    js += '{';
                    if (Array.isArray(nodeElements)) {
                        for (var i = 0; i < nodeElements.length; i++) {
                            var nodeElement = {
                                'Element': nodeElements[i]
                            };
                            if (i < (nodeElements.length - 1)) {
                                js += this.parse(nodeElement, nodeInfo, isKernelFunction) + ',';
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            } else {
                                js += this.parse(nodeElement, nodeInfo, isKernelFunction);
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            }
                        }
                    } else {
                        var nodeElement = {
                            'Element': nodeElements
                        };
                        js += this.parse(nodeElement, nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    }
                }
                js += '}';
                parentNodeInfo.terminalNode = 'Aarray';
            }
        } else if ('Element' in mil) {
            node = mil['Element'];
            var nodeInfo = {
                'parentNode': 'Element',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Element';

            if (typeof node != 'undefined') {
                if ('Key' in node) {
                    var key = node['Key'];
                    js += key['String'] + ': ';
                }
                if ('Expression' in node) {
                    var nodeExpression = {
                        'Expression': node['Expression']
                    };
                    var expression = this.parse(nodeExpression, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    js += expression;
                }
            }
        } else if ('Matrix' in mil) {
            node = mil['Matrix'];
            var nodeInfo = {
                'parentNode': 'Matrix',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Matrix';

            if (typeof node != 'undefined') {
                if ('Row' in node) {
                    var nodeRows = node['Row'];
                    if (Array.isArray(nodeRows)) {
                        js += '[';
                        for (var i = 0; i < nodeRows.length; i++) {
                            var nodeRow = {
                                'Row': nodeRows[i]
                            }
                            if (i < (nodeRows.length - 1)) {
                                js += this.parse(nodeRow, nodeInfo, isKernelFunction) + ',';
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            } else {
                                js += this.parse(nodeRow, nodeInfo, isKernelFunction);
                                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                            }
                        }
                        js += ']';
                    } else {
                        var nodeRow = {
                            'Row': nodeRows
                        }
                        js += this.parse(nodeRow, nodeInfo, isKernelFunction);
                        parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                    }
                } else {
                    js += '[]';
                }
            }
        } else if ('Row' in mil) {
            node = mil['Row'];
            var nodeInfo = {
                'parentNode': 'Row',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Row';

            if (typeof node != 'undefined') {
                js += '[';
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        if (i < (node.length - 1)) {
                            js += this.parse(node[i], nodeInfo, isKernelFunction) + ',';
                            parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                        } else {
                            js += this.parse(node[i], nodeInfo, isKernelFunction);
                            parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                        }
                    }
                } else {
                    js += this.parse(node, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                }
                js += ']';
            }
        } else if ('Column' in mil) {
            node = mil['Column'];
            var nodeInfo = {
                'parentNode': 'Column',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'Column';

            if (typeof node != 'undefined') {
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        if (i < (node.length - 1)) {
                            js += this.parse(node[i], nodeInfo, isKernelFunction) + ',';
                            parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                        } else {
                            js += this.parse(node[i], nodeInfo, isKernelFunction);
                            parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                        }
                    }
                } else {
                    js += this.parse(node, nodeInfo, isKernelFunction);
                    parentNodeInfo.terminalNode = nodeInfo.terminalNode;
                }
            }
        } else if ('ParenthesizedExpression' in mil) {
            node = mil['ParenthesizedExpression'];
            var nodeInfo = {
                'parentNode': 'ParenthesizedExpression',
                'childNode': '',
                'terminalNode' : ''
            };
            parentNodeInfo.childNode = 'ParenthesizedExpression';

            if (typeof node != 'undefined') {
                js = '(' + this.parse(node, nodeInfo, isKernelFunction) + ')';
                parentNodeInfo.terminalNode = nodeInfo.terminalNode;
            };
        } else if ('Comment' in mil) {
            node = mil['Comment'];
            parentNodeInfo.childNode = 'Comment';
            parentNodeInfo.terminalNode = 'Comment';
            js = '';
        } else if ('TOKEN' in mil) {
            js = '';
        }

        return js;
    }

    /**
     * Compiles the MaiaScript XML tree for JavaScript.
     * @param {xml}      xml - The XML data.
     * @return {string}  XML data converted to JavaScript.
     */
    this.compile = function(xml) {
        var nodeInfo = {
            'parentNode': '',
            'childNode': 'Program',
            'terminalNode' : ''
        };

        var mil = {};
        var js = "";

        mil = this.xmlToMil(xml);
        js = this.parse(mil, nodeInfo);

        return js;
    }
}
