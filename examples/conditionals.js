a = 1;
b = 2;
c = core.equal(a, 1) ? "Hello" : "World";
if (core.LT(a, b)) {
    system.println(core.add("a = ", a));
    system.println(core.add("b = ", b));
    system.println("a < b");
} else {
    if (core.GT(a, b)) {
        system.println(core.add("a = ", a));
        system.println(core.add("b = ", b));
        system.println("a > b");
    } else {
        system.println(core.add("a = ", a));
        system.println(core.add("b = ", b));
        system.println("a == b");
    }
};
system.println(core.equal(c, 1) ? "Maia" : "Script");