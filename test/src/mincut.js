import test from 'ava';
import {map, sorted} from '@aureooms/js-itertools';
import {increasing, fixedlexicographical} from '@aureooms/js-compare';
import {mincut} from '../../src/index.js';

function order(edge) {
	return sorted(increasing, edge);
}

function sort(edges) {
	return sorted(fixedlexicographical(increasing, 2), map(order, edges));
}

function macro(t, edges, expected) {
	const cut = mincut(edges);
	t.deepEqual(sort(cut), sort(expected));
}

macro.title = (title) => title;

// 0--1
test('single', macro, [[0, 1]], [[0, 1]]);

// 5      2
// |\    /|
// | 0--1 |
// |/    \|
// 4      3
test(
	'butterfly',
	macro,
	[
		[0, 1],
		[1, 2],
		[1, 3],
		[2, 3],
		[0, 4],
		[0, 5],
		[4, 5],
	],
	[[0, 1]],
);
