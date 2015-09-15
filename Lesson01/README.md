# Lesson 01

- START.html > open this file in your browser to run your code.  
- Inside `START.html` you can edit which level you want to use.  
- Inside the `levels` directory you find a file for each level. You can add your code into these files to solve each level.

## What is a level?

<img src="screenshot1.png" width="250px">

The goal is to direct the elephant to collect all the coins and reach the target (purple flag). Try doing it with using as few commands as possible!

## What commands can I use?

- `move()` - Moves the elephant one field forward in the direction he's facing.
- `turnRight()` - Turns the elephant by 90° to the right.
- `turnLeft()` - Turns the elephant by 90° to the left.
- `isFacingHole()` - Returns if a hole is infront of the elephant.
- `hasWon()` - Returns if the user has won or not yet.
- `getX()` - Returns the current x position of the elephant.
- `getY()` - Returns the current y position of the elephant.

You can use any other javascript code. So feel free to use loops, variables etc.

## Levels
### Level 1
Get to know the commands.

### Level 2
How do loops work?

### Level 3
If statements.

### Level 4
Functions.

### Level 5
Handle random data.

## Technical Stuff
Each command basically executes immediatly without updating the UI, but updates the cordinates etc to provide information like "isFacingHole". Each command also adds itself into a queue. This queue will be executed in 1s delays (override `delay` variable for faster execution) and show the update in the UI.  
If more than 5000 commands got called we assume we ran into a infinite loop and throw an exception. You'll see this in the console. This can happen pretty fast with using hasWon() inside a loop, so sometimes it's better to use a for loop with let's say `i < 50` to start working on a level.