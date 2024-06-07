# Using Lerna

Installing dependencies for all packages

```bash
npx lerna exec -- npm install
```

Installing dependencies for a package

```bash
npx lerna exec --scope <package-name> -- npm install
```

Example

```bash
npx lerna exec --scope ui -- npm install
```

To install ESLint for all packages

```bash
npx lerna add eslint --dev
```

To install ESLint for a package

```bash
npm install estlint --save-dev -w <package-name>
```
