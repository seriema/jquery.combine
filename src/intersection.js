(function ($) {
    'use strict';

	/* Intersection of the sets A and B, denoted A ∩ B, is the set of all objects that are members of both A and B.
	 * The intersection of {1, 2, 3} and {2, 3, 4} is the set {2, 3}.
	 */
    var slice = [].slice;
    jQuery.intersection = function () {
		var result = $.extend({}, arguments[0]);
		var args = slice.call(arguments, 1);
		var length = args.length;

        for (var i = 0; i < length; i++) { // incrementing for-loop, because order matters
			var source = args[i];
			for (var prop in result) {
				if (source.hasOwnProperty(prop))
					result[prop] = source[prop];
				else
					delete result[prop];
			}
		}

		return result;
	};
}(jQuery));