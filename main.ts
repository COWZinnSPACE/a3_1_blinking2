input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        images.createBigImage(`
            . . . . . . . . . .
            . . . . . . # # # .
            . . # . . . # . # .
            . . . . . . # # # .
            . . . . . . . . . .
            `).scrollImage(5, 500)
        images.createBigImage(`
            # # # # # . . . . .
            # . . . # . . . . .
            # . . . # . . . . .
            # . . . # . . . . .
            # # # # # . . . . .
            `).scrollImage(5, 500)
    }
})
