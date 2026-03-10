#!/bin/sh

rm -f MaiaScript.js ComplexNumber.js MaiaScript-main.js MaiaScript.xhtml
java REx -backtrack -javascript -tree -main MaiaScript.ebnf
mv -f MaiaScript.js MaiaScript-main.js
java REx -backtrack -javascript -tree MaiaScript.ebnf
java REx -backtrack -javascript -tree ComplexNumber.ebnf
cp -f MaiaScript.js ../src/
cp -f ComplexNumber.js ../src/
java -jar rr.war MaiaScript.ebnf > MaiaScript.xhtml


