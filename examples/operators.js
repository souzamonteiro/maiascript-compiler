a = 1;
b = 2.0;
d = core.add(a, b);
system.println(d);
d = core.sub(a, b);
system.println(d);
d = core.mul(a, b);
system.println(d);
d = core.div(a, b);
system.println(d);
d = core.mod(a, b);
system.println(d);
d = core.power(a, b);
system.println(d);
d = a += b;
system.println(d);
d = a -= b;
system.println(d);
d = core.bitwiseAND(a, b);
system.println(d);
d = core.bitwiseOR(a, b);
system.println(d);
d = core.bitwiseXOR(a, b);
system.println(d);
d = core.logicalAND(a, b);
system.println(d);
d = core.logicalOR(a, b);
system.println(d);
d = a++;
system.println(d);
d = b--;
system.println(d);
d = a++;
system.println(d);
d = b--;
system.println(d);
e = {
    "real": 1,
    "imaginary": 2
};
f = {
    "real": 3,
    "imaginary": 4
};
g = core.add(e, f);
system.println(e);