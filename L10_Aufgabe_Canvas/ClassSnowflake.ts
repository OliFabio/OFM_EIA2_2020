namespace L10 {

    export class SnowflakeInfo extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }


        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2;
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 1.75, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }


    }
}