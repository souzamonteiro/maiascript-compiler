#!/bin/sh

java REx -backtrack -javascript -tree -main grammar/Cpp.ebnf
mv -f Cpp.js Cpp-main.js
java REx -backtrack -javascript -tree grammar/Cpp.ebnf
java -jar rr.war grammar/Cpp.ebnf > Cpp.xhtml