# Herotran Electron Desktop React Redux

Why need use immutablejs
https://www.newline.co/fullstack-react/articles/using-immutablejs-with-react-and-redux/
You should use electron-packger for build
https://ourcodeworld.com/articles/read/365/how-to-create-a-windows-installer-for-an-application-built-with-electron-framework
set DEBUG_PROD=true for test on production when deploy on store should remove it.
install electron for mac : npm install -g electron --unsafe-perm=true --allow-root

## How to use auto-update electron
Link : https://github.com/iffy/electron-updater-example
https://medium.com/@johndyer24/creating-and-deploying-an-auto-updating-electron-app-for-mac-and-windows-using-electron-builder-6a3982c0cee6
https://github.com/johndyer24/electron-auto-update-example/blob/master/main.js
Step up
1/add publish package.json
"publish": [{
             "provider": "github",
             "owner": "iffy",
             "repo": "electron-updater-example"
         }],
2/Generate a GitHub access token by going to https://github.com/settings/tokens/new. 
On macOS/linux:
``` export GH_TOKEN="<YOUR_TOKEN_HERE>" 
```

On Windows, run in powershell:
``` [Environment]::SetEnvironmentVariable("GH_TOKEN","<YOUR_TOKEN_HERE>","User")
```

3/Publish for your platform with:
``` "publish": "build --mac --win -p always"
```
4/Release the release on GitHub by going to https://github.com/YOUR_GIT_HUB_USERNAME/electron-updater-example/releases, editing the release and clicking "Publish release."

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