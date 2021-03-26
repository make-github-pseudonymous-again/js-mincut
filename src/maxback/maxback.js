import adj from "../adj.js";
import mb from "./mb.js";
import outgoingedges from "../outgoingedges.js";

/**
 * Convenience wrapper around Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param {Iterable} edges List of edges of an undirected unweighted connected loopless multigraph G.
 * @returns {Iterable} An iterable over the edges of a minimum cut of G.
 */
export default function maxback ( edges ) {
	const G = adj( edges ) ;
	const [ U ] = mb( G ) ;
	return outgoingedges( G , U ) ;
}
