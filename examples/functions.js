f = function (x) {core.sub(core.add(core.power(core.mul(2,x),2),x),1);
};
g = function (x) {return (core.mul(x,x));
};
f1 = async function (x) {return (x);
};
f2 = function (x) {return (x);
};
f3 = function (x) {return (x);
};
f4 = function (a,b) {return (core.add(a,b));
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
a= await f1(2);
b=f2(2);
c= new f3(2);
d=f4(12);
e=f5(2);
f=f6(12);
system.println(f(2));
system.println(g(2));
system.println(a);
system.println(b);
system.println(c);
system.println(d);
system.println(e);
system.println(f);
