# Punkapi Viewer

Thank you for interviewing at Beerbylon!

Our mission is affordable beer for everyone on the planet, and the first goal is a nice interface for the [open Punk API]. You are to read their docs as needed and use endpoints such as `https://api.punkapi.com/v2/beers` to create two routes / UI views:

- `/`: Home route displays a **list** of the first 25 beers in the Punk API. For each beer we want to see its:
  - Name
  - Tagline
  - Image
  - Alcohol By Volume
- `/:id`: Beer **detail** view displays further details of the beer with the requested `id`. In addition to the above in the details we can also see a beer's:
  - Description
  - Brewed Date
  - Food Pairings

There are a couple integration tests to get you going. They are leveraging [Testing Library] and you may run them in watch mode with `yarn test`.

Feel free to extend them or write additional ones. The point of the exercise is not just to make them green; actual humans will be reviewing your code as well as your approach.

Good luck and have fun!

[open punk api]: https://punkapi.com/documentation/v2 'According to science, alcohol is a solution'
[testing library]: https://testing-library.com/docs/react-testing-library/intro 'Simple and complete testing utilities that encourage good testing practices'

## Node / Javascript Fundamentals

You are expected to know your way around modern web development, but tools you will need to complete this exercise are:

- git & Github
- Node, and we recommend [Node Version Manager] to install manage its versions
- [yarn] as the dependency manager

[node version manager]: https://github.com/nvm-sh/nvm 'POSIX-compliant bash script to manage multiple active node.js versions'
[yarn]: https://yarnpkg.com/lang/en/ 'fast, reliable, and secure dependency management'

## Create React App Fundamentals

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
