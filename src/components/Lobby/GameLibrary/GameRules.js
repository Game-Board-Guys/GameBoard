export default function gameRules(gameRulesName) {
console.log('this is hitting the game rules switch', gameRulesName)
switch (gameRulesName) {
case ':tanks':
return (
"The rules are simple, hit all the targets to beat the level. To fire, use the space bar. To aim, use the up and down arrow keys. To control your shot's power, use the left and right arrow keys."
)
case ':brickbreaker':
return (
"The objective of Brick Breaker is to use the paddle on the bottom of the screen to bounce the ball upwards, hitting and breaking all of the bricks. Once every brick is gone, you will advance to the next level. Levels become more difficult with ball speed increases and bricks that take multiple hits to break. You will begin the game with 3 lives and will gain a life with every level completed."
)
case ':maze2d':
return (
"Cyber Orb is played by getting the ball through the maze, either by using the arrow keys on a keyboard or by tilting your phone or tablet. To beat a level and continue to the next, get the ball in the hole at the end of the maze."
)
case ':invaders':
return (
"Invaders is played by firing shots at the approaching invaders. To do this, you fire with your space bar and move left and right with the keyboard arrow keys. If you are hit by an invader, a life is lost. You will begin with 3 lives and will gain a new life with every level completed."
)
case ':sliding-puzzle':
return (
"Rearrange the tiles to complete the puzzle"
)
case ':match-three':
return (
"Swap the orbs to connect chains of 3, 4 or 5. If you connect 3, the chain will disappear, connect 4 and the row will disappear and connect 5 to make all orbs of that color disappear!"
)
case ':gemmatch':
return (
"Swap the gems to connect chains of 3, 4, or 5. When a chain is created, that chain will disappear."
)
case ':ships':
return (
"Sail around the ocean and shoot other ships with cannonballs. Use your keyboard up arrow or 'W' key to move forward and your mouse to steer your ship. Click the mouse to fire cannonballs at your opponents."
)
default:
return ('Game Rules')
}
}