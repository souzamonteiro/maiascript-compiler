#!/bin/sh

rm -rf build/*
rm -rf docs/*

# Creates uncompressed versions of the library.
cat src/Shebang.js src/MaiaScript.js src/ComplexNumber.js src/MaiaCompiler.js src/Core.js src/System.js src/Math.js src/Matrix.js src/String.js src/ANN.js src/CAS.js src/GPU.js src/Task.js src/MaiaVM.js > build/maiacompiler.js
cat src/MaiaScript.js src/ComplexNumber.js src/MaiaCompiler.js src/Core.js src/System.js src/Math.js src/Matrix.js src/String.js src/ANN.js src/CAS.js src/GPU.js src/Task.js > build/libmaia.js

cp build/maiacompiler.js bin/
cp build/maiacompiler.js js/
cp build/maiacompiler.js examples/js/
cp build/libmaia.js js/

chmod 755 bin/*

bin/maiacompiler.js -c -o build/cna.js ./maia/cna/cna.maia
cp build/cna.js js/
bin/maiacompiler.js -c -o build/snet.js ./maia/snet/snet.maia
cp build/snet.js js/
bin/maiacompiler.js -c -o build/recorder.js ./maia/maiarecorder/maia/recorder.maia
cp build/recorder.js js/

jsdoc -d ./docs ./package.json ./src
jsdoc -c ./jsdoc.json -d ./docs ./maia/cna/package.json ./maia/cna
jsdoc -c ./jsdoc.json -d ./docs ./maia/snet/package.json ./maia/snet/
jsdoc -c ./jsdoc.json -d ./docs ./maia/maiarecorder/package.json ./maia/maiarecorder/maia/

mkdir docs/grammar
cp -r grammar/MaiaScript.xhtml docs/grammar
