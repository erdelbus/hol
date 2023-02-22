basic.forever(function () {
    if (input.lightLevel() > 100) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 225)
        basic.pause(100)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
