"use strict";
var L09;
(function (L09) {
    window.addEventListener("load", init);
    let cloud = [];
    let snowflake = [];
    let skifahrer = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        L09.crc2 = canvas.getContext("2d");
        console.log(L09.crc2);
        //Himmelfarbe
        L09.crc2.fillStyle = "#CBEDFC";
        L09.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        L09.crc2.beginPath();
        L09.crc2.arc(300, 120, 50, 0, 2 * Math.PI);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#FEE87B";
        L09.crc2.fill();
        //Berge + Füllfarbe
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 200);
        L09.crc2.lineTo(150, 0);
        L09.crc2.lineTo(300, 150);
        L09.crc2.lineTo(400, 0);
        L09.crc2.lineTo(480, 85);
        L09.crc2.lineTo(550, 0);
        L09.crc2.lineTo(700, 150);
        L09.crc2.lineTo(750, 0);
        L09.crc2.lineTo(1500, 0);
        L09.crc2.lineTo(1500, 700);
        L09.crc2.lineTo(0, 700);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#C9C8C8";
        L09.crc2.fill();
        //Schatten Berg 1
        L09.crc2.beginPath();
        L09.crc2.moveTo(200, 250);
        L09.crc2.lineTo(150, 0);
        L09.crc2.lineTo(300, 150);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#EFEFEF";
        L09.crc2.fill();
        //Schatten Berg 2
        L09.crc2.beginPath();
        L09.crc2.moveTo(420, 250);
        L09.crc2.lineTo(400, 0);
        L09.crc2.lineTo(480, 85);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#EFEFEF";
        L09.crc2.fill();
        //Schatten Berg 3
        L09.crc2.beginPath();
        L09.crc2.moveTo(560, 60);
        L09.crc2.lineTo(550, 0);
        L09.crc2.lineTo(700, 150);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#EFEFEF";
        L09.crc2.fill();
        //Diagonale+Füllfarbe
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 250);
        L09.crc2.lineTo(700, 0);
        L09.crc2.lineTo(800, 0);
        L09.crc2.lineTo(800, 600);
        L09.crc2.lineTo(0, 600);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#F4FFFF";
        L09.crc2.fill();
        //Lift
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 300);
        L09.crc2.lineTo(680, 0);
        L09.crc2.stroke();
        L09.crc2.beginPath();
        L09.crc2.moveTo(170, 225);
        L09.crc2.lineTo(170, 325);
        L09.crc2.stroke();
        L09.crc2.beginPath();
        L09.crc2.moveTo(340, 150);
        L09.crc2.lineTo(340, 240);
        L09.crc2.stroke();
        L09.crc2.beginPath();
        L09.crc2.moveTo(510, 75);
        L09.crc2.lineTo(510, 150);
        L09.crc2.stroke();
        //Ski Kurve
        L09.crc2.beginPath();
        L09.crc2.bezierCurveTo(750, 0, 850, 25, 750, 50);
        L09.crc2.bezierCurveTo(750, 50, 500, 75, 740, 150);
        L09.crc2.bezierCurveTo(740, 150, 800, 180, 600, 220);
        L09.crc2.bezierCurveTo(600, 220, 0, 310, 500, 400);
        L09.crc2.bezierCurveTo(500, 400, 800, 450, 200, 600);
        L09.crc2.stroke();
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
        imgData = L09.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //––––––––––––––––––Schleifen für Animation–––––––––––––––––––
        //Skifahrer
        for (let i = 0; i < 20; i++) {
            skifahrer[i] = new L09.SkifahrerInfo(Math.random() * 500 + 750, Math.random() * 200 - 25, Math.random() * 1.5 - 3.5, Math.random() * 1 + 1, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            console.log("for Skifahrer init");
        }
        //Schneeflocken
        for (let i = 0; i < 5000; i++) {
            snowflake[i] = new L09.SnowflakeInfo(Math.random() * 800, Math.random() * 600);
            console.log("for Snowflake init");
        }
        //Wolken
        for (let i = 0; i < 5; i++) {
            cloud[i] = new L09.CloudInfo(Math.random() * 800, Math.random() * 30 + 40);
            console.log("for Cloud init");
        }
        animate();
    }
    //Bäume
    function drawTree(_x, _y) {
        L09.crc2.beginPath();
        L09.crc2.moveTo(_x, _y);
        L09.crc2.lineTo(_x + 25, _y + 60);
        L09.crc2.lineTo(_x - 25, _y + 60);
        L09.crc2.closePath();
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#0B8702";
        L09.crc2.fill();
        L09.crc2.fillStyle = "#514400";
        L09.crc2.fillRect(_x - 5, _y + 60, 10, 10);
    }
    //––––––––––––––––––––––Animation––––––––––––––––––––––
    function animate() {
        console.log("animate");
        L09.crc2.putImageData(imgData, 0, 0); //Hintergrund neu aufbauen
        //Schneeflocken
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].update();
        }
        //Wolken vorbeiziehen lassen
        for (let i = 0; i < cloud.length; i++) {
            cloud[i].update();
        }
        //Skifahrer
        for (let i = 0; i < skifahrer.length; i++) {
            skifahrer[i].update();
        }
        window.setTimeout(animate, 15);
        //animate wird alle 10 ms wiederholt
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=canvas.js.map