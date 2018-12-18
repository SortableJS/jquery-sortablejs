# jQuery SortableJS

A jQuery binding for SortableJS

## Installation

### Webpack/Browserify
Install package:
```
npm i -D jquery-sortablejs
```

Import into project:
```javascript
import 'jquery-sortablejs';
```

### CDN:
```HTML
<script src="CDN HERE"></script>
```

## Usage

### Initialization
```javascript
// Without options:
$('#my-list').sortable();

// With options:
$('#my-list').sortable({
	// SortableJS options go here
	// See: (https://github.com/SortableJS/Sortable#options)

	handle: '.handle',
	invertSwap: true,
	// . . .
})
```

### Getting Sortable instance
```javascript
$('#my-list').sortable();


var mySortableList = $('#my-list').sortable('widget');
```

### Getting/Setting options
Call `.sortable()` with the first argument as the option name and the second as the option value
```javascript
// Get an option
var isDisabled = $('#my-list').sortable('disabled');

// Set an option
$('#my-list').sortable('disabled', !isDisabled);
```

### Destroying Sortable
Pass `'destroy'` argument into `.sortable()`
```javascript
// Destroy Sortable
$('#my-list').sortable('destroy');
```

### Calling Sortable functions
Pass the name of the function as string into `.sortable()`, followed by any arguments
```javascript
// Sortable toArray
var order = $('#my-list').sortable('toArray');
```

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.