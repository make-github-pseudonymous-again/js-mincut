"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = adj;
function adj(edges) {
	var G = new Map();
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = edges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var u = _ref2[0];
			var v = _ref2[1];

			if (!G.has(u)) G.set(u, []);
			G.get(u).push(v);
			if (!G.has(v)) G.set(v, []);
			G.get(v).push(u);
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

	return G;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGouanMiXSwibmFtZXMiOlsiYWRqIiwiZWRnZXMiLCJHIiwiTWFwIiwidSIsInYiLCJoYXMiLCJzZXQiLCJnZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFDd0JBLEc7QUFBVCxTQUFTQSxHQUFULENBQWVDLEtBQWYsRUFBdUI7QUFDckMsS0FBTUMsSUFBSSxJQUFJQyxHQUFKLEVBQVY7QUFEcUM7QUFBQTtBQUFBOztBQUFBO0FBRXJDLHVCQUF5QkYsS0FBekIsOEhBQWlDO0FBQUE7O0FBQUE7O0FBQUEsT0FBbkJHLENBQW1CO0FBQUEsT0FBZkMsQ0FBZTs7QUFDaEMsT0FBSyxDQUFDSCxFQUFFSSxHQUFGLENBQU1GLENBQU4sQ0FBTixFQUFpQkYsRUFBRUssR0FBRixDQUFNSCxDQUFOLEVBQVMsRUFBVDtBQUNqQkYsS0FBRU0sR0FBRixDQUFNSixDQUFOLEVBQVNLLElBQVQsQ0FBY0osQ0FBZDtBQUNBLE9BQUssQ0FBQ0gsRUFBRUksR0FBRixDQUFNRCxDQUFOLENBQU4sRUFBaUJILEVBQUVLLEdBQUYsQ0FBTUYsQ0FBTixFQUFTLEVBQVQ7QUFDakJILEtBQUVNLEdBQUYsQ0FBTUgsQ0FBTixFQUFTSSxJQUFULENBQWNMLENBQWQ7QUFDQTtBQVBvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFyQyxRQUFPRixDQUFQO0FBQ0EiLCJmaWxlIjoiYWRqLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGogKCBlZGdlcyApIHtcblx0Y29uc3QgRyA9IG5ldyBNYXAoKTtcblx0Zm9yICggY29uc3QgWyB1ICwgdiBdIG9mIGVkZ2VzICkge1xuXHRcdGlmICggIUcuaGFzKHUpICkgRy5zZXQodSwgW10pIDtcblx0XHRHLmdldCh1KS5wdXNoKHYpO1xuXHRcdGlmICggIUcuaGFzKHYpICkgRy5zZXQodiwgW10pIDtcblx0XHRHLmdldCh2KS5wdXNoKHUpO1xuXHR9XG5cdHJldHVybiBHO1xufVxuIl19