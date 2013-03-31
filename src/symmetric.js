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

