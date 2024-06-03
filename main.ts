function writeAccMag () {
    serial.writeLine("" + thisLine + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z) + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeMagOnly () {
    serial.writeLine("" + thisLine + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeAccOnly () {
    serial.writeLine("" + thisLine + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z))
}
function writeP2 () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
}
function writeTimeOnly () {
    serial.writeLine("" + (control.micros()))
}
let thisLine = ""
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
let includeTime = 0
control.inBackground(function () {
    while (true) {
        if (includeTime == 1) {
            thisLine = "" + control.micros() + delimiter
        } else {
            thisLine = ""
        }
        writeAccOnly()
        while (control.micros() - loop_time < 25000) {
        	
        }
        loop_time = control.micros()
    }
})
