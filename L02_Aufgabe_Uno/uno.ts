namespace unogame {
    interface Card {
        color: string;
        value: string;
    }

    let w1: Card = {
        color: "black",
        value: "Colourselect"
    };

    let w2: Card = {
        color: "black",
        value: "Colourselect"
    };

    let w3: Card = {
        color: "black",
        value: "Colourselect"
    };

    let w4: Card = {
        color: "black",
        value: "Colourselect"
    };

    //+4 JOKER
    let j1: Card = {
        color: "black",
        value: "+4"
    };

    let j2: Card = {
        color: "black",
        value: "+4"
    };

    let j3: Card = {
        color: "black",
        value: "+4"
    };

    let j4: Card = {
        color: "black",
        value: "+4"
    };

    let zeroR: Card = {
        color: "Red",
        value: "0"
    };

    let zeroB: Card = {
        color: "Blue",
        value: "0"
    };

    let zeroY: Card = {
        color: "Yellow",
        value: "0"
    };

    let zeroG: Card = {
        color: "Green",
        value: "0"
    };

    let colors: string[] = ["Red", "Blue", "Yellow", "Green"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "RW"];
    var handCards: Card[] = [];
    var deck: Card[] = [w1, w2, w3, w4, j1, j2, j3, j4, zeroR, zeroB, zeroY, zeroG];


    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                var card: Card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }
    
    var userInput: string = prompt("Wie viele Karten sollen gespielt werden?");
    var counter: number = Number(userInput);

    function randomCards(amount: number = counter): void {
        for (let i: number = amount; i > 0; i--) {
            let rCard: number = Math.floor(Math.random() * (deck.length - 1));
            handCards.push(deck[rCard]);
            deck.splice(rCard, 1);
        }
    }

    function displayCards(): void {
        for (let i: number = 0; i < handCards.length; i++) {
            let x: HTMLElement = document.createElement("div");
            x.innerText = handCards[i].value;
            x.classList.add("card");
            x.classList.add(handCards[i].color);
            document.getElementById("HandCards").appendChild(x);
        }
    }

    randomCards();
    displayCards();
    console.log(card);
}