# Using Lerna

Installing dependencies for a package

```bash
npx lerna exec --scope <package-name> -- npm install
```

Example

```bash
npx lerna exec --scope ui -- npm install
```