var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "juego",
        width: 650,
        height: 650,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: [Preloader, Menu, Informacion, Ayuda, Creditos, SeleccionLvL, Nivel1, Nivel2, Nivel3, Nivel4, Nivel5, Nivel6, Pausa, Victoria, Derrota, Mobile]
};

var game = new Phaser.Game(config);

//INTERACTUABLES
var Aceptar;
var botonAyuda;
var botonAyuda2;
var botonCreditos;
var botonCreditos2;
var botonInformacion;
var botonInformacion2;
var botonJugar;
var botonJugar2;
var botonES;
var botonES2;
var botonEN;
var botonEN2;
var botonPOR;
var botonPOR2;
var Cancelar;
var Continuar;
var Continuar2;
var Logo;
var GameOverButton;
var victoryButton;
var menuButton;
var menuButton2;
var Volver;
var Salir;
var teclado;
var teclado2;
var movil;
var movil2;
var keyUP;
var keyDOWN;
var keyLEFT;
var keyRIGHT;
var keySB;
var pauseButton;
var pauseButton2;
var restart;
var restart2;
var flechaI;
var flechaI2;
var flechaD;
var flechaD2;
var botonSonido;
var botonSonido2;
var botonMute;
var botonMute2;
var flechaUP;
var flechaUP2;
var flechaDOWN;
var flechaDOWN2;
var flechaLEFT;
var flechaLEFT2;
var flechaRIGHT;
var flechaRIGHT2;
var botonSHOOT;
var botonSHOOT2;

//VALORES
var currentLevel;
var map;
var timerRatas;
var timer;
var reload;
var shoot;
var cursor;
var carril;
var infeccion;
var muerteRatas;
var valInfeccion;
var language = 0;
var plataforma;
var clase;
var cronometro;
var time;
var buttonDown;
var lvlState = 1;

//TEXTO
var textoMaiz;

//ESCENARIO
var fondoLVL;
var cartel;
var defensa;
var fondoPausa;
var Verificacion;
var reloj;
var temporizador;
var pag;
var candado2;
var candado3;
var candado4;
var candado5;
var candado6;

//ALIADOS/CONSTRUCCIONES
var personaje;
var Balas;
var bala;

//ENEMIGOS
var muerteRatas;
var Ratas;
var RataY;

//AUDIOS
var musicaIngame;
var musicaMenu;
var musicaVictoria;
var musicaDerrota;
var sonidoBoton;
var rataAhuyentada;
var hitRata;


var testing = 0;