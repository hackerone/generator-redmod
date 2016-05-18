# Generator Redmod - (redux modules)
A Yeoman generator for generating ES6 + React + Redux apps, inspired from https://github.com/erikras/ducks-modular-redux

# Libraries used
- React
- Redux
- Sass / CSS modules using webpack


# Generator options

## Scaffolding complete app
`yo redmod <dirname>`
Generates the whole app skeleton.

## Generate React Components / Containers
`yo redmod:component`

Generates a react components or containers. 

Component vs Container? 
- They both are React components
- Containers live in the `containers` directory. They can be used in router
- Components live in the `components` directory. They are small re-usable pieces.
- They both can connected to a reducer (module).


## Generate Redux modules (reducer + action + constants)
`yo redmod:module`

Generates a redux module which contains a reducer, action and constant

# Directory structure
<pre>
├── index.html
├── jsconfig.json
├── package.json
├── server.js
├── src
│   ├── app.js
│   ├── components
│   │   ├── footer
│   │   │   ├── Footer.js
│   │   │   └── Footer.scss
│   │   └── header
│   │       ├── Header.js
│   │       └── Header.scss
│   ├── config
│   │   ├── routes.js
│   │   └── store.js
│   ├── containers
│   │   └── layout
│   │       ├── Layout.js
│   │       └── Layout.scss
│   ├── lib
│   │   ├── css
│   │   │   ├── normalize.css
│   │   │   └── skeleton.css
│   │   └── namespaceWords.js
│   └── modules
│       ├── Say.js
│       └── index.js
├── tst
│   ├── modules
│   │   └── Say.js
│   └── utils.js
├── webpack.config.js
└── webpack.prod.js
</pre>

# Roadmap
- Improve test generation

