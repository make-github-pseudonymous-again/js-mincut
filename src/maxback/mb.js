import { min } from '@aureooms/js-itertools' ;
import { attr , increasing } from '@aureooms/js-compare' ;

import _smallcuts from './_smallcuts' ;

export default function mb ( G ) {
	return min( attr( increasing , 'size' ) , _smallcuts(G) , undefined ) ;
}
