'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = maxback;

var _adj = require('../adj');

var _adj2 = _interopRequireDefault(_adj);

var _mb3 = require('./mb');

var _mb4 = _interopRequireDefault(_mb3);

var _outgoingedges = require('../outgoingedges');

var _outgoingedges2 = _interopRequireDefault(_outgoingedges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenience wrapper around Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param {Iterable} edges List of edges of an undirected unweighted connected loopless multigraph G.
 * @returns {Iterable} An iterable over the edges of a minimum cut of G.
 */
function maxback(edges) {
  var G = (0, _adj2.default)(edges);

  var _mb = (0, _mb4.default)(G),
      _mb2 = _slicedToArray(_mb, 1),
      U = _mb2[0];

  return (0, _outgoingedges2.default)(G, U);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL21heGJhY2suanMiXSwibmFtZXMiOlsibWF4YmFjayIsImVkZ2VzIiwiRyIsIlUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQVV3QkEsTzs7QUFWeEI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsT0FBVCxDQUFtQkMsS0FBbkIsRUFBMkI7QUFDekMsTUFBTUMsSUFBSSxtQkFBS0QsS0FBTCxDQUFWOztBQUR5QyxZQUUzQixrQkFBSUMsQ0FBSixDQUYyQjtBQUFBO0FBQUEsTUFFakNDLENBRmlDOztBQUd6QyxTQUFPLDZCQUFlRCxDQUFmLEVBQW1CQyxDQUFuQixDQUFQO0FBQ0EiLCJmaWxlIjoibWF4YmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGogZnJvbSAnLi4vYWRqJztcbmltcG9ydCBtYiBmcm9tICcuL21iJztcbmltcG9ydCBvdXRnb2luZ2VkZ2VzIGZyb20gJy4uL291dGdvaW5nZWRnZXMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIE5hZ2Ftb2NoaS1JYmFyYWtpIHBvbHktdGltZSBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gZWRnZXMgTGlzdCBvZiBlZGdlcyBvZiBhbiB1bmRpcmVjdGVkIHVud2VpZ2h0ZWQgY29ubmVjdGVkIGxvb3BsZXNzIG11bHRpZ3JhcGggRy5cbiAqIEByZXR1cm5zIHtJdGVyYWJsZX0gQW4gaXRlcmFibGUgb3ZlciB0aGUgZWRnZXMgb2YgYSBtaW5pbXVtIGN1dCBvZiBHLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXhiYWNrICggZWRnZXMgKSB7XG5cdGNvbnN0IEcgPSBhZGooIGVkZ2VzICkgO1xuXHRjb25zdCBbIFUgXSA9IG1iKCBHICkgO1xuXHRyZXR1cm4gb3V0Z29pbmdlZGdlcyggRyAsIFUgKSA7XG59XG4iXX0=