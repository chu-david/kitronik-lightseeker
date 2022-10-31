let distance = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 20)
basic.pause(10)
basic.forever(function () {
    distance = Kitronik_Move_Motor.measure()
    if (distance >= 5) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(200)
    } else {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 20)
        basic.pause(20)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        basic.pause(100)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
        basic.pause(20)
    }
})
