// TODO: Should not loose info. when two equal keys with different values are joined they should result in an array
(function($) {
	'use strict';

	module('Union.common');

	test('Does not modify first parameter', function () {
		var a = { foo: 'abc', bar: 'abc' };
		var b = { foo: 'abc', baz: 'def' };
		var original = $.extend({}, a);

		$.union(a, b);

		deepEqual(a, original);
	});

	test('No parameters returns empty object', function () {
		var result = $.union();

		deepEqual(result, {});
	});

	test('One parameter returns that parameter', function () {
		var a = { foo: 'baz', bar: 'abc' };
		var result = $.union(a);
		var original = $.extend({}, a);

		deepEqual(result, original);
	});


	module('Union');

	test('Value on left, no value on right, gives left value', function () {
		var a = { prop: 'value' };
		var b = {};
		var result = $.union(a, b);

		deepEqual(result, a);
	});

	test('No value on left, value on right, gives right value', function () {
		var a = {};
		var b = { prop: 'value' };
		var result = $.union(a, b);

		deepEqual(result, b);
	});

	test('No values on objects, gives empty object', function () {
		var a = {};
		var b = {};
		var result = $.union(a, b);

		deepEqual(result, {});
	});

	test('Property on left and property on right, gives both properties', function () {
		var a = { prop1: 'foo' };
		var b = { prop2: 'bar' };
		var result = $.union(a, b);

		deepEqual(result.prop1, a.prop1);
		deepEqual(result.prop2, b.prop2);
	});

	test('One value on left, other value on right, gives right value', function () {
		var a = { prop: 'foo' };
		var b = { prop: 'bar' };
	var expected = { prop: 'bar' };
		var result = $.union(a, b);

		deepEqual(result, expected);
	});

	test('Two objects returns union', function () {
	var a = { foo: 1, bar: 1 };
	var b = { foo: 2, buz: 1 };
		var expected = { foo: 2, bar: 1, buz: 1 };

		var result = $.union(a, b);

		deepEqual(result, expected);
	});

    test('Multiple objects returns union', function () {
        var a = { one: 1, two: 2, three: 3, four: 4  };
        var b = { two: 2, three: 3 };
        var c = { three: 3, four: 4 };
        var d = { four: 4, three: 3 };
		var expected = { one: 1, two: 2, three: 3, four: 4 };
		var result = $.union(a, b, c, d);

		deepEqual(result, expected);
	});
}(jQuery));