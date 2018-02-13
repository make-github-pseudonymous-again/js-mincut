'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mb;

var _jsItertools = require('@aureooms/js-itertools');

var _jsCompare = require('@aureooms/js-compare');

var _smallcuts2 = require('./_smallcuts');

var _smallcuts3 = _interopRequireDefault(_smallcuts2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param {Map} G The adjacency list of an undirected unweighted connected loopless multigraph G.
 * @returns {Array} A pair <code>[U,cutsize]</code> reprensenting a minimum cut of G.
 */
function mb(G) {
  return (0, _jsItertools.min)((0, _jsCompare.attr)(_jsCompare.increasing, 1), (0, _smallcuts3.default)(G), undefined);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL21iLmpzIl0sIm5hbWVzIjpbIm1iIiwiRyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBV3dCQSxFOztBQVh4Qjs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7Ozs7OztBQU1lLFNBQVNBLEVBQVQsQ0FBY0MsQ0FBZCxFQUFrQjtBQUNoQyxTQUFPLHNCQUFLLDRDQUFtQixDQUFuQixDQUFMLEVBQThCLHlCQUFXQSxDQUFYLENBQTlCLEVBQThDQyxTQUE5QyxDQUFQO0FBQ0EiLCJmaWxlIjoibWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtaW4gfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBhdHRyICwgaW5jcmVhc2luZyB9IGZyb20gJ0BhdXJlb29tcy9qcy1jb21wYXJlJyA7XG5cbmltcG9ydCBfc21hbGxjdXRzIGZyb20gJy4vX3NtYWxsY3V0cycgO1xuXG4vKipcbiAqIE5hZ2Ftb2NoaS1JYmFyYWtpIHBvbHktdGltZSBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIHtNYXB9IEcgVGhlIGFkamFjZW5jeSBsaXN0IG9mIGFuIHVuZGlyZWN0ZWQgdW53ZWlnaHRlZCBjb25uZWN0ZWQgbG9vcGxlc3MgbXVsdGlncmFwaCBHLlxuICogQHJldHVybnMge0FycmF5fSBBIHBhaXIgPGNvZGU+W1UsY3V0c2l6ZV08L2NvZGU+IHJlcHJlbnNlbnRpbmcgYSBtaW5pbXVtIGN1dCBvZiBHLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYiAoIEcgKSB7XG5cdHJldHVybiBtaW4oIGF0dHIoIGluY3JlYXNpbmcgLCAxICkgLCBfc21hbGxjdXRzKEcpICwgdW5kZWZpbmVkICkgO1xufVxuIl19