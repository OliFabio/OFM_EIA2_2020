"use strict";
var L09;
(function (L09) {
    class CloudInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
            console.log("class cloud move");
        }
        draw() {
            L09.crc2.beginPath();
            L09.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            L09.crc2.fillStyle = "#D7FDFD";
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.arc(this.x + 40, this.y, 15, 0, 2 * Math.PI);
            L09.crc2.fillStyle = "#D7FDFD";
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.arc(this.x + 20, this.y - 10, 25, 0, 2 * Math.PI);
            L09.crc2.fillStyle = "#D7FDFD";
            L09.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L09.CloudInfo = CloudInfo;
})(L09 || (L09 = {}));
//# sourceMappingURL=ClassCloud.js.map