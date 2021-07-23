# Usage

The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
await import( 'regenerator-runtime/runtime.js' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const {mincut} = await import( '@graph-algorithm/minimum-cut' ) ;
// or
import {mincut} from '@graph-algorithm/minimum-cut' ;
```
