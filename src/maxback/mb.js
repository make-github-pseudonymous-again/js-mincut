import {min} from '@iterable-iterator/reduce';
import {prop} from '@total-order/key';
import {increasing} from '@total-order/primitive';

import _smallcuts from './_smallcuts.js';

/**
 * Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param {Map} G The adjacency list of an undirected unweighted connected loopless multigraph G.
 * @returns {Array} A pair <code>[U,cutsize]</code> reprensenting a minimum cut of G.
 */
export default function mb(G) {
	return min(prop(increasing, 1), _smallcuts(G), undefined);
}
