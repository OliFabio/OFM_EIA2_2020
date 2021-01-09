"use strict";
var L10;
(function (L10) {
    class SkifahrerInfo extends L10.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 1.5 - 3.5;
            this.dy = Math.random() * 1 + 1;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        move() {
            if (this.x < 0 || this.y > 600) {
                this.x = Math.random() * 200 + 800;
                this.y = Math.random() * 100;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            L10.crc2.fillStyle = this.color;
            L10.crc2.fillRect(this.x, this.y, 9, -25);
            L10.crc2.beginPath();
            L10.crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            L10.crc2.fillStyle = this.color;
            L10.crc2.fill();
            L10.crc2.fillStyle = this.color;
            L10.crc2.beginPath();
            L10.crc2.moveTo(this.x + 20, this.y - 4);
            L10.crc2.lineTo(this.x - 20, this.y + 4);
            L10.crc2.stroke();
        }
    }
    L10.SkifahrerInfo = SkifahrerInfo;
})(L10 || (L10 = {}));
//# sourceMappingURL=ClassSkifahrer.js.map