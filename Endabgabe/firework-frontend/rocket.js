"use strict";
/// <reference path="scatter.ts" />
var firework;
(function (firework) {
    class Rocket extends firework.Moveable {
        constructor(v, rocketObj) {
            super(v);
            this.MAX_EXPLOSION = 100;
            this.MIN_EXPLOSION = 50;
            this.size = 4;
            this.scatterSize = rocketObj.size;
            this.speed = rocketObj.speed;
            this.color = rocketObj.color;
            this.secondColor = rocketObj.secondColor;
            this.scatters_ = [];
        }
        update() {
            // update position based on speed
            this.pos.x += this.vel.x * 1.5;
            this.pos.y += this.vel.y * this.speed;
        }
        draw() {
            //dont render if object does not exist anymore
            if (!this.exists()) {
                return;
            }
            let x = this.pos.x, y = this.pos.y, r = this.size;
            // create gradient color
            var gradient = firework.crc2.createRadialGradient(x, y, 0.1, x, y, r);
            gradient.addColorStop(0.1, "rgba(255, 255, 0 ," + this.alpha + ")");
            gradient.addColorStop(1, "rgba(255, 0, 0, " + this.alpha + ")");
            firework.crc2.fillStyle = gradient;
            firework.crc2.beginPath();
            // circle = rocket body
            firework.crc2.arc(x, y, this.size, 0, Math.PI * 2, true);
            firework.crc2.closePath();
            firework.crc2.fill();
            firework.crc2.restore();
        }
        createScatter() {
            //scatter amount random between max and min amount
            let count = Math.random() * this.MAX_EXPLOSION + this.MIN_EXPLOSION;
            //generate scatter objects for each rocket 
            for (let i = 0; i < count; i++) {
                let scatter = new firework.Scatter(this.pos);
                // area to fill the maximum angle
                let angle = Math.random() * Math.PI * 2;
                // emulate 3D effect by using cosine and put more particles in the middle
                let speed = Math.sin(Math.random() * Math.PI / 2) * 15;
                // initialize scatter objects
                scatter.vel.x = Math.cos(angle) * speed;
                scatter.vel.y = Math.sin(angle) * speed;
                scatter.size = 4;
                scatter.resistance = this.scatterSize;
                scatter.color = this.color;
                scatter.secondColor = this.secondColor;
                //get rockets scatter
                this.scatters_.push(scatter);
            }
            return this.scatters_;
        }
        // call both 
        animate() {
            this.update();
            this.draw();
        }
    }
    firework.Rocket = Rocket;
})(firework || (firework = {}));
//# sourceMappingURL=rocket.js.map