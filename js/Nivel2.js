class Nivel2 extends Phaser.Scene{
    constructor(){
        super("Nivel2");
    }

    create(){

        if(plataforma == 1){
            this.scene.launch("MobileSet");
        }
        
        currentLevel = 2;

        musicaMenu.stop();

        musicaIngame.play();

        infeccion = 0;

        valInfeccion = -1;

        reload = 0;

        muerteRatas = 0;

        time = 40;

        cronometro = this.time.addEvent({ delay: 1000, callback: this.cronometro, callbackScope: this, loop: true });

        fondoLVL = this.add.sprite(325,325, "Escena1N");

        if(plataforma == 0){

            pauseButton = this.add.sprite(625, 25, "Pausa").setInteractive()
            .on("pointerover", () => {
                pauseButton2.setVisible(true);
            })
            .on("pointerout", () => {
                pauseButton2.setVisible(false);
            })
            .on("pointerdown", () => {
                pauseButton2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                this.scene.pause('Nivel2');
                this.scene.launch("Pausa");
            });

            pauseButton2 = this.add.sprite(625, 25, "Pausa2").setVisible(false);

            reloj = this.add.sprite(50, 600, "reloj").setScale(2);

            temporizador = this.add.text(30, 575, time, {fontFamily: 'pixelated', fontSize: 50});

        }

        if(plataforma == 1){

            pauseButton = this.add.sprite(615, 35, "Pausa").setScale(2).setInteractive()
            .on("pointerover", () => {
                pauseButton2.setVisible(true);
            })
            .on("pointerout", () => {
                pauseButton2.setVisible(false);
            })
            .on("pointerdown", () => {
                pauseButton2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                this.scene.pause('Nivel2');
                this.scene.launch("Pausa");
            });

            pauseButton2 = this.add.sprite(615, 35, "Pausa2").setScale(2).setVisible(false);

            reloj = this.add.sprite(75, 575, "reloj").setScale(3.5);

            temporizador = this.add.text(44, 535, time, {fontFamily: 'pixelated', fontSize: 75});
        }

        this.anims.create({
            key: 'reloj',
            frames: this.anims.generateFrameNumbers('reloj', { start: 0, end: 7 }),
            frameRate: 5,
            repeat: -1
        });

        reloj.anims.play('reloj', true);

        personaje = this.physics.add.sprite(325,325, "Personaje").setScale(2.25).setImmovable(true);

        cursor = this.input.keyboard.createCursorKeys();

        this.barraInfeccion();

        timer = this.time.addEvent({ delay: 100, callback: this.recarga, callbackScope: this, loop: true });

        Balas = this.physics.add.group();

        this.anims.create({
            key: 'rata1',
            frames: this.anims.generateFrameNumbers('rata', { start: 8, end: 11 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'rata2',
            frames: this.anims.generateFrameNumbers('rata', { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'rata3',
            frames: this.anims.generateFrameNumbers('rata', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        Ratas = this.physics.add.group({
            key: 'Rata',
            repeat: 4,
        });

        Ratas.children.iterate(function (Rata) {
            Rata.setCollideWorldBounds(false);
            Rata.setImmovable(true);

            carril = Phaser.Math.FloatBetween(0, 1);

            clase = Phaser.Math.FloatBetween(0, 1);

            if (carril <= 0.24){
                Rata.setY(Phaser.Math.FloatBetween(-100, -500));
                Rata.setX(325);
                if (clase <= 0.33){
                    Rata.vida = 2;
                    Rata.anims.play('rata1', true);
                    Rata.setScale(1.7);
                    Rata.body.setVelocityY(50);
                }
                else {
                    if (clase <= 0.66){
                        Rata.vida = 1;
                        Rata.anims.play('rata2', true);
                        Rata.setScale(1.5);
                        Rata.body.setVelocityY(75);
                    }
                    else {
                        Rata.vida = 3;
                        Rata.anims.play('rata3', true);
                        Rata.setScale(1.9);
                        Rata.body.setVelocityY(30);
                    }
                }
            }
            else {
                if (carril <= 0.49){
                    Rata.angle = 180;
                    Rata.setY(Phaser.Math.FloatBetween(660, 1000));
                    Rata.setX(325);
                    if (clase <= 0.33){
                        Rata.vida = 2;
                        Rata.anims.play('rata1', true);
                        Rata.setScale(1.7);
                        Rata.body.setVelocityY(-50);
                    }
                    else {
                        if (clase <= 0.66){
                            Rata.vida = 1;
                            Rata.anims.play('rata2', true);
                            Rata.setScale(1.5);
                            Rata.body.setVelocityY(-75);
                        }
                        else {
                            Rata.vida = 3;
                            Rata.anims.play('rata3', true);
                            Rata.setScale(1.9);
                            Rata.body.setVelocityY(-30);
                        }
                    }
                }
                else {
                    if (carril <= 0.74){
                        Rata.angle = 270;
                        Rata.setX(Phaser.Math.FloatBetween(-100, -500));
                        Rata.setY(325);
                        if (clase <= 0.33){
                            Rata.vida = 2;
                            Rata.anims.play('rata1', true);
                            Rata.setScale(1.7);
                            Rata.body.setVelocityX(50);
                        }
                        else {
                            if (clase <= 0.66){
                                Rata.vida = 1;
                                Rata.anims.play('rata2', true);
                                Rata.setScale(1.5);
                                Rata.body.setVelocityX(75);
                            }
                            else {
                                Rata.vida = 3;
                                Rata.anims.play('rata3', true);
                                Rata.setScale(1.9);
                                Rata.body.setVelocityX(30);
                            }
                        }
                    }
                    else {
                        Rata.angle = 90;
                        Rata.setX(Phaser.Math.FloatBetween(660, 1000));
                        Rata.setY(325);
                        if (clase <= 0.33){
                            Rata.vida = 2;
                            Rata.anims.play('rata1', true);
                            Rata.setScale(1.7);
                            Rata.body.setVelocityX(-50);
                        }
                        else {
                            if (clase <= 0.66){
                                Rata.vida = 1;
                                Rata.anims.play('rata2', true);
                                Rata.setScale(1.5);
                                Rata.body.setVelocityX(-75);
                            }
                            else {
                                Rata.vida = 3;
                                Rata.anims.play('rata3', true);
                                Rata.setScale(1.9);
                                Rata.body.setVelocityX(-30);
                            }
                        }
                    }
                }
            }
        })

        this.physics.add.collider(Balas, Ratas, this.shootRata, null, this);

        this.physics.add.collider(personaje, Ratas, this.hitPersonaje, null, this);
    }

    update(){
        
        temporizador.setText(time);

        this.barraInfeccion();

        if(buttonDown == true){
            this.shoot();
        }

        if (time <= 0){
            this.victory();
        }

        if(cursor.right.isDown){
            personaje.angle = 179;
        }
        else if(cursor.left.isDown){
            personaje.angle = 0;
        }
        else if(cursor.up.isDown){
            personaje.angle = 90;
        }
        else if(cursor.down.isDown){
            personaje.angle = -90;
        }

        if(cursor.space.isDown){
            this.shoot();
        }

        if (Ratas.countActive(true) <= 4){

            var Rata = Ratas.create(1000, 1000, 'Rata').setScale(1.5);
            Rata.setCollideWorldBounds(false);
            Rata.setImmovable(true);

            carril = Phaser.Math.FloatBetween(0, 1);

            clase = Phaser.Math.FloatBetween(0, 1);

            if (carril <= 0.24){
                Rata.setY(Phaser.Math.FloatBetween(-100, -500));
                Rata.setX(325);
                if (clase <= 0.33){
                    Rata.vida = 2;
                    Rata.anims.play('rata1', true);
                    Rata.setScale(1.7);
                    Rata.body.setVelocityY(50);
                }
                else {
                    if (clase <= 0.66){
                        Rata.vida = 1;
                        Rata.anims.play('rata2', true);
                        Rata.setScale(1.5);
                        Rata.body.setVelocityY(75);
                    }
                    else {
                        Rata.vida = 3;
                        Rata.anims.play('rata3', true);
                        Rata.setScale(1.9);
                        Rata.body.setVelocityY(30);
                    }
                }
            }
            else {
                if (carril <= 0.49){
                    Rata.angle = 180;
                    Rata.setY(Phaser.Math.FloatBetween(660, 1000));
                    Rata.setX(325);
                    if (clase <= 0.33){
                        Rata.vida = 2;
                        Rata.anims.play('rata1', true);
                        Rata.setScale(1.7);
                        Rata.body.setVelocityY(-50);
                    }
                    else {
                        if (clase <= 0.66){
                            Rata.vida = 1;
                            Rata.anims.play('rata2', true);
                            Rata.setScale(1.5);
                            Rata.body.setVelocityY(-75);
                        }
                        else {
                            Rata.vida = 3;
                            Rata.anims.play('rata3', true);
                            Rata.setScale(1.9);
                            Rata.body.setVelocityY(-30);
                        }
                    }
                }
                else {
                    if (carril <= 0.74){
                        Rata.angle = 270;
                        Rata.setX(Phaser.Math.FloatBetween(-100, -500));
                        Rata.setY(325);
                        if (clase <= 0.33){
                            Rata.vida = 2;
                            Rata.anims.play('rata1', true);
                            Rata.setScale(1.7);
                            Rata.body.setVelocityX(50);
                        }
                        else {
                            if (clase <= 0.66){
                                Rata.vida = 1;
                                Rata.anims.play('rata2', true);
                                Rata.setScale(1.5);
                                Rata.body.setVelocityX(75);
                            }
                            else {
                                Rata.vida = 3;
                                Rata.anims.play('rata3', true);
                                Rata.setScale(1.9);
                                Rata.body.setVelocityX(30);
                            }
                        }
                    }
                    else {
                        Rata.angle = 90;
                        Rata.setX(Phaser.Math.FloatBetween(660, 1000));
                        Rata.setY(325);
                        if (clase <= 0.33){
                            Rata.vida = 2;
                            Rata.anims.play('rata1', true);
                            Rata.setScale(1.7);
                            Rata.body.setVelocityX(-50);
                        }
                        else {
                            if (clase <= 0.66){
                                Rata.vida = 1;
                                Rata.anims.play('rata2', true);
                                Rata.setScale(1.5);
                                Rata.body.setVelocityX(-75);
                            }
                            else {
                                Rata.vida = 3;
                                Rata.anims.play('rata3', true);
                                Rata.setScale(1.9);
                                Rata.body.setVelocityX(-30);
                            }
                        }
                    }
                }
            }
        }
    }

    barraInfeccion(){

        if(valInfeccion != infeccion){

            if(plataforma == 0){

                if(infeccion == 0){this.add.sprite(90, 40, "Infeccion0").setScale(1.5);}
        
                if(infeccion == 1){this.add.sprite(90, 40, "Infeccion1").setScale(1.5);}

                if(infeccion == 2){this.add.sprite(90, 40, "Infeccion2").setScale(1.5);}

                if(infeccion == 3){this.add.sprite(90, 40, "Infeccion3").setScale(1.5);}

                if(infeccion == 4){this.add.sprite(90, 40, "Infeccion4").setScale(1.5);}

                if(infeccion == 5){this.add.sprite(90, 40, "Infeccion5").setScale(1.5);}

                if(infeccion == 6){this.add.sprite(90, 40, "Infeccion6").setScale(1.5);}

                if(infeccion == 7){this.add.sprite(90, 40, "Infeccion7").setScale(1.5);}

                if(infeccion == 8){this.add.sprite(90, 40, "Infeccion8").setScale(1.5);}

                if(infeccion == 9){this.add.sprite(90, 40, "Infeccion9").setScale(1.5);}

                if(infeccion >= 10){
                    this.add.sprite(90, 40, "Infeccion10").setScale(1.5);
                    this.gameOver()
                }
            }

            if(plataforma == 1){

                if(infeccion == 0){this.add.sprite(120, 40, "Infeccion0").setScale(2.5);}
        
                if(infeccion == 1){this.add.sprite(120, 40, "Infeccion1").setScale(2.5);}

                if(infeccion == 2){this.add.sprite(120, 40, "Infeccion2").setScale(2.5);}

                if(infeccion == 3){this.add.sprite(120, 40, "Infeccion3").setScale(2.5);}

                if(infeccion == 4){this.add.sprite(120, 40, "Infeccion4").setScale(2.5);}

                if(infeccion == 5){this.add.sprite(120, 40, "Infeccion5").setScale(2.5);}

                if(infeccion == 6){this.add.sprite(120, 40, "Infeccion6").setScale(2.5);}

                if(infeccion == 7){this.add.sprite(120, 40, "Infeccion7").setScale(2.5);}

                if(infeccion == 8){this.add.sprite(120, 40, "Infeccion8").setScale(2.5);}

                if(infeccion == 9){this.add.sprite(120, 40, "Infeccion9").setScale(2.5);}

                if(infeccion >= 10){
                    this.add.sprite(120, 40, "Infeccion10").setScale(2.5);
                    this.gameOver()
                }
            }
            valInfeccion = infeccion;
        }
    }

    cronometro(){
        time = time - 1
        if(plataforma == 0){

            if(time <= 19){
                temporizador.setX(33);
            }
            if(time <= 9){
                temporizador.setX(39);
            }

        }
        if(plataforma == 1){

            if(time <= 19){
                temporizador.setX(49);
            }
            if(time <= 9){
                temporizador.setX(57);
            }
        }
    }

    shoot(){
        if(reload <= 0){
            if(personaje.angle == 179){
                bala = Balas.create(350, 325, 'Bala').setScale(1.75);
                bala.setVelocityX(200);
                reload = .7;
            }
            if(personaje.angle == 0){
                bala = Balas.create(300, 325, 'Bala').setScale(1.75);
                bala.setVelocityX(-200);
                reload = .7;
            }
            if(personaje.angle == 90){
                bala = Balas.create(325, 300, 'Bala').setScale(1.75);
                bala.setVelocityY(-200);
                reload = .7;     
            }
            if(personaje.angle == -90){
                bala = Balas.create(325, 350, 'Bala').setScale(1.75);
                bala.setVelocityY(200);
                reload = .7;
            }
        }
        else {}
    }

    recarga(){
        reload = reload - .1;
    }

    shootRata(Balas, Rata){
        hitRata.play({volume: 0.5});
        Rata.vida = Rata.vida - 1;
        if (Rata.vida <= 0){
            rataAhuyentada.play();
            Rata.disableBody(true, true);
        }
        Balas.disableBody(true, true);
    }

    hitPersonaje(personaje, Rata){
        infeccion = infeccion + 1;
        Rata.disableBody(true, true);
    }

    victory(){
        this.scene.pause();
        this.scene.launch('Victoria');
    }

    gameOver(){
        this.scene.pause();
        this.scene.launch('Derrota');
    }

}