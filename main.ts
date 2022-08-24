IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
basic.forever(function () {
	
})
