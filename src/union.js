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

