f = function (x) {
    return core.sub(core.add(core.power(core.mul(2,x),2),x),1);
};
g = function (n) {
    if (core.logicalOR(core.equal(n,0),core.equal(n,1))) {
        return (1);
    };
    return (core.mul(n,g(core.sub(n,1))));
};
f1 = async function (x) {
    return (x);
};
f2 = function (x) {
    return (x);
};
f3 = function (x) {
    this.y=x;
    return (this.y);
};
f4 = function (a,b) {
    return (core.add(a,b));
};
f5 = function (x) {
    y = x + 1;
    return y;
};
f6 = function ($a,$b) {
    (i32.add
      (get_local $a)
      (get_local $b)
    )
};
b=f2(2);
c= new f3(2);
d=f4(1,2);
e=f5(2);
f=f6(1,2);
system.println(f(2));
system.println(g(5));
system.println(b);
system.println(JSON.stringify(c));
system.println(d);
system.println(e);
system.println(f);
