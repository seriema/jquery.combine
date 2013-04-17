[![Build Status](https://travis-ci.org/seriema/jquery.combine.png?branch=master)](https://travis-ci.org/seriema/jquery.combine)

# jQuery Combine

Combine regular JS objects using some basic operations: union, intersection, difference, and symmetric difference.

Only 238 bytes (gzipped)!

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/seriema/jquery.combine/master/dist/jquery.combine.min.js
[max]: https://raw.github.com/seriema/jquery.combine/master/dist/jquery.combine.js

In your web page:

```html
<script src="libs/jquery/jquery.js"></script>
<script src="dist/jquery.combine.min.js"></script>
```

In your script:

```javascript
var a = { foo: 1, bar: 1 };
var b = { foo: 2, buz: 1 };

var w = $.union(a, b);        // { foo: 2, bar: 1, buz: 1 }
var x = $.intersection(a, b); // { foo: 2 }
var y = $.difference(a, b);   // { bar: 1 }
var z = $.symmetric(a, b);    // { bar: 1, buz: 1 }
```

## Documentation
`jQuery.extend()` is useful in a lot of situations to join objects. In a project I needed to do something different. I needed to find unique values amongst various attributes to form one unique combination. Basically I needed several `differences` and then an `union`, or more commonly done through a `symmetric difference`.

This library supports four combinations common in `set theory`:
* Union
* Intersection
* Difference
* Symmetric difference

The methods take two or more arguments. It currently does not support deep comparisons, or "recursive call", like `jQuery.extend()` does.

*Note*: When there's attributes with different values, the last one in the arguments list is used.

### Union
Union of the sets A and B, denoted A ∪ B, is the set of all objects that are a member of A, or B, or both. The union of {1, 2, 3} and {2, 3, 4} is the set {1, 2, 3, 4} .

### Intersection
Intersection of the sets A and B, denoted A ∩ B, is the set of all objects that are members of both A and B. The intersection of {1, 2, 3} and {2, 3, 4} is the set {2, 3} .

### Difference
Set difference of U and A, denoted U \ A, is the set of all members of U that are not members of A. The set difference {1,2,3} \ {2,3,4} is {1} , while, conversely, the set difference {2,3,4} \ {1,2,3} is {4}. When A is a subset of U, the set difference U \ A is also called the complement of A in U. In this case, if the choice of U is clear from the context, the notation Ac is sometimes used instead of U \ A, particularly if U is a universal set as in the study of Venn diagrams.

### Symmetric difference
Symmetric difference of sets A and B is the set of all objects that are a member of exactly one of A and B (elements which are in one of the sets, but not in both). For instance, for the sets {1,2,3} and {2,3,4} , the symmetric difference set is {1,4} . It is the set difference of the union and the intersection, (A ∪ B) \ (A ∩ B) or (A \ B) ∪ (B \ A).

## Examples

### Union
Union is pretty much the same as $.extend() in regular jQuery. Supports more than two arguments.
```javascript
var a = { foo: 1, bar: 1 };
var b = { foo: 2, buz: 1 };

var result = $.union(a, b); // { foo: 2, bar: 1, buz: 1 }
```

### Intersection
Copies the common properties between given objects, into a new object. Supports more than two arguments.
```javascript
var a = { foo: 1, bar: 1 };
var b = { foo: 2, buz: 1 };

var result = $.intersection(a, b); // { foo: 2 }
```

### Difference
The first argument is compared to the others and the the unique properties are copied to a new object. Supports more than two arguments.
```javascript
var a = { foo: 1, bar: 1 };
var b = { foo: 2, buz: 1 };

var result = $.difference(a, b); // { bar: 1 }
```

### Symmetric difference
Similar to `difference` but it doesn't treat any arguments different, instead it makes a `union` between the `difference` of all arguments. Supports more than two arguments.
```javascript
var a = { foo: 1, bar: 1 };
var b = { foo: 2, buz: 1 };

var result = $.symmetric(a, b); // { bar: 1, buz: 1 }
```

## Developers
This project can be developed and tested simply by using your standard editor and opening /test/index.html in a browser. But it also supports Grunt to set up a nice environment and work with Travis-CI. `grunt dist` creates a distribution package. It uses Bower to keep the libraries updated, but for convenience the libraries are checked in. If you use WebStorm IDE or otherwise prefer the jsTestDriver there's support for that as well. JSHint is used and encouraged, so use the included config files. Dependencies are solved with RequireJS, but does not rely on any other functionality from it.


## Release History
v0.1.0 - ?? April 2013 - Updated library based on feedback. Also added support for hipster-coding and increased buzzword-compliance.
v0.0.1 - 25 March 2013 - Completed library code and basic documentation.
