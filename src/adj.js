
export default function adj ( edges ) {
	const G = new Map();
	for ( const [ u , v ] of edges ) {
		if ( !G.has(u) ) G.set(u, []) ;
		G.get(u).push(v);
		if ( !G.has(v) ) G.set(v, []) ;
		G.get(v).push(u);
	}
	return G;
}
