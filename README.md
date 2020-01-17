# To Do
Unit and integration tests (with dependency injection)
Need to keep aws-sdk out of node_modules
Share repo with Oscar
CI/CD deployments

# Run tests
## Automated tests
Run all tests from the command line:
* `npm test`

Or run individual tests from VS Code with the Test Explorer UI extension.

## Manual test with debugging in VS Code
1. Invoke the lambda with `./scripts/invoke-<function>-debug.bash`
1. In VS Code, launch the process `Attach to local Get handler`