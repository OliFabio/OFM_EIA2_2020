namespace L10 {
    export class MovingObjects {
        x: number; //Position x-Achse
        y: number; //Position y-Achse

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            console.log("Constructor Moving Objects");
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //Inhalt kommt aus den entsprechenden Klassen
        }

        draw(): void {
            //Inhalt kommt aus den entsprechenden Klassen
        }


    }
}