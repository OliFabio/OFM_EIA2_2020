namespace L10 {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);

    let objects: MovingObjects[] = [];

    let imgData: ImageData;


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");

        crc2 = canvas.getContext("2d");

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


        //Gesetzt Bäume
        for (let i: number = 0; i < 4; i++) {
            drawTree(500 + i * 60, 280);
        }
        //random Bäume
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * 250 + 100;
            let y: number = Math.random() * 90 + 400;
            drawTree(x, y);
        }


        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //––––––––––––––––––Schleifen für Animation–––––––––––––––––––
        //Skifahrer
        for (let i: number = 0; i < 20; i++) {
            let s: SkifahrerInfo = new SkifahrerInfo(Math.random() * 500 + 750, Math.random() * 200 - 25);
            objects.push(s);
        }
        //Schneeflocken
        for (let i: number = 0; i < 5000; i++) {
            let s: SnowflakeInfo = new SnowflakeInfo(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Wolken
        for (let i: number = 0; i < 5; i++) {
            let s: CloudInfo = new CloudInfo(Math.random() * 800, Math.random() * 30 + 40);
            objects.push(s);
        }

        animate();
    }


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




    //––––––––––––––––––––––Animation––––––––––––––––––––––
    function animate(): void {
        console.log("animate");
        crc2.putImageData(imgData, 0, 0);//Hintergrund neu aufbauen


        //moving Objects
        for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }

        window.setTimeout(animate, 15);
        //animate wird alle 10 ms wiederholt
    }
}