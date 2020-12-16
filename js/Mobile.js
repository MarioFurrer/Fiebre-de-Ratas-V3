class Mobile extends Phaser.Scene{
    constructor(){
        super("Mobile");
    }

    create(){

        game.resize(650,1000);

        this.add.image(325, 825, "fondoMobile");

        flechaUP = this.add.sprite(175, 765, "flechaUP").setScale(5).setInteractive()
        .on("pointerout", () => {
            flechaUP2.setVisible(false);
        })
        .on("pointerdown", () => {
            flechaUP2.setVisible(true);
            personaje.angle = 90;
        })
        .on("pointerup", () => {
            flechaUP2.setVisible(false);
        });

        flechaUP2 = this.add.sprite(175, 765, "flechaUP2").setScale(5).setVisible(false);

        flechaDOWN = this.add.sprite(175, 885, "flechaDOWN").setScale(5).setInteractive()
        .on("pointerout", () => {
            flechaDOWN2.setVisible(false);
        })
        .on("pointerdown", () => {
            flechaDOWN2.setVisible(true);
            personaje.angle = -90;
        })
        .on("pointerup", () => {
            flechaDOWN2.setVisible(false);
        });

        flechaDOWN2 = this.add.sprite(175, 885, "flechaDOWN2").setScale(5).setVisible(false);

        flechaLEFT = this.add.sprite(115, 825, "flechaLEFT").setScale(5).setInteractive()
        .on("pointerout", () => {
            flechaLEFT2.setVisible(false);
        })
        .on("pointerdown", () => {
            flechaLEFT2.setVisible(true);
            personaje.angle = 0;
        })
        .on("pointerup", () => {
            flechaLEFT2.setVisible(false);
        });

        flechaLEFT2 = this.add.sprite(115, 825, "flechaLEFT2").setScale(5).setVisible(false);

        flechaRIGHT = this.add.sprite(235, 825, "flechaRIGHT").setScale(5).setInteractive()
        .on("pointerout", () => {
            flechaRIGHT2.setVisible(false);
        })
        .on("pointerdown", () => {
            flechaRIGHT2.setVisible(true);
            personaje.angle = 179;
        })
        .on("pointerup", () => {
            flechaRIGHT2.setVisible(false);
        });

        flechaRIGHT2 = this.add.sprite(235, 825, "flechaRIGHT2").setScale(5).setVisible(false);

        botonSHOOT = this.add.sprite(475, 825, "botonDisparo").setScale(5).setInteractive()
        .on("pointerout", () => {
            botonSHOOT2.setVisible(false);
        })
        .on("pointerdown", () => {
            botonSHOOT2.setVisible(true);
            buttonDown = true;
        })
        .on("pointerup", () => {
            botonSHOOT2.setVisible(false);
            buttonDown = false;
        });

        botonSHOOT2 = this.add.sprite(475, 825, "botonDisparo2").setScale(5).setVisible(false);
    }
}