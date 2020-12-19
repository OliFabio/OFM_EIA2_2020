"use strict";
var L09;
(function (L09) {
    class SnowflakeInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2;
        }
        draw() {
            L09.crc2.beginPath();
            L09.crc2.arc(this.x, this.y, 1.75, 0, 2 * Math.PI);
            L09.crc2.fillStyle = "#ffffff";
            L09.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L09.SnowflakeInfo = SnowflakeInfo;
})(L09 || (L09 = {}));
//# sourceMappingURL=ClassSnowflake.js.map