'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _smallcuts;

var _jsItertools = require('@aureooms/js-itertools');

var _order2 = require('./_order');

var _order3 = _interopRequireDefault(_order2);

var _contract2 = require('./_contract');

var _contract3 = _interopRequireDefault(_contract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_smallcuts);

/**
 * Yields the small cuts of undirected unweighted connected loopless multigraph G.
 * At least one of them must be a minimum cut.
 *
 * @param {Map} G The adjacency list of G.
 * @returns {Iterable} The small cuts of G.
 */
function _smallcuts(G) {
	var H, id, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, ordering, _ordering, x, _ordering2, y, cutsize;

	return regeneratorRuntime.wrap(function _smallcuts$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					H = G;
					id = new Map();
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 5;

					for (_iterator = G.keys()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						v = _step.value;
						id.set(v, [v]);
					}_context.next = 13;
					break;

				case 9:
					_context.prev = 9;
					_context.t0 = _context['catch'](5);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 13:
					_context.prev = 13;
					_context.prev = 14;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 16:
					_context.prev = 16;

					if (!_didIteratorError) {
						_context.next = 19;
						break;
					}

					throw _iteratorError;

				case 19:
					return _context.finish(16);

				case 20:
					return _context.finish(13);

				case 21:
					if (!(H.size >= 2)) {
						_context.next = 31;
						break;
					}

					ordering = (0, _jsItertools.list)((0, _order3.default)(H)); // compute the max-back order

					_ordering = _slicedToArray(ordering[ordering.length - 2], 1), x = _ordering[0];
					_ordering2 = _slicedToArray(ordering[ordering.length - 1], 2), y = _ordering2[0], cutsize = _ordering2[1];
					_context.next = 27;
					return [new Set(id.get(y)), cutsize];

				case 27:
					// yield a small cut with its size

					id.set(x, id.get(x).concat(id.get(y))); // associate the last vertex with the penultimate one

					H = (0, _contract3.default)(H, (0, _jsItertools.list)((0, _jsItertools.map)(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
						    u = _ref2[0],
						    _ = _ref2[1];

						return u;
					}, ordering))); // contract all edges between those two vertices

					_context.next = 21;
					break;

				case 31:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[5, 9, 13, 21], [14,, 16, 20]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL19zbWFsbGN1dHMuanMiXSwibmFtZXMiOlsiX3NtYWxsY3V0cyIsIkciLCJIIiwiaWQiLCJNYXAiLCJrZXlzIiwidiIsInNldCIsInNpemUiLCJvcmRlcmluZyIsImxlbmd0aCIsIngiLCJ5IiwiY3V0c2l6ZSIsIlNldCIsImdldCIsImNvbmNhdCIsInUiLCJfIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFZeUJBLFU7O0FBWnpCOztBQUVBOzs7O0FBQ0E7Ozs7OzttREFTeUJBLFU7O0FBUHpCOzs7Ozs7O0FBT2UsU0FBVUEsVUFBVixDQUF1QkMsQ0FBdkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVWQyxNQUZVLEdBRU5ELENBRk07QUFHUkUsT0FIUSxHQUdILElBQUlDLEdBQUosRUFIRztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlkLHNCQUFpQkgsRUFBRUksSUFBRixFQUFqQjtBQUFZQyxPQUFaO0FBQTJCSCxTQUFHSSxHQUFILENBQU9ELENBQVAsRUFBUyxDQUFDQSxDQUFELENBQVQ7QUFBM0IsTUFKYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLFdBTU5KLEVBQUVNLElBQUYsSUFBVSxDQU5KO0FBQUE7QUFBQTtBQUFBOztBQVFQQyxhQVJPLEdBUUksdUJBQUsscUJBQU9QLENBQVAsQ0FBTCxDQVJKLEVBUXFCOztBQVJyQixnQ0FTQ08sU0FBU0EsU0FBU0MsTUFBVCxHQUFnQixDQUF6QixDQVRELE1BU0xDLENBVEs7QUFBQSxpQ0FVV0YsU0FBU0EsU0FBU0MsTUFBVCxHQUFnQixDQUF6QixDQVZYLE1BVUxFLENBVkssa0JBVURDLE9BVkM7QUFBQTtBQUFBLFlBWVAsQ0FBRSxJQUFJQyxHQUFKLENBQVFYLEdBQUdZLEdBQUgsQ0FBT0gsQ0FBUCxDQUFSLENBQUYsRUFBdUJDLE9BQXZCLENBWk87O0FBQUE7QUFZNEI7O0FBRXpDVixRQUFHSSxHQUFILENBQU9JLENBQVAsRUFBVVIsR0FBR1ksR0FBSCxDQUFPSixDQUFQLEVBQVVLLE1BQVYsQ0FBaUJiLEdBQUdZLEdBQUgsQ0FBT0gsQ0FBUCxDQUFqQixDQUFWLEVBZGEsQ0FjMkI7O0FBRXhDVixTQUFJLHdCQUFVQSxDQUFWLEVBQWEsdUJBQUssc0JBQUk7QUFBQTtBQUFBLFVBQUVlLENBQUY7QUFBQSxVQUFJQyxDQUFKOztBQUFBLGFBQVdELENBQVg7QUFBQSxNQUFKLEVBQW1CUixRQUFuQixDQUFMLENBQWIsQ0FBSixDQWhCYSxDQWdCeUM7O0FBaEJ6QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9zbWFsbGN1dHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgaGVhZCAsIGZpbHRlciAsIGNoYWluIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgX29yZGVyIGZyb20gJy4vX29yZGVyJyA7XG5pbXBvcnQgX2NvbnRyYWN0IGZyb20gJy4vX2NvbnRyYWN0JyA7XG5cbi8qKlxuICogWWllbGRzIHRoZSBzbWFsbCBjdXRzIG9mIHVuZGlyZWN0ZWQgdW53ZWlnaHRlZCBjb25uZWN0ZWQgbG9vcGxlc3MgbXVsdGlncmFwaCBHLlxuICogQXQgbGVhc3Qgb25lIG9mIHRoZW0gbXVzdCBiZSBhIG1pbmltdW0gY3V0LlxuICpcbiAqIEBwYXJhbSB7TWFwfSBHIFRoZSBhZGphY2VuY3kgbGlzdCBvZiBHLlxuICogQHJldHVybnMge0l0ZXJhYmxlfSBUaGUgc21hbGwgY3V0cyBvZiBHLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX3NtYWxsY3V0cyAoIEcgKSB7XG5cblx0bGV0IEggPSBHO1xuXHRjb25zdCBpZCA9IG5ldyBNYXAoKTtcblx0Zm9yICggY29uc3QgdiBvZiBHLmtleXMoKSkgaWQuc2V0KHYsW3ZdKTtcblxuXHR3aGlsZSAoIEguc2l6ZSA+PSAyICkge1xuXG5cdFx0Y29uc3Qgb3JkZXJpbmcgPSBsaXN0KF9vcmRlcihIKSk7IC8vIGNvbXB1dGUgdGhlIG1heC1iYWNrIG9yZGVyXG5cdFx0Y29uc3QgWyB4IF0gPSBvcmRlcmluZ1tvcmRlcmluZy5sZW5ndGgtMl07XG5cdFx0Y29uc3QgWyB5ICwgY3V0c2l6ZSBdID0gb3JkZXJpbmdbb3JkZXJpbmcubGVuZ3RoLTFdO1xuXG5cdFx0eWllbGQgWyBuZXcgU2V0KGlkLmdldCh5KSkgLCBjdXRzaXplIF0gOyAvLyB5aWVsZCBhIHNtYWxsIGN1dCB3aXRoIGl0cyBzaXplXG5cblx0XHRpZC5zZXQoeCwgaWQuZ2V0KHgpLmNvbmNhdChpZC5nZXQoeSkpKTsgLy8gYXNzb2NpYXRlIHRoZSBsYXN0IHZlcnRleCB3aXRoIHRoZSBwZW51bHRpbWF0ZSBvbmVcblxuXHRcdEggPSBfY29udHJhY3QoSCwgbGlzdChtYXAoKFt1LF9dKSA9PiB1ICwgb3JkZXJpbmcpKSk7IC8vIGNvbnRyYWN0IGFsbCBlZGdlcyBiZXR3ZWVuIHRob3NlIHR3byB2ZXJ0aWNlc1xuXG5cdH1cblxufVxuIl19