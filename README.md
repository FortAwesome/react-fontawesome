# react-fontawesome

Font Awesome 5 React component

**This API is in early alpha stages and is likely to change**

## Installation

```
$ npm i --save @fortawesome/fontawesome
$ npm i --save @fortawesome/react-fontawesome
```

or

```
$ yarn add @fortawesome/fontawesome
$ yarn add @fortawesome/react-fontawesome
```

## Usage

### The basics

The `icon` property of the `FontAwesomeIcon` component can be used in the following way:

Shorthand that assumes a prefix of `fas`:

```javascript
<FontAwesomeIcon icon="spinner" />
```

Explicit prefix (note the Vue bind shorthand because this uses an array):

```javascript
<FontAwesomeIcon icon={['far', 'spinner']} />
```

Explicit icon definition (this is pseudo-code, see examples below for more detail):

```javascript
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

<FontAwesomeIcon icon={faCoffee} />
```

### Using it with React

Using an explicit icon offers the advantage of only bundling the icons that you
use in your final bundled file. This allows us to subset Font Awesome's
thousands of icons to just the small number that are normally used.

Import the specific icons that you need:

```javascript
import ReactDOM from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

const element = (
  <FontAwesomeIcon icon={faCoffee} />
)

ReactDOM.render(element, document.body)
```

It can be tedious to always import the icons individually so a library can be
configured and shorthand can be used when rendering the icon.

Define a library that can be used without explicit imports:

App.js

```javascript
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, faSpinner)

const element = (
  <div id="app">
    <!-- If you are using the "Solid" style you can simply use the icon name -->
    <FontAwesomeIcon icon="spinner" />
    <!-- Using another style needs a prefix in the following array format -->
    <FontAwesomeIcon icon={['fab', 'font-awesome']} />
  </div>
)
```

## Features

### Basic

Spin and pulse animation:

```javascript
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />
```

Fixed width:

```javascript
<FontAwesomeIcon icon="spinner" fixed-width />
```

Border:

```javascript
<FontAwesomeIcon icon="spinner" border />
```

List items:

```javascript
<FontAwesomeIcon icon="spinner" list-item />
```

Flip horizontally, vertically, or both:

```javascript
<FontAwesomeIcon icon="spinner" flip="horizontal" />
<FontAwesomeIcon icon="spinner" flip="vertical" />
<FontAwesomeIcon icon="spinner" flip="both" />
```

Size:

```javascript
<FontAwesomeIcon icon="spinner" size="xs" />
<FontAwesomeIcon icon="spinner" size="lg" />
<FontAwesomeIcon icon="spinner" size="6x" />
```

Rotate:

```javascript
<FontAwesomeIcon icon="spinner" rotate={90} />
<FontAwesomeIcon icon="spinner" rotate={180} />
<FontAwesomeIcon icon="spinner" rotate={270} />
```

Pull left or right:

```javascript
<FontAwesomeIcon icon="spinner" pull="left" />
<FontAwesomeIcon icon="spinner" pull="right" />
```

Your own class names:

```javascript
<FontAwesomeIcon icon="spinner" className="highlight" />
```

### Advanced

Power Transforms:

```javascript
<FontAwesomeIcon icon="spinner" transform="shrink-6 left-4" />
<FontAwesomeIcon icon="spinner" transform={{ rotate: 42 }} />
```

Composition:

```javascript
<FontAwesomeIcon icon="coffee" compose={['far', 'circle']} />
```

Symbols:

```javascript
<FontAwesomeIcon icon="edit" symbol />
<FontAwesomeIcon icon="edit" symbol="edit-icon" />
```
