class Derrota extends Phaser.Scene {
    constructor() {
        super('Derrota');
    }
    
    create(){

        this.scene.stop('Mobile');
          
        musicaIngame.stop();

        musicaDerrota.play();
  
        this.add.image(640, 350, "fondoOscurecido").setScale(3);
  
        if(language == 0){
            this.add.image(325, 325, "puntaje0");
        }
      
        if(language == 1){
            this.add.image(325, 325, "score0");
        }
      
        if(language == 2){
            this.add.image(325, 325, "ponto0");
        }

        restart = this.add.sprite(270, 410, "Restart").setInteractive()
        .on("pointerover", () => {
            restart2.setVisible(true);
        })
        .on("pointerout", () => {
            restart2.setVisible(false);
        })
        .on("pointerdown", () => {
            restart2.setVisible(true);
        })
        .on("pointerup", () => {
            sonidoBoton.play();
            musicaVictoria.stop();
            if (currentLevel == 1){
                this.scene.stop('Nivel1');
                this.scene.start('Nivel1');
            }
            if (currentLevel == 2){
                this.scene.stop('Nivel2');
                this.scene.start('Nivel2');
            }
            if (currentLevel == 3){
                this.scene.stop('Nivel3');
                this.scene.start('Nivel3');
            }
            if (currentLevel == 4){
                this.scene.stop('Nivel4');
                this.scene.start('Nivel4');
            }
            if (currentLevel == 5){
                this.scene.stop('Nivel5');
                this.scene.start('Nivel5');
            }
            if (currentLevel == 6){
                this.scene.stop('Nivel6');
                this.scene.start('Nivel6');
            }
        });

        restart2 = this.add.sprite(270, 410, "Restart2").setVisible(false);

        menuButton = this.add.sprite(380, 410, "Menu").setScale(1.2).setInteractive()
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
            musicaVictoria.stop();
            musicaMenu.play();
            if (currentLevel == 1){
                this.scene.stop("Nivel1");
            }
            if (currentLevel == 2){
                this.scene.stop("Nivel2");
            }
            if (currentLevel == 3){
                this.scene.stop("Nivel3");
            }
            if (currentLevel == 4){
                this.scene.stop("Nivel4");
            }
            if (currentLevel == 5){
                this.scene.stop("Nivel5");
            }
            if (currentLevel == 6){
                this.scene.stop("Nivel6");
            }
            this.scene.start('Menu');
            game.resize(650,650);
        });

        menuButton2 = this.add.sprite(380, 410, "Menu2").setScale(1.2).setVisible(false);
    }
}