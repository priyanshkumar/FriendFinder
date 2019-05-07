# Friend Finder

## File Structure

```
├── app
|  ├── data
|  |  └── Friend.js
|  ├── public
|  |  └── home.html
|  |  └── survey.html
|  └── routing
|     └── apiRoutes.js
|     └── htmlRoutes.js
└── .gitignore
└── package.json
└── README.md
└── Server.js
```

## Overview

This app is built for the learning purpose only.
It is a kind of dating app.
Where user will fill the survey of 10 questions.  
The app will then display the best match for the user by checking the users survey best match to other people.

## App Description

1.  As per the file structure friend.js stores the incoming survey result into array of an objects.
2.  `home.html` and `survey.html` are the UI pages for the application.
3.  `apiRoutes.js` handles two routes.
    - GET route for creating API of the array which has survey results.
    - POST route for getting the survey result check for the match and push the survey to array.
4.  `htmlRoutes.js` also handels two GET Routes one for the home.html and another for survey.html
5.  `server.js` manages express server for the application.

## Survey Data

```json
{
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}
```

## Logic for the match

    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

- With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
  - Example:
    - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    - Total Difference: **2 + 1 + 2 =** **_5_**
- Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
- The closest match will be the user with the least amount of difference.

## Build With:

JavaScript, Express.js, Node.js, jQuery, Bootstrap, HTML, CSS.
