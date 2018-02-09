import { list , head , tail , min , next } from '@aureooms/js-itertools' ;
import { len , attr , increasing , decreasing } from '@aureooms/js-compare' ;
import { PairingHeap } from '@aureooms/js-pairing-heap' ;

import adj from './adj';

/**
 * M...-B... poly-time algorithm.
 *
 * @param edges List of edges of a undirected unweighted connected loopless multigraph G.
 * @returns {Array} A minimum cut of G.
 */
export default function maxback ( edges ) {
	const G = adj(edges);
	return _maxback(G);
}

function _maxback ( G ) {
	return min( len(increasing) , _cuts(G) , undefined);
}

function* _cuts ( G ) {

	while ( G.size >= 2 ) {

		const ordering = list(_order(G));

		const cut = list(_constructcut(G, ordering));

		yield cut;

		G = _contract(G, ordering );

	}

}

function _contract ( G, ordering ) {

	const x = ordering[ordering.length-2];
	const y = ordering[ordering.length-1];

	const H = new Map();

	for ( const u of head( ordering , -2 ) ) {
		const n = [];
		H.set(u, n);
		for ( const v of G.get(u) ) n.push(v === y ? x : v);
	}

	const nx = [];
	H.set(x,nx);
	for ( const v of G.get(x) ) if ( v !== y ) nx.push(v);
	for ( const v of G.get(y) ) if ( v !== x && v !== y ) nx.push(v);
	return H;

}

function* _constructcut ( G , ordering ) {
	const u = ordering[ordering.length-1];
	for ( const v of G.get(u) ) yield [u,v];
}


function* _order ( G ) {

	const heap = new PairingHeap( attr( decreasing , 'key' ) );
	const refs = new Map();

	for ( const v of G.keys() ) refs.set(v, heap.push({ key : 0 , value : v })) ;

	for ( const _ of G ) {

		const u = heap.pop().value;
		yield u;
		refs.delete(u);

		// update keys
		for ( const v of G.get(u) ) {
			if (!refs.has(v)) continue;
			const ref = refs.get(v);
			// max heap so decrease-key is used for +
			heap.decreasekey(ref, {
				key : ref.value.key + 1 ,
				value : ref.value.value
			} );
		}

	}

}
