core.testScript('    a=127;
    b=core.bitwiseNot(a);
',tries,core.sub(128),0,'var v = core.testResult.obtained;    system.print("TEST: Fail testing operator \"~\".");
    system.print(core.add("      Expected result ",core.testResult.expected));
    system.print(core.add("      But got ",v));
');;
