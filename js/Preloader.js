class Preloader extends Phaser.Scene{
    constructor(){
        super("Preloader");
    }

    preload(){
        //preloader
        this.load.image("logoUNRaf", "assets/Images/logoUNRaf.png");
        this.load.image("Teclado", "assets/Images/Teclado.png");
        this.load.image("Teclado2", "assets/Images/Teclado2.png");
        this.load.image("Movil", "assets/Images/Movil.png");
        this.load.image("Movil2", "assets/Images/Movil2.png");

        //Menu
        this.load.image("Fondo", "assets/Images/fondoMenu.png");
        this.load.image("BGMobile", "assets/Images/menuMobile.png");

        this.load.image("botonSonido", "assets/Images/botonSonido.png");
        this.load.image("botonSonido2", "assets/Images/botonSonido2.png");
        this.load.image("botonMute", "assets/Images/botonMute.png");
        this.load.image("botonMute2", "assets/Images/botonMute2.png");

        this.load.image("iconoES", "assets/Images/iconoES.png");
        this.load.image("iconoES2", "assets/Images/iconoES2.png");
        this.load.image("iconoEN", "assets/Images/iconoEN.png");
        this.load.image("iconoEN2", "assets/Images/iconoEN2.png");
        this.load.image("iconoBR", "assets/Images/iconoBR.png");
        this.load.image("iconoBR2", "assets/Images/iconoBR2.png");
        
        this.load.image("LogoES", "assets/Images/logoES.png");
        this.load.image("LogoEN", "assets/Images/logoEN.png");
        this.load.image("LogoPOR", "assets/Images/logoPOR.png");
        this.load.image("Jugar", "assets/Images/Jugar.png");
        this.load.image("Jugar2", "assets/Images/Jugar2.png");
        this.load.image("Ayuda", "assets/Images/Ayuda.png");
        this.load.image("Ayuda2", "assets/Images/Ayuda2.png");
        this.load.image("Informacion", "assets/Images/Informacion.png");
        this.load.image("Informacion2", "assets/Images/Informacion2.png");
        this.load.image("Creditos", "assets/Images/Creditos.png");
        this.load.image("Creditos2", "assets/Images/Creditos2.png");

        this.load.image("LogoEN", "assets/Images/logoES.png");
        this.load.image("Play", "assets/Images/Play.png");
        this.load.image("Play2", "assets/Images/Play2.png");
        this.load.image("Help", "assets/Images/Help.png");
        this.load.image("Help2", "assets/Images/Help2.png");
        this.load.image("Information", "assets/Images/Information.png");
        this.load.image("Information2", "assets/Images/Information2.png");
        this.load.image("Credits", "assets/Images/Credits.png");
        this.load.image("Credits2", "assets/Images/Credits2.png");

        this.load.image("LogoPOR", "assets/Images/logoES.png");
        this.load.image("Jogar", "assets/Images/Jogar.png");
        this.load.image("Jogar2", "assets/Images/Jogar2.png");
        this.load.image("Ajuda", "assets/Images/Ajuda.png");
        this.load.image("Ajuda2", "assets/Images/Ajuda2.png");
        this.load.image("Em_formacao", "assets/Images/Em_formacao.png");
        this.load.image("Em_formacao2", "assets/Images/Em_formacao2.png");

        this.load.audio("musicaMenu", "./assets/Audio/MusicaMenuPrincipal.mp3");
        this.load.audio("sonidoBoton", "./assets/Audio/boton.mp3");

        //Informacion
        this.load.image('fotoRata', 'assets/Images/fotoRata.png');
        this.load.image('fotoRata2', 'assets/Images/fotoRata2.png');
        this.load.image('fotoRata3', 'assets/Images/fotoRata3.png');
        this.load.image('oscurecidoMobile', 'assets/Images/oscurecidoMobile.png');

        //Ayuda
        this.load.image('keys', 'assets/Images/keys.png');
        this.load.image('keyUP', 'assets/Images/keyUP.png');
        this.load.image('keyDOWN', 'assets/Images/keyDOWN.png');
        this.load.image('keyLEFT', 'assets/Images/keyLEFT.png');
        this.load.image('keyRIGHT', 'assets/Images/keyRIGHT.png');
        this.load.image('keySB', 'assets/Images/keySB.png');
        this.load.image('keySB2', 'assets/Images/keySB2.png');
        this.load.image('flechaUP', 'assets/Images/Arriba.png');
        this.load.image('flechaUP2', 'assets/Images/Arriba2.png');
        this.load.image('flechaDOWN', 'assets/Images/Abajo.png');
        this.load.image('flechaDOWN2', 'assets/Images/Abajo2.png');
        this.load.image('flechaLEFT', 'assets/Images/Izquierda.png');
        this.load.image('flechaLEFT2', 'assets/Images/Izquierda2.png');
        this.load.image('flechaRIGHT', 'assets/Images/Derecha.png');
        this.load.image('flechaRIGHT2', 'assets/Images/Derecha2.png');
        this.load.image('botonDisparo', 'assets/Images/botonDisparo.png');
        this.load.image('botonDisparo2', 'assets/Images/botonDisparo2.png');
        this.load.image('fondoMobile', 'assets/Images/fondoMobile.png');

        //Seleccion de Nivel
        this.load.image('candado', 'assets/Images/candado.png');

        //Creditos

        //Juego

        this.load.image("Escena1D", "./assets/Images/escena1D.png");
        this.load.image("Escena1D2", "./assets/Images/escena1D2.png");
        this.load.image("Escena1N", "./assets/Images/escena1N.png");
        this.load.image("Escena1N2", "./assets/Images/escena1N2.png");
        this.load.image("Escena2D", "./assets/Images/escena2D.png");
        this.load.image("Escena2D2", "./assets/Images/escena2D2.png");
        this.load.spritesheet("Nivel3", "./assets/Images/Nivel3SS.png",{
            frameWidth: 650,
            frameHeight: 650,
        });
        this.load.image("Escena2N", "./assets/Images/escena2N.png");
        this.load.image("Escena2N2", "./assets/Images/escena2N2.png");
        this.load.spritesheet("Nivel4", "./assets/Images/Nivel4SS.png",{
            frameWidth: 650,
            frameHeight: 650,
        });
        this.load.image("Escena3D", "./assets/Images/escena3D.png");
        this.load.image("Escena3D2", "./assets/Images/escena3D2.png");
        this.load.spritesheet("Nivel5", "./assets/Images/Nivel5SS.png",{
            frameWidth: 650,
            frameHeight: 650,
        });
        this.load.image("Escena3N", "./assets/Images/escena3N.png");
        this.load.image("Escena3N2", "./assets/Images/escena3N2.png");
        this.load.spritesheet("Nivel6", "./assets/Images/Nivel6SS.png",{
            frameWidth: 650,
            frameHeight: 650,
        });
        this.load.spritesheet("reloj", "./assets/Images/RelojSS.png",{
            frameWidth: 34,
            frameHeight: 34,
        });
        this.load.image("Pausa", "./assets/Images/botonPausa.png");
        this.load.image("Pausa2", "./assets/Images/botonPausa2.png");
        this.load.image("Infeccion0", "assets/Images/barrainfeccion0.png");
        this.load.image("Infeccion1", "assets/Images/barrainfeccion1.png");
        this.load.image("Infeccion2", "assets/Images/barrainfeccion2.png");
        this.load.image("Infeccion3", "assets/Images/barrainfeccion3.png");
        this.load.image("Infeccion4", "assets/Images/barrainfeccion4.png");
        this.load.image("Infeccion5", "assets/Images/barrainfeccion5.png");
        this.load.image("Infeccion6", "assets/Images/barrainfeccion6.png");
        this.load.image("Infeccion7", "assets/Images/barrainfeccion7.png");
        this.load.image("Infeccion8", "assets/Images/barrainfeccion8.png");
        this.load.image("Infeccion9", "assets/Images/barrainfeccion9.png");
        this.load.image("Infeccion10", "assets/Images/barrainfeccion10.png");
        this.load.image("Personaje", "./assets/Images/pj.png");
        this.load.spritesheet("rata", "./assets/Images/rataSpritesheet.png",{
            frameWidth: 9,
            frameHeight: 24,
        });
        this.load.image("Bala", "./assets/Images/disparo.png");

        this.load.audio("musicaIngame", "./assets/Audio/MusicaIngame.mp3");
        this.load.audio("rataAhuyentada", "./assets/Audio/rataAhuyentada.mp3");
        this.load.audio("hitRata", "./assets/Audio/hitRata.mp3");

        //Pausa
        this.load.image('fondoOscurecido', 'assets/Images/fondoOscurecido.png');
        this.load.image('cartel', 'assets/Images/cartel.png');
        this.load.image("Continuar", "./assets/Images/botonContinuar.png");
        this.load.image("Continuar2", "./assets/Images/botonContinuar2.png");
        this.load.image("Menu", "./assets/Images/botonMenu.png");
        this.load.image("Menu2", "./assets/Images/botonMenu2.png");
        this.load.image("Restart", "./assets/Images/botonRestart.png");
        this.load.image("Restart2", "./assets/Images/botonRestart2.png");
        this.load.image("cartelPausa", "assets/Images/Pausa.png");
        this.load.image("cartelPause", "assets/Images/Pause.png");
        

        //Victoria
        this.load.audio("musicaVictoria", "./assets/Audio/MusicaVictoria.mp3");
        this.load.image('puntaje0', 'assets/Images/Puntaje0.png');
        this.load.image('puntaje1', 'assets/Images/Puntaje1.png');
        this.load.image('puntaje2', 'assets/Images/Puntaje2.png');
        this.load.image('puntaje3', 'assets/Images/Puntaje3.png');
        this.load.image('score0', 'assets/Images/Score0.png');
        this.load.image('score1', 'assets/Images/Score1.png');
        this.load.image('score2', 'assets/Images/Score2.png');
        this.load.image('score3', 'assets/Images/Score3.png');
        this.load.image('ponto0', 'assets/Images/Ponto0.png');
        this.load.image('ponto1', 'assets/Images/Ponto1.png');
        this.load.image('ponto2', 'assets/Images/Ponto2.png');
        this.load.image('ponto3', 'assets/Images/Ponto3.png');


        //Derrota
        this.load.audio("musicaDerrota", "./assets/Audio/MusicaDerrota.mp3")
    }

    create(){

        //game.resize(650,650);

        //Música Menu Principal
        musicaMenu = this.sound.add("musicaMenu" , {loop: true});

        //Música InGame
        musicaIngame = this.sound.add("musicaIngame" , {loop: true});

        //Música Victoria
        musicaVictoria = this.sound.add("musicaVictoria" , {loop: true});

        //Música Derrota
        musicaDerrota = this.sound.add("musicaDerrota" , {loop: false});

        //Sonido de Interactuables
        sonidoBoton = this.sound.add("sonidoBoton" , {loop: false});

        rataAhuyentada = this.sound.add("rataAhuyentada" , {loop: false});
        hitRata = this.sound.add("hitRata" , {loop: false});

        //Logo UNRaf
        this.add.image(325, 325, "logoUNRaf").setScale(.5);

        var texto1 = this.add.text(130, 175, 'Elige tu dispositivo', {fontFamily: 'pixelated', fontSize: 50}).setVisible(true);
        var texto2 = this.add.text(140, 175, 'Select your device', {fontFamily: 'pixelated', fontSize: 50}).setVisible(false);
        var texto3 = this.add.text(80, 175, 'Escolha o seu dispositivo', {fontFamily: 'pixelated', fontSize: 50}).setVisible(false);
        
        teclado = this.add.sprite(200, 400, "Teclado").setInteractive()
        .on("pointerover", () => {
            teclado2.setVisible(true);
        })
        .on("pointerout", () => {
            teclado2.setVisible(false);
        })
        .on("pointerdown", () => {
            teclado2.setVisible(true);
        })
        .on("pointerup", () => {
            plataforma = 0;
            this.scene.start("Menu");
            musicaMenu.play({volume: 0.8});
        });

        teclado2 = this.add.sprite(200, 400, "Teclado2").setVisible(false);
        
        movil = this.add.sprite(490, 400, "Movil").setInteractive()
        .on("pointerover", () => {
            movil2.setVisible(true);
        })
        .on("pointerout", () => {
            movil2.setVisible(false);
        })
        .on("pointerdown", () => {
            movil2.setVisible(true);
        })
        .on("pointerup", () => {
            movil2.setVisible(false);
            window.open('./Mobile.html');
        });

        movil2 = this.add.sprite(490, 400, "Movil2").setVisible(false);

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
                texto1.setVisible(true);
                texto2.setVisible(false);
                texto3.setVisible(false);
                if (language != 0){
                    language = 0;
                    sonidoBoton.play();
                }
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
                texto1.setVisible(false);
                texto2.setVisible(true);
                texto3.setVisible(false);
                if (language != 1){
                    language = 1; 
                    sonidoBoton.play();
                }
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
                texto1.setVisible(false);
                texto2.setVisible(false);
                texto3.setVisible(true);
                if (language != 2){
                    language = 2;
                    sonidoBoton.play();
                }
            });

        botonPOR2 = this.add.sprite(620, 620, "iconoBR2").setVisible(false);

        if (plataforma == 1){
            this.scene.start("Menu");
            musicaMenu.play({volume: 0.8});
        }
    }
}