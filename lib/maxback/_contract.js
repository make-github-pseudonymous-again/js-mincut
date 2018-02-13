'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _contract;

var _jsItertools = require('@aureooms/js-itertools');

/**
 * Given G and some ordering, computes the graph H obtained from G by
 * contracting all edges between the last two vertices of the ordering.
 *
 * @param {Map} G
 * @param {Array} ordering
 * @returns {Map}
 */
function _contract(G, ordering) {

	var u = ordering[ordering.length - 2];
	var v = ordering[ordering.length - 1];

	var H = new Map();

	// replace each edge xv by the edge xu, x != u ^ x != v
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _jsItertools.head)(ordering, -2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;

			var n = [];
			H.set(x, n);
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = G.get(x)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var y = _step4.value;
					n.push(y === v ? u : y);
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var nx = [];
	H.set(u, nx);
	// keep all edges ux with, x != v (x != u is implied because G is loopless)
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = G.get(u)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _x = _step2.value;
			if (_x !== v) nx.push(_x);
		} // replace each edge vx by the edge ux, x != u ^ x != v
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = G.get(v)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _x2 = _step3.value;
			if (_x2 !== u && _x2 !== v) nx.push(_x2);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return H;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL19jb250cmFjdC5qcyJdLCJuYW1lcyI6WyJfY29udHJhY3QiLCJHIiwib3JkZXJpbmciLCJ1IiwibGVuZ3RoIiwidiIsIkgiLCJNYXAiLCJ4IiwibiIsInNldCIsImdldCIsInkiLCJwdXNoIiwibngiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVV3QkEsUzs7QUFWeEI7O0FBRUE7Ozs7Ozs7O0FBUWUsU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JDLFFBQXhCLEVBQW1DOztBQUVqRCxLQUFNQyxJQUFJRCxTQUFTQSxTQUFTRSxNQUFULEdBQWdCLENBQXpCLENBQVY7QUFDQSxLQUFNQyxJQUFJSCxTQUFTQSxTQUFTRSxNQUFULEdBQWdCLENBQXpCLENBQVY7O0FBRUEsS0FBTUUsSUFBSSxJQUFJQyxHQUFKLEVBQVY7O0FBRUE7QUFQaUQ7QUFBQTtBQUFBOztBQUFBO0FBUWpELHVCQUFpQix1QkFBTUwsUUFBTixFQUFpQixDQUFDLENBQWxCLENBQWpCLDhIQUF5QztBQUFBLE9BQTdCTSxDQUE2Qjs7QUFDeEMsT0FBTUMsSUFBSSxFQUFWO0FBQ0FILEtBQUVJLEdBQUYsQ0FBTUYsQ0FBTixFQUFTQyxDQUFUO0FBRndDO0FBQUE7QUFBQTs7QUFBQTtBQUd4QywwQkFBaUJSLEVBQUVVLEdBQUYsQ0FBTUgsQ0FBTixDQUFqQjtBQUFBLFNBQVlJLENBQVo7QUFBNEJILE9BQUVJLElBQUYsQ0FBT0QsTUFBTVAsQ0FBTixHQUFVRixDQUFWLEdBQWNTLENBQXJCO0FBQTVCO0FBSHdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJeEM7QUFaZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjakQsS0FBTUUsS0FBSyxFQUFYO0FBQ0FSLEdBQUVJLEdBQUYsQ0FBTVAsQ0FBTixFQUFRVyxFQUFSO0FBQ0E7QUFoQmlEO0FBQUE7QUFBQTs7QUFBQTtBQWlCakQsd0JBQWlCYixFQUFFVSxHQUFGLENBQU1SLENBQU4sQ0FBakI7QUFBQSxPQUFZSyxFQUFaO0FBQTRCLE9BQUtBLE9BQU1ILENBQVgsRUFBZVMsR0FBR0QsSUFBSCxDQUFRTCxFQUFSO0FBQTNDLEdBakJpRCxDQWtCakQ7QUFsQmlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBbUJqRCx3QkFBaUJQLEVBQUVVLEdBQUYsQ0FBTU4sQ0FBTixDQUFqQjtBQUFBLE9BQVlHLEdBQVo7QUFBNEIsT0FBS0EsUUFBTUwsQ0FBTixJQUFXSyxRQUFNSCxDQUF0QixFQUEwQlMsR0FBR0QsSUFBSCxDQUFRTCxHQUFSO0FBQXREO0FBbkJpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CakQsUUFBT0YsQ0FBUDtBQUVBIiwiZmlsZSI6Il9jb250cmFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlYWQgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbi8qKlxuICogR2l2ZW4gRyBhbmQgc29tZSBvcmRlcmluZywgY29tcHV0ZXMgdGhlIGdyYXBoIEggb2J0YWluZWQgZnJvbSBHIGJ5XG4gKiBjb250cmFjdGluZyBhbGwgZWRnZXMgYmV0d2VlbiB0aGUgbGFzdCB0d28gdmVydGljZXMgb2YgdGhlIG9yZGVyaW5nLlxuICpcbiAqIEBwYXJhbSB7TWFwfSBHXG4gKiBAcGFyYW0ge0FycmF5fSBvcmRlcmluZ1xuICogQHJldHVybnMge01hcH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnRyYWN0ICggRywgb3JkZXJpbmcgKSB7XG5cblx0Y29uc3QgdSA9IG9yZGVyaW5nW29yZGVyaW5nLmxlbmd0aC0yXTtcblx0Y29uc3QgdiA9IG9yZGVyaW5nW29yZGVyaW5nLmxlbmd0aC0xXTtcblxuXHRjb25zdCBIID0gbmV3IE1hcCgpO1xuXG5cdC8vIHJlcGxhY2UgZWFjaCBlZGdlIHh2IGJ5IHRoZSBlZGdlIHh1LCB4ICE9IHUgXiB4ICE9IHZcblx0Zm9yICggY29uc3QgeCBvZiBoZWFkKCBvcmRlcmluZyAsIC0yICkgKSB7XG5cdFx0Y29uc3QgbiA9IFtdO1xuXHRcdEguc2V0KHgsIG4pO1xuXHRcdGZvciAoIGNvbnN0IHkgb2YgRy5nZXQoeCkgKSBuLnB1c2goeSA9PT0gdiA/IHUgOiB5KTtcblx0fVxuXG5cdGNvbnN0IG54ID0gW107XG5cdEguc2V0KHUsbngpO1xuXHQvLyBrZWVwIGFsbCBlZGdlcyB1eCB3aXRoLCB4ICE9IHYgKHggIT0gdSBpcyBpbXBsaWVkIGJlY2F1c2UgRyBpcyBsb29wbGVzcylcblx0Zm9yICggY29uc3QgeCBvZiBHLmdldCh1KSApIGlmICggeCAhPT0gdiApIG54LnB1c2goeCk7XG5cdC8vIHJlcGxhY2UgZWFjaCBlZGdlIHZ4IGJ5IHRoZSBlZGdlIHV4LCB4ICE9IHUgXiB4ICE9IHZcblx0Zm9yICggY29uc3QgeCBvZiBHLmdldCh2KSApIGlmICggeCAhPT0gdSAmJiB4ICE9PSB2ICkgbngucHVzaCh4KTtcblx0cmV0dXJuIEg7XG5cbn1cbiJdfQ==