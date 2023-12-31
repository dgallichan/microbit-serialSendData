function writeAccMag () {
    serial.writeLine("" + control.micros() + delimiter + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z) + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeMagOnly () {
    serial.writeLine("" + control.micros() + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeAccOnly () {
    serial.writeLine("" + control.micros() + delimiter + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z))
}
function writeP2 () {
    serial.writeLine("" + control.micros() + delimiter + pins.analogReadPin(AnalogPin.P2))
}
function writeTimeOnly () {
    serial.writeLine("" + (control.micros()))
}
let delimiter = ""
let loop_time = 0
basic.showLeds(`
    # # # # #
    . # . . #
    . # . . #
    . # . . #
    # # # # #
    `)
delimiter = ","
control.inBackground(function () {
    while (true) {
        writeP2()
        while (control.micros() - loop_time < 5000) {
        	
        }
        loop_time = control.micros()
    }
})
