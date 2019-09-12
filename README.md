# lineendings
Encapsulate common line endings with enums and string representations.
I wrote this to encapsulate lineending operations and values I saw while looking through the source of vscode wanting to add a new line ending type. 
It seemed easier to modularise the few utilities needed even though they are trivial. 
Then it might be easier to fix up all the hard codings for line endings by adding this as a dependancy.


## Installation
```sh
npm install lineendings --save
yarn add lineendings
bower install lineendings --save
```
## Usage

### Javascript
```javascript
var lineendings = require('lineendings');
var eolString = EndOfLineTypeToString(lineendings.LF_TYPE_VALUE);
var eolType = EndOfLineStringToType(lineendings.CRLF_CHARS);
```
```sh
eolString = '\n' Linefeed character
eolType = CRLF_TYPE_VALUE  - i.e. 1
```

### TypeScript
```typescript
import { lineendings } from 'lineendings';

```
Now you can reference enum like:

function doSomethingwithEol(eolEnum: EndOfLineType): string {
    if (eolEnum = EndOfLineType.CRLF) {
        something amazing
    }
	etc...
}


## Test 
```sh
npm run test
```

