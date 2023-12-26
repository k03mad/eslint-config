# Install

```bash
npm i --save-dev eslint @k03mad/eslint-config
```

## Use

```js
// eslint.config.js

export {default} from '@k03mad/eslint-config';
```

```json
// package.json
{
    "scripts": {
        "lint": "npm run lint:eslint",
        "lint:eslint": "eslint ./ --cache",
    }
}

// .vscode/settings.json
{
    "eslint.experimental.useFlatConfig": true
}
```
