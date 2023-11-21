function writeAccMag () {
    serial.writeLine("" + control.millis() + delimiter + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z) + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeMagOnly () {
    serial.writeLine("" + control.millis() + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
let delimiter = ""
basic.showLeds(`
    # # # # #
    . # . . #
    . # . . #
    . # . . #
    # # # # #
    `)
delimiter = " "
let loop_time = 0
control.inBackground(function () {
    while (true) {
        writeMagOnly()
        while (control.millis() - loop_time < 5) {
        	
        }
        loop_time = control.millis()
    }
})
