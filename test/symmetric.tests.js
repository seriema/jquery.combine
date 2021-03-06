(function($) {
	'use strict';

	module('Symmetric.common');

	test('Does not modify first parameter', function () {
		var a = { foo: 'abc', bar: 'abc' };
		var b = { foo: 'abc', baz: 'def' };
		var original = $.extend({}, a);

		$.symmetric(a, b);

		deepEqual(a, original);
	});

	test('No parameters returns empty object', function () {
		var result = $.symmetric();

		deepEqual(result, {});
	});

	test('One parameter returns that parameter', function () {
		var a = { foo: 'baz', bar: 'abc' };
		var result = $.symmetric(a);

		deepEqual(result, a);
	});


	module('Symmetric');

	test('Value on left, no value on right, gives left value', function () {
		var a = { prop: 'value' };
		var b = {};
		var result = $.symmetric(a, b);

		deepEqual(result, a);
	});

	test('No value on left, value on right, gives right value', function () {
		var a = {};
		var b = { prop: 'value' };
		var result = $.symmetric(a, b);

		deepEqual(result, b);
	});

	test('No values on objects, gives empty object', function () {
		var a = {};
		var b = {};
		var result = $.symmetric(a, b);

		deepEqual(result, {});
	});

	test('Property on left and property on right, gives both properties', function () {
		var a = { prop1: 'foo' };
		var b = { prop2: 'bar' };
		var result = $.symmetric(a, b);

		deepEqual(result.prop1, a.prop1);
		deepEqual(result.prop2, b.prop2);
	});

	test('One value on left, other value on right, gives empty object', function () {
		var a = { prop: 'foo' };
		var b = { prop: 'bar' };
		var result = $.symmetric(a, b);

		deepEqual(result, {});
	});

	test('Two objects returns symmetric difference', function () {
	var a = { foo: 1, bar: 1 };
	var b = { foo: 2, buz: 1 };
		var expected = { bar: 1, buz: 1 };

		var result = $.symmetric(a, b);

		deepEqual(result, expected);
	});

    test('Multiple objects returns symmetric difference', function () {
        var a = { one: 1, two: 2, three: 3, four: 4  };
        var b = { two: 2, three: 3 };
        var c = { three: 3, four: 4 };
        var d = { four: 4, three: 3 };
		var expected = { one: 1 };
		var result = $.symmetric(a, b, c, d);

		deepEqual(result, expected);
	});
}(jQuery));