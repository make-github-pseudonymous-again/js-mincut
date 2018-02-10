export default function* outgoingedges ( G , U ) {
	for ( const u of U ) for ( const v of G.get(u) ) if ( !U.has(v) ) yield [ u , v ] ;
}
