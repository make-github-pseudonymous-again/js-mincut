'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _order;

var _jsCompare = require('@aureooms/js-compare');

var _jsPairingHeap = require('@aureooms/js-pairing-heap');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_order);

function _order(G) {
	var heap, refs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _, max, u, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _v, ref;

	return regeneratorRuntime.wrap(function _order$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					heap = new _jsPairingHeap.PairingHeap((0, _jsCompare.attr)(_jsCompare.decreasing, 'key'));
					refs = new Map();
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 5;


					for (_iterator = G.keys()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						v = _step.value;
						refs.set(v, heap.push({ key: 0, value: v }));
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
					_iteratorNormalCompletion2 = true;
					_didIteratorError2 = false;
					_iteratorError2 = undefined;
					_context.prev = 24;
					_iterator2 = G[Symbol.iterator]();

				case 26:
					if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
						_context.next = 64;
						break;
					}

					_ = _step2.value;
					max = heap.pop();
					u = max.value;
					_context.next = 32;
					return [u, max.key];

				case 32:
					refs.delete(u);

					// update keys
					_iteratorNormalCompletion3 = true;
					_didIteratorError3 = false;
					_iteratorError3 = undefined;
					_context.prev = 36;
					_iterator3 = G.get(u)[Symbol.iterator]();

				case 38:
					if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
						_context.next = 47;
						break;
					}

					_v = _step3.value;

					if (refs.has(_v)) {
						_context.next = 42;
						break;
					}

					return _context.abrupt('continue', 44);

				case 42:
					ref = refs.get(_v);
					// max heap so decrease-key is used for +

					heap.decreasekey(ref, {
						key: ref.value.key + 1,
						value: ref.value.value
					});

				case 44:
					_iteratorNormalCompletion3 = true;
					_context.next = 38;
					break;

				case 47:
					_context.next = 53;
					break;

				case 49:
					_context.prev = 49;
					_context.t1 = _context['catch'](36);
					_didIteratorError3 = true;
					_iteratorError3 = _context.t1;

				case 53:
					_context.prev = 53;
					_context.prev = 54;

					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}

				case 56:
					_context.prev = 56;

					if (!_didIteratorError3) {
						_context.next = 59;
						break;
					}

					throw _iteratorError3;

				case 59:
					return _context.finish(56);

				case 60:
					return _context.finish(53);

				case 61:
					_iteratorNormalCompletion2 = true;
					_context.next = 26;
					break;

				case 64:
					_context.next = 70;
					break;

				case 66:
					_context.prev = 66;
					_context.t2 = _context['catch'](24);
					_didIteratorError2 = true;
					_iteratorError2 = _context.t2;

				case 70:
					_context.prev = 70;
					_context.prev = 71;

					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}

				case 73:
					_context.prev = 73;

					if (!_didIteratorError2) {
						_context.next = 76;
						break;
					}

					throw _iteratorError2;

				case 76:
					return _context.finish(73);

				case 77:
					return _context.finish(70);

				case 78:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[5, 9, 13, 21], [14,, 16, 20], [24, 66, 70, 78], [36, 49, 53, 61], [54,, 56, 60], [71,, 73, 77]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL19vcmRlci5qcyJdLCJuYW1lcyI6WyJfb3JkZXIiLCJHIiwiaGVhcCIsInJlZnMiLCJNYXAiLCJrZXlzIiwidiIsInNldCIsInB1c2giLCJrZXkiLCJ2YWx1ZSIsIl8iLCJtYXgiLCJwb3AiLCJ1IiwiZGVsZXRlIiwiZ2V0IiwiaGFzIiwicmVmIiwiZGVjcmVhc2VrZXkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd5QkEsTTs7QUFIekI7O0FBQ0E7O21EQUV5QkEsTTs7QUFBVixTQUFVQSxNQUFWLENBQW1CQyxDQUFuQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVJDLFNBRlEsR0FFRCwrQkFBaUIsNENBQW1CLEtBQW5CLENBQWpCLENBRkM7QUFHUkMsU0FIUSxHQUdELElBQUlDLEdBQUosRUFIQztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFLZCxzQkFBaUJILEVBQUVJLElBQUYsRUFBakI7QUFBWUMsT0FBWjtBQUE0QkgsV0FBS0ksR0FBTCxDQUFTRCxDQUFULEVBQVlKLEtBQUtNLElBQUwsQ0FBVSxFQUFFQyxLQUFNLENBQVIsRUFBWUMsT0FBUUosQ0FBcEIsRUFBVixDQUFaO0FBQTVCLE1BTGM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU9HTCxDQVBIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0ZVLE1BUEU7QUFTUEMsUUFUTyxHQVNEVixLQUFLVyxHQUFMLEVBVEM7QUFVUEMsTUFWTyxHQVVIRixJQUFJRixLQVZEO0FBQUE7QUFBQSxZQVdQLENBQUVJLENBQUYsRUFBTUYsSUFBSUgsR0FBVixDQVhPOztBQUFBO0FBWWJOLFVBQUtZLE1BQUwsQ0FBWUQsQ0FBWjs7QUFFQTtBQWRhO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZUliLEVBQUVlLEdBQUYsQ0FBTUYsQ0FBTixDQWZKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZURSLE9BZkM7O0FBQUEsU0FnQlBILEtBQUtjLEdBQUwsQ0FBU1gsRUFBVCxDQWhCTztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQWlCTlksUUFqQk0sR0FpQkFmLEtBQUthLEdBQUwsQ0FBU1YsRUFBVCxDQWpCQTtBQWtCWjs7QUFDQUosVUFBS2lCLFdBQUwsQ0FBaUJELEdBQWpCLEVBQXNCO0FBQ3JCVCxXQUFNUyxJQUFJUixLQUFKLENBQVVELEdBQVYsR0FBZ0IsQ0FERDtBQUVyQkMsYUFBUVEsSUFBSVIsS0FBSixDQUFVQTtBQUZHLE1BQXRCOztBQW5CWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX29yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXR0ciAsIGRlY3JlYXNpbmcgfSBmcm9tICdAYXVyZW9vbXMvanMtY29tcGFyZScgO1xuaW1wb3J0IHsgUGFpcmluZ0hlYXAgfSBmcm9tICdAYXVyZW9vbXMvanMtcGFpcmluZy1oZWFwJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfb3JkZXIgKCBHICkge1xuXG5cdGNvbnN0IGhlYXAgPSBuZXcgUGFpcmluZ0hlYXAoIGF0dHIoIGRlY3JlYXNpbmcgLCAna2V5JyApICk7XG5cdGNvbnN0IHJlZnMgPSBuZXcgTWFwKCk7XG5cblx0Zm9yICggY29uc3QgdiBvZiBHLmtleXMoKSApIHJlZnMuc2V0KHYsIGhlYXAucHVzaCh7IGtleSA6IDAgLCB2YWx1ZSA6IHYgfSkpIDtcblxuXHRmb3IgKCBjb25zdCBfIG9mIEcgKSB7XG5cblx0XHRjb25zdCBtYXggPSBoZWFwLnBvcCgpIDtcblx0XHRjb25zdCB1ID0gbWF4LnZhbHVlIDtcblx0XHR5aWVsZCBbIHUgLCBtYXgua2V5IF0gO1xuXHRcdHJlZnMuZGVsZXRlKHUpO1xuXG5cdFx0Ly8gdXBkYXRlIGtleXNcblx0XHRmb3IgKCBjb25zdCB2IG9mIEcuZ2V0KHUpICkge1xuXHRcdFx0aWYgKCFyZWZzLmhhcyh2KSkgY29udGludWU7XG5cdFx0XHRjb25zdCByZWYgPSByZWZzLmdldCh2KTtcblx0XHRcdC8vIG1heCBoZWFwIHNvIGRlY3JlYXNlLWtleSBpcyB1c2VkIGZvciArXG5cdFx0XHRoZWFwLmRlY3JlYXNla2V5KHJlZiwge1xuXHRcdFx0XHRrZXkgOiByZWYudmFsdWUua2V5ICsgMSAsXG5cdFx0XHRcdHZhbHVlIDogcmVmLnZhbHVlLnZhbHVlXG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19