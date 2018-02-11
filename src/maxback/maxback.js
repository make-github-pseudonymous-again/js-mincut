import adj from '../adj';
import mb from './mb';
import outgoingedges from '../outgoingedges';

/**
 * Nagamochi-Ibaraki poly-time algorithm.
 *
 * @param edges List of edges of a undirected unweighted connected loopless multigraph G.
 * @returns {Array} A minimum cut of G.
 */
export default function maxback ( edges ) {
	const G = adj( edges ) ;
	const [ U ] = mb( G ) ;
	return outgoingedges( G , U ) ;
}
