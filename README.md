On every push we get a webhook with all the commits.

Create pending ci status for all the commits.

Create fresh checkout of every commit and run all tests. If
the tests pass then create a release tarball and a success
status in GitHub. Otherwise create a fail status.

This should mean the CI server is guaranteed to have a release
tarball for every commit in master and every commit in master
passes all tests.

Development Process

1. Checkout repository: git clone https://github.com/karlspalding/ci.git
2. Install all dependencies: yarn
3. Lint code: find settings src test -name "\*.ts" | entr -cr yarn lint
4. Test code: find settings src test -name "\*.ts" | entr -cr yarn test
5. Build code: find settings src test -name "\*.ts" | entr -cr yarn build
6. Run local server: find dist -name "\*.js" | entr -cr yarn start

Continuous Integration Process

```
$ scripts/deploy <commit>
```
