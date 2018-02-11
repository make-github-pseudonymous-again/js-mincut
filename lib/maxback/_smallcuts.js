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

function _smallcuts(G) {
	var H, id, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, ordering, x, y, U, V;

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
						_context.next = 33;
						break;
					}

					ordering = (0, _jsItertools.list)((0, _order3.default)(H));
					x = ordering[ordering.length - 2][0];
					y = ordering[ordering.length - 1][0];
					U = new Set((0, _jsItertools.chain)((0, _jsItertools.map)(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
						    u = _ref2[0],
						    _ = _ref2[1];

						return id.get(u);
					}, (0, _jsItertools.head)(ordering, -1))));
					V = new Set(id.get(y));
					_context.next = 29;
					return { 'partition': [U, V], 'size': ordering[ordering.length - 1][1] };

				case 29:

					id.set(x, id.get(x).concat(id.get(y)));

					H = (0, _contract3.default)(H, (0, _jsItertools.list)((0, _jsItertools.map)(function (_ref3) {
						var _ref4 = _slicedToArray(_ref3, 2),
						    u = _ref4[0],
						    _ = _ref4[1];

						return u;
					}, ordering)));

					_context.next = 21;
					break;

				case 33:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[5, 9, 13, 21], [14,, 16, 20]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL19zbWFsbGN1dHMuanMiXSwibmFtZXMiOlsiX3NtYWxsY3V0cyIsIkciLCJIIiwiaWQiLCJNYXAiLCJrZXlzIiwidiIsInNldCIsInNpemUiLCJvcmRlcmluZyIsIngiLCJsZW5ndGgiLCJ5IiwiVSIsIlNldCIsInUiLCJfIiwiZ2V0IiwiViIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBS3lCQSxVOztBQUx6Qjs7QUFFQTs7OztBQUNBOzs7Ozs7bURBRXlCQSxVOztBQUFWLFNBQVVBLFVBQVYsQ0FBdUJDLENBQXZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVkMsTUFGVSxHQUVORCxDQUZNO0FBR1JFLE9BSFEsR0FHSCxJQUFJQyxHQUFKLEVBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZCxzQkFBaUJILEVBQUVJLElBQUYsRUFBakI7QUFBWUMsT0FBWjtBQUEyQkgsU0FBR0ksR0FBSCxDQUFPRCxDQUFQLEVBQVMsQ0FBQ0EsQ0FBRCxDQUFUO0FBQTNCLE1BSmM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQU1OSixFQUFFTSxJQUFGLElBQVUsQ0FOSjtBQUFBO0FBQUE7QUFBQTs7QUFRUEMsYUFSTyxHQVFJLHVCQUFLLHFCQUFPUCxDQUFQLENBQUwsQ0FSSjtBQVNQUSxNQVRPLEdBU0hELFNBQVNBLFNBQVNFLE1BQVQsR0FBZ0IsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FURztBQVVQQyxNQVZPLEdBVUhILFNBQVNBLFNBQVNFLE1BQVQsR0FBZ0IsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FWRztBQVlQRSxNQVpPLEdBWUgsSUFBSUMsR0FBSixDQUFRLHdCQUFNLHNCQUFLO0FBQUE7QUFBQSxVQUFFQyxDQUFGO0FBQUEsVUFBSUMsQ0FBSjs7QUFBQSxhQUFXYixHQUFHYyxHQUFILENBQU9GLENBQVAsQ0FBWDtBQUFBLE1BQUwsRUFBNEIsdUJBQUtOLFFBQUwsRUFBYyxDQUFDLENBQWYsQ0FBNUIsQ0FBTixDQUFSLENBWkc7QUFhUFMsTUFiTyxHQWFILElBQUlKLEdBQUosQ0FBUVgsR0FBR2MsR0FBSCxDQUFPTCxDQUFQLENBQVIsQ0FiRztBQUFBO0FBQUEsWUFlUCxFQUFFLGFBQWMsQ0FBRUMsQ0FBRixFQUFNSyxDQUFOLENBQWhCLEVBQTRCLFFBQVNULFNBQVNBLFNBQVNFLE1BQVQsR0FBZ0IsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBckMsRUFmTzs7QUFBQTs7QUFpQmJSLFFBQUdJLEdBQUgsQ0FBT0csQ0FBUCxFQUFVUCxHQUFHYyxHQUFILENBQU9QLENBQVAsRUFBVVMsTUFBVixDQUFpQmhCLEdBQUdjLEdBQUgsQ0FBT0wsQ0FBUCxDQUFqQixDQUFWOztBQUVBVixTQUFJLHdCQUFVQSxDQUFWLEVBQWEsdUJBQUssc0JBQUk7QUFBQTtBQUFBLFVBQUVhLENBQUY7QUFBQSxVQUFJQyxDQUFKOztBQUFBLGFBQVdELENBQVg7QUFBQSxNQUFKLEVBQW1CTixRQUFuQixDQUFMLENBQWIsQ0FBSjs7QUFuQmE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfc21hbGxjdXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCAsIGhlYWQgLCBmaWx0ZXIgLCBjaGFpbiB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IF9vcmRlciBmcm9tICcuL19vcmRlcicgO1xuaW1wb3J0IF9jb250cmFjdCBmcm9tICcuL19jb250cmFjdCcgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX3NtYWxsY3V0cyAoIEcgKSB7XG5cblx0bGV0IEggPSBHO1xuXHRjb25zdCBpZCA9IG5ldyBNYXAoKTtcblx0Zm9yICggY29uc3QgdiBvZiBHLmtleXMoKSkgaWQuc2V0KHYsW3ZdKTtcblxuXHR3aGlsZSAoIEguc2l6ZSA+PSAyICkge1xuXG5cdFx0Y29uc3Qgb3JkZXJpbmcgPSBsaXN0KF9vcmRlcihIKSk7XG5cdFx0Y29uc3QgeCA9IG9yZGVyaW5nW29yZGVyaW5nLmxlbmd0aC0yXVswXTtcblx0XHRjb25zdCB5ID0gb3JkZXJpbmdbb3JkZXJpbmcubGVuZ3RoLTFdWzBdO1xuXG5cdFx0Y29uc3QgVSA9IG5ldyBTZXQoY2hhaW4obWFwKCAoW3UsX10pID0+IGlkLmdldCh1KSAsIGhlYWQob3JkZXJpbmcsLTEpICkgKSk7XG5cdFx0Y29uc3QgViA9IG5ldyBTZXQoaWQuZ2V0KHkpKTtcblxuXHRcdHlpZWxkIHsgJ3BhcnRpdGlvbicgOiBbIFUgLCBWIF0gLCAnc2l6ZScgOiBvcmRlcmluZ1tvcmRlcmluZy5sZW5ndGgtMV1bMV0gfSA7XG5cblx0XHRpZC5zZXQoeCwgaWQuZ2V0KHgpLmNvbmNhdChpZC5nZXQoeSkpKTtcblxuXHRcdEggPSBfY29udHJhY3QoSCwgbGlzdChtYXAoKFt1LF9dKSA9PiB1ICwgb3JkZXJpbmcpKSk7XG5cblx0fVxuXG59XG4iXX0=