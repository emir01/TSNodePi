"use strict";
exports.__esModule = true;
var sense = require("sense-hat-led");
var senseJoystick = require('sense-joystick');
var colors_1 = require("../constants/colors");
var directions_1 = require("../constants/directions");
var LedRandomController = (function () {
    function LedRandomController() {
        this.ledIsActive = false;
        this.colorService = new colors_1.Colors();
    }
    LedRandomController.prototype.setLed = function (color) {
        sense.clear(color);
    };
    LedRandomController.prototype.boot = function () {
        var _this = this;
        senseJoystick.getJoystick()
            .then(function (joystick) {
            joystick.on('press', function (direction) {
                console.log('Got button press in the direction: ', direction);
                switch (direction) {
                    case directions_1.Directions.Up:
                        _this.ledIsActive = true;
                        _this.setLed(_this.colorService.GetRandomColor());
                        break;
                    case directions_1.Directions.Down:
                        _this.ledIsActive = false;
                        _this.setLed(colors_1.Colors.Off);
                        break;
                    case directions_1.Directions.Left:
                        if (_this.ledIsActive) {
                            _this.setLed(_this.colorService.GetRandomColor());
                        }
                        break;
                    case directions_1.Directions.Right:
                        if (_this.ledIsActive) {
                            _this.setLed(_this.colorService.GetRandomColor());
                        }
                        break;
                    default:
                        _this.ledIsActive = false;
                        _this.setLed(colors_1.Colors.Off);
                        break;
                }
            });
        });
    };
    return LedRandomController;
}());
exports.LedRandomController = LedRandomController;
