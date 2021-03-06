# node-basic

##### Rrequirement :
install node js :
https://nodejs.org/en/download/

run `node file.js`

##### npm command :
`npm init` to create initial project
`npm install --save dependency` or shorthand `npm i dependency` when without version will download latest version
`npm install --save dependency@version` will download spesific dependency version
`npm install --save-dev  dependency` for development dependecy
`npm install -g` to install dependency as global to all project
`npm list` for check all dependency tree or `npm list --depth=0` to check main dependency 
`npm view dependency` to check detail dependency
`ncu` stand for `npm check update` to check any update & fix dependency version
`ncu -u` to check and update package.json dependency version then `npm install` after it
`npn uninstall @dependency` to uninstall spesific dependency

##### here is a list of thumb rules for using async and await:

1. async functions return a promise.
2. async functions use an implicit Promise to return results. Even if you don’t return a promise explicitly, the async function makes sure that your code is passed through a promise.
3. await blocks the code execution within the async function, of which it (await statement) is a part.
4. There can be multiple await statements within a single async function.
5. When using async await, make sure to use try catch for error handling.
6. If your code contains blocking code it is better to make it an async function. By doing this you are making sure that somebody else can use your function asynchronously.
7. By making async functions out of blocking code, you are enabling the user (who will call your function) to decide on the level of asynchronicity they want.
8. Be extra careful when using await within loops and iterators. You might fall into the trap of writing sequentially executing code when it could have been easily done in parallel.
9. await is always for a single promise. If you want to await multiple promises (run this promise in parallel) create an array of promises and then pass it to the Promise.all function.
10. Promise creation starts the execution of asynchronous functionality.
11. await only blocks the code execution within the async function. It only makes sure that the next line is executed when the promise resolves. So, if an asynchronous activity has already started, await will not have an effect on it.