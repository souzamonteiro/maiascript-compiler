#!/bin/sh

java REx -backtrack -javascript -tree -main grammar/REx.ebnf
mv -f REx.js REx-main.js
java REx -backtrack -javascript -tree grammar/REx.ebnf
java -jar rr.war grammar/REx.ebnf > REx.xhtml