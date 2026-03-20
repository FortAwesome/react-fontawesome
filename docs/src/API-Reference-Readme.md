# Overview <i color="#428fdc" class="fa-solid fa-font-awesome"></i>

This documentation serves purely as an API Reference for the modules contained in the latest version of the `react-fontawesome` library.

It uses [TypeDoc](https://typedoc.org/) to generate documentation from the library's source code and code comments, giving us an overview of all the modules, interfaces, variables and functions available in this library, as well as descriptions of each prop available on the React component, what those props do, and examples of how to use them.

It is assumed if you are reading this API Reference that you're already familiar with the concepts and usage of FontAwesome and React.

For more detailed documentation on how to use FontAwesome with React in general, or how to use the `react-fontawesome` library, see here:

- [FontAwesome Documentation - Use With React](https://docs.fontawesome.com/web/use-with/react)
- [react-fontawesome on GitHub](https://github.com/FortAwesome/react-fontawesome)

## How to use this reference

In the side-bar menu, the top level items are the two key module entry points that are exported by the library:

- `main` - includes anything exported via the main entry point
  - e.g. `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'`
- `CustomPrefixProvider` - special module for using custom FA prefixes with server-side rendering
  - e.g. `import { CustomPrefixProvider } from '@fortawesome/react-fontawesome/components/rsc/CustomPrefixProvider'`
- `<internal>` - refers to types and interfaces that are used internally within the package but are not exported by the package to consumers
