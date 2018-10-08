Backend Koa Starter Example
===========================

1. Lint all files on changes:
```
find src test -name "*.ts" | entr -cr yarn lint
```
2. Run all the tests on changes:
```
find src test -name "*.ts" | entr -cr yarn test
```
3. Build the project on changes:
```
find src test -name "*.ts" | entr -cr yarn build
```
4. Run a local server and reload on changes:
```
find dist -name "*.js" | entr -cr yarn start
```
