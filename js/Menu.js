class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    create(){

        pag = 1;
        
        if(plataforma == 0){

            this.add.image(325, 325, "Fondo");

            this.add.image(325, 450, "cartel");

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

            // Español
            if (language == 0){
            
                //Logo
                Logo = this.add.image(325, 150, "LogoES").setScale(2);

                //Jugar
                botonJugar = this.add.image(325, 355, "Jugar").setInteractive()
                .on("pointerover", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonJugar2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("SeleccionLvL");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });
        
                botonJugar2 = this.add.sprite(325, 355, "Jugar2").setVisible(false);

                //Ayuda
                botonAyuda = this.add.image(325, 425, "Ayuda").setInteractive()
                .on("pointerover", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonAyuda2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Ayuda");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonAyuda2 = this.add.sprite(325, 425, "Ayuda2").setVisible(false);

                //Información
                botonInformacion = this.add.image(325, 485, "Informacion").setScale(1.2).setInteractive()
                .on("pointerover", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonInformacion2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Informacion");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonInformacion2 = this.add.sprite(325, 485, "Informacion2").setScale(1.2).setVisible(false);

                //Creditos
                botonCreditos = this.add.image(325, 540, "Creditos").setScale(2.2).setInteractive()
                .on("pointerover", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonCreditos2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Creditos");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonCreditos2 = this.add.sprite(325, 540, "Creditos2").setScale(2.2).setVisible(false);
            }
            // Inglés
            else if (language == 1){

                //Logo
                Logo = this.add.image(325, 150, "LogoEN").setScale(2);

                //Jugar
                botonJugar = this.add.image(325, 355, "Play").setInteractive()
                .on("pointerover", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonJugar2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("SeleccionLvL");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });
        
                botonJugar2 = this.add.sprite(325, 355, "Play2").setVisible(false);

                //Ayuda
                botonAyuda = this.add.image(325, 425, "Help").setInteractive()
                .on("pointerover", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonAyuda2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Ayuda");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonAyuda2 = this.add.sprite(325, 425, "Help2").setVisible(false);

                //Información
                botonInformacion = this.add.image(325, 490, "Information").setScale(1.2).setInteractive()
                .on("pointerover", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonInformacion2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Informacion");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonInformacion2 = this.add.sprite(325, 490, "Information2").setScale(1.2).setVisible(false);

                //Creditos
                botonCreditos = this.add.image(325, 540, "Credits").setScale(2.2).setInteractive()
                .on("pointerover", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonCreditos2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Creditos");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonCreditos2 = this.add.sprite(325, 540, "Credits2").setScale(2.2).setVisible(false);
            }
            //Portugés
            else {

                //Logo
                Logo = this.add.image(325, 150, "LogoPOR").setScale(2);

                //Jugar
                botonJugar = this.add.image(325, 355, "Jogar").setInteractive()
                .on("pointerover", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonJugar2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("SeleccionLvL");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });
        
                botonJugar2 = this.add.sprite(325, 355, "Jogar2").setVisible(false);

                //Ayuda
                botonAyuda = this.add.image(325, 425, "Ajuda").setInteractive()
                .on("pointerover", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonAyuda2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Ayuda");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonAyuda2 = this.add.sprite(325, 425, "Ajuda2").setVisible(false);

                //Información
                botonInformacion = this.add.image(325, 485, "Em_formacao").setScale(1.3).setInteractive()
                .on("pointerover", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonInformacion2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Informacion");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonInformacion2 = this.add.sprite(325, 485, "Em_formacao2").setScale(1.3).setVisible(false);

                //Creditos
                botonCreditos = this.add.image(325, 540, "Creditos").setScale(2.2).setInteractive()
                .on("pointerover", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonCreditos2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Creditos");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonCreditos2 = this.add.sprite(325, 540, "Creditos2").setScale(2.2).setVisible(false);

            }

            botonES = this.add.image(500, 620, "iconoES").setInteractive()
            .on("pointerover", () => {
                botonES2.setVisible(true);
            })
            .on("pointerout", () => {
                botonES2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonES2.setVisible(true);
            })
            .on("pointerup", () => {
                if (language != 0){
                    language = 0;
                    this.scene.restart("Menu");
                    sonidoBoton.play();
                }
                else {}
            });

            botonES2 = this.add.sprite(500, 620, "iconoES2").setVisible(false);

            botonEN = this.add.image(560, 620, "iconoEN").setInteractive()
            .on("pointerover", () => {
                botonEN2.setVisible(true);
            })
            .on("pointerout", () => {
                botonEN2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonEN2.setVisible(true);
            })
            .on("pointerup", () => {
                if (language != 1){
                    language = 1;
                    this.scene.restart("Menu");
                    sonidoBoton.play();
                }
                else {}
            });

            botonEN2 = this.add.sprite(560, 620, "iconoEN2").setVisible(false);

            botonPOR = this.add.image(620, 620, "iconoBR").setInteractive()
            .on("pointerover", () => {
                botonPOR2.setVisible(true);
            })
            .on("pointerout", () => {
                botonPOR2.setVisible(false);
            })
            .on("pointerdown", () => {
                botonPOR2.setVisible(true);
            })
            .on("pointerup", () => {
                if (language != 2){
                    language = 2;
                    this.scene.restart("Menu");
                    sonidoBoton.play();
                }
                else {}
            });

            botonPOR2 = this.add.sprite(620, 620, "iconoBR2").setVisible(false);
        }
        if(plataforma == 1){

            this.add.image(325, 500, "BGMobile");

            this.add.image(325, 600, "cartel").setScale(2);

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
            // Español
            if (language == 0){
            
                //Logo
                Logo = this.add.image(325, 175, "LogoES").setScale(2.5);

                //Jugar
                botonJugar = this.add.image(325, 410, "Jugar").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonJugar2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("SeleccionLvL");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });
        
                botonJugar2 = this.add.sprite(325, 410, "Jugar2").setScale(2).setVisible(false);

                //Ayuda
                botonAyuda = this.add.image(325, 540, "Ayuda").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonAyuda2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Ayuda");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonAyuda2 = this.add.sprite(325, 540, "Ayuda2").setScale(2).setVisible(false);

                //Información
                botonInformacion = this.add.image(325, 660, "Informacion").setScale(2.4).setInteractive()
                .on("pointerover", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonInformacion2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Informacion");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonInformacion2 = this.add.sprite(325, 660, "Informacion2").setScale(2.4).setVisible(false);

                //Creditos
                botonCreditos = this.add.image(325, 775, "Creditos").setScale(4.4).setInteractive()
                .on("pointerover", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonCreditos2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Creditos");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonCreditos2 = this.add.sprite(325, 775, "Creditos2").setScale(4.4).setVisible(false);
            }
            // Inglés
            else if (language == 1){

                //Logo
                Logo = this.add.image(325, 175, "LogoEN").setScale(2.5);

                //Jugar
                botonJugar = this.add.image(325, 410, "Play").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonJugar2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("SeleccionLvL");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });
        
                botonJugar2 = this.add.sprite(325, 410, "Play2").setScale(2).setVisible(false);

                //Ayuda
                botonAyuda = this.add.image(325, 540, "Help").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonAyuda2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Ayuda");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonAyuda2 = this.add.sprite(325, 540, "Help2").setScale(2).setVisible(false);

                //Información
                botonInformacion = this.add.image(325, 660, "Information").setScale(2.4).setInteractive()
                .on("pointerover", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonInformacion2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Informacion");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonInformacion2 = this.add.sprite(325, 660, "Information2").setScale(2.4).setVisible(false);

                //Creditos
                botonCreditos = this.add.image(325, 775, "Credits").setScale(4.4).setInteractive()
                .on("pointerover", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonCreditos2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Creditos");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonCreditos2 = this.add.sprite(325, 775, "Credits2").setScale(4.4).setVisible(false);
            }
            //Portugés
            else {

                //Logo
                Logo = this.add.image(325, 175, "LogoPOR").setScale(2.5);

                //Jugar
                botonJugar = this.add.image(325, 410, "Jogar").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonJugar2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonJugar2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("SeleccionLvL");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });
        
                botonJugar2 = this.add.sprite(325, 410, "Jogar2").setScale(2).setVisible(false);

                //Ayuda
                botonAyuda = this.add.image(325, 540, "Ajuda").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonAyuda2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonAyuda2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Ayuda");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonAyuda2 = this.add.sprite(325, 540, "Ajuda2").setScale(2).setVisible(false);

                //Información
                botonInformacion = this.add.image(325, 660, "Em_formacao").setScale(2.6).setInteractive()
                .on("pointerover", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonInformacion2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonInformacion2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Informacion");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonInformacion2 = this.add.sprite(325, 660, "Em_formacao2").setScale(2.6).setVisible(false);

                //Creditos
                botonCreditos = this.add.image(325, 775, "Creditos").setScale(4.4).setInteractive()
                .on("pointerover", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonCreditos2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonCreditos2.setVisible(true);
                })
                .on("pointerup", () => {
                    this.scene.start("Creditos");
                    this.scene.stop('Menu');
                    sonidoBoton.play();
                });

                botonCreditos2 = this.add.sprite(325, 775, "Creditos2").setScale(4.4).setVisible(false); 
            }

            botonES = this.add.image(370, 940, "iconoES").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonES2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonES2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonES2.setVisible(true);
                })
                .on("pointerup", () => {
                    if (language != 0){
                        language = 0;
                        this.scene.restart("Menu");
                        sonidoBoton.play();
                    }
                    else {}
                });

                botonES2 = this.add.sprite(370, 940, "iconoES2").setScale(2).setVisible(false);

                botonEN = this.add.image(480, 940, "iconoEN").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonEN2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonEN2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonEN2.setVisible(true);
                })
                .on("pointerup", () => {
                    if (language != 1){
                        language = 1;
                        this.scene.restart("Menu");
                        sonidoBoton.play();
                    }
                    else {}
                });

                botonEN2 = this.add.sprite(480, 940, "iconoEN2").setScale(2).setVisible(false);

                botonPOR = this.add.image(590, 940, "iconoBR").setScale(2).setInteractive()
                .on("pointerover", () => {
                    botonPOR2.setVisible(true);
                })
                .on("pointerout", () => {
                    botonPOR2.setVisible(false);
                })
                .on("pointerdown", () => {
                    botonPOR2.setVisible(true);
                })
                .on("pointerup", () => {
                    if (language != 2){
                        language = 2;
                        this.scene.restart("Menu");
                        sonidoBoton.play();
                    }
                    else {}
                });

                botonPOR2 = this.add.sprite(590, 940, "iconoBR2").setScale(2).setVisible(false);
        }
    }

    update(){
        if(game.sound.mute == false){
            botonMute.setVisible(true).setInteractive(true);
            botonSonido.setVisible(false).setInteractive(false);
            botonSonido2.setVisible(false);
        }
        if(game.sound.mute == true){
            botonMute.setVisible(false).setInteractive(false);
            botonMute2.setVisible(false);
            botonSonido.setVisible(true).setInteractive(true);
        }
    }
}