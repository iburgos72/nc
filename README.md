# Nuvocargo

FE test

## Installation

Note: The node version used v16.13.2
```bash
$ npm i
$ npm run dev
```

Open your [localhost](http://localhost:8080/)

## Github pages

See the page [here](https://iburgos72.github.io/nuvocargo/)

## TO-DO

- Move the logic to read and write in the local storage to the helpers file

## Nice to have

- Listener in the view where the table is displayed, if the size of the screen is small (tablet or phone view), the table could be replaced by cards where the card can be collapsed. Ona card per row in the table


## Bug

- For some reason, the hot reload works just the first time that I edit the file ./src/views/delivery/main.js

## Comments

- It may be strange that the `Views` directory has only one folder, but it was structured that way so that if at any time you want to make views that are not related to delivery, you can create multiple bundles with webpack
- In my previous projects I have used tools like bootstrap, material ui and create react app, for this test I wanted to do it from scratch (and I regret it a bit because that made it more complicated)

Note: at the end I stole some of the css from bootstrap 🙃
