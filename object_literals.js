var x = 2;

// old
var obj = {
        x
    }
    // new, concise properties
var obj = {
    x
}

//  old way to express object method
var obj = {
        x,
        foo: function() {

        }
    }
    // new way, called concise method
var obj = {
        x,
        foo() {}
    }
    // however, concise methods can't reference object from inside itself without referenceing it.
var obj = {
        x,
        foo() {
            foo();
        }
    }
    // to make legal (however, don't control obj)
var obj = {
    x,
    foo() {
        obj.foo();
    }
}

// computed properties
var x = 2;
var bar = "bar";
var obj = {
    x,
    foo() {
        obj.foo();
    },
    [bar.toUpperCase()]: 5
}

obj.bar;

// getter and setter syntax
var x = 2;
var bar = "bar";
var obj = {
    x,
    foo() {
        obj.foo();
    },
    [bar.toUpperCase()]: 5,
    get y() {
        return Math.random()
    },
    set y(val) {
        console.log("haha, you thought " + val);
    }
}

// getter
obj.y // random number
obj.y = 5 //haha, you thought 5

// concise generators, signified with star
var x = 2;
var bar = "bar";
var obj = {
    x,
    foo() {
        obj.foo();
    },
    * baz() {

    },
    [bar.toUpperCase]: 5,
    get y() {
        return Math.random()
    },
    set y(val) {
        console.log("haha, you thought " + val);
    }
}

// note: in Chai, expectation is getter or setter (figure out which)
// setters not that useful, but getters are?

// template literals (terrible name, Kyles opinion) - backtick for strings - interpolated string literal
// old
var name = "Kyle",
    title = "Instructor",
    email = "getify@gmail.com";
// manually interpolate string
// not reuseable - one time interpolating thing
var msg = "Hello, I'm " + name + ", your " +
    title + "for the class.  Contact me at " +
    email;
// new
var msg = `Hello, I'm ${name},
    your ${title} for the class.  Contact me at
    ${email}`;

// newlines are included
// old modified to equal above.
var msg = "Hello, I'm " + name + ", \
    your ",
    +
    title + "for the \
    class.  Contact me at " +
    email;
var msg = `Hello, I'm ${name},
        your ${title} for the class.  Contact me at
        ${email}`;
// this hasn't changed
var msg = `Hello, I'm ${name},
    your ${title} for the class.  Contact me at
    ${email}`;

//tags - foo function below will pass arguments - first is strings (not the variables!), second is all the values as individual parameters, so use gather operator.  Strings array will always have 1 more value than values array. Even if blank string at beginning.  Critical so can reconstitute string.
function foo(strings, ...values) {
  var str = "";
  for (var i = 0; i < strings.length; i++) {
    if (i > 0) str += value[i-1];
    str += strings[i];
  }
  return str;
}
var name = "Kyle",
    title = "Instructor",
    email = "getify@gmail.com";
var msg = foo `Hello, I'm ${name},
        your ${title} for the class.  Contact me at
        ${email}`;
// so why do this?  E.g. Automatic formatting for localization
// some people have even done this for DSLs (e.g. for jsx)
function foo(strings, ...values) {
  var str = "";
  for (var i = 0; i < strings.length; i++) {
    if (i > 0) str += value[i-1].toUpperCase();
    str += strings[i];
  }
  return str;
}
var msg = upper `Hello, I'm ${name},
        your ${title} for the class.  Contact me at
        ${email}`;

// one note - can't pass anythign else.  so for currency example, autogenerate functions for currencies
var msg = upper.UsCurrency `Hello, I'm ${name},
        your ${title} for the class.  Contact me at
        ${email}`;
