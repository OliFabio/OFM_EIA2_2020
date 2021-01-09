"use strict";
var L10;
(function (L10) {
    window.addEventListener("load", init);
    let objects = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        L10.crc2 = canvas.getContext("2d");
        //Himmelfarbe
        L10.crc2.fillStyle = "#CBEDFC";
        L10.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        L10.crc2.beginPath();
        L10.crc2.arc(300, 120, 50, 0, 2 * Math.PI);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#FEE87B";
        L10.crc2.fill();
        //Berge + Füllfarbe
        L10.crc2.beginPath();
        L10.crc2.moveTo(0, 200);
        L10.crc2.lineTo(150, 0);
        L10.crc2.lineTo(300, 150);
        L10.crc2.lineTo(400, 0);
        L10.crc2.lineTo(480, 85);
        L10.crc2.lineTo(550, 0);
        L10.crc2.lineTo(700, 150);
        L10.crc2.lineTo(750, 0);
        L10.crc2.lineTo(1500, 0);
        L10.crc2.lineTo(1500, 700);
        L10.crc2.lineTo(0, 700);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#C9C8C8";
        L10.crc2.fill();
        //Schatten Berg 1
        L10.crc2.beginPath();
        L10.crc2.moveTo(200, 250);
        L10.crc2.lineTo(150, 0);
        L10.crc2.lineTo(300, 150);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#EFEFEF";
        L10.crc2.fill();
        //Schatten Berg 2
        L10.crc2.beginPath();
        L10.crc2.moveTo(420, 250);
        L10.crc2.lineTo(400, 0);
        L10.crc2.lineTo(480, 85);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#EFEFEF";
        L10.crc2.fill();
        //Schatten Berg 3
        L10.crc2.beginPath();
        L10.crc2.moveTo(560, 60);
        L10.crc2.lineTo(550, 0);
        L10.crc2.lineTo(700, 150);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#EFEFEF";
        L10.crc2.fill();
        //Diagonale+Füllfarbe
        L10.crc2.beginPath();
        L10.crc2.moveTo(0, 250);
        L10.crc2.lineTo(700, 0);
        L10.crc2.lineTo(800, 0);
        L10.crc2.lineTo(800, 600);
        L10.crc2.lineTo(0, 600);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#F4FFFF";
        L10.crc2.fill();
        //Lift
        L10.crc2.beginPath();
        L10.crc2.moveTo(0, 300);
        L10.crc2.lineTo(680, 0);
        L10.crc2.stroke();
        L10.crc2.beginPath();
        L10.crc2.moveTo(170, 225);
        L10.crc2.lineTo(170, 325);
        L10.crc2.stroke();
        L10.crc2.beginPath();
        L10.crc2.moveTo(340, 150);
        L10.crc2.lineTo(340, 240);
        L10.crc2.stroke();
        L10.crc2.beginPath();
        L10.crc2.moveTo(510, 75);
        L10.crc2.lineTo(510, 150);
        L10.crc2.stroke();
        //Ski Kurve
        L10.crc2.beginPath();
        L10.crc2.bezierCurveTo(750, 0, 850, 25, 750, 50);
        L10.crc2.bezierCurveTo(750, 50, 500, 75, 740, 150);
        L10.crc2.bezierCurveTo(740, 150, 800, 180, 600, 220);
        L10.crc2.bezierCurveTo(600, 220, 0, 310, 500, 400);
        L10.crc2.bezierCurveTo(500, 400, 800, 450, 200, 600);
        L10.crc2.stroke();
        //Gesetzt Bäume
        for (let i = 0; i < 4; i++) {
            drawTree(500 + i * 60, 280);
        }
        //random Bäume
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 250 + 100;
            let y = Math.random() * 90 + 400;
            drawTree(x, y);
        }
        //Hintergrund speichern
        imgData = L10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //––––––––––––––––––Schleifen für Animation–––––––––––––––––––
        //Skifahrer
        for (let i = 0; i < 20; i++) {
            let s = new L10.SkifahrerInfo(Math.random() * 500 + 750, Math.random() * 200 - 25);
            objects.push(s);
        }
        //Schneeflocken
        for (let i = 0; i < 5000; i++) {
            let s = new L10.SnowflakeInfo(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Wolken
        for (let i = 0; i < 5; i++) {
            let s = new L10.CloudInfo(Math.random() * 800, Math.random() * 30 + 40);
            objects.push(s);
        }
        animate();
    }
    //Bäume
    function drawTree(_x, _y) {
        L10.crc2.beginPath();
        L10.crc2.moveTo(_x, _y);
        L10.crc2.lineTo(_x + 25, _y + 60);
        L10.crc2.lineTo(_x - 25, _y + 60);
        L10.crc2.closePath();
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#0B8702";
        L10.crc2.fill();
        L10.crc2.fillStyle = "#514400";
        L10.crc2.fillRect(_x - 5, _y + 60, 10, 10);
    }
    //––––––––––––––––––––––Animation––––––––––––––––––––––
    function animate() {
        console.log("animate");
        L10.crc2.putImageData(imgData, 0, 0); //Hintergrund neu aufbauen
        //moving Objects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 15);
        //animate wird alle 10 ms wiederholt
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=canvas.js.map