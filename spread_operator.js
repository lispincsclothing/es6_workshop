// function call argument list
function foo(x, y, z) {
  console.log(x + y + z);
}

foo(1,2,3);

var vals = [1,2,3];

foo.apply(null, vals);
// spread, splat operator - removes noise of null operator above, not even apply
foo(...vals);

// array literal example
var arr = [ 1,2,3];

var arr2 = [0].concat(arr, [4,5]);
var arr2 = [0, ...arr, 4, 5];

arr2;

// above is value context

// below is assigment context

// example where you want to get third argument (after y)
function foo(x, y) {
  var rest = [].slice.call(arguments, 2);
  console.log(x,y,rest);
}

foo(1,2,3,4,5);//1 2 [3,4,5]

// es6 equivalent is
function foo(x, y, ...rest) {
    console.log(x,y,rest);
}

foo(1,2,3,4,5);//1 2 [3,4,5]

// can do all args by just using args - in fact, using slice.call is deprecated
function foo() {
  var rest = [].slice.call(arguments);
  console.log(rest);
}

foo(1,2,3,4,5);//[1 2 3,4,5]

// es6 equivalent is
function foo(...rest) {
    console.log(rest);
}

foo(1,2,3,4,5);//[1 2 3,4,5]
