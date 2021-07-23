import {head} from '@iterable-iterator/slice';

/**
 * Given G and some ordering, computes the graph H obtained from G by
 * contracting all edges between the last two vertices of the ordering.
 *
 * @param {Map} G
 * @param {Array} ordering
 * @returns {Map}
 */
export default function _contract(G, ordering) {
	const u = ordering[ordering.length - 2];
	const v = ordering[ordering.length - 1];

	const H = new Map();

	// Replace each edge xv by the edge xu, x != u ^ x != v
	for (const x of head(ordering, -2)) {
		const n = [];
		H.set(x, n);
		for (const y of G.get(x)) n.push(y === v ? u : y);
	}

	const nx = [];
	H.set(u, nx);
	// Keep all edges ux with, x != v (x != u is implied because G is loopless)
	for (const x of G.get(u)) if (x !== v) nx.push(x);
	// Replace each edge vx by the edge ux, x != u ^ x != v
	for (const x of G.get(v)) if (x !== u && x !== v) nx.push(x);
	return H;
}
