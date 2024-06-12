function writeAccAs2bytes () {
    comment = "Ouptut Mode 5"
    comment = "Not sure if this way of doing it actually works!"
    serial.writeNumber(Math.constrain(Math.map(input.acceleration(Dimension.X), -2000, 2000, 0, 255), 0, 255))
    serial.writeNumber(Math.constrain(Math.map(input.acceleration(Dimension.Y), -2000, 2000, 0, 255), 0, 255))
}
function writeAccMag () {
    comment = "Ouptut Mode 3"
    serial.writeLine("" + thisLine + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z) + delimiter + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writeMagOnly () {
    comment = "Ouptut Mode 2"
    serial.writeLine("" + thisLine + input.magneticForce(Dimension.X) + delimiter + input.magneticForce(Dimension.Y) + delimiter + input.magneticForce(Dimension.Z))
}
function writePin () {
    comment = "Ouptut Mode 4"
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
}
function writeAccOnly () {
    comment = "Ouptut Mode 1"
    serial.writeLine("" + thisLine + input.acceleration(Dimension.X) + delimiter + input.acceleration(Dimension.Y) + delimiter + input.acceleration(Dimension.Z))
}
function writeTimeOnly () {
    comment = "Ouptut Mode 0"
    serial.writeLine("" + (control.micros()))
}
let thisLine = ""
let comment = ""
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
let sampleRate_ms = 25
let outputMode = 3
let includeTime = 1
comment = "I'm not sure if this way of commenting actually slows down the code significantly! Might be worth testing at some point"
control.inBackground(function () {
    while (true) {
        if (includeTime == 1) {
            thisLine = "" + control.micros() + delimiter
        } else {
            thisLine = ""
        }
        if (outputMode == 0) {
            writeTimeOnly()
        } else if (outputMode == 1) {
            writeAccOnly()
        } else if (outputMode == 2) {
            writeMagOnly()
        } else if (outputMode == 3) {
            writeAccMag()
        } else if (outputMode == 4) {
            writePin()
        } else if (outputMode == 5) {
            writeAccAs2bytes()
        }
        comment = "Now wait until the correct number of microseconds have passed"
        while (control.micros() - loop_time < sampleRate_ms * 1000) {
        	
        }
        loop_time = control.micros()
    }
})
