// default value idiom
function foo(x,y) {
    x = x || 42;
    y = y || "hello";
}

function foo(x,y) {
    x = x !== undefined ? x : 42;
    y = y !== undefined ? y : "hello";
}
// es6 way
function foo(x=42,y="hello") {
  console.log(x,y);
}

foo(); // 42 hello
foo(,,); // 42 hello - not current, but comming soon.
foo(null, null); // null null
foo(...[]); // 42 hello
foo(...[,,,,,,]); // 42 hello
// takeway - if variable gets assigned anything other than hello, gets assigned to default value

// but what about functions being passed in?
// this is a lazy function evaluation - not being called.

function bar() {
  console.log("bar called!");
  return 42;
}

function foo(x = bar(), y="hello") {
    console.log(x,y);
}

// could be two different values....
foo();
foo();

// is parameter list own scope?  Yes, it does....
function foo(x=bar(), y= function () {
  return x;
}) {
  var x = 3;
  console.log(y());
}

foo();
// should get 42 (what bar is defined to).  At this point, at chrome you get 3 (not spec compliant)
// If you do a non-simple parameter list, you are introducing a scope that you are not able to observe


// what about functions, though?  e.g. Kyles stylistic pattern is function before declartion, so can see code on top. Hoisting helping in this case, so Kyle does not think hoisting is that bad.  TC39 guys want you to use const, and trying to move functions to top (stop function hoisting)

foo();
// Comment.
function foo() {};

// also encounter tdz in default parameter values
