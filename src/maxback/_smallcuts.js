import { list , map , head , filter , chain } from '@aureooms/js-itertools' ;

import _order from './_order' ;
import _contract from './_contract' ;

export default function* _smallcuts ( G ) {

	let H = G;
	const id = new Map();
	for ( const v of G.keys()) id.set(v,[v]);

	while ( H.size >= 2 ) {

		const ordering = list(_order(H));
		const [ x ] = ordering[ordering.length-2];
		const [ y , cutsize ] = ordering[ordering.length-1];

		yield [ new Set(id.get(y)) , cutsize ] ;

		id.set(x, id.get(x).concat(id.get(y)));

		H = _contract(H, list(map(([u,_]) => u , ordering)));

	}

}
