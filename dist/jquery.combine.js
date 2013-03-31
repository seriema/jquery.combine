/*! jQuery Combine - v0.0.1 - 2013-03-25
* https://github.com/seriema/jp.js
* Copyright (c) 2013 John-Philip Johansson; Licensed MIT */
(function($) {
	'use strict';

	/* Set difference of U and A, denoted U \ A, is the set of all members of U that are not members of A. 
	 * The set difference {1,2,3} \ {2,3,4} is {1} , while, conversely, the set difference {2,3,4} \ {1,2,3} is {4}.
	 * When A is a subset of U, the set difference U \ A is also called the complement of A in U. In this case, 
	 * if the choice of U is clear from the context, the notation Ac is sometimes used instead of U \ A, 
	 * particularly if U is a universal set as in the study of Venn diagrams.
	 */
	$.difference = function (u) {
		var result = $.extend({}, u);
		var args = [].slice.call(arguments, 1);
		var i = args.length;

		while (i--) {
			var source = args[i];
			for (var prop in source)
				if (source.hasOwnProperty(prop))
					delete result[prop];
		}

		return result;
	};

}(jQuery));


(function($) {
	'use strict';

	/* Intersection of the sets A and B, denoted A ∩ B, is the set of all objects that are members of both A and B. 
	 * The intersection of {1, 2, 3} and {2, 3, 4} is the set {2, 3} .
	 */
	$.intersection = function () {
		var result = $.extend({}, arguments[0]);
		var args = [].slice.call(arguments, 1);
		var i = args.length;

		while (i--) {
			var source = args[i];
			for (var prop in result) {
				if (source.hasOwnProperty(prop) && source[prop])
					result[prop] = source[prop];
				else
					delete result[prop];
			}
		}

		return result;
	};
}(jQuery));


(function($) {
	'use strict';

	/* Symmetric difference of sets A and B is the set of all objects that are a member of exactly 
	 * one of A and B (elements which are in one of the sets, but not in both). For instance, 
	 * for the sets {1,2,3} and {2,3,4} , the symmetric difference set is {1,4} . It is the set difference 
	 * of the union and the intersection, (A ∪ B) \ (A ∩ B) or (A \ B) ∪ (B \ A).
	 */
	$.symmetric = function () {
		var result = {};
		var n = arguments.length;

		for(var i = 0; i < n; i++) {
			var difference = arguments[i];
			for (var j = 0; j < n; j++) {
				if (j === i)
					continue;

				var source = arguments[j];
				difference = $.difference(difference, source);
			}
			result = $.union(result, difference);
		}

		return result;
	};

}(jQuery));


(function($) {
	'use strict';

	/* Union of the sets A and B, denoted A ∪ B, is the set of all objects that are a member of A, or B, or both.
	 * The union of {1, 2, 3} and {2, 3, 4} is the set {1, 2, 3, 4} .
	 */
	// Implementation taken from Underscore.js Version (1.4.4)
	$.union = function () {
		var result = $.extend({}, arguments[0]);
		var args = [].slice.call(arguments, 1);
		var length = args.length;

		for (var i = 0; i < length; i++) { // incrementing for-loop, because order matters for union
			var source = args[i];
			for (var prop in source)
				if (source.hasOwnProperty(prop))
					result[prop] = source[prop];
		}

		return result;
	};

}(jQuery));

