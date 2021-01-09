"use strict";
var L10;
(function (L10) {
    class SnowflakeInfo extends L10.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2;
        }
        draw() {
            L10.crc2.beginPath();
            L10.crc2.arc(this.x, this.y, 1.75, 0, 2 * Math.PI);
            L10.crc2.fillStyle = "#ffffff";
            L10.crc2.fill();
        }
    }
    L10.SnowflakeInfo = SnowflakeInfo;
})(L10 || (L10 = {}));
//# sourceMappingURL=ClassSnowflake.js.map