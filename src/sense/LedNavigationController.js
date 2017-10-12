"use strict";
exports.__esModule = true;
var sense = require("sense-hat-led");
var senseJoystick = require('sense-joystick');
var colors_1 = require("../constants/colors");
var keys_1 = require("../constants/keys");
var LedNavigationController = (function () {
    function LedNavigationController() {
        this.ledIsActive = false;
        this.colorService = new colors_1.Colors();
        this.x = 0;
        this.y = 0;
        this.xMax = 8;
        this.yMax = 8;
        this.playerColor = [255, 255, 255];
    }
    LedNavigationController.prototype.setLed = function (color) {
        sense.clear(color);
    };
    LedNavigationController.prototype.ResetMatrix = function () {
        this.pixelMatrix = new Array();
        for (var index = 0; index < this.xMax * this.yMax; index++) {
            this.pixelMatrix.push(colors_1.Colors.Off);
        }
    };
    LedNavigationController.prototype.SetCurrentPosition = function (x, y) {
        /*
            Given the following array and coordinates [1,1]
            [
                0, 0, 0, 0,
                0, X, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
            ]

            we need to calcualte the actual position in the one dim array:

            index = x * yMax + y

            Given xMax = 4 and yMax = 4

            index = 1 * 4 + 1 = 5

            Test Cases:
            [0, 0] = 0;
            [3, 3] = 13;
        */
        var index = x * this.xMax + y;
        this.pixelMatrix[index] = this.playerColor;
    };
    LedNavigationController.prototype.boot = function () {
        var _this = this;
        this.ResetMatrix();
        this.SetCurrentPosition(this.x, this.y);
        sense.setPixels(this.pixelMatrix);
        senseJoystick.getJoystick()
            .then(function (joystick) {
            joystick.on('press', function (direction) {
                switch (direction) {
                    case keys_1.Keys.Left:
                        _this.y--;
                        if (_this.y < 0) {
                            _this.y = 0;
                        }
                        break;
                    case keys_1.Keys.Right:
                        _this.y++;
                        if (_this.y > _this.yMax - 1) {
                            _this.y = _this.yMax - 1;
                        }
                        break;
                    case keys_1.Keys.Up:
                        _this.x--;
                        if (_this.x < 0) {
                            _this.x = 0;
                        }
                        break;
                    case keys_1.Keys.Down:
                        _this.x++;
                        if (_this.x > _this.xMax - 1) {
                            _this.x = _this.xMax - 1;
                        }
                        break;
                    case keys_1.Keys.Click:
                        _this.playerColor = _this.colorService.GetRandomColor();
                        break;
                    default:
                        // do nothing
                        break;
                }
                console.log('Got button press in the direction: ', direction);
                console.log("Current X: " + _this.x);
                console.log("Current Y: " + _this.y);
                _this.ResetMatrix();
                _this.SetCurrentPosition(_this.x, _this.y);
                sense.setPixels(_this.pixelMatrix);
            });
        });
    };
    return LedNavigationController;
}());
exports.LedNavigationController = LedNavigationController;
