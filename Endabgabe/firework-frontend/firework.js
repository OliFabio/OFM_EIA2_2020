"use strict";
var firework;
(function (firework) {
    //all rockets
    let rockets = [];
    //all rocketobjects
    let allRockets = [];
    firework.allScatters = [];
    // dom elements for typescript 
    let addButton;
    let testButton;
    let rocketName;
    let colorSlider;
    let secondColorSlider;
    let sizeSlider;
    let speedSlider;
    let colorOutput;
    let secondColorOutput;
    let sizeOutput;
    let speedOutput;
    let rocketTable;
    // server calls
    let client;
    // first add event page load
    window.addEventListener("load", onPageLoad);
    function onPageLoad() {
        // create new client 
        client = new firework.Client();
        //initalize dom elements
        colorSlider = document.getElementById("colorSlider");
        secondColorSlider = document.getElementById("secondColorSlider");
        rocketName = document.getElementById("rocketName");
        speedSlider = document.getElementById("speedSlider");
        sizeSlider = document.getElementById("sizeSlider");
        colorOutput = document.getElementById("colorOutput");
        colorOutput.innerHTML = colorSlider.value;
        secondColorOutput = document.getElementById("secondColorOutput");
        secondColorOutput.innerHTML = secondColorSlider.value;
        sizeOutput = document.getElementById("sizeOutput");
        sizeOutput.innerHTML = sizeSlider.value;
        speedOutput = document.getElementById("speedOutput");
        speedOutput.innerHTML = speedSlider.value;
        rocketTable = document.getElementById("rocketBody");
        // show values in html
        colorSlider.oninput = function (event) {
            let target = event.target;
            colorOutput.innerHTML = target.value;
        };
        // show values in html
        secondColorSlider.oninput = function (event) {
            let target = event.target;
            secondColorOutput.innerHTML = target.value;
        };
        // show values in html
        speedSlider.oninput = function (event) {
            let target = event.target;
            speedOutput.innerHTML = target.value;
        };
        // show values in html
        sizeSlider.oninput = function (event) {
            let target = event.target;
            sizeOutput.innerHTML = target.value;
        };
        //buttons
        addButton = document.getElementById("addRocket");
        testButton = document.getElementById("testRocket");
        firework.canvas = document.getElementById("canvas");
        //dont do anything if no canvas available
        if (!firework.canvas)
            return;
        //add click events
        firework.canvas.addEventListener("mousedown", launchRockets);
        addButton.addEventListener("click", postRocket);
        testButton.addEventListener("click", testRocket);
        firework.crc2 = firework.canvas.getContext("2d");
        //add inital canvas style
        firework.canvas.style.width = "100%";
        firework.canvas.style.height = "100%";
        // ...then set the internal size to match
        firework.canvas.width = firework.canvas.offsetWidth;
        firework.canvas.height = firework.canvas.offsetHeight;
        //set the background from canvas
        setBackground();
        // get on page load all rocket from database
        getAllRockets();
        //start the gameloop
        setInterval(gameLoop, 16);
    }
    function launchRockets(event) {
        //generate a x position where the rockets start
        for (let i = 0; i < allRockets.length; i++) {
            launchFrom(Math.random() * firework.canvas.width * 2 / 3 + firework.canvas.width / 6, allRockets[i]);
        }
    }
    // get the values from html and create new rocketobject and pass it to other function
    function testRocket() {
        let testRocket = {
            name: rocketName.value,
            color: Number.parseInt(colorSlider.value),
            secondColor: Number.parseInt(secondColorSlider.value),
            size: Number.parseFloat(sizeSlider.value),
            speed: Number.parseInt(speedSlider.value)
        };
        launchFrom(Math.random() * firework.canvas.width * 2 / 3 + firework.canvas.width / 6, testRocket);
    }
    // test the saved object and launch them
    function testSavedRocket(rocketobject) {
        launchFrom(Math.random() * firework.canvas.width * 2 / 3 + firework.canvas.width / 6, rocketobject);
    }
    function testSelectedRocket(event) {
        // get the clicked element
        let target = event.currentTarget;
        //get the index, which row is clicked
        //2
        let index = Number.parseInt(target.getAttribute("data-index"));
        //get the rocket at index from rockets list
        let selectedRocket = allRockets[index];
        //test it
        testSavedRocket(selectedRocket);
    }
    async function deleteSelectedRocket(event) {
        // get the clicked element
        let target = event.currentTarget;
        //get the index, which row is clicked
        let index = Number.parseInt(target.getAttribute("data-index"));
        //get the rocket at index from rockets list
        let selectedRocket = allRockets[index];
        // delete the rocket from the rockets list
        await client.deleteRocket(selectedRocket._id);
        // refresh rockets, since its deleted
        getAllRockets();
    }
    // launch rocket from position x and add new rocket instances by passing rocketobject
    function launchFrom(posX, rocketObj) {
        // set the position of the rocket
        let pos = { x: posX, y: firework.canvas.height };
        // create new rocket instance
        let rocket = new firework.Rocket(pos, rocketObj);
        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 3 - 3;
        rockets.push(rocket);
    }
    function gameLoop() {
        setBackground();
        let queueRockets = [];
        for (var i = 0; i < rockets.length; i++) {
            // update and render
            rockets[i].animate();
            //explode in the upper 80% of screen
            if (rockets[i].pos.y < firework.canvas.height * 0.2) {
                firework.allScatters.push(...rockets[i].createScatter());
                // if the condition does not met, than queue the rockets
            }
            else {
                queueRockets.push(rockets[i]);
            }
        }
        rockets = queueRockets;
        //explosion
        for (var i = 0; i < firework.allScatters.length; i++) {
            firework.allScatters[i].animate();
            ;
        }
    }
    // get all rockets from server
    async function getAllRockets() {
        allRockets = await client.getAllRockets();
        printRockets();
    }
    //print all rockets
    function printRockets() {
        let rows = allRockets;
        //how many columns a row has
        var cols = ["_id", "name", "size", "color", "secondColor", "speed"];
        var headerRow = "";
        var bodyRows = "";
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            //create for each rocket a tr table row
            bodyRows += "<tr>";
            //cols = ["name", "siuze", "color"...]
            for (let j = 0; j < cols.length; j++) {
                let colName = cols[j];
                //add the elements row[colName] = id value, name value, etc.
                bodyRows += "<td>" + row[colName] + "</td>";
            }
            // add the action buttons after each row
            bodyRows += `<td>
      <a class="edit" data-index="${i}" title="Select" data-toggle="tooltip"><i class="fa fa-check"></i></a>
      <a class="delete"  data-index="${i}" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
      </td>`;
            // close the table row
            bodyRows += "</tr>";
        }
        rocketTable.innerHTML = bodyRows;
        let editElements = document.getElementsByClassName("edit");
        for (let i = 0; i < editElements.length; i++) {
            editElements[i].addEventListener("click", testSelectedRocket);
        }
        let deleteElements = document.getElementsByClassName("delete");
        for (let i = 0; i < deleteElements.length; i++) {
            deleteElements[i].addEventListener("click", deleteSelectedRocket);
        }
    }
    async function postRocket() {
        let testRocket = {
            name: rocketName.value,
            color: Number.parseInt(colorSlider.value),
            secondColor: Number.parseInt(secondColorSlider.value),
            size: Number.parseFloat(sizeSlider.value),
            speed: Number.parseInt(speedSlider.value)
        };
        let posted = await client.postRocket(testRocket);
        allRockets = await client.getAllRockets();
        getAllRockets();
        console.log(posted);
        return posted;
    }
    function setBackground() {
        firework.crc2.save();
        firework.crc2.fillStyle = "rgba(0, 0, 0, 0.15)";
        firework.crc2.fillRect(0, 0, firework.canvas.width, firework.canvas.height);
        var text = "Welcome!";
        firework.crc2.textAlign = "center";
        firework.crc2.fillStyle = "red";
        firework.crc2.font = "30px Comic Sans MS";
        firework.crc2.fillText(text, firework.canvas.width / 2, firework.canvas.height / 4);
    }
})(firework || (firework = {}));
//# sourceMappingURL=firework.js.map