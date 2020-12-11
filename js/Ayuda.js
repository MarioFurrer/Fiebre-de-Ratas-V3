class Ayuda extends Phaser.Scene{
    constructor(){
        super("Ayuda")
    }

    create(){
        this.add.image(325, 325, "Fondo");

        reload = 0;

        timer = this.time.addEvent({ delay: 100, callback: this.recarga, callbackScope: this, loop: true });

        Balas = this.physics.add.group();

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

        if(plataforma == 0){

            this.add.image(325, 350, "cartel").setScale(1.9);

            personaje = this.physics.add.sprite(425,425, "Personaje").setScale(2.25).setImmovable(true);

            this.add.image(210, 370, "keys");
            keyUP = this.add.sprite(210, 370, "keyUP").setVisible(false);
            keyDOWN = this.add.sprite(210, 370, "keyDOWN").setVisible(false);
            keyLEFT = this.add.sprite(210, 370, "keyLEFT").setVisible(false);
            keyRIGHT = this.add.sprite(210, 370, "keyRIGHT").setVisible(false);
            
            this.add.image(210, 520, "keySB");
            keySB = this.add.sprite(210, 520, "keySB2").setVisible(false);

            cursor = this.input.keyboard.createCursorKeys();

            if(language == 0){
                this.add.bitmapText(125, 150, "pixelFont", 'Usa las FLECHAS para girar al granjero', 30);
                this.add.bitmapText(125, 200, "pixelFont", 'y la BARRA ESPACIADORA para disparar', 30);
            }
          
            if(language == 1){
                this.add.bitmapText(125, 150, "pixelFont", 'Use the ARROWS to rotate the farmer', 30);
                this.add.bitmapText(185, 200, "pixelFont", 'and the SPACEBAR to shoot', 30);
            }
          
            if(language == 2){
                this.add.bitmapText(130, 150, "pixelFont", 'Use as SETAS para virar o fazendeiro', 30);
                this.add.bitmapText(150, 200, "pixelFont", 'e a BARRA DE ESPACAO para atirar', 30);
            }

            
        }
        else{
            
        }
    }

    update(){

        if(cursor.right.isDown){
            keyRIGHT.setVisible(true);
            personaje.angle = 179;
        }
        else{
            keyRIGHT.setVisible(false);
        }
        
        if(cursor.left.isDown){
            keyLEFT.setVisible(true);
            personaje.angle = 0;
        }
        else{
            keyLEFT.setVisible(false);
        }
        
        if(cursor.up.isDown){
            keyUP.setVisible(true);
            personaje.angle = 90;
        }
        else{
            keyUP.setVisible(false);
        }
        
        if(cursor.down.isDown){
            keyDOWN.setVisible(true);
            personaje.angle = -90;
        }
        else{
            keyDOWN.setVisible(false);
        }
        
        if(cursor.space.isDown){
            keySB.setVisible(true);
            this.shoot();
        }
        else{
            keySB.setVisible(false);
        }

        Balas.children.each(function(bala) {
            if(bala.x <= 310 || bala.x >= 550 || bala.y <= 230 || bala.y >= 600){                
                bala.disableBody(true, true);
            }
        })
    }

    shoot(){
        if(reload <= 0){
            if(personaje.angle == 179){
                bala = Balas.create(450, 425, 'Bala').setScale(1.75);
                bala.setVelocityX(200);
                reload = .7;
            }
            if(personaje.angle == 0){
                bala = Balas.create(400, 425, 'Bala').setScale(1.75);
                bala.setVelocityX(-200);
                reload = .7;
            }
            if(personaje.angle == 90){
                bala = Balas.create(425, 400, 'Bala').setScale(1.75);
                bala.setVelocityY(-200);
                reload = .7;     
            }
            if(personaje.angle == -90){
                bala = Balas.create(425, 450, 'Bala').setScale(1.75);
                bala.setVelocityY(200);
                reload = .7;
            }
        }
    }

    recarga(){
        reload = reload - .1;
    }
}