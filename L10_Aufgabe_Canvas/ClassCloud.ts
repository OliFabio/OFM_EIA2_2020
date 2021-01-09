namespace L10 {

    export class CloudInfo extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }


        move(): void {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
        }



        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "#D7FDFD";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "#D7FDFD";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 10, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#D7FDFD";
            crc2.fill();
        }


    }
}