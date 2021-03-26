/**
 * Constructs the adjacency list for an undirected unweighted connected
 * loopless multigraph G given as a list of edges.
 *
 * @param {Iterable} edges The edges of G.
 * @returns {Map} The adjacency list G.
 */
export default function adj(edges) {
	const G = new Map();
	for (const [u, v] of edges) {
		if (!G.has(u)) G.set(u, []);
		G.get(u).push(v);
		if (!G.has(v)) G.set(v, []);
		G.get(v).push(u);
	}

	return G;
}
