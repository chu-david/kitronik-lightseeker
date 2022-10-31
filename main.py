distance = 0
Kitronik_Move_Motor.set_ultrasonic_units(Kitronik_Move_Motor.Units.CENTIMETERS)
Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.RIGHT, 20)
basic.pause(10)

def on_forever():
    global distance
    distance = Kitronik_Move_Motor.measure()
    if distance >= 5:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 20)
        basic.pause(200)
    else:
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.RIGHT, 20)
        basic.pause(20)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 20)
        basic.pause(20)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 20)
        basic.pause(20)
basic.forever(on_forever)
