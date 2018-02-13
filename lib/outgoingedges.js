"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = outgoingedges;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(outgoingedges);

/**
 * Yields all edges of an undirected unweighted connected loopless multigraph G
 * that have one endpoint inside some vertex subset U and that have the other
 * endpoint inside of V = V(G) \ U.
 *
 * @param {Map} G The input undirected unweighted connected loopless multigraph.
 * @param {Set} U The subset of edges.
 * @returns {Iterable} The edges of G going from U to V(G) \ U.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vdXRnb2luZ2VkZ2VzLmpzIl0sIm5hbWVzIjpbIm91dGdvaW5nZWRnZXMiLCJHIiwiVSIsInUiLCJnZXQiLCJ2IiwiaGFzIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFTeUJBLGE7O21EQUFBQSxhOztBQVR6Qjs7Ozs7Ozs7O0FBU2UsU0FBVUEsYUFBVixDQUEwQkMsQ0FBMUIsRUFBOEJDLENBQTlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNHQSxDQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0ZDLFdBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVJRixFQUFFRyxHQUFGLENBQU1ELENBQU4sQ0FGSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVERSxXQUZDOztBQUFBLGNBR05ILEVBQUVJLEdBQUYsQ0FBTUQsQ0FBTixDQUhNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBR1csQ0FBRUYsQ0FBRixFQUFNRSxDQUFOLENBSFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Im91dGdvaW5nZWRnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFlpZWxkcyBhbGwgZWRnZXMgb2YgYW4gdW5kaXJlY3RlZCB1bndlaWdodGVkIGNvbm5lY3RlZCBsb29wbGVzcyBtdWx0aWdyYXBoIEdcbiAqIHRoYXQgaGF2ZSBvbmUgZW5kcG9pbnQgaW5zaWRlIHNvbWUgdmVydGV4IHN1YnNldCBVIGFuZCB0aGF0IGhhdmUgdGhlIG90aGVyXG4gKiBlbmRwb2ludCBpbnNpZGUgb2YgViA9IFYoRykgXFwgVS5cbiAqXG4gKiBAcGFyYW0ge01hcH0gRyBUaGUgaW5wdXQgdW5kaXJlY3RlZCB1bndlaWdodGVkIGNvbm5lY3RlZCBsb29wbGVzcyBtdWx0aWdyYXBoLlxuICogQHBhcmFtIHtTZXR9IFUgVGhlIHN1YnNldCBvZiBlZGdlcy5cbiAqIEByZXR1cm5zIHtJdGVyYWJsZX0gVGhlIGVkZ2VzIG9mIEcgZ29pbmcgZnJvbSBVIHRvIFYoRykgXFwgVS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG91dGdvaW5nZWRnZXMgKCBHICwgVSApIHtcblx0Zm9yICggY29uc3QgdSBvZiBVICkge1xuXHRcdGZvciAoIGNvbnN0IHYgb2YgRy5nZXQodSkgKSB7XG5cdFx0XHRpZiAoICFVLmhhcyh2KSApIHlpZWxkIFsgdSAsIHYgXSA7XG5cdFx0fVxuXHR9XG59XG4iXX0=