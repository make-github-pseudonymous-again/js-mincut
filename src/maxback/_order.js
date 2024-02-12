import {PairingHeap as Heap} from '@heap-data-structure/pairing-heap';
import {prop} from '@total-order/key';
import {decreasing} from '@total-order/primitive';

/**
 * Lists the vertices of an undirected unweighted connected loopless multigraph
 * G in max-back order.
 *
 * @param {Map} G The adjacency list of G.
 * @returns {Iterable} The vertices of G in max-back order.
 */
export default function* _order(G) {
	const heap = new Heap(prop(decreasing, 'weight'));
	const refs = new Map();

	for (const v of G.keys()) refs.set(v, heap.push({weight: 0, vertex: v}));

	for (const _ of G) {
		const max = heap.pop();
		const u = max.vertex;
		yield [u, max.weight];
		refs.delete(u);

		// Update keys
		for (const v of G.get(u)) {
			if (!refs.has(v)) continue;
			const ref = refs.get(v);
			// Max heap so decrease-weight is used for +
			heap.decreasekey(ref, {
				weight: ref.value.weight + 1,
				vertex: ref.value.vertex,
			});
		}
	}
}
