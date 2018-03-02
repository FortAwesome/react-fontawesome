# react-fontawesome

[![npm](https://img.shields.io/npm/v/@fortawesome/react-fontawesome.svg?style=flat-square)](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

Font Awesome 5 React component

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

You can use Font Awesome icons in your React components as simply as this:
```javascript
<FontAwesomeIcon icon="coffee"/>
```

That simple usage is made possible when you add the `"coffee"` icon,
 to the _library_, or when _externally_ loading
icon bundles that include the icon.

These are two of the three ways you can use
Font Awesome 5 with React.
We'll summarize all three ways briefly and then get into the
details of each below.

1.  **Explicit Import**

    Allows icons to be subsetted, optimizing your final bundle. Only the
    icons you import are included in the bundle.
    However, explicitly importing icons into each of many components
    in your app might become tedious, so you may want to build a library.

2. **Build a Library**

    Explicitly import icons just once in some init module. Then add them
    to the library. Then reference any of them by icon name as a string
    from any component. No need to import the icons into each component
    once they're in the library.

3. **External Loading**

    If you're in a situation where the icons have
    been loaded externally, outside of your React component with a
    `<script>` tag, then your React component can reference those icons
    instead of doing its own import. You reference them from your React
    component just as if you'd added them to the library: using the
    icons names as strings.

### Explicit Import

For this example, we'll also reference the <span style="white-space:nowrap;">`@fortawesome/fontawesome-free-solid`</span>
module, so make sure you've added it to the project as well:

```
$ npm i --save @fortawesome/fontawesome-free-solid
```

or

```
$ yarn add @fortawesome/fontawesome-free-solid
```

Now, a simple React component might look like this:

```javascript
import ReactDOM from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

const element = (
  <FontAwesomeIcon icon={faCoffee} />
)

ReactDOM.render(element, document.body)
```

Notice that the `faCoffee` icon is imported from
<span style="white-space:nowrap;">`@fortawesome/fontawesome-free-solid`</span> as an object and then
provided to the `icon` prop as an object.

Explicitly importing icons like this allows us to subset Font Awesome's
thousands of icons to include only those you use in your final bundled file.

### Build a Library to Reference Icons Throughout Your App More Conveniently

You probably want to use our icons in more than one component in your app,
right?

But with explicit importing, it could
become tedious to import into each of your app's components every icon
you want to reference in that component.

So, add them to the _library_. Do this setup once in some initializing
module of your app, adding all of the icons you'll use in your app's
React components.

Suppose `App.js` initializes my app,
including the library. For this example, we'll add two individual icons,
`faCheckSquare` and `faCoffee`. We also add all of the brands in
 <span style="white-space:nowrap;">`@fortawesome/fontawesome-free-brands`</span>.
 This example would illustrate the benefits of building a library
even more clearly if it involved fifty or a hundred icons, but we'll
keep the example brief and leave it to your imagination as to how this
might scale up with lots of icons.

Don't forget to add `@fortawesome/fontawesome-free-brands`:
```
$ npm i --save @fortawesome/fontawesome-free-brands
```

or

```
$ yarn add @fortawesome/fontawesome-free-brands
```

In `App.js`, where our app is initialized:

```javascript
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

fontawesome.library.add(brands, faCheckSquare, faCoffee)
```

OK, so what's happening here?

In our call to <span style="white-space:nowrap;">`fontawesome.library.add()`</span> we're passing
* `brands`: which represents _all_ of the brand icons in
<span style="white-space:nowrap;">`@fortawesome/fontawesome-free-brands`</span>.
So any of the brand icons in that package may be referenced by icon name
as a string anywhere else in our app.
For example: `"apple"`, `"microsoft"`, or `"google"`.
* `faCheckSquare` and `faCoffee`: Adding each of these icons individually
allows us to refer to them throughout our app by their icon string names,
`"check-square"` and `"coffee"`, respectively.

Now, suppose you also have React components `Beverage` and `Gadget` in your app.
You don't have to re-import your icons into them. Just import the `FontAwesomeIcon`
component, and when you use it, supply the icon prop an icon name as a string.

We'll make `Beverage.js` a functional component:
```javascript
import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Beverage = () => (
    <div>
        <FontAwesomeIcon icon="check-square"/>
        Favorite beverage: <FontAwesomeIcon icon="coffee"/>
    </div>
)

export default Beverage
```

There's one another piece of magic that's happening in the
background when providing icon names as strings like this: the `fas` prefix
(for Font Awesome Solid) is being inferred as the default. Later, we'll look at what
that means and how we can do something different than the default.

Now suppose `Gadget.js` looks like this:

```javascript
import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Gadget = () => (
  <div>
    <FontAwesomeIcon icon="check-square"/>
    Popular gadgets come from vendors like:
      <FontAwesomeIcon icon={["fab", "apple"]}/>
      <FontAwesomeIcon icon={["fab", "microsoft"]}/>
      <FontAwesomeIcon icon={["fab", "google"]}/>
  </div>
)

export default Gadget
```

Notice:
* We used the `"check-square"` icon name again in this component, though we
didn't have to explicitly import it into this component. With one explicit import of
that icon in `App.js`, and adding it to the library, we've managed to use
it by name in multiple components.
* We used the `"apple"`, `"microsoft"`, and `"google"` brand icons, which were
never explicitly _individually_ imported, but they're available to us by
name as strings because `brands` was added to our library in `App.js`, and
`brands` includes all of those icons.
* We added the `fab` prefix to reference those brand icons.

Adding a prefix—and the syntax we used to do it—are new. So what's
going on here?

First, recall when we introduced
<span style="whitespace:nowrap;">`<FontAwesomeIcon icon="coffee"/>`</span>
and learned that a prefix of `fas` was being added  to `"coffee"` by default.

The `"check-square"` icon is getting a default prefix of `fas` here too,
which is what we want, because that icon also lives in the
<span style="whitespace:nowrap;">`@fortawesome/fontawesome-free-solid`</span>
package.

However, the `"apple"`, `"microsoft"`, and `"google"` brand icons live in the
package <span style="whitespace:nowrap;">`@fortawesome/fontawesome-free-brands`</span>.
So we need to specify a different prefix for them—not the default `fas`,
but `fab`, for Font Awesome _Brand_.

When specifying a prefix with an icon name, both are given as strings.

Now, what about that syntax?

The `icon` prop expects a single object:
* It could be an icon object, like `{faCoffee}`.
* It could a string object, like `"coffee"`.

    (The curly braces around a string object supplied to a prop are
    optional, so we've omitted them.)
* Or it could be an `Array` of strings, where the first element is a
prefix, and the second element is the icon name: `{["fab", "apple"]}`

### External Loading

There are some scenarios where you may want your React components to
reference icons that have already been loaded globally with a `<script>`
tag.

For example: a web site that is not a Single Page App. Maybe
 it involves a theme or template that makes use of Font Awesome icons by
 sourcing them in via `<script>` tag. Now you come along to add one or
 more React components to that web site. Instead of explicitly importing
 icons again into your components, you could reference the icons that
 have already been externally loaded.

Suppose your React component is mounted in a DOM that has the following
in its `<head>`:
```
 <script src="https://example.com/fontawesome-free-solid.js"></script>
```

Now you can reference any of the icons from within your React components
as if you'd added them to the library:

```javascript
<FontAwesomeIcon icon="coffee"/>
```

## Features

In the following code snippets, we'll use the shortcut notation for the
icons—referencing the icons by their names as strings.

But remember, that option is only valid after you've either
explicitly imported and added those icons to the library, or externally
loaded an icon bundle. See the sections above for the details.

### Basic

Spin and pulse animation:

```javascript
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />
```

Fixed width:

```javascript
<FontAwesomeIcon icon="spinner" fixedWidth />
```

Border:

```javascript
<FontAwesomeIcon icon="spinner" border />
```

List items:

```javascript
<FontAwesomeIcon icon="spinner" listItem />
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

Rotation:

```javascript
<FontAwesomeIcon icon="spinner" rotation={90} />
<FontAwesomeIcon icon="spinner" rotation={180} />
<FontAwesomeIcon icon="spinner" rotation={270} />
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
<FontAwesomeIcon icon="coffee" mask={['far', 'circle']} />
```

Symbols:

```javascript
<FontAwesomeIcon icon="edit" symbol />
<FontAwesomeIcon icon="edit" symbol="edit-icon" />
```


Layering:

```javascript
<span className="fa-layers fa-fw">
  <FontAwesomeIcon icon="square" color="green"/>
  <FontAwesomeIcon icon="check" inverse transform="shrink-6"/>
</span>
```
