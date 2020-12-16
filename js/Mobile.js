class Mobile extends Phaser.Scene{
    constructor(){
        super("Mobile");
    }

    create(){

        game.resize(650,1000);

        this.add.image(325, 825, "fondoMobile");

        flechaUP = this.add.sprite(175, 775, "flechaUP").setScale(3).setInteractive()
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

        flechaUP2 = this.add.sprite(175, 775, "flechaUP2").setScale(3).setVisible(false);

        flechaDOWN = this.add.sprite(175, 875, "flechaDOWN").setScale(3).setInteractive()
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

        flechaDOWN2 = this.add.sprite(175, 875, "flechaDOWN2").setScale(3).setVisible(false);

        flechaLEFT = this.add.sprite(125, 825, "flechaLEFT").setScale(3).setInteractive()
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

        flechaLEFT2 = this.add.sprite(125, 825, "flechaLEFT2").setScale(3).setVisible(false);

        flechaRIGHT = this.add.sprite(225, 825, "flechaRIGHT").setScale(3).setInteractive()
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

        flechaRIGHT2 = this.add.sprite(225, 825, "flechaRIGHT2").setScale(3).setVisible(false);

        botonSHOOT = this.add.sprite(475, 825, "botonDisparo").setScale(3).setInteractive()
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

        botonSHOOT2 = this.add.sprite(475, 825, "botonDisparo2").setScale(3).setVisible(false);
    }
}