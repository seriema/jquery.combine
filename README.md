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
var a = { one: 1, two: 2 };
var b = { one: 1, three: 3 };

var w = $.union(a, b);        // { one: 1, two: 2, three: 3 }
var x = $.intersection(a, b); // { one: 1 }
var y = $.difference(a, b);   // { two: 2 }
var z = $.symmetric(a, b);    // { two: 2, three: 3 }
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
var a = { one: 1, two: 2 };
var b = { one: 1, three: 3 };

var result = $.union(a, b);  // { one: 1, two: 2, three: 3 }
```

### Intersection
Copies the common properties between given objects, into a new object. Supports more than two arguments.
```javascript
var a = { one: 1, two: 2 };
var b = { one: 1, three: 3 };

var result = $.intersection(a, b); // { one: 1 }
```

### Difference
The first argument is compared to the others and the the unique properties are copied to a new object. Supports more than two arguments.
```javascript
var u = { one: 1, two: 2 };
var a = { one: 1, three: 3 };

var result = $.difference(u, a); // { two: 2 }
```

### Symmetric difference
Similar to `difference` but it doesn't treat any arguments different, instead it makes a `union` between the `difference` of all arguments. Supports more than two arguments.
```javascript
var a = { one: 1, two: 2 };
var b = { one: 1, three: 3 };

var result = $.symmetric(a, b); // { two: 2, three: 3 }
```



## Release History
v0.0.1 - 25 March 2013 - Completed library code and basic documentation.
