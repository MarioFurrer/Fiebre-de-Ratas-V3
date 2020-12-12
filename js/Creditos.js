class Creditos extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    create(){
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
        
        this.add.bitmapText(235, 450, "pixelFont", 'Facundo Abzug', 35);
        this.add.bitmapText(247, 525, "pixelFont", 'Mario Furrer', 35);

        if(language == 0){

            Logo = this.add.image(325, 150, "LogoES").setScale(1.5);

            this.add.bitmapText(250, 350, "pixelFont", 'Integrantes', 35);

            this.add.bitmapText(30, 620, "pixelFont", 'Musica: https://www.purple-planet.com', 35);
        }

        if(language == 1){
            
            Logo = this.add.image(325, 150, "LogoEN").setScale(1.5);

            this.add.bitmapText(268, 350, "pixelFont", 'Members', 35);

            this.add.bitmapText(30, 620, "pixelFont", 'Music: https://www.purple-planet.com', 35);
        }

        if(language == 2){
            
            Logo = this.add.image(325, 150, "LogoPOR").setScale(1.5);

            this.add.bitmapText(268, 350, "pixelFont", 'Membros', 35);

            this.add.bitmapText(30, 620, "pixelFont", 'Musica: https://www.purple-planet.com', 35);
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