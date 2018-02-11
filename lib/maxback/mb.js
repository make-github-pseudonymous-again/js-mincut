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

function mb(G) {
	return (0, _jsItertools.min)((0, _jsCompare.attr)(_jsCompare.increasing, 'size'), (0, _smallcuts3.default)(G), undefined);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXhiYWNrL21iLmpzIl0sIm5hbWVzIjpbIm1iIiwiRyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBS3dCQSxFOztBQUx4Qjs7QUFDQTs7QUFFQTs7Ozs7O0FBRWUsU0FBU0EsRUFBVCxDQUFjQyxDQUFkLEVBQWtCO0FBQ2hDLFFBQU8sc0JBQUssNENBQW1CLE1BQW5CLENBQUwsRUFBbUMseUJBQVdBLENBQVgsQ0FBbkMsRUFBbURDLFNBQW5ELENBQVA7QUFDQSIsImZpbGUiOiJtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1pbiB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IGF0dHIgLCBpbmNyZWFzaW5nIH0gZnJvbSAnQGF1cmVvb21zL2pzLWNvbXBhcmUnIDtcblxuaW1wb3J0IF9zbWFsbGN1dHMgZnJvbSAnLi9fc21hbGxjdXRzJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1iICggRyApIHtcblx0cmV0dXJuIG1pbiggYXR0ciggaW5jcmVhc2luZyAsICdzaXplJyApICwgX3NtYWxsY3V0cyhHKSAsIHVuZGVmaW5lZCApIDtcbn1cbiJdfQ==