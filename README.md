# Command line

## Following are the usual command line patterns. Learn more about the command line.

Run all the tests

`npm test`

Run a single test file

`npm test -- tests/login.spec.ts`

Run a set of test files

`npm test -- tests/todo-page/ tests/landing-page/`

Run files that have my-spec or my-spec-2 in the file name

`npm test -- my-spec my-spec-2`

Run the test with the title

`npm test -- -g "add a todo item"`

Run tests in headed browsers

`npm test -- --headed`

Disable parallelization

`npm test -- --workers=1`

Choose a reporter

`npm test -- --reporter=dot`

Run in debug mode with Playwright Inspector

`npm test -- --debug`
