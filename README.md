# Nuvocargo

FE test

## Installation

Note: The node version used v16.13.2
```bash
$ npm i
$ npm run dev
```

Open your [localhost](http://localhost:8080/)

## TO-DO

- Move the logic to read and write in the local storage to the helpers file

## Nice to have

- Listener in the view where the table is displayed, if the size of the screen is small (tablet or phone view), the table could be replaced by cards where the card can be collapsed. Ona card per row in the table


## Bug

- For some reason, the hot reload works just the first time that I edit the file ./src/views/delivery/main.js

## Comments

- It may be strange that the `Views` directory has only one folder, but it was structured that way so that if at any time you want to make views that are not related to delivery, you can create multiple bundles with webpack
