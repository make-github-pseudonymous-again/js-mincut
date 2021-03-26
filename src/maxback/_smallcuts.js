import { list , map , head , filter , chain } from '@aureooms/js-itertools' ;

import _order from "./_order.js" ;
import _contract from "./_contract.js" ;

/**
 * Yields the small cuts of undirected unweighted connected loopless multigraph G.
 * At least one of them must be a minimum cut.
 *
 * @param {Map} G The adjacency list of G.
 * @returns {Iterable} The small cuts of G.
 */
export default function* _smallcuts ( G ) {

	let H = G;
	const id = new Map();
	for ( const v of G.keys()) id.set(v,[v]);

	while ( H.size >= 2 ) {

		const ordering = list(_order(H)); // compute the max-back order
		const [ x ] = ordering[ordering.length-2];
		const [ y , cutsize ] = ordering[ordering.length-1];

		yield [ new Set(id.get(y)) , cutsize ] ; // yield a small cut with its size

		id.set(x, id.get(x).concat(id.get(y))); // associate the last vertex with the penultimate one

		H = _contract(H, list(map(([u,_]) => u , ordering))); // contract all edges between those two vertices

	}

}
