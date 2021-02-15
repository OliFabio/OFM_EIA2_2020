"use strict";
var firework;
(function (firework) {
    // enums for fixed values
    let Speed;
    (function (Speed) {
        Speed[Speed["SLOW"] = 1] = "SLOW";
        Speed[Speed["MIDDLE"] = 2] = "MIDDLE";
        Speed[Speed["FAST"] = 3] = "FAST";
    })(Speed = firework.Speed || (firework.Speed = {}));
    let ScatterSize;
    (function (ScatterSize) {
        ScatterSize[ScatterSize["SMALL"] = 0.87] = "SMALL";
        ScatterSize[ScatterSize["MEDIUM"] = 0.92] = "MEDIUM";
        ScatterSize[ScatterSize["LARGE"] = 0.96] = "LARGE";
    })(ScatterSize = firework.ScatterSize || (firework.ScatterSize = {}));
    let Color;
    (function (Color) {
        Color[Color["YELLOW"] = 60] = "YELLOW";
        Color[Color["GREEN"] = 120] = "GREEN";
        Color[Color["BLUE"] = 240] = "BLUE";
        Color[Color["RED"] = 0] = "RED";
    })(Color = firework.Color || (firework.Color = {}));
})(firework || (firework = {}));
//# sourceMappingURL=enums.js.map