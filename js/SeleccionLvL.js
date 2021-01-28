class SeleccionLvL extends Phaser.Scene{
    constructor(){
        super("SeleccionLvL");
    }

    create(){

        if(plataforma == 0){

            this.add.image(325, 325, "Fondo");

            this.add.image(325, 325, "cartel").setScale(2);

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
                this.scene.stop("SeleccionLvL");
            });

            menuButton2 = this.add.sprite(35, 35, "Menu2").setScale(1.5).setVisible(false);

            botonSonido = this.add.sprite(615, 35, "botonSonido").setScale(1.5).setInteractive()
            .on("pointerover", () => {
                botonSonido2.setVisible(true);
            })
            .on("pointerout", () => {
                botonSonido2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonSonido2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                game.sound.mute = false;
            });

            botonSonido2 = this.add.sprite(615, 35, "botonSonido2").setScale(1.5).setVisible(false);

            botonMute = this.add.sprite(615, 35, "botonMute").setScale(1.5).setInteractive()
            .on("pointerover", () => {
                botonMute2.setVisible(true);
            })
            .on("pointerout", () => {
                botonMute2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonMute2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                game.sound.mute = true;
            });

            botonMute2 = this.add.sprite(615, 35, "botonMute2").setScale(1.5).setVisible(false);

            if(language == 0){
                this.add.text(150, 80, 'Selección de nivel', {fontFamily: 'pixelated', fontSize: 50});
            }
          
            if(language == 1){
                this.add.text(180, 80, 'Level selection', {fontFamily: 'pixelated', fontSize: 50});
            }
          
            if(language == 2){
                this.add.text(160, 80, 'Seleção de nível', {fontFamily: 'pixelated', fontSize: 50});
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
                if(lvlState > 1){
                    this.scene.start("Nivel2");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
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
                if(lvlState > 2){
                    this.scene.start("Nivel3");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
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
                if(lvlState > 3){
                    this.scene.start("Nivel4");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
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
                if(lvlState > 4){
                    this.scene.start("Nivel5");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
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
                if(lvlState > 5){
                    this.scene.start("Nivel6");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
            });
            var lvl6 = this.add.sprite(425, 500, "Escena3N2").setScale(.2).setVisible(false);

            this.add.text(217, 165, '1', {fontFamily: 'pixelated', fontSize: 70});
            this.add.text(415, 165, '2', {fontFamily: 'pixelated', fontSize: 70});
            this.add.text(215, 315, '3', {fontFamily: 'pixelated', fontSize: 70});
            this.add.text(415, 315, '4', {fontFamily: 'pixelated', fontSize: 70});
            this.add.text(215, 465, '5', {fontFamily: 'pixelated', fontSize: 70});
            this.add.text(415, 465, '6', {fontFamily: 'pixelated', fontSize: 70});

            candado2 = this.add.sprite(425, 200, "candado");
            candado3 = this.add.sprite(225, 350, "candado");
            candado4 = this.add.sprite(425, 350, "candado");
            candado5 = this.add.sprite(225, 500, "candado");
            candado6 = this.add.sprite(425, 500, "candado");
        }

        if(plataforma == 1){

            this.add.image(325, 500, "BGMobile");

            this.add.image(325, 500, "oscurecidoMobile");

            this.add.image(325, 525, "cartel").setScale(2.2);

            menuButton = this.add.sprite(50, 50, "Menu").setScale(2).setInteractive()
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
                this.scene.stop("SeleccionLvL");
            });

            menuButton2 = this.add.sprite(50, 50, "Menu2").setScale(2).setVisible(false);

            botonSonido = this.add.sprite(600, 50, "botonSonido").setScale(2).setInteractive()
            .on("pointerover", () => {
                botonSonido2.setVisible(true);
            })
            .on("pointerout", () => {
                botonSonido2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonSonido2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                game.sound.mute = false;
            });

            botonSonido2 = this.add.sprite(600, 50, "botonSonido2").setScale(2).setVisible(false);

            botonMute = this.add.sprite(600, 50, "botonMute").setScale(2).setInteractive()
            .on("pointerover", () => {
                botonMute2.setVisible(true);
            })
            .on("pointerout", () => {
                botonMute2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonMute2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                game.sound.mute = true;
            });

            botonMute2 = this.add.sprite(600, 50, "botonMute2").setScale(2).setVisible(false);

            if(language == 0){
                this.add.text(110, 150, 'Selección de nivel', {fontFamily: 'pixelated', fontSize: 61});
            }
          
            if(language == 1){
                this.add.text(150, 150, 'Level selection', {fontFamily: 'pixelated', fontSize: 61});
            }
          
            if(language == 2){
                this.add.text(130, 150, 'Seleção de nível', {fontFamily: 'pixelated', fontSize: 61});
            }

            this.add.image(200, 325, "Escena1D").setScale(.27).setInteractive()
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
            var lvl1 = this.add.sprite(200, 325, "Escena1D2").setScale(.27).setVisible(false);

            this.add.image(450, 325, "Escena1N").setScale(.27).setInteractive()
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
                if(lvlState > 1){
                    this.scene.start("Nivel2");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
            });
            var lvl2 = this.add.sprite(450, 325, "Escena1N2").setScale(.27).setVisible(false);

            this.add.image(200, 525, "Escena2D").setScale(.27).setInteractive()
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
                if(lvlState > 2){
                    this.scene.start("Nivel3");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
            });
            var lvl3 = this.add.sprite(200, 525, "Escena2D2").setScale(.27).setVisible(false);

            this.add.image(450, 525, "Escena2N").setScale(.27).setInteractive()
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
                if(lvlState > 3){
                    this.scene.start("Nivel4");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
            });
            var lvl4 = this.add.sprite(450, 525, "Escena2N2").setScale(.27).setVisible(false);

            this.add.image(200, 725, "Escena3D").setScale(.27).setInteractive()
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
                if(lvlState > 4){
                    this.scene.start("Nivel5");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
            });
            var lvl5 = this.add.sprite(200, 725, "Escena3D2").setScale(.27).setVisible(false);

            this.add.image(450, 725, "Escena3N").setScale(.27).setInteractive()
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
                if(lvlState > 5){
                    this.scene.start("Nivel6");
                    this.scene.stop('SeleccionLvL');
                    sonidoBoton.play();
                }
            });
            var lvl6 = this.add.sprite(450, 725, "Escena3N2").setScale(.27).setVisible(false);

            this.add.text(190, 275, '1', {fontFamily: 'pixelated', fontSize: 100});
            this.add.text(440, 275, '2', {fontFamily: 'pixelated', fontSize: 100});
            this.add.text(190, 475, '3', {fontFamily: 'pixelated', fontSize: 100});
            this.add.text(440, 475, '4', {fontFamily: 'pixelated', fontSize: 100});
            this.add.text(190, 675, '5', {fontFamily: 'pixelated', fontSize: 100});
            this.add.text(440, 675, '6', {fontFamily: 'pixelated', fontSize: 100});

            candado2 = this.add.sprite(450, 325, "candado").setScale(1.35);
            candado3 = this.add.sprite(200, 525, "candado").setScale(1.35);
            candado4 = this.add.sprite(450, 525, "candado").setScale(1.35);
            candado5 = this.add.sprite(200, 725, "candado").setScale(1.35);
            candado6 = this.add.sprite(450, 725, "candado").setScale(1.35);
        }

        if(lvlState > 1){
            candado2.setVisible(false);
        }
        if (lvlState > 2){
            candado3.setVisible(false);
        }
        if(lvlState > 3){
            candado4.setVisible(false);
        }
        if (lvlState > 4){
            candado5.setVisible(false);
        }
        if(lvlState > 5){
            candado6.setVisible(false);
        }
    }
}