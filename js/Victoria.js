class Victoria extends Phaser.Scene {
  constructor() {
    super('Victoria');
  }

  create(){

    this.scene.stop('Mobile');

    musicaIngame.stop();

    musicaVictoria.play();

    this.add.image(640, 350, "fondoOscurecido").setScale(3);

    if(language == 0){
      if(infeccion == 0){
        this.add.image(325, 325, "puntaje3");
      } 
      else if(infeccion <= 5){
        this.add.image(325, 325, "puntaje2");
      }
      else{
        this.add.image(325, 325, "puntaje1");
      }
    }

    if(language == 1){
      if(infeccion == 0){
        this.add.image(325, 325, "score3");
      } 
      else if(infeccion <= 5){
        this.add.image(325, 325, "score2");
      }
      else{
        this.add.image(325, 325, "score1");
      }
    }

    if(language == 2){
      if(infeccion == 0){
        this.add.image(325, 325, "ponto3");
      } 
      else if(infeccion <= 5){
        this.add.image(325, 325, "ponto2");
      }
      else{
        this.add.image(325, 325, "ponto1");
      }
    }

    Continuar = this.add.sprite(250, 390, "Continuar").setInteractive()
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
      musicaVictoria.stop();
      if (currentLevel == 1){
        this.scene.stop('Nivel1');
        this.scene.start('Nivel2');
      }
      if (currentLevel == 2){
        this.scene.stop('Nivel2');
        this.scene.start('Nivel3');
      }
      if (currentLevel == 3){
        this.scene.stop('Nivel3');
        this.scene.start('Nivel4');
      }
      if (currentLevel == 4){
        this.scene.stop('Nivel4');
        this.scene.start('Nivel5');
      }
      if (currentLevel == 5){
        this.scene.stop('Nivel5');
        this.scene.start('Nivel6');
      }
    });

    Continuar2 = this.add.sprite(250, 390, "Continuar2").setVisible(false);

    restart = this.add.sprite(400, 390, "Restart").setInteractive()
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

    restart2 = this.add.sprite(400, 390, "Restart2").setVisible(false);

    menuButton = this.add.sprite(325, 425, "Menu").setScale(1.2).setInteractive()
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
      game.resize(650,650);
      this.scene.start('Menu');
    });

    menuButton2 = this.add.sprite(325, 425, "Menu2").setScale(1.2).setVisible(false);
  }
}