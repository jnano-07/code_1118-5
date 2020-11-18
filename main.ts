let sprite = 0
input.onButtonPressed(Button.A, function () {
    sprite = randint(0, 100)
    if (sprite % 7 == 0) {
        basic.showNumber(sprite)
        basic.showIcon(IconNames.Meh)
    } else if (sprite % 5 == 0) {
        basic.showNumber(sprite)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showNumber(sprite)
        basic.showIcon(IconNames.Sad)
    }
})
