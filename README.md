# Tennis Game

This program stimulates a tennis game with below rules

- A game is won by the first player to have won at least four points in total and at least two points more than the opponent.

- The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.

- If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.

- If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

## Getting started

To get the application running locally:

- Clone this repository and open in your favourite IDE

### `npm install`

Installs all required dependencies to the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Runs the test runner and generates coverage report to the 'coverage' folder.
Open the 'index.html' file in location '/coverage/lcov-report/' for generated coverage report.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Reports

### Test Coverage Report

    PASS  src/components/ResetGame/index.test.jsx
    PASS  src/components/Player/index.test.jsx
    PASS  src/components/ScoreBoard/index.test.jsx
    PASS  src/components/Game/index.test.jsx

|File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|-------------------------------|---------|----------|---------|---------|-------------------|
|All files                      |     100 |      100 |     100 |     100 |                   |
|components/Game                |     100 |      100 |     100 |     100 |                   |
| index.jsx                     |     100 |      100 |     100 |     100 |                   |
|components/Player              |     100 |      100 |     100 |     100 |                   |
| index.jsx                     |     100 |      100 |     100 |     100 |                   |
|components/ResetGame           |     100 |      100 |     100 |     100 |                   |
| index.jsx                     |     100 |      100 |     100 |     100 |                   |
|components/ScoreBoard          |     100 |      100 |     100 |     100 |                   |
| index.jsx                     |     100 |      100 |     100 |     100 |                   |
|components/ScoreBoard/rules    |     100 |      100 |     100 |     100 |                   |
| advantage.js                  |     100 |      100 |     100 |     100 |                   |
| deuce.js                      |     100 |      100 |     100 |     100 |                   |
| sameScoreAndLessThanThree.js  |     100 |      100 |     100 |     100 |                   |
| scoreNotMoreThanThree.js      |     100 |      100 |     100 |     100 |                   |
| win.js                        |     100 |      100 |     100 |     100 |                   |
|constants                      |     100 |      100 |     100 |     100 |                   |
| applicationConstants.js       |     100 |      100 |     100 |     100 |                   |
| testConstants.js              |     100 |      100 |     100 |     100 |                   |
|utils                          |     100 |      100 |     100 |     100 |                   |
| compareScore.js               |     100 |      100 |     100 |     100 |                   |

    Test Suites: 4 passed, 4 total
    Tests:       28 passed, 28 total
    Snapshots:   0 total
    Time:        3.294 s
