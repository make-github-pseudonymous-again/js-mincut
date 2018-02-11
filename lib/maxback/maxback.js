'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = maxback;

var _adj = require('../adj');

var _adj2 = _interopRequireDefault(_adj);

var _mb2 = require('./mb');

var _mb3 = _interopRequireDefault(_mb2);

var _outgoingedges = require('../outgoingedges');

var _outgoingedges2 = _interopRequireDefault(_outgoingedges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param edges List of edges of a undirected unweighted connected loopless multigraph G.
 * @returns {Array} A minimum cut of G.
 */
function maxback(edges) {
  var G = (0, _adj2.default)(edges);

  var _mb = (0, _mb3.default)(G),
      _mb$partition = _slicedToArray(_mb.partition, 2),
      U = _mb$partition[0],
      _ = _mb$partition[1];

  return (0, _outgoingedges2.default)(G, U);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL21heGJhY2suanMiXSwibmFtZXMiOlsibWF4YmFjayIsImVkZ2VzIiwiRyIsInBhcnRpdGlvbiIsIlUiLCJfIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFVd0JBLE87O0FBVnhCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7OztBQU1lLFNBQVNBLE9BQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQ3pDLE1BQU1DLElBQUksbUJBQUtELEtBQUwsQ0FBVjs7QUFEeUMsWUFFUCxrQkFBSUMsQ0FBSixDQUZPO0FBQUEseUNBRWpDQyxTQUZpQztBQUFBLE1BRW5CQyxDQUZtQjtBQUFBLE1BRWZDLENBRmU7O0FBR3pDLFNBQU8sNkJBQWVILENBQWYsRUFBbUJFLENBQW5CLENBQVA7QUFDQSIsImZpbGUiOiJtYXhiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkaiBmcm9tICcuLi9hZGonO1xuaW1wb3J0IG1iIGZyb20gJy4vbWInO1xuaW1wb3J0IG91dGdvaW5nZWRnZXMgZnJvbSAnLi4vb3V0Z29pbmdlZGdlcyc7XG5cbi8qKlxuICogTmFnYW1vY2hpLUliYXJha2kgcG9seS10aW1lIGFsZ29yaXRobS5cbiAqXG4gKiBAcGFyYW0gZWRnZXMgTGlzdCBvZiBlZGdlcyBvZiBhIHVuZGlyZWN0ZWQgdW53ZWlnaHRlZCBjb25uZWN0ZWQgbG9vcGxlc3MgbXVsdGlncmFwaCBHLlxuICogQHJldHVybnMge0FycmF5fSBBIG1pbmltdW0gY3V0IG9mIEcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heGJhY2sgKCBlZGdlcyApIHtcblx0Y29uc3QgRyA9IGFkaiggZWRnZXMgKSA7XG5cdGNvbnN0IHsgcGFydGl0aW9uIDogWyBVICwgXyBdIH0gPSBtYiggRyApIDtcblx0cmV0dXJuIG91dGdvaW5nZWRnZXMoIEcgLCBVICkgO1xufVxuIl19