(function($) {
	'use strict';

	module('Intersection.common');

	test('Does not modify first parameter', function () {
		var a = { foo: 'baz', bar: 'abc' };
		var original = a;
		var b = { foo: 'baz' };

		$.intersection(a, b);

		deepEqual(a, original);
	});

	test('No parameters returns empty object', function () {
		var result = $.intersection();

		deepEqual(result, {});
	});

	test('One parameter returns that parameter', function () {
		var a = { foo: 'baz', bar: 'abc' };
		var result = $.intersection(a);

		deepEqual(result, a);
	});


	module('Intersection');

	test('Two objects returns intersection', function () {
		var a = { one: 1, two: 2 };
		var b = { one: 1, three: 3 };
		var expected = { one: 1 };

		var result = $.intersection(a, b);

		deepEqual(result, expected);
	});

	test('One value on left, no value on right, returns empty object', function () {
		var a = { foo: 'baz' };
		var b = {};
		var result = $.intersection(a, b);

		deepEqual(result, {});
	});

	test('No value on left, one value on right, returns empty object', function () {
		var a = {};
		var b = { foo: 'baz' };
		var result = $.intersection(a, b);

		deepEqual(result, {});
	});

	test('One property on left, same property on right, returns right property', function () {
		var a = { foo: 'one' };
		var b = { foo: 'two' };
		var result = $.intersection(a, b);

		deepEqual(result, b);
	});

	test('Two properties on left, one equal property on right, returns only common property', function () {
		var a = { foo: 'bar', bar: 'baz' };
		var b = { foo: 'bar' };
		var result = $.intersection(a, b);

		ok(result.foo);
		ok(!result.bar);
	});

	test('One property on left, two properties with one equal to left on right, returns only equal property', function () {
		var a = { foo: 'bar' };
		var b = { foo: 'bar', bar: 'baz' };
		var result = $.intersection(a, b);

		ok(result.foo);
		ok(!result.bar);
	});

	test('Two properties on left, two properties on right with one equal to left, returns only equal property', function () {
		var a = { foo: 'bar', one: 'baz' };
		var b = { foo: 'bar', two: 'baz' };
		var result = $.intersection(a, b);

		ok(result.foo);
		ok(!result.one);
		ok(!result.two);
	});

    test('Multiple objects returns intersection', function () {
        var a = { one: 1, two: 2, three: 3, four: 4  };
        var b = { two: 2, three: 3 };
        var c = { three: 3, four: 4 };
        var d = { four: 4, three: 3 };
		var expected = { three: 3 };
		var result = $.intersection(a, b, c, d);

		deepEqual(result, expected);
	});

/*  TODO: Currently not supported
	module('Intersection.recursive');

	test('First parameter as bool (true) returns second parameter', function () {
		var a = { foo: 'baz', bar: 'abc' };
		var result = $.intersection(true, a);

		deepEqual(result, a);
	});

	test('First parameter as 'true' does a deep intersection (recursively one level)', function () {
		var a = { foo: { one: 1, two: 2 } };
		var b = { foo: { one: 1, three: 3 } };
		var expected = { foo: { one: 1 } };
		var result = $.intersection(true, a, b);

		deepEqual(result, expected);
	});

	test('First parameter as 'true' does a deep intersection (recursively two levels)', function () {
		var a = { foo: { bar: { one: 1, two: 2 }, baz: { three: 3, four: 4 } } };
		var b = { foo: { bar: { one: 1, three: 3 }, baz: { four: 4 } } };
		var expected = { foo: { bar: { one: 1 }, baz: { four: 4 } } };
		var result = $.intersection(true, a, b);

		deepEqual(result, expected);
	});
*/

}(jQuery));