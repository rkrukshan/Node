````markdown
# undefsafe

A lightweight utility for safely accessing deeply nested object properties without throwing errors when intermediate properties are `undefined` or `null`.

---

## Features

- Safely access deep object properties.
- Prevent `Cannot read property...` runtime errors.
- Lightweight with no runtime dependencies.
- Simple dot-notation path support.
- Easy to integrate into any Node.js project.

---

## Project Structure

```text
.
├── .jscsrc             # JSCS code style configuration
├── .jshintrc           # JSHint linting configuration
├── .travis.yml         # Travis CI configuration
├── LICENSE             # MIT License
├── README.md           # Project documentation
├── example.js          # Example usage
├── sample.js           # Additional sample snippets
├── undefsafe.js        # Core library
├── package.json        # Project metadata
└── package-lock.json   # Dependency lock file
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd undefsafe
```

Install dependencies:

```bash
npm install
```

---

## Usage

Import the library:

```javascript
const undefsafe = require("./undefsafe");
```

Example object:

```javascript
const person = {
  profile: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};
```

Safely access nested properties:

```javascript
console.log(undefsafe(person, "profile.name"));
// John

console.log(undefsafe(person, "profile.address.city"));
// New York

console.log(undefsafe(person, "profile.address.country"));
// undefined
```

Without `undefsafe`, accessing a missing property could throw an error:

```javascript
person.profile.address.country.code;
```

With `undefsafe`:

```javascript
undefsafe(person, "profile.address.country.code");
// undefined
```

---

## Example

Run the example file:

```bash
node example.js
```

The example demonstrates how `undefsafe` safely retrieves nested values without causing runtime exceptions.

---

## Development

### Install dependencies

```bash
npm install
```

### Run examples

```bash
node example.js
```

---

## Configuration Files

### `.jscsrc`

Defines JavaScript coding style rules.

### `.jshintrc`

Provides linting configuration using JSHint.

### `.travis.yml`

Configures Travis CI to automatically build and test the project.

---

## License

This project is licensed under the **MIT License**.

See the **LICENSE** file for complete details.
````
