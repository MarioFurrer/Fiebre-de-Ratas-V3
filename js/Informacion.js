class Informacion extends Phaser.Scene{
    constructor(){
        super("Informacion")
    }

    create(){

        if(plataforma == 0){

            this.add.image(325, 325, "Fondo");
            this.add.image(640, 350, "fondoOscurecido").setScale(3);

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

            flechaI = this.add.sprite(25, 610, "flecha").setScale(1.5).setInteractive()
            .on("pointerover", () => {
                flechaI2.setVisible(true);
            })
            .on("pointerout", () => {
                flechaI2.setVisible(false);
            })
            .on("pointerdown", () => {
                flechaI2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                if(pag == 2){
                    pag = 1;
                }
                else if(pag == 3){
                    pag = 2;
                }
                this.scene.restart(Informacion);
            });

            flechaI2 = this.add.sprite(25, 610, "flecha2").setScale(1.5).setVisible(false);

            flechaD = this.add.sprite(625, 610, "flecha").setScale(1.5).setInteractive()
            .on("pointerover", () => {
                flechaD2.setVisible(true);
            })
            .on("pointerout", () => {
                flechaD2.setVisible(false);
            })
            .on("pointerdown", () => {
                flechaD2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                if(pag == 1){
                    pag = 2;
                }
                else if(pag == 2){
                    pag = 3;
                }
                
                this.scene.restart(Informacion);
            });
            flechaD.angle = 180;

            flechaD2 = this.add.sprite(625, 610, "flecha2").setScale(1.5).setVisible(false);
            flechaD2.angle = 180;   

            if(language == 0){

                if(pag == 1){

                    this.add.bitmapText(120, 25, "pixelFont", 'Fiebre Hemorragica Argentina', 40);

                    this.add.bitmapText(40, 100, "pixelFont", 'La Fiebre Hemorragica Argentina (FHA) es una enfermedad viral', 25);
                    this.add.bitmapText(270 , 130, "pixelFont", 'aguda grave', 25);

                    this.add.bitmapText(40, 200, "pixelFont", 'Es transmitida por el contacto directo con roedores o inhalacion', 25),
                    this.add.bitmapText(160, 230, "pixelFont", 'de excretas de roedores infectados', 25);

                    this.add.bitmapText(40, 310, "pixelFont", 'Roedor: Calomys musculinus (Laucha manchada, laucha del maiz,', 25);
                    this.add.bitmapText(260, 340, "pixelFont", 'raton maicero)', 25);
                    this.add.image(125, 420, "fotoRata");
                    this.add.image(325, 420, "fotoRata2");
                    this.add.image(525, 420, "fotoRata3");

                    this.add.bitmapText(62, 530, "pixelFont", 'En Argentina esta limitada a las provincias de Buenos Aires,', 25);
                    this.add.bitmapText(125, 560, "pixelFont", 'Cordoba, Santa Fe, Entre Rios y de La Pampa', 25);
                }

                if(pag == 2){

                    this.add.bitmapText(270, 25, "pixelFont", 'Sintomas', 35);

                    this.add.bitmapText(180, 100, "pixelFont", 'Tiempo de incubacion: 1 a 2 semanas', 25);

                    this.add.bitmapText(30, 160, "pixelFont", 'La enfermedad tiene un comportamiento estacional, con su mayor', 25);
                    this.add.bitmapText(120, 190, "pixelFont", 'incidencia principalmente de marzo a octubre', 25);

                    this.add.bitmapText(25, 250, "pixelFont", 'Es mas frecuente en el sexo masculino, en las edades comprendidas', 25);
                    this.add.bitmapText(240, 280, "pixelFont", 'entre los 15 y los 60', 25);


                    this.add.bitmapText(30, 340, "pixelFont", 'Los primeros sintomas incluyen fiebre, dolor de cabeza, debilidad,', 25);
                    this.add.bitmapText(60, 370, "pixelFont", 'desgano, dolores articulares y oculares, perdida de apetito', 25);


                    this.add.bitmapText(63, 430, "pixelFont", 'Estos sintomas se intensifican produciendose sintomas de', 25);
                    this.add.bitmapText(73, 460, "pixelFont", 'alteracion vascular, renal, hematologica y neurologica,', 25);
                    this.add.bitmapText(205, 490, "pixelFont", 'choque y crisis convulsivas', 25);

                    this.add.bitmapText(160, 550, "pixelFont", 'La mortalidad de la FHA alcanza el 30%', 25);
                }

                if(pag == 3){

                    this.add.bitmapText(250, 25, "pixelFont", 'Tratamiento', 35);

                    this.add.bitmapText(40, 75, "pixelFont", 'El tratamiento incluye la aplicacion de plasma inmune especifico de', 24);
                    this.add.bitmapText(65, 105, "pixelFont", 'pacientes convalecientes en el termino de 8 dias despues del', 24);
                    this.add.bitmapText(35, 135, "pixelFont", 'comienzo de la enfermedad, es extremadamente efectivo y reduce', 24);
                    this.add.bitmapText(105, 165, "pixelFont", 'la mortalidad al 1 % si se comienza tempranamente', 24);

                    this.add.bitmapText(50, 205, "pixelFont", 'La Ribavirina ha mostrado alguna ventaja en el tratamiento de', 24);
                    this.add.bitmapText(200, 235, "pixelFont", 'enfermedades por arenavirus', 24);

                    this.add.bitmapText(128, 285, "pixelFont", 'Factores de riesgo y prevencion', 35);

                    this.add.bitmapText(35, 335, "pixelFont", 'La FHA afecta a la poblacion rural, predominantemente agricultores', 24);
                    this.add.bitmapText(37, 365, "pixelFont", 'del sexo masculino, lo que indica que esta actividad es un factor de', 24);
                    this.add.bitmapText(65, 395, "pixelFont", 'riesgo determinante de la infeccion al exponerse a material', 24);
                    this.add.bitmapText(150, 425, "pixelFont", 'contaminado con excretas de roedores', 24);

                    this.add.bitmapText(11, 475, "pixelFont", 'La vacuna Candid #1, producida por el Instituto Nacional de Enfermedades', 24);
                    this.add.bitmapText(50, 505, "pixelFont", 'Virales Humanas "Dr. Julio I Maiztegui" contra el virus Junin ha', 24);
                    this.add.bitmapText(30, 535, "pixelFont", 'demostrado ser inocua, inmunogenica y con un 95,5% de efectividad', 24);
                    this.add.bitmapText(80, 565, "pixelFont", 'Tambien reacciona al virus Machupo y, por ende, ha sido', 24);
                    this.add.bitmapText(85, 595, "pixelFont", 'considerada como tratamiento alternativo para la FHA', 24);
                }
            }

            if(language == 1){

                if(pag == 1){

                    this.add.bitmapText(120, 25, "pixelFont", 'Argentine hemorrhagic fever', 40);

                    this.add.bitmapText(30, 120, "pixelFont", 'Argentine Hemorrhagic Fever (AHF) is a serious acute viral disease', 25);

                    this.add.bitmapText(35, 200, "pixelFont", ' It is transmitted by direct contact with rodents or inhalation of', 25),
                    this.add.bitmapText(220, 230, "pixelFont", 'infected rodent excreta', 25);

                    this.add.bitmapText(13, 310, "pixelFont", 'Rodent: Calomys musculinus (Spotted laucha, corn laucha, corn mouse)', 25);
                    this.add.image(125, 420, "fotoRata");
                    this.add.image(325, 420, "fotoRata2");
                    this.add.image(525, 420, "fotoRata3");

                    this.add.bitmapText(65, 530, "pixelFont", 'In Argentina, it is limited to the provinces of Buenos Aires,', 25);
                    this.add.bitmapText(125, 560, "pixelFont", ' Cordoba, Santa Fe, Entre Rios and La Pampa', 25);
                }

                if(pag == 2){

                    this.add.bitmapText(260, 25, "pixelFont", 'Symptoms', 35);

                    this.add.bitmapText(195, 100, "pixelFont", 'Incubation time: 1 to 2 weeks', 25);

                    this.add.bitmapText(45, 175, "pixelFont", 'The disease has a seasonal behavior, with its highest incidence', 25);
                    this.add.bitmapText(190, 205, "pixelFont", 'mainly from March to October', 25);

                    this.add.bitmapText(35, 280, "pixelFont", 'It is more frequent in males, in the ages between 15 and 60 years', 25);

                    this.add.bitmapText(35, 355, "pixelFont", 'Early symptoms include fever, headache, weakness, listlessness,', 25);
                    this.add.bitmapText(170, 385, "pixelFont", 'joint and eye pain, loss of appetite', 25);


                    this.add.bitmapText(30, 460, "pixelFont", 'These symptoms are intensified producing symptoms of vascular,', 25);
                    this.add.bitmapText(25, 490, "pixelFont", 'renal, hematological and neurological alteration, shock and seizures', 25);

                    this.add.bitmapText(210, 565, "pixelFont", 'FHA mortality reaches 30%', 25);
                }

                if(pag == 3){

                    this.add.bitmapText(260, 25, "pixelFont", 'Treatment', 35);

                    this.add.bitmapText(30, 75, "pixelFont", 'Treatment includes the application of specific immune plasma from', 24);
                    this.add.bitmapText(35, 105, "pixelFont", 'convalescent patients within 8 days after the onset of the disease,', 24);
                    this.add.bitmapText(35, 135, "pixelFont", 'is extremely effective and reduces mortality to 1% if started early', 24);

                    this.add.bitmapText(75, 195, "pixelFont", 'Ribavirin has shown some advantage in the treatment of', 24);
                    this.add.bitmapText(240, 225, "pixelFont", 'arenavirus diseases', 24);

                    this.add.bitmapText(155, 285, "pixelFont", 'Risk factors and prevention', 35);

                    this.add.bitmapText(30, 345, "pixelFont", 'FHA affects the rural population, predominantly male farmers, which', 24);
                    this.add.bitmapText(37, 375, "pixelFont", 'indicates that this activity is a determining risk factor for infection', 24);
                    this.add.bitmapText(63, 405, "pixelFont", 'when exposed to material contaminated with rodent excreta', 24);

                    this.add.bitmapText(13, 465, "pixelFont", 'The Candid #1 vaccine, produced by the National Institute of Human Viral', 24);
                    this.add.bitmapText(20, 495, "pixelFont", 'Diseases "Dr. Julio I Maiztegui" against the Junín virus has proven to be', 24);
                    this.add.bitmapText(135, 525, "pixelFont", 'innocuous, immunogenic and 95.5% effective', 24);
                    this.add.bitmapText(70, 555, "pixelFont", 'It also reacts to the Machupo virus and has therefore been', 24);
                    this.add.bitmapText(135, 585, "pixelFont", 'considered an alternative treatment for FHB', 24);
                }
                
            }
            if(language == 2){

                if(pag == 1){

                    this.add.bitmapText(120, 25, "pixelFont", 'Febre Hemorragica Argentina', 40);

                    this.add.bitmapText(75, 100, "pixelFont", 'A febre hemorragica argentina (FHA) e uma doenca viral', 25);
                    this.add.bitmapText(270 , 130, "pixelFont", 'aguda grave', 25);

                    this.add.bitmapText(65, 200, "pixelFont", 'E transmitido por contato direto com roedores ou inalacao', 25),
                    this.add.bitmapText(150, 230, "pixelFont", 'de excrementos de roedores infectados', 25);

                    this.add.bitmapText(25, 310, "pixelFont", 'Roedor: Calomys musculinus (laucha manchada, percevejo do milho,', 25);
                    this.add.bitmapText(265, 340, "pixelFont", 'rato do milho)', 25);
                    this.add.image(125, 420, "fotoRata");
                    this.add.image(325, 420, "fotoRata2");
                    this.add.image(525, 420, "fotoRata3");

                    this.add.bitmapText(90, 530, "pixelFont", 'Na Argentina limita-se as provincias de Buenos Aires,', 25);
                    this.add.bitmapText(150, 560, "pixelFont", 'Cordoba, Santa Fe, Entre Rios e La Pampa', 25);
                }

                if(pag == 2){

                    this.add.bitmapText(270, 25, "pixelFont", 'Sintomas', 35);

                    this.add.bitmapText(170, 100, "pixelFont", 'Tempo de incubacao: 1 a 2 semanas', 25);

                    this.add.bitmapText(60, 160, "pixelFont", 'A doença tem comportamento sazonal, com maior incidência', 25);
                    this.add.bitmapText(160, 190, "pixelFont", 'principalmente de março a outubro', 25);

                    this.add.bitmapText(25, 250, "pixelFont", 'E mais frequente no sexo masculino, na faixa etaria de 15 a 60 anos', 25);

                    this.add.bitmapText(50, 310, "pixelFont", 'Os primeiros sintomas incluem febre, dor de cabeça, fraqueza,', 25);
                    this.add.bitmapText(65, 340, "pixelFont", 'apatia, dores nas articulações e nos olhos, perda de apetite', 25);


                    this.add.bitmapText(63, 400, "pixelFont", 'Esses sintomas sao intensificados produzindo sintomas de', 25);
                    this.add.bitmapText(75, 430, "pixelFont", 'alteracao vascular, renal, hematologica e neurologica,', 25);
                    this.add.bitmapText(240, 460, "pixelFont", 'choque e convulsoes', 25);

                    this.add.bitmapText(180, 520, "pixelFont", 'A mortalidade por FHA chega a 30%', 25);
                }

                if(pag == 3){

                    this.add.bitmapText(250, 25, "pixelFont", 'Tratamento', 35);

                    this.add.bitmapText(15, 75, "pixelFont", 'O tratamento inclui a aplicacao de plasma imune especifico de pacientes', 24);
                    this.add.bitmapText(10, 105, "pixelFont", 'convalescentes dentro de 8 dias apos o inicio da doenca, e extremamente', 24);
                    this.add.bitmapText(90, 135, "pixelFont", ' eficaz e reduz a mortalidade para 1% se iniciado cedo', 24);

                    this.add.bitmapText(75, 185, "pixelFont", 'A ribavirina mostrou alguma vantagem no tratamento de', 24);
                    this.add.bitmapText(225, 215, "pixelFont", 'doencas do arenavirus', 24);

                    this.add.bitmapText(145, 265, "pixelFont", 'Fatores de risco e prevencao', 35);

                    this.add.bitmapText(50, 315, "pixelFont", 'A FHA atinge a populacao rural, predominantemente agricultores', 24);
                    this.add.bitmapText(50, 345, "pixelFont", 'do sexo masculino, o que indica que essa atividade e um fator de', 24);
                    this.add.bitmapText(65, 375, "pixelFont", 'risco determinante para infeccao quando exposta a material', 24);
                    this.add.bitmapText(140, 405, "pixelFont", 'contaminado com excrementos de roedores', 24);

                    this.add.bitmapText(55, 455, "pixelFont", 'A vacina Candid #1, produzida pelo Instituto Nacional de Doencas', 24);
                    this.add.bitmapText(57, 485, "pixelFont", 'Virais Humanas "Dr. Julio I Maiztegui" contra o virus Junin tem', 24);
                    this.add.bitmapText(120, 515, "pixelFont", 'se mostrado inocua, imunogenica e 95,5% eficaz', 24);
                    this.add.bitmapText(90, 545, "pixelFont", 'Tambem reage ao virus Machupo e, por isso, tem sido', 24);
                    this.add.bitmapText(65, 575, "pixelFont", 'considerado uma alternativa de tratamento para a giberela', 24);
                }
            }
        }

        if(plataforma == 1){

            this.add.image(325, 500, "BGMobile");

            this.add.image(325, 500, "oscurecidoMobile");

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
                this.scene.stop("Informacion");
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

            flechaI = this.add.sprite(30, 950, "flecha").setScale(2).setInteractive()
            .on("pointerover", () => {
                flechaI2.setVisible(true);
            })
            .on("pointerout", () => {
                flechaI2.setVisible(false);
            })
            .on("pointerdown", () => {
                flechaI2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                if(pag == 2){
                    pag = 1;
                }
                else if(pag == 3){
                    pag = 2;
                }
                this.scene.restart(Informacion);
            });

            flechaI2 = this.add.sprite(30, 950, "flecha2").setScale(2).setVisible(false);

            flechaD = this.add.sprite(620, 950, "flecha").setScale(2).setInteractive()
            .on("pointerover", () => {
                flechaD2.setVisible(true);
            })
            .on("pointerout", () => {
                flechaD2.setVisible(false);
            })
            .on("pointerdown", () => {
                flechaD2.setVisible(true);
            })
            .on("pointerup", () => {
                sonidoBoton.play();
                if(pag == 1){
                    pag = 2;
                }
                else if(pag == 2){
                    pag = 3;
                }
                
                this.scene.restart(Informacion);
            });
            flechaD.angle = 180;

            flechaD2 = this.add.sprite(620, 950, "flecha2").setScale(2).setVisible(false);
            flechaD2.angle = 180;   

            if(language == 0){

                if(pag == 1){

                    this.add.bitmapText(120, 75, "pixelFont", 'Fiebre Hemorragica Argentina', 40);

                    this.add.bitmapText(40, 200, "pixelFont", 'La Fiebre Hemorragica Argentina (FHA) es una enfermedad viral', 25);
                    this.add.bitmapText(270 , 230, "pixelFont", 'aguda grave', 25);

                    this.add.bitmapText(40, 330, "pixelFont", 'Es transmitida por el contacto directo con roedores o inhalacion', 25),
                    this.add.bitmapText(160, 360, "pixelFont", 'de excretas de roedores infectados', 25);

                    this.add.bitmapText(40, 510, "pixelFont", 'Roedor: Calomys musculinus (Laucha manchada, laucha del maiz,', 25);
                    this.add.bitmapText(260, 540, "pixelFont", 'raton maicero)', 25);
                    this.add.image(125, 620, "fotoRata");
                    this.add.image(325, 620, "fotoRata2");
                    this.add.image(525, 620, "fotoRata3");

                    this.add.bitmapText(62, 830, "pixelFont", 'En Argentina esta limitada a las provincias de Buenos Aires,', 25);
                    this.add.bitmapText(125, 860, "pixelFont", 'Cordoba, Santa Fe, Entre Rios y de La Pampa', 25);
                }

                if(pag == 2){

                    this.add.bitmapText(270, 75, "pixelFont", 'Sintomas', 40);

                    this.add.bitmapText(180, 150, "pixelFont", 'Tiempo de incubacion: 1 a 2 semanas', 25);

                    this.add.bitmapText(30, 270, "pixelFont", 'La enfermedad tiene un comportamiento estacional, con su mayor', 25);
                    this.add.bitmapText(120, 300, "pixelFont", 'incidencia principalmente de marzo a octubre', 25);

                    this.add.bitmapText(25, 420, "pixelFont", 'Es mas frecuente en el sexo masculino, en las edades comprendidas', 25);
                    this.add.bitmapText(240, 450, "pixelFont", 'entre los 15 y los 60', 25);


                    this.add.bitmapText(30, 570, "pixelFont", 'Los primeros sintomas incluyen fiebre, dolor de cabeza, debilidad,', 25);
                    this.add.bitmapText(60, 600, "pixelFont", 'desgano, dolores articulares y oculares, perdida de apetito', 25);


                    this.add.bitmapText(63, 720, "pixelFont", 'Estos sintomas se intensifican produciendose sintomas de', 25);
                    this.add.bitmapText(73, 750, "pixelFont", 'alteracion vascular, renal, hematologica y neurologica,', 25);
                    this.add.bitmapText(205, 780, "pixelFont", 'choque y crisis convulsivas', 25);

                    this.add.bitmapText(160, 900, "pixelFont", 'La mortalidad de la FHA alcanza el 30%', 25);
                }

                if(pag == 3){

                    this.add.bitmapText(250, 75, "pixelFont", 'Tratamiento', 40);

                    this.add.bitmapText(40, 150, "pixelFont", 'El tratamiento incluye la aplicacion de plasma inmune especifico de', 24);
                    this.add.bitmapText(65, 180, "pixelFont", 'pacientes convalecientes en el termino de 8 dias despues del', 24);
                    this.add.bitmapText(35, 210, "pixelFont", 'comienzo de la enfermedad, es extremadamente efectivo y reduce', 24);
                    this.add.bitmapText(105, 240, "pixelFont", 'la mortalidad al 1 % si se comienza tempranamente', 24);

                    this.add.bitmapText(50, 320, "pixelFont", 'La Ribavirina ha mostrado alguna ventaja en el tratamiento de', 24);
                    this.add.bitmapText(200, 350, "pixelFont", 'enfermedades por arenavirus', 24);

                    this.add.bitmapText(128, 485, "pixelFont", 'Factores de riesgo y prevencion', 35);

                    this.add.bitmapText(35, 560, "pixelFont", 'La FHA afecta a la poblacion rural, predominantemente agricultores', 24);
                    this.add.bitmapText(37, 590, "pixelFont", 'del sexo masculino, lo que indica que esta actividad es un factor de', 24);
                    this.add.bitmapText(65, 620, "pixelFont", 'riesgo determinante de la infeccion al exponerse a material', 24);
                    this.add.bitmapText(150, 650, "pixelFont", 'contaminado con excretas de roedores', 24);

                    this.add.bitmapText(11, 780, "pixelFont", 'La vacuna Candid #1, producida por el Instituto Nacional de Enfermedades', 24);
                    this.add.bitmapText(50, 810, "pixelFont", 'Virales Humanas "Dr. Julio I Maiztegui" contra el virus Junin ha', 24);
                    this.add.bitmapText(30, 840, "pixelFont", 'demostrado ser inocua, inmunogenica y con un 95,5% de efectividad', 24);
                    this.add.bitmapText(80, 870, "pixelFont", 'Tambien reacciona al virus Machupo y, por ende, ha sido', 24);
                    this.add.bitmapText(85, 900, "pixelFont", 'considerada como tratamiento alternativo para la FHA', 24);
                }
            }

            if(language == 1){

                if(pag == 1){

                    this.add.bitmapText(120, 75, "pixelFont", 'Argentine Hemorrhagic Fever', 40);

                    this.add.bitmapText(30, 230, "pixelFont", 'Argentine Hemorrhagic Fever (AHF) is a serious acute viral disease', 25);

                    this.add.bitmapText(35, 330, "pixelFont", ' It is transmitted by direct contact with rodents or inhalation of', 25),
                    this.add.bitmapText(220, 360, "pixelFont", 'infected rodent excreta', 25);

                    this.add.bitmapText(13, 540, "pixelFont", 'Rodent: Calomys musculinus (Spotted laucha, corn laucha, corn mouse)', 25);
                    this.add.image(125, 620, "fotoRata");
                    this.add.image(325, 620, "fotoRata2");
                    this.add.image(525, 620, "fotoRata3");

                    this.add.bitmapText(65, 830, "pixelFont", 'In Argentina, it is limited to the provinces of Buenos Aires,', 25);
                    this.add.bitmapText(125, 860, "pixelFont", ' Cordoba, Santa Fe, Entre Rios and La Pampa', 25);
                }

                if(pag == 2){

                    this.add.bitmapText(260, 75, "pixelFont", 'Symptoms', 40);

                    this.add.bitmapText(195, 150, "pixelFont", 'Incubation time: 1 to 2 weeks', 25);

                    this.add.bitmapText(45, 270, "pixelFont", 'The disease has a seasonal behavior, with its highest incidence', 25);
                    this.add.bitmapText(190, 300, "pixelFont", 'mainly from March to October', 25);

                    this.add.bitmapText(35, 450, "pixelFont", 'It is more frequent in males, in the ages between 15 and 60 years', 25);

                    this.add.bitmapText(35, 570, "pixelFont", 'Early symptoms include fever, headache, weakness, listlessness,', 25);
                    this.add.bitmapText(170, 600, "pixelFont", 'joint and eye pain, loss of appetite', 25);


                    this.add.bitmapText(30, 750, "pixelFont", 'These symptoms are intensified producing symptoms of vascular,', 25);
                    this.add.bitmapText(25, 780, "pixelFont", 'renal, hematological and neurological alteration, shock and seizures', 25);

                    this.add.bitmapText(210, 900, "pixelFont", 'FHA mortality reaches 30%', 25);
                }

                if(pag == 3){

                    this.add.bitmapText(260, 75, "pixelFont", 'Treatment', 40);

                    this.add.bitmapText(30, 180, "pixelFont", 'Treatment includes the application of specific immune plasma from', 24);
                    this.add.bitmapText(35, 210, "pixelFont", 'convalescent patients within 8 days after the onset of the disease,', 24);
                    this.add.bitmapText(35, 240, "pixelFont", 'is extremely effective and reduces mortality to 1% if started early', 24);

                    this.add.bitmapText(75, 320, "pixelFont", 'Ribavirin has shown some advantage in the treatment of', 24);
                    this.add.bitmapText(240, 350, "pixelFont", 'arenavirus diseases', 24);

                    this.add.bitmapText(155, 485, "pixelFont", 'Risk factors and prevention', 40);

                    this.add.bitmapText(30, 590, "pixelFont", 'FHA affects the rural population, predominantly male farmers, which', 24);
                    this.add.bitmapText(37, 620, "pixelFont", 'indicates that this activity is a determining risk factor for infection', 24);
                    this.add.bitmapText(63, 650, "pixelFont", 'when exposed to material contaminated with rodent excreta', 24);

                    this.add.bitmapText(13, 780, "pixelFont", 'The Candid #1 vaccine, produced by the National Institute of Human Viral', 24);
                    this.add.bitmapText(20, 810, "pixelFont", 'Diseases "Dr. Julio I Maiztegui" against the Junín virus has proven to be', 24);
                    this.add.bitmapText(135, 840, "pixelFont", 'innocuous, immunogenic and 95.5% effective', 24);
                    this.add.bitmapText(70, 870, "pixelFont", 'It also reacts to the Machupo virus and has therefore been', 24);
                    this.add.bitmapText(135, 900, "pixelFont", 'considered an alternative treatment for FHB', 24);
                }
                
            }
            if(language == 2){

                if(pag == 1){

                    this.add.bitmapText(120, 75, "pixelFont", 'Febre Hemorragica Argentina', 40);

                    this.add.bitmapText(75, 200, "pixelFont", 'A febre hemorragica argentina (FHA) e uma doenca viral', 25);
                    this.add.bitmapText(270 , 230, "pixelFont", 'aguda grave', 25);

                    this.add.bitmapText(65, 330, "pixelFont", 'E transmitido por contato direto com roedores ou inalacao', 25),
                    this.add.bitmapText(150, 360, "pixelFont", 'de excrementos de roedores infectados', 25);

                    this.add.bitmapText(25, 510, "pixelFont", 'Roedor: Calomys musculinus (laucha manchada, percevejo do milho,', 25);
                    this.add.bitmapText(265, 540, "pixelFont", 'rato do milho)', 25);
                    this.add.image(125, 620, "fotoRata");
                    this.add.image(325, 620, "fotoRata2");
                    this.add.image(525, 620, "fotoRata3");

                    this.add.bitmapText(90, 830, "pixelFont", 'Na Argentina limita-se as provincias de Buenos Aires,', 25);
                    this.add.bitmapText(150, 860, "pixelFont", 'Cordoba, Santa Fe, Entre Rios e La Pampa', 25);
                }

                if(pag == 2){

                    this.add.bitmapText(270, 75, "pixelFont", 'Sintomas', 40);

                    this.add.bitmapText(170, 150, "pixelFont", 'Tempo de incubacao: 1 a 2 semanas', 25);

                    this.add.bitmapText(60, 270, "pixelFont", 'A doença tem comportamento sazonal, com maior incidência', 25);
                    this.add.bitmapText(160, 300, "pixelFont", 'principalmente de março a outubro', 25);

                    this.add.bitmapText(25, 435, "pixelFont", 'E mais frequente no sexo masculino, na faixa etaria de 15 a 60 anos', 25);

                    this.add.bitmapText(50, 570, "pixelFont", 'Os primeiros sintomas incluem febre, dor de cabeça, fraqueza,', 25);
                    this.add.bitmapText(65, 600, "pixelFont", 'apatia, dores nas articulações e nos olhos, perda de apetite', 25);


                    this.add.bitmapText(63, 720, "pixelFont", 'Esses sintomas sao intensificados produzindo sintomas de', 25);
                    this.add.bitmapText(75, 750, "pixelFont", 'alteracao vascular, renal, hematologica e neurologica,', 25);
                    this.add.bitmapText(240, 780, "pixelFont", 'choque e convulsoes', 25);

                    this.add.bitmapText(180, 900, "pixelFont", 'A mortalidade por FHA chega a 30%', 25);
                }

                if(pag == 3){

                    this.add.bitmapText(250, 75, "pixelFont", 'Tratamento', 40);

                    this.add.bitmapText(15, 150, "pixelFont", 'O tratamento inclui a aplicacao de plasma imune especifico de pacientes', 24);
                    this.add.bitmapText(10, 180, "pixelFont", 'convalescentes dentro de 8 dias apos o inicio da doenca, e extremamente', 24);
                    this.add.bitmapText(90, 210, "pixelFont", ' eficaz e reduz a mortalidade para 1% se iniciado cedo', 24);

                    this.add.bitmapText(75, 320, "pixelFont", 'A ribavirina mostrou alguma vantagem no tratamento de', 24);
                    this.add.bitmapText(225, 350, "pixelFont", 'doencas do arenavirus', 24);

                    this.add.bitmapText(145, 485, "pixelFont", 'Fatores de risco e prevencao', 40);

                    this.add.bitmapText(50, 560, "pixelFont", 'A FHA atinge a populacao rural, predominantemente agricultores', 24);
                    this.add.bitmapText(50, 590, "pixelFont", 'do sexo masculino, o que indica que essa atividade e um fator de', 24);
                    this.add.bitmapText(65, 620, "pixelFont", 'risco determinante para infeccao quando exposta a material', 24);
                    this.add.bitmapText(140, 650, "pixelFont", 'contaminado com excrementos de roedores', 24);

                    this.add.bitmapText(55, 780, "pixelFont", 'A vacina Candid #1, produzida pelo Instituto Nacional de Doencas', 24);
                    this.add.bitmapText(57, 810, "pixelFont", 'Virais Humanas "Dr. Julio I Maiztegui" contra o virus Junin tem', 24);
                    this.add.bitmapText(120, 840, "pixelFont", 'se mostrado inocua, imunogenica e 95,5% eficaz', 24);
                    this.add.bitmapText(90, 870, "pixelFont", 'Tambem reage ao virus Machupo e, por isso, tem sido', 24);
                    this.add.bitmapText(65, 900, "pixelFont", 'considerado uma alternativa de tratamento para a giberela', 24);
                }
            }
            
        }

        if(pag == 1){
            flechaI.setVisible(false).setInteractive(false);
        }
        if(pag == 3){
            flechaD.setVisible(false).setInteractive(false);
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