import {min} from '@aureooms/js-itertools';
import {attr, increasing} from '@aureooms/js-compare';

import _smallcuts from './_smallcuts.js';

/**
 * Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param {Map} G The adjacency list of an undirected unweighted connected loopless multigraph G.
 * @returns {Array} A pair <code>[U,cutsize]</code> reprensenting a minimum cut of G.
 */
export default function mb(G) {
	return min(attr(increasing, 1), _smallcuts(G), undefined);
}
