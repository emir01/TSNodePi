"use strict";
exports.__esModule = true;
var Colors = (function () {
    function Colors() {
    }
    Colors.prototype.GetRandomColor = function () {
        var color = [this.getRandomInRange(0, 255), this.getRandomInRange(0, 255), this.getRandomInRange(0, 255)];
        console.log(color);
        return color;
    };
    Colors.prototype.getRandomInRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Colors.White = [255, 255, 255];
    Colors.Off = [0, 0, 0];
    return Colors;
}());
exports.Colors = Colors;
