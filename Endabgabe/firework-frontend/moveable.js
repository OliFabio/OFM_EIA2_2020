"use strict";
var firework;
(function (firework) {
    // abstract class for rocket and scatter
    class Moveable {
        constructor(v) {
            this.pos = { x: 0, y: 0 };
            this.vel = { x: 0, y: 0 };
            this.pos = v;
            this.alpha = 1;
        }
        //if not faded and size not <= 1 the object still exists
        exists() {
            return this.alpha >= 0.1 && this.size >= 1;
        }
    }
    firework.Moveable = Moveable;
})(firework || (firework = {}));
//# sourceMappingURL=moveable.js.map