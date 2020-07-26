input.onButtonPressed(Button.A, function () {
    コインの枚数 = 0
    basic.showNumber(コインの枚数)
})
let コインの枚数 = 0
コインの枚数 = 0
basic.showNumber(コインの枚数)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        コインの枚数 += 1
        basic.showNumber(コインの枚数)
    }
})
