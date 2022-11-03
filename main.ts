let distance = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    distance = Kitronik_Move_Motor.measure()
    if (distance >= 5) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 25)
        basic.pause(400)
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 20)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 25)
        basic.pause(400)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 25)
        basic.pause(400)
    }
})
