class SeleccionLvL extends Phaser.Scene{
    constructor(){
        super("SeleccionLvL");
    }

    create(){

        this.add.image(325, 325, "Fondo");

        this.add.image(325, 325, "cartel").setScale(2);

        if(language == 0){
            this.add.bitmapText(170, 80, "pixelFont", 'Seleccion de nivel', 50);
        }
      
        if(language == 1){
            this.add.bitmapText(200, 80, "pixelFont", 'Level selection', 50);
        }
      
        if(language == 2){
            this.add.bitmapText(180, 80, "pixelFont", 'Selecao de nivel', 50);
        }

        this.add.image(225, 200, "Escena1D").setScale(.2).setInteractive()
        .on("pointerover", () => {
            lvl1.setVisible(true);
        })
        .on("pointerout", () => {
            lvl1.setVisible(false);
        })
        .on("pointerdown", () => {
            lvl1.setVisible(true);
        })
        .on("pointerup", () => {
            this.scene.start("Nivel1");
            this.scene.stop('SeleccionLvL');
            sonidoBoton.play();
        });
        var lvl1 = this.add.sprite(225, 200, "Escena1D2").setScale(.2).setVisible(false);

        this.add.image(425, 200, "Escena1N").setScale(.2).setInteractive()
        .on("pointerover", () => {
            lvl2.setVisible(true);
        })
        .on("pointerout", () => {
            lvl2.setVisible(false);
        })
        .on("pointerdown", () => {
            lvl2.setVisible(true);
        })
        .on("pointerup", () => {
            this.scene.start("Nivel2");
            this.scene.stop('SeleccionLvL');
            sonidoBoton.play();
        });
        var lvl2 = this.add.sprite(425, 200, "Escena1N2").setScale(.2).setVisible(false);

        this.add.image(225, 350, "Escena2D").setScale(.2).setInteractive()
        .on("pointerover", () => {
            lvl3.setVisible(true);
        })
        .on("pointerout", () => {
            lvl3.setVisible(false);
        })
        .on("pointerdown", () => {
            lvl3.setVisible(true);
        })
        .on("pointerup", () => {
            this.scene.start("Nivel3");
            this.scene.stop('SeleccionLvL');
            sonidoBoton.play();
        });
        var lvl3 = this.add.sprite(225, 350, "Escena2D2").setScale(.2).setVisible(false);

        this.add.image(425, 350, "Escena2N").setScale(.2).setInteractive()
        .on("pointerover", () => {
            lvl4.setVisible(true);
        })
        .on("pointerout", () => {
            lvl4.setVisible(false);
        })
        .on("pointerdown", () => {
            lvl4.setVisible(true);
        })
        .on("pointerup", () => {
            this.scene.start("Nivel4");
            this.scene.stop('SeleccionLvL');
            sonidoBoton.play();
        });
        var lvl4 = this.add.sprite(425, 350, "Escena2N2").setScale(.2).setVisible(false);

        this.add.image(225, 500, "Escena3D").setScale(.2).setInteractive()
        .on("pointerover", () => {
            lvl5.setVisible(true);
        })
        .on("pointerout", () => {
            lvl5.setVisible(false);
        })
        .on("pointerdown", () => {
            lvl5.setVisible(true);
        })
        .on("pointerup", () => {
            this.scene.start("Nivel5");
            this.scene.stop('SeleccionLvL');
            sonidoBoton.play();
        });
        var lvl5 = this.add.sprite(225, 500, "Escena3D2").setScale(.2).setVisible(false);

        this.add.image(425, 500, "Escena3N").setScale(.2).setInteractive()
        .on("pointerover", () => {
            lvl6.setVisible(true);
        })
        .on("pointerout", () => {
            lvl6.setVisible(false);
        })
        .on("pointerdown", () => {
            lvl6.setVisible(true);
        })
        .on("pointerup", () => {
            this.scene.start("Nivel6");
            this.scene.stop('SeleccionLvL');
            sonidoBoton.play();
        });
        var lvl6 = this.add.sprite(425, 500, "Escena3N2").setScale(.2).setVisible(false);

        this.add.bitmapText(217, 183, "pixelFont", '1', 70);
        this.add.bitmapText(415, 183, "pixelFont", '2', 70);
        this.add.bitmapText(215, 333, "pixelFont", '3', 70);
        this.add.bitmapText(415, 333, "pixelFont", '4', 70);
        this.add.bitmapText(215, 483, "pixelFont", '5', 70);
        this.add.bitmapText(415, 483, "pixelFont", '6', 70);

        menuButton = this.add.sprite(35, 35, "Menu").setScale(1.5).setInteractive()
        .on("pointerover", () => {
            menuButton2.setVisible(true);
        })
        .on("pointerout", () => {
            menuButton2.setVisible(false);
        })
        .on("pointerdown", () => {
            menuButton2.setVisible(true);
        })
        .on("pointerup", () => {
            sonidoBoton.play();
            this.scene.start("Menu");
            this.scene.stop("Creditos");
        });

        menuButton2 = this.add.sprite(35, 35, "Menu2").setScale(1.5).setVisible(false);
    }
}