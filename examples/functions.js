f = function (x) {
    return core.sub(core.add(core.power(core.mul(2,x),2),x),1);
};
system.println(f(2));
g = function (n) {
    if (core.logicalOR(core.equal(n,0),core.equal(n,1))) {
        return 1;
    };
    return core.mul(n,g(core.sub(n,1)));
};
system.println(g(5));
h = function (x,y,z) {
    return core.add(core.add(x,y),z);
};
f1 = async function (x) {
    return x;
};
f2 = function (x) {
    return x;
};
b=f2(2);
system.println(b);
f3 = function (x) {
    this.y=x;
    return this.y;
};
c= new f3(2);
system.println(JSON.stringify(c));
f4 = function (a,b) {
    c=core.add(a,b);
    return c;
};
d=f4(1,2);
system.println(d);
f5 = function (x) {
    y = x + 1;
    return y;
};
e=f5(2);
system.println(e);
(module 
(func (export "f6") (param $a i32) (param $b i32)(local $c i32) (result i32)
    (i32.add
      (get_local $a)
      (get_local $b)
    )
)
);
f=f6(1,2);
system.println(f);
