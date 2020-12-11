class Pausa extends Phaser.Scene {
    constructor() {
        super('Pausa');
    }
    
    create(){
        fondoPausa = this.add.image(640, 350, "fondoOscurecido").setScale(3);
        cartel = this.add.image(325, 350, "cartel").setScale(1);

        if(language == 0 || language == 2){
            this.add.image(325, 150, "cartelPausa");
        }
        else{
            this.add.image(325, 150, "cartelPause");
        }

        Continuar = this.add.sprite(325, 270, "Continuar").setScale(1.5).setInteractive()
        .on("pointerover", () => {
            Continuar2.setVisible(true);
        })
        .on("pointerout", () => {
            Continuar2.setVisible(false);
        })
        .on("pointerdown", () => {
            Continuar2.setVisible(true);
        })
        .on("pointerup", () => {
            sonidoBoton.play();
            if (currentLevel == 1){
                this.scene.resume('Nivel1');
            }
            if (currentLevel == 2){
                this.scene.resume('Nivel2');
            }
            if (currentLevel == 3){
                this.scene.resume('Nivel3');
            }
            if (currentLevel == 4){
                this.scene.resume('Nivel4');
            }
            if (currentLevel == 5){
                this.scene.resume('Nivel5');
            }
            if (currentLevel == 6){
                this.scene.resume('Nivel6');
            }
            this.scene.stop('Pausa');
        });

        Continuar2 = this.add.sprite(325, 270, "Continuar2").setScale(1.5).setVisible(false);

        restart = this.add.sprite(325, 350, "Restart").setScale(1.5).setInteractive()
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
            this.scene.stop('Pausa');
        });

        restart2 = this.add.sprite(325, 350, "Restart2").setScale(1.5).setVisible(false);

        menuButton = this.add.sprite(325, 435, "Menu").setScale(1.5).setInteractive()
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
            musicaIngame.stop();
            if (currentLevel == 1){
                this.scene.stop('Nivel1');
            }
            if (currentLevel == 2){
                this.scene.stop('Nivel2');
            }
            if (currentLevel == 3){
                this.scene.stop('Nivel3');
            }
            if (currentLevel == 4){
                this.scene.stop('Nivel4');
            }
            if (currentLevel == 5){
                this.scene.stop('Nivel5');
            }
            if (currentLevel == 6){
                this.scene.stop('Nivel6');
            }
            this.scene.start('Menu');
            musicaMenu.play();
            this.scene.stop('Pausa');
        });

        menuButton2 = this.add.sprite(325, 435, "Menu2").setScale(1.5).setVisible(false);
    }
}