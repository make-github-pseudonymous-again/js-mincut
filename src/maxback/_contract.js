import { head } from '@aureooms/js-itertools' ;

export default function _contract ( G, ordering ) {

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
