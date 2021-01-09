"use strict";
var L10;
(function (L10) {
    class CloudInfo extends L10.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
        }
        draw() {
            L10.crc2.beginPath();
            L10.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            L10.crc2.fillStyle = "#D7FDFD";
            L10.crc2.fill();
            L10.crc2.beginPath();
            L10.crc2.arc(this.x + 40, this.y, 15, 0, 2 * Math.PI);
            L10.crc2.fillStyle = "#D7FDFD";
            L10.crc2.fill();
            L10.crc2.beginPath();
            L10.crc2.arc(this.x + 20, this.y - 10, 25, 0, 2 * Math.PI);
            L10.crc2.fillStyle = "#D7FDFD";
            L10.crc2.fill();
        }
    }
    L10.CloudInfo = CloudInfo;
})(L10 || (L10 = {}));
//# sourceMappingURL=ClassCloud.js.map