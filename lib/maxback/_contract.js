'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _contract;

var _jsItertools = require('@aureooms/js-itertools');

function _contract(G, ordering) {

	var x = ordering[ordering.length - 2];
	var y = ordering[ordering.length - 1];

	var H = new Map();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _jsItertools.head)(ordering, -2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var u = _step.value;

			var n = [];
			H.set(u, n);
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = G.get(u)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _v2 = _step4.value;
					n.push(_v2 === y ? x : _v2);
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
	H.set(x, nx);
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = G.get(x)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var v = _step2.value;
			if (v !== y) nx.push(v);
		}
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
		for (var _iterator3 = G.get(y)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _v = _step3.value;
			if (_v !== x && _v !== y) nx.push(_v);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL19jb250cmFjdC5qcyJdLCJuYW1lcyI6WyJfY29udHJhY3QiLCJHIiwib3JkZXJpbmciLCJ4IiwibGVuZ3RoIiwieSIsIkgiLCJNYXAiLCJ1IiwibiIsInNldCIsImdldCIsInYiLCJwdXNoIiwibngiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsUzs7QUFGeEI7O0FBRWUsU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JDLFFBQXhCLEVBQW1DOztBQUVqRCxLQUFNQyxJQUFJRCxTQUFTQSxTQUFTRSxNQUFULEdBQWdCLENBQXpCLENBQVY7QUFDQSxLQUFNQyxJQUFJSCxTQUFTQSxTQUFTRSxNQUFULEdBQWdCLENBQXpCLENBQVY7O0FBRUEsS0FBTUUsSUFBSSxJQUFJQyxHQUFKLEVBQVY7O0FBTGlEO0FBQUE7QUFBQTs7QUFBQTtBQU9qRCx1QkFBaUIsdUJBQU1MLFFBQU4sRUFBaUIsQ0FBQyxDQUFsQixDQUFqQiw4SEFBeUM7QUFBQSxPQUE3Qk0sQ0FBNkI7O0FBQ3hDLE9BQU1DLElBQUksRUFBVjtBQUNBSCxLQUFFSSxHQUFGLENBQU1GLENBQU4sRUFBU0MsQ0FBVDtBQUZ3QztBQUFBO0FBQUE7O0FBQUE7QUFHeEMsMEJBQWlCUixFQUFFVSxHQUFGLENBQU1ILENBQU4sQ0FBakI7QUFBQSxTQUFZSSxHQUFaO0FBQTRCSCxPQUFFSSxJQUFGLENBQU9ELFFBQU1QLENBQU4sR0FBVUYsQ0FBVixHQUFjUyxHQUFyQjtBQUE1QjtBQUh3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXhDO0FBWGdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWpELEtBQU1FLEtBQUssRUFBWDtBQUNBUixHQUFFSSxHQUFGLENBQU1QLENBQU4sRUFBUVcsRUFBUjtBQWRpRDtBQUFBO0FBQUE7O0FBQUE7QUFlakQsd0JBQWlCYixFQUFFVSxHQUFGLENBQU1SLENBQU4sQ0FBakI7QUFBQSxPQUFZUyxDQUFaO0FBQTRCLE9BQUtBLE1BQU1QLENBQVgsRUFBZVMsR0FBR0QsSUFBSCxDQUFRRCxDQUFSO0FBQTNDO0FBZmlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBZ0JqRCx3QkFBaUJYLEVBQUVVLEdBQUYsQ0FBTU4sQ0FBTixDQUFqQjtBQUFBLE9BQVlPLEVBQVo7QUFBNEIsT0FBS0EsT0FBTVQsQ0FBTixJQUFXUyxPQUFNUCxDQUF0QixFQUEwQlMsR0FBR0QsSUFBSCxDQUFRRCxFQUFSO0FBQXREO0FBaEJpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCakQsUUFBT04sQ0FBUDtBQUVBIiwiZmlsZSI6Il9jb250cmFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlYWQgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb250cmFjdCAoIEcsIG9yZGVyaW5nICkge1xuXG5cdGNvbnN0IHggPSBvcmRlcmluZ1tvcmRlcmluZy5sZW5ndGgtMl07XG5cdGNvbnN0IHkgPSBvcmRlcmluZ1tvcmRlcmluZy5sZW5ndGgtMV07XG5cblx0Y29uc3QgSCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKCBjb25zdCB1IG9mIGhlYWQoIG9yZGVyaW5nICwgLTIgKSApIHtcblx0XHRjb25zdCBuID0gW107XG5cdFx0SC5zZXQodSwgbik7XG5cdFx0Zm9yICggY29uc3QgdiBvZiBHLmdldCh1KSApIG4ucHVzaCh2ID09PSB5ID8geCA6IHYpO1xuXHR9XG5cblx0Y29uc3QgbnggPSBbXTtcblx0SC5zZXQoeCxueCk7XG5cdGZvciAoIGNvbnN0IHYgb2YgRy5nZXQoeCkgKSBpZiAoIHYgIT09IHkgKSBueC5wdXNoKHYpO1xuXHRmb3IgKCBjb25zdCB2IG9mIEcuZ2V0KHkpICkgaWYgKCB2ICE9PSB4ICYmIHYgIT09IHkgKSBueC5wdXNoKHYpO1xuXHRyZXR1cm4gSDtcblxufVxuIl19