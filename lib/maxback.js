'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = maxback;

var _jsItertools = require('@aureooms/js-itertools');

var _jsCompare = require('@aureooms/js-compare');

var _jsPairingHeap = require('@aureooms/js-pairing-heap');

var _adj = require('./adj');

var _adj2 = _interopRequireDefault(_adj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_cuts),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(_constructcut),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(_order);

/**
 * M...-B... poly-time algorithm.
 *
 * @param edges List of edges of a undirected unweighted connected loopless multigraph G.
 * @returns {Array} A minimum cut of G.
 */
function maxback(edges) {
	var G = (0, _adj2.default)(edges);
	return _maxback(G);
}

function _maxback(G) {
	return (0, _jsItertools.min)((0, _jsCompare.len)(_jsCompare.increasing), _cuts(G), undefined);
}

function _cuts(G) {
	var ordering, cut;
	return regeneratorRuntime.wrap(function _cuts$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(G.size >= 2)) {
						_context.next = 8;
						break;
					}

					ordering = (0, _jsItertools.list)(_order(G));
					cut = (0, _jsItertools.list)(_constructcut(G, ordering));
					_context.next = 5;
					return cut;

				case 5:

					G = _contract(G, ordering);

					_context.next = 0;
					break;

				case 8:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

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

function _constructcut(G, ordering) {
	var u, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, v;

	return regeneratorRuntime.wrap(function _constructcut$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					u = ordering[ordering.length - 1];
					_iteratorNormalCompletion5 = true;
					_didIteratorError5 = false;
					_iteratorError5 = undefined;
					_context2.prev = 4;
					_iterator5 = G.get(u)[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
						_context2.next = 13;
						break;
					}

					v = _step5.value;
					_context2.next = 10;
					return [u, v];

				case 10:
					_iteratorNormalCompletion5 = true;
					_context2.next = 6;
					break;

				case 13:
					_context2.next = 19;
					break;

				case 15:
					_context2.prev = 15;
					_context2.t0 = _context2['catch'](4);
					_didIteratorError5 = true;
					_iteratorError5 = _context2.t0;

				case 19:
					_context2.prev = 19;
					_context2.prev = 20;

					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}

				case 22:
					_context2.prev = 22;

					if (!_didIteratorError5) {
						_context2.next = 25;
						break;
					}

					throw _iteratorError5;

				case 25:
					return _context2.finish(22);

				case 26:
					return _context2.finish(19);

				case 27:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

function _order(G) {
	var heap, refs, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, v, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _, u, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _v3, ref;

	return regeneratorRuntime.wrap(function _order$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					heap = new _jsPairingHeap.PairingHeap((0, _jsCompare.attr)(_jsCompare.decreasing, 'key'));
					refs = new Map();
					_iteratorNormalCompletion6 = true;
					_didIteratorError6 = false;
					_iteratorError6 = undefined;
					_context3.prev = 5;


					for (_iterator6 = G.keys()[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						v = _step6.value;
						refs.set(v, heap.push({ key: 0, value: v }));
					}_context3.next = 13;
					break;

				case 9:
					_context3.prev = 9;
					_context3.t0 = _context3['catch'](5);
					_didIteratorError6 = true;
					_iteratorError6 = _context3.t0;

				case 13:
					_context3.prev = 13;
					_context3.prev = 14;

					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}

				case 16:
					_context3.prev = 16;

					if (!_didIteratorError6) {
						_context3.next = 19;
						break;
					}

					throw _iteratorError6;

				case 19:
					return _context3.finish(16);

				case 20:
					return _context3.finish(13);

				case 21:
					_iteratorNormalCompletion7 = true;
					_didIteratorError7 = false;
					_iteratorError7 = undefined;
					_context3.prev = 24;
					_iterator7 = G[Symbol.iterator]();

				case 26:
					if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
						_context3.next = 63;
						break;
					}

					_ = _step7.value;
					u = heap.pop().value;
					_context3.next = 31;
					return u;

				case 31:
					refs.delete(u);

					// update keys
					_iteratorNormalCompletion8 = true;
					_didIteratorError8 = false;
					_iteratorError8 = undefined;
					_context3.prev = 35;
					_iterator8 = G.get(u)[Symbol.iterator]();

				case 37:
					if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
						_context3.next = 46;
						break;
					}

					_v3 = _step8.value;

					if (refs.has(_v3)) {
						_context3.next = 41;
						break;
					}

					return _context3.abrupt('continue', 43);

				case 41:
					ref = refs.get(_v3);
					// max heap so decrease-key is used for +

					heap.decreasekey(ref, {
						key: ref.value.key + 1,
						value: ref.value.value
					});

				case 43:
					_iteratorNormalCompletion8 = true;
					_context3.next = 37;
					break;

				case 46:
					_context3.next = 52;
					break;

				case 48:
					_context3.prev = 48;
					_context3.t1 = _context3['catch'](35);
					_didIteratorError8 = true;
					_iteratorError8 = _context3.t1;

				case 52:
					_context3.prev = 52;
					_context3.prev = 53;

					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}

				case 55:
					_context3.prev = 55;

					if (!_didIteratorError8) {
						_context3.next = 58;
						break;
					}

					throw _iteratorError8;

				case 58:
					return _context3.finish(55);

				case 59:
					return _context3.finish(52);

				case 60:
					_iteratorNormalCompletion7 = true;
					_context3.next = 26;
					break;

				case 63:
					_context3.next = 69;
					break;

				case 65:
					_context3.prev = 65;
					_context3.t2 = _context3['catch'](24);
					_didIteratorError7 = true;
					_iteratorError7 = _context3.t2;

				case 69:
					_context3.prev = 69;
					_context3.prev = 70;

					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}

				case 72:
					_context3.prev = 72;

					if (!_didIteratorError7) {
						_context3.next = 75;
						break;
					}

					throw _iteratorError7;

				case 75:
					return _context3.finish(72);

				case 76:
					return _context3.finish(69);

				case 77:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this, [[5, 9, 13, 21], [14,, 16, 20], [24, 65, 69, 77], [35, 48, 52, 60], [53,, 55, 59], [70,, 72, 76]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXhiYWNrLmpzIl0sIm5hbWVzIjpbIm1heGJhY2siLCJfY3V0cyIsIl9jb25zdHJ1Y3RjdXQiLCJfb3JkZXIiLCJlZGdlcyIsIkciLCJfbWF4YmFjayIsInVuZGVmaW5lZCIsInNpemUiLCJvcmRlcmluZyIsImN1dCIsIl9jb250cmFjdCIsIngiLCJsZW5ndGgiLCJ5IiwiSCIsIk1hcCIsInUiLCJuIiwic2V0IiwiZ2V0IiwidiIsInB1c2giLCJueCIsImhlYXAiLCJyZWZzIiwia2V5cyIsImtleSIsInZhbHVlIiwiXyIsInBvcCIsImRlbGV0ZSIsImhhcyIsInJlZiIsImRlY3JlYXNla2V5Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFZd0JBLE87O0FBWnhCOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7bURBaUJVQyxLO29EQXFDQUMsYTtvREFNQUMsTTs7QUExRFY7Ozs7OztBQU1lLFNBQVNILE9BQVQsQ0FBbUJJLEtBQW5CLEVBQTJCO0FBQ3pDLEtBQU1DLElBQUksbUJBQUlELEtBQUosQ0FBVjtBQUNBLFFBQU9FLFNBQVNELENBQVQsQ0FBUDtBQUNBOztBQUVELFNBQVNDLFFBQVQsQ0FBb0JELENBQXBCLEVBQXdCO0FBQ3ZCLFFBQU8sc0JBQUssMENBQUwsRUFBdUJKLE1BQU1JLENBQU4sQ0FBdkIsRUFBa0NFLFNBQWxDLENBQVA7QUFDQTs7QUFFRCxTQUFVTixLQUFWLENBQWtCSSxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVTQSxFQUFFRyxJQUFGLElBQVUsQ0FGbkI7QUFBQTtBQUFBO0FBQUE7O0FBSVFDLGFBSlIsR0FJbUIsdUJBQUtOLE9BQU9FLENBQVAsQ0FBTCxDQUpuQjtBQU1RSyxRQU5SLEdBTWMsdUJBQUtSLGNBQWNHLENBQWQsRUFBaUJJLFFBQWpCLENBQUwsQ0FOZDtBQUFBO0FBQUEsWUFRUUMsR0FSUjs7QUFBQTs7QUFVRUwsU0FBSU0sVUFBVU4sQ0FBVixFQUFhSSxRQUFiLENBQUo7O0FBVkY7QUFB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QUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJtYXhiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIGhlYWQgLCB0YWlsICwgbWluICwgbmV4dCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IGxlbiAsIGF0dHIgLCBpbmNyZWFzaW5nICwgZGVjcmVhc2luZyB9IGZyb20gJ0BhdXJlb29tcy9qcy1jb21wYXJlJyA7XG5pbXBvcnQgeyBQYWlyaW5nSGVhcCB9IGZyb20gJ0BhdXJlb29tcy9qcy1wYWlyaW5nLWhlYXAnIDtcblxuaW1wb3J0IGFkaiBmcm9tICcuL2Fkaic7XG5cbi8qKlxuICogTS4uLi1CLi4uIHBvbHktdGltZSBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIGVkZ2VzIExpc3Qgb2YgZWRnZXMgb2YgYSB1bmRpcmVjdGVkIHVud2VpZ2h0ZWQgY29ubmVjdGVkIGxvb3BsZXNzIG11bHRpZ3JhcGggRy5cbiAqIEByZXR1cm5zIHtBcnJheX0gQSBtaW5pbXVtIGN1dCBvZiBHLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXhiYWNrICggZWRnZXMgKSB7XG5cdGNvbnN0IEcgPSBhZGooZWRnZXMpO1xuXHRyZXR1cm4gX21heGJhY2soRyk7XG59XG5cbmZ1bmN0aW9uIF9tYXhiYWNrICggRyApIHtcblx0cmV0dXJuIG1pbiggbGVuKGluY3JlYXNpbmcpICwgX2N1dHMoRykgLCB1bmRlZmluZWQpO1xufVxuXG5mdW5jdGlvbiogX2N1dHMgKCBHICkge1xuXG5cdHdoaWxlICggRy5zaXplID49IDIgKSB7XG5cblx0XHRjb25zdCBvcmRlcmluZyA9IGxpc3QoX29yZGVyKEcpKTtcblxuXHRcdGNvbnN0IGN1dCA9IGxpc3QoX2NvbnN0cnVjdGN1dChHLCBvcmRlcmluZykpO1xuXG5cdFx0eWllbGQgY3V0O1xuXG5cdFx0RyA9IF9jb250cmFjdChHLCBvcmRlcmluZyApO1xuXG5cdH1cblxufVxuXG5mdW5jdGlvbiBfY29udHJhY3QgKCBHLCBvcmRlcmluZyApIHtcblxuXHRjb25zdCB4ID0gb3JkZXJpbmdbb3JkZXJpbmcubGVuZ3RoLTJdO1xuXHRjb25zdCB5ID0gb3JkZXJpbmdbb3JkZXJpbmcubGVuZ3RoLTFdO1xuXG5cdGNvbnN0IEggPSBuZXcgTWFwKCk7XG5cblx0Zm9yICggY29uc3QgdSBvZiBoZWFkKCBvcmRlcmluZyAsIC0yICkgKSB7XG5cdFx0Y29uc3QgbiA9IFtdO1xuXHRcdEguc2V0KHUsIG4pO1xuXHRcdGZvciAoIGNvbnN0IHYgb2YgRy5nZXQodSkgKSBuLnB1c2godiA9PT0geSA/IHggOiB2KTtcblx0fVxuXG5cdGNvbnN0IG54ID0gW107XG5cdEguc2V0KHgsbngpO1xuXHRmb3IgKCBjb25zdCB2IG9mIEcuZ2V0KHgpICkgaWYgKCB2ICE9PSB5ICkgbngucHVzaCh2KTtcblx0Zm9yICggY29uc3QgdiBvZiBHLmdldCh5KSApIGlmICggdiAhPT0geCAmJiB2ICE9PSB5ICkgbngucHVzaCh2KTtcblx0cmV0dXJuIEg7XG5cbn1cblxuZnVuY3Rpb24qIF9jb25zdHJ1Y3RjdXQgKCBHICwgb3JkZXJpbmcgKSB7XG5cdGNvbnN0IHUgPSBvcmRlcmluZ1tvcmRlcmluZy5sZW5ndGgtMV07XG5cdGZvciAoIGNvbnN0IHYgb2YgRy5nZXQodSkgKSB5aWVsZCBbdSx2XTtcbn1cblxuXG5mdW5jdGlvbiogX29yZGVyICggRyApIHtcblxuXHRjb25zdCBoZWFwID0gbmV3IFBhaXJpbmdIZWFwKCBhdHRyKCBkZWNyZWFzaW5nICwgJ2tleScgKSApO1xuXHRjb25zdCByZWZzID0gbmV3IE1hcCgpO1xuXG5cdGZvciAoIGNvbnN0IHYgb2YgRy5rZXlzKCkgKSByZWZzLnNldCh2LCBoZWFwLnB1c2goeyBrZXkgOiAwICwgdmFsdWUgOiB2IH0pKSA7XG5cblx0Zm9yICggY29uc3QgXyBvZiBHICkge1xuXG5cdFx0Y29uc3QgdSA9IGhlYXAucG9wKCkudmFsdWU7XG5cdFx0eWllbGQgdTtcblx0XHRyZWZzLmRlbGV0ZSh1KTtcblxuXHRcdC8vIHVwZGF0ZSBrZXlzXG5cdFx0Zm9yICggY29uc3QgdiBvZiBHLmdldCh1KSApIHtcblx0XHRcdGlmICghcmVmcy5oYXModikpIGNvbnRpbnVlO1xuXHRcdFx0Y29uc3QgcmVmID0gcmVmcy5nZXQodik7XG5cdFx0XHQvLyBtYXggaGVhcCBzbyBkZWNyZWFzZS1rZXkgaXMgdXNlZCBmb3IgK1xuXHRcdFx0aGVhcC5kZWNyZWFzZWtleShyZWYsIHtcblx0XHRcdFx0a2V5IDogcmVmLnZhbHVlLmtleSArIDEgLFxuXHRcdFx0XHR2YWx1ZSA6IHJlZi52YWx1ZS52YWx1ZVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==