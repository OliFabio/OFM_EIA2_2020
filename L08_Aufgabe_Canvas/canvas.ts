namespace L08 {
    window.addEventListener("load", init);
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        console.log(crc2);

        //Sonne
        crc2.beginPath();
        crc2.arc(300, 120, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();

        //Himmelfarbe
        crc2.fillStyle = "#CBEDFC";
        crc2.fillRect(0, 0, 800, 600);

        //Sonne
        crc2.beginPath();
        crc2.arc(300, 120, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEE87B";
        crc2.fill();

        //Berge + Füllfarbe
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(150, 0);
        crc2.lineTo(300, 150);
        crc2.lineTo(400, 0);
        crc2.lineTo(480, 85);
        crc2.lineTo(550, 0);
        crc2.lineTo(700, 150);
        crc2.lineTo(750, 0);
        crc2.lineTo(1500, 0);
        crc2.lineTo(1500, 700);
        crc2.lineTo(0, 700);
        crc2.stroke();
        crc2.fillStyle = "#C9C8C8";
        crc2.fill();

        //Schatten Berg 1
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.lineTo(150, 0);
        crc2.lineTo(300, 150);
        crc2.stroke();
        crc2.fillStyle = "#EFEFEF";
        crc2.fill();

        //Schatten Berg 2
        crc2.beginPath();
        crc2.moveTo(420, 250);
        crc2.lineTo(400, 0);
        crc2.lineTo(480, 85);
        crc2.stroke();
        crc2.fillStyle = "#EFEFEF";
        crc2.fill();

        //Schatten Berg 3
        crc2.beginPath();
        crc2.moveTo(560, 60);
        crc2.lineTo(550, 0);
        crc2.lineTo(700, 150);
        crc2.stroke();
        crc2.fillStyle = "#EFEFEF";
        crc2.fill();


        //Diagonale+Füllfarbe
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(700, 0);
        crc2.lineTo(800, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.stroke();
        crc2.fillStyle = "#F4FFFF";
        crc2.fill();

        //Lift
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(680, 0);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(170, 225);
        crc2.lineTo(170, 325);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(340, 150);
        crc2.lineTo(340, 240);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(510, 75);
        crc2.lineTo(510, 150);
        crc2.stroke();

        //Ski Kurve
        crc2.beginPath();
        crc2.bezierCurveTo(750, 0, 850, 25, 750, 50);
        crc2.bezierCurveTo(750, 50, 500, 75, 740, 150);
        crc2.bezierCurveTo(740, 150, 800, 180, 600, 220);
        crc2.bezierCurveTo(600, 220, 0, 310, 500, 400);
        crc2.bezierCurveTo(500, 400, 800, 450, 200, 600);
        crc2.stroke();
        /*
        
         //Schneeflocke
        crc2.beginPath();
        crc2.arc(300,120, 2, 0, 2*Math.PI);
        crc2.fillStyle="#FFFFFF";
        crc2.fill(); */



        //Bäume
        function drawTree(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 25, _y + 60);
            crc2.lineTo(_x - 25, _y + 60);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#0B8702";
            crc2.fill();
            crc2.fillStyle = "#514400";
            crc2.fillRect(_x - 5, _y + 60, 10, 10);
        }
        //Gesetzt
        for (let i: number = 0; i < 4; i++) {
            drawTree(500 + i * 60, 280);
        }
        //random
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * 300 + 50;
            let y: number = Math.random() * 140 + 350;
            drawTree(x, y);
        }

        //Schneeflocken
        function drawSnowflake(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }


        for (let i: number = 0; i < 5000; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;
            drawSnowflake(x, y);
        }



    }

}