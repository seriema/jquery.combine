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

