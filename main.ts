input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    Dice_1 = Dice_1_Roll_2
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    let Dice_5 = 0
    Dice_1 = randint(1, 6)
    Dice_1 = Dice_1_Roll_2
    basic.showNumber(Dice_1)
    basic.pause(100)
    Dice_2 = randint(1, 6)
    basic.showNumber(Dice_2)
    basic.pause(100)
    Dice_3 = randint(1, 6)
    basic.showNumber(Dice_3)
    basic.pause(100)
    Dice_4 = randint(1, 6)
    basic.showNumber(Dice_4)
    basic.pause(100)
    Dice_4 = randint(1, 6)
    basic.showNumber(Dice_5)
    basic.pause(100)
})
let Dice_4 = 0
let Dice_3 = 0
let Dice_2 = 0
let Dice_1_Roll_2 = 0
let Dice_1 = 0
Dice_1 = randint(1, 6)
