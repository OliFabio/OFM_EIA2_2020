"use strict";
var L09;
(function (L09) {
    class SkifahrerInfo {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
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
            L09.crc2.fillStyle = this.color;
            L09.crc2.fillRect(this.x, this.y, 9, -25);
            L09.crc2.beginPath();
            L09.crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            L09.crc2.fillStyle = this.color;
            L09.crc2.fill();
            L09.crc2.fillStyle = this.color;
            L09.crc2.beginPath();
            L09.crc2.moveTo(this.x + 20, this.y - 4);
            L09.crc2.lineTo(this.x - 20, this.y + 4);
            L09.crc2.stroke();
        }
        update() {
            console.log("move Skifahrer.ts");
            this.move();
            this.draw();
        }
    }
    L09.SkifahrerInfo = SkifahrerInfo;
})(L09 || (L09 = {}));
//# sourceMappingURL=ClassSkifahrer.js.map