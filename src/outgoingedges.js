/**
 * Yields all edges of an undirected unweighted connected loopless multigraph G
 * that have one endpoint inside some vertex subset U and that have the other
 * endpoint inside of V = V(G) \ U.
 *
 * @param {Map} G The input undirected unweighted connected loopless multigraph.
 * @param {Set} U The subset of edges.
 * @returns {Iterable} The edges of G going from U to V(G) \ U.
 */
export default function* outgoingedges ( G , U ) {
	for ( const u of U ) {
		for ( const v of G.get(u) ) {
			if ( !U.has(v) ) yield [ u , v ] ;
		}
	}
}
