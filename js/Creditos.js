class Creditos extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    create(){

        if (plataforma == 0){

            this.add.image(325, 325, "Fondo");

            this.add.image(325, 450, "cartel");

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
            
            this.add.text(235, 450, 'Facundo Abzug',{fontFamily: 'pixelated', fontSize: 33});
            this.add.text(245, 525, 'Mario Furrer',{fontFamily: 'pixelated', fontSize: 33});

            if(language == 0){

                Logo = this.add.image(325, 150, "LogoES").setScale(1.5);

                this.add.text(250, 350, 'Integrantes',{fontFamily: 'pixelated', fontSize: 35});

                this.add.text(30, 610, 'Música: https://www.purple-planet.com',{fontFamily: 'pixelated', fontSize: 35});
            }

            if(language == 1){
                
                Logo = this.add.image(325, 150, "LogoEN").setScale(2);

                this.add.text(268, 350, 'Members',{fontFamily: 'pixelated', fontSize: 35});

                this.add.text(30, 610, 'Music: https://www.purple-planet.com',{fontFamily: 'pixelated', fontSize: 35});
            }

            if(language == 2){
                
                Logo = this.add.image(325, 150, "LogoPOR").setScale(1.5);

                this.add.text(268, 350, 'Membros',{fontFamily: 'pixelated', fontSize: 35});

                this.add.text(30, 610, 'Música: https://www.purple-planet.com',{fontFamily: 'pixelated', fontSize: 35});
            }
        }

        if (plataforma == 1){

            this.add.image(325, 500, "BGMobile");

            this.add.image(325, 650, "cartel").setScale(2);

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
                this.scene.stop("Creditos");
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
            
            this.add.text(180, 650, 'Facundo Abzug',{fontFamily: 'pixelated', fontSize: 55});

            this.add.text(195, 800, 'Mario Furrer',{fontFamily: 'pixelated', fontSize: 55});

            if(language == 0){

                Logo = this.add.image(325, 175, "LogoES").setScale(2.5);

                this.add.text(200, 450, 'Integrantes',{fontFamily: 'pixelated', fontSize: 57});

                this.add.text(10, 950, 'Música: https://www.purple-planet.com',{fontFamily: 'pixelated', fontSize: 42});
            }

            if(language == 1){
                
                Logo = this.add.image(325, 175, "LogoEN").setScale(2.5);

                this.add.text(240, 450, 'Members',{fontFamily: 'pixelated', fontSize: 57});

                this.add.text(10, 950, 'Music: https://www.purple-planet.com',{fontFamily: 'pixelated', fontSize: 42});
            }

            if(language == 2){
                
                Logo = this.add.image(325, 175, "LogoPOR").setScale(2.5);

                this.add.text(240, 450, 'Membros',{fontFamily: 'pixelated', fontSize: 57});

                this.add.text(10, 950, 'Música: https://www.purple-planet.com',{fontFamily: 'pixelated', fontSize: 42});
            }
            
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