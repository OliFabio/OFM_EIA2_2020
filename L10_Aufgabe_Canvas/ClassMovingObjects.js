"use strict";
var L10;
(function (L10) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("Constructor Moving Objects");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //Inhalt kommt aus den entsprechenden Klassen
        }
        draw() {
            //Inhalt kommt aus den entsprechenden Klassen
        }
    }
    L10.MovingObjects = MovingObjects;
})(L10 || (L10 = {}));
//# sourceMappingURL=ClassMovingObjects.js.map