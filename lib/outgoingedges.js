"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = outgoingedges;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(outgoingedges);

function outgoingedges(G, U) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, u, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, v;

	return regeneratorRuntime.wrap(function outgoingedges$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = U[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 37;
						break;
					}

					u = _step.value;
					_iteratorNormalCompletion2 = true;
					_didIteratorError2 = false;
					_iteratorError2 = undefined;
					_context.prev = 10;
					_iterator2 = G.get(u)[Symbol.iterator]();

				case 12:
					if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
						_context.next = 20;
						break;
					}

					v = _step2.value;

					if (U.has(v)) {
						_context.next = 17;
						break;
					}

					_context.next = 17;
					return [u, v];

				case 17:
					_iteratorNormalCompletion2 = true;
					_context.next = 12;
					break;

				case 20:
					_context.next = 26;
					break;

				case 22:
					_context.prev = 22;
					_context.t0 = _context["catch"](10);
					_didIteratorError2 = true;
					_iteratorError2 = _context.t0;

				case 26:
					_context.prev = 26;
					_context.prev = 27;

					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}

				case 29:
					_context.prev = 29;

					if (!_didIteratorError2) {
						_context.next = 32;
						break;
					}

					throw _iteratorError2;

				case 32:
					return _context.finish(29);

				case 33:
					return _context.finish(26);

				case 34:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 37:
					_context.next = 43;
					break;

				case 39:
					_context.prev = 39;
					_context.t1 = _context["catch"](3);
					_didIteratorError = true;
					_iteratorError = _context.t1;

				case 43:
					_context.prev = 43;
					_context.prev = 44;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 46:
					_context.prev = 46;

					if (!_didIteratorError) {
						_context.next = 49;
						break;
					}

					throw _iteratorError;

				case 49:
					return _context.finish(46);

				case 50:
					return _context.finish(43);

				case 51:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this, [[3, 39, 43, 51], [10, 22, 26, 34], [27,, 29, 33], [44,, 46, 50]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vdXRnb2luZ2VkZ2VzLmpzIl0sIm5hbWVzIjpbIm91dGdvaW5nZWRnZXMiLCJHIiwiVSIsInUiLCJnZXQiLCJ2IiwiaGFzIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBeUJBLGE7O21EQUFBQSxhOztBQUFWLFNBQVVBLGFBQVYsQ0FBMEJDLENBQTFCLEVBQThCQyxDQUE5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDR0EsQ0FESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNGQyxNQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDd0JGLEVBQUVHLEdBQUYsQ0FBTUQsQ0FBTixDQUR4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNtQkUsTUFEbkI7O0FBQUEsU0FDeUNILEVBQUVJLEdBQUYsQ0FBTUQsQ0FBTixDQUR6QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBQzBELENBQUVGLENBQUYsRUFBTUUsQ0FBTixDQUQxRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoib3V0Z29pbmdlZGdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBvdXRnb2luZ2VkZ2VzICggRyAsIFUgKSB7XG5cdGZvciAoIGNvbnN0IHUgb2YgVSApIGZvciAoIGNvbnN0IHYgb2YgRy5nZXQodSkgKSBpZiAoICFVLmhhcyh2KSApIHlpZWxkIFsgdSAsIHYgXSA7XG59XG4iXX0=