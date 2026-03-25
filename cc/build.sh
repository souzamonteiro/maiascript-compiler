#!/bin/sh

java REx -backtrack -javascript -tree -main grammar/C.ebnf
mv -f C.js C-main.js
java REx -backtrack -javascript -tree grammar/C.ebnf
java -jar rr.war grammar/C.ebnf > C.xhtml