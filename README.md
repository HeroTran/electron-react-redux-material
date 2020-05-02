# Herotran Electron Desktop React Redux

Why need use immutablejs
https://www.newline.co/fullstack-react/articles/using-immutablejs-with-react-and-redux/
You should use electron-packger for build
https://ourcodeworld.com/articles/read/365/how-to-create-a-windows-installer-for-an-application-built-with-electron-framework
set DEBUG_PROD=true for test on production when deploy on store should remove it.

## First, clone the repo via git and install dependencies:(Should use yarn)

```bash
npm i -g electron
yarn or npm install 
```

## Starting Development (Test use API dev on app)


```bash
yarn dev or npm run dev
```

## Starting Prod (Test use API prod on app)


```bash
yarn prod or npm run prod
```

## Check Eslint for rule code
```bash
yarn lint or npm run lint
```

## Packaging all for Production

To package apps for the local platform:

```bash
yarn package or npm run package
```

## Packaging Production for win

```bash
yarn package-win or npm run package-win
```

## Packaging Production for mac

```bash
yarn package-mac or npm run package-mac
```

## Packaging Production for linux

```bash
yarn package-linux or npm run package-linux
```