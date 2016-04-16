// classic destructuring....assign array to individual elements
function foo() {
    return [1, 2, 3];
}

var tmp = foo(),
    x = tmp[0],
    y = tmp[1],
    z = tmp[2];

// es6 way
// left hand side looks like an array, but it isn't.  It's a pattern for destructring arry to individual elements
var [x, y, z] = foo();
// not a declaration pattern, btw, can also do.
var x, y, z;
[x, y, z] = foo();

// what if you have more in values than  destructured?
[x, y, z, w] = foo();
// w is still null

// what if you have reverse?
[x, y] = foo();
// also file, other value gets thrown away

// gathering pattern
[x, y, ...z] = foo();
// gathers up the last values in z after first two, and still creates an array

// What we're trying to do here is declarative vs imperative code
// more code we add, declarative changes less..

// can use default parameters as well...
[x, y = 42, ...z]
// just not with gatherings
[x, y = 42, ...z = [1, 2]] // NOT LEGAL

// ellision - leave out parameters
[, , , x = 42] = foo();

// can use destructoring to swap falues...

var x, y;
x = 10;
y = 20;
// original uses tmp to swap values..
var tmp = x;
x = y;
y = tmp

// use destructuring where javascript engine creates tmp variable
    [x, y] = [y, x];

// Object destructuring
// old-school
function foo() {
    return {
        a: 1,
        b: 2,
        c: 3
    };
}

var tmp = foo(),
    a = tmp.a,
    b = tmp.b,
    c = tmp.c

// new way - using new ES6 feature called concise property
// focus on readability, use seperate lines when more than 5-6 chars
function foo() {
    return {
        a: 1,
        b: 2,
        c: 3
    }
}

var {
    a, //equivalent to a:a,
    b, //equivalent to b:b,
    c //equivalent to c:c
} = foo();

// but property always comes to the left...
// colon is an alias for something, and the alias is on the right
var {
    a: X,
    b: Y,
    c: Z
} = foo();

// can also have default values
var {
    a,
    b,
    c,
    d: X = 10
} = foo();

// however, {} denotes block, so can't do folowing, when no var, let, or const
var {
    a,
    b,
    c
} = foo();

({
    a,
    b,
    c
}) = foo());

// what if want to destructure object......
var o = {};
({
    a: o.a,
    b: o.b,
    c: o.c
} = foo());

// nested array destructuring
//positions within positions - useful in JSON to pick out
// imperative form is convoluted...
// declartive form is very clear in terms of getting object
// also note very liberal with newlines so clear what structure is
function foo() {
    return [1, 2, [3, 4, 5]];
}

var [
    a,
    b, [
        c,
        d,
        e
    ]
] = foo();

// following is undefined (will get error, since can't destructure undefined)
function foo() {
    return [1, 2];
}

var [
    a,
    b, [
        c,
        d,
        e
    ]
] = foo();

// to have more graceful fallback, set default value to empty array
// strongly suggest whenever you have nesting, set default values
function foo() {
    return [1, 2];
}

var [
    a,
    b, [
        c,
        d,
        e
    ] = [];
] = foo();

// but what happens when return empty value?
// give a default value
function foo() {
    return;
}

var [
    a,
    b, [
        c,
        d,
        e
    ] = [];
] = foo() || [];

// nested object destructuring
// no value for a below
function foo() {
    return {
        a: {
            x: 1,
            y: 2
        },
        b: 3
    }
}

var {
    a: {
        x,
        y
    }
    b
} = foo();

// to actually get value for a - can destructure twice
var {
    a: {
        x,
        y
    },
    a: A,
    b
} = foo();

// same rules for default values
var {
    a: {
        x,
        y
    } = [],
    a: A,
    b
} = foo() || {};

// just an assignment form var optional
var a, x, y, A, b;

({
    a: {
        x,
        y
    } = [],
    a: A,
    b
} = foo() || {});

// everything we just learned is true in parameter list of function
function foo(
    [
        x,
        y
    ] = [], {
        a: z
    }
) {
    console.log(x, y, z);
}

// where most useful is named arguments - this specific value belongs to this name
// old
function (x,y,z) {
  console.log(x,y,z);
}
foo(null, null, z);

// new
// use for methods for optional parameters
function foo({x,y,z}) {
  console.log(x,y,z);
}
foo({
  z:3,
  x:1
})
// , or named parameters
// can put default assignment
function foo({x,y,z} = {}) {
  console.log(x,y,z);
}
// No reason not to use, but people have to remember to use syntax
foo({x:1,y:2,z:3});
// Kyles rule of thumb - if have more than3 params, use destructing, since can't assume people will remember params

// obviously can use with arrays
function foo([x,y,z] = []) {
  console.log(x,y,z);
}
// No reason not to use, but people have to remember to use syntax
foo([1,,3]);

// configuration object - e.g. using configuration object to apply to object and passing to Jquery object
// pattern - restructing and structuring

var defaults = {
  user: {
    name: "Friendly Person",
    email: "nobody@nowhere.com"
  },
  history: [
    "about:blank"
  ]
}

var config = {
  user: {
    email: "foo@bar.com"
  },
  tags: ["javascript", "python"]
}

// merge config into defaults (remember Sandy Metz book)
// most common use case is when merge objects together...
{
  let {
    user: {
      name = defaults.user.name, //set if name is not defined from defaults
      email = defaults.user.email
    } = {},
    history: [
      firstHistoryItem = defaults.history[0],
      ...historyItems
    ] = [],
    tags = []
  } = config;
}

// now construct, new merged objects
// now construct new object
config = {
  user: {
    name,
    email
  },
  history: [
    firstHistoryItem,
    ...historyItems
  ]
}
