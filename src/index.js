"use strict";
exports.__esModule = true;
var os = require("os");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        setInterval(function () {
            console.log(os.loadavg());
        }, 1000);
        return 0;
    };
    return Startup;
}());
Startup.main();
