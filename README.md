# Tylin Popper

Welcome to Tylin Popper, a fun and challenging game where you pop all the Tylins! Test your skills and aim for the highest score!

## Table of Contents
- [Rules](#rules)
- [Game Mechanics](#game-mechanics)
- [Features](#features)
- [Project Structure](#project-structure)
- [Project Files](#project-files)
- [ToDo](#todo)

## Rules
- The goal is to pop as many Tylins as possible to earn points.
- Click on bushes that have Tylins hiding underneath them to pop them.
- Be careful not to click on empty bushes, as it will result in penalties.
- The game ends when you've either popped all the Tylins or accumulated too many penalties.

## Game Mechanics
- Tylins are hidden beneath bushes, and you must uncover them by clicking on the bushes.
- Each successful pop earns you points.
- The game includes an adjustable difficulty level that affects the challenge and score potential.
- You can also set the initial number of bushes to determine the game's starting complexity.
- Enable the "Regenerating Bushes" feature in settings to add an extra layer of complexity, as bushes may regenerate after being popped.

## Features
- Interactive gameplay with challenging mechanics.
- Score calculation based on points earned, time taken, and penalties.
- Adjustable difficulty and initial number of bushes.
- "Regenerating Bushes" feature for added challenge.
- Help menu to explain game rules and scoring.

## Project Structure
```
.
├── backend
│ ├── app.js
│ ├── controllers
│ │ └── gameController.js
│ ├── models
│ │ └── Score.js
│ ├── package.json
│ ├── package-lock.json
│ └── routes
│ └── api.js
├── frontend
│ ├── package.json
│ ├── package-lock.json
│ ├── public
│ │ └── index.html
│ └── src
│ ├── App.js
│ ├── components
│ │ ├── Background.css
│ │ ├── Background.js
│ │ ├── Bush.js
│ │ ├── Cloud.css
│ │ ├── Cloud.js
│ │ ├── CreateBushMimic.js
│ │ ├── DestroyBushMimic.js
│ │ ├── Game.js
│ │ ├── GameOver.css
│ │ ├── GameOver.js
│ │ ├── Help.js
│ │ ├── MainMenu.js
│ │ ├── RunTime.js
│ │ ├── Settings.js
│ │ └── Timer.js
│ ├── Game.css
│ ├── index.css
│ └── index.js
└── readme
```

## Project Files
The project contains the following main files and components:
- `Game.js`: The main game component that orchestrates gameplay.
- `RunTime.js`: Handles the game runtime, including bush generation and animations.
- `Background.js`: Manages the game's background and UI elements.
- `Cloud.js`: Renders cloud graphics in the game.
- `Timer.js`: Displays and tracks the game timer.
- `GameOver.js`: Displays the game over screen and final score.
- `MainMenu.js`: The main menu screen for starting or configuring the game.
- `Settings.js`: The settings menu for adjusting game options.
- `Help.js`: Provides information on how to play the game and understand the overall score.
- `DestroyBushMimic.js` and `CreateBushMimic.js`: Simulate bush destruction and creation animations.

## ToDo
- [ ] **Sprites**: Need to change out the brown dot and other aspects for proper sprites.
- [ ] **Better Menus**: Need to code proper good-looking menus and game over screens.
- [ ] **Power-ups**: Add power-ups that spawn randomly and provide temporary benefits 
like faster clicking, extra points, or slowing down the game's timer.
    - added 3, currently only 1 is coded
- [ ] **Obstacles**: Introduce obstacles like rocks or other objects that obstruct the player's view and require them to strategize when to pop Tylins.
- [ ] **Combo System**: Implement a combo system where players earn bonus points for popping Tylins consecutively without missing.
- [ ] **Leaderboards**: Add an online leaderboard system to allow players to compete with others and see how their scores rank globally.
- [ ] **Achievements**: Create a variety of in-game achievements that reward players for accomplishing specific tasks or reaching certain milestones.
- [ ] **Special Tylins**: Include unique Tylins with special abilities or characteristics, such as providing extra time or exploding nearby Tylins when popped.
- [ ] **Sound Effects and Music**: Enhance the game's audio by adding sound effects for popping Tylins, background music, and audio cues for power-ups and special events.
- [ ] **Visual Effects**: Implement visually appealing effects for popping Tylins, combos, and special actions to make the game more engaging.
- [ ] **Difficulty Levels**: Add multiple difficulty levels, allowing players to choose their preferred level of challenge.
- [ ] **Timer Extensions**: Include items or actions that extend the game timer, offering players more time to achieve a higher score.
- [ ] **Multiplayer Mode**: Create a multiplayer mode where players can compete head-to-head or cooperate to achieve higher scores together.
- [ ] **Tutorial**: Develop an interactive tutorial to help new players understand the game mechanics and objectives.
- [ ] **Customization Options**: Allow players to customize their game experience by choosing backgrounds, themes, or skins for Tylins and bushes.
- [ ] **Daily Challenges**: Introduce daily challenges with unique objectives and rewards to encourage daily gameplay.
- [ ] **Localization**: Translate the game into multiple languages to reach a broader audience.


