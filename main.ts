/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: oct 2024
 * This program ...
*/


let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0,2)
    basic.clearScreen()

    //rock
    if (randomNumber == 2) {
        basic.showIcon(IconNames.SmallSquare)
    }
    

   //paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

//Scissors
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Scissors)
    }

    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    game.addScore(1)
})

input.onButtonPressed(Button.B, function () {
 
        basic.showNumber(game.score())
})