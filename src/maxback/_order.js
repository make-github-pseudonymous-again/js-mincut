import { attr , decreasing } from '@aureooms/js-compare' ;
import { PairingHeap } from '@aureooms/js-pairing-heap' ;

export default function* _order ( G ) {

	const heap = new PairingHeap( attr( decreasing , 'key' ) );
	const refs = new Map();

	for ( const v of G.keys() ) refs.set(v, heap.push({ key : 0 , value : v })) ;

	for ( const _ of G ) {

		const max = heap.pop() ;
		const u = max.value ;
		yield [ u , max.key ] ;
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
