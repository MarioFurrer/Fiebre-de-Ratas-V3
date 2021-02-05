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

            flechaI = this.add.sprite(25, 600, "flechaLEFT").setScale(1.5).setInteractive()
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

            flechaI2 = this.add.sprite(25, 600, "flechaLEFT2").setScale(1.5).setVisible(false);

            flechaD = this.add.sprite(625, 600, "flechaLEFT").setScale(1.5).setInteractive()
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

            flechaD2 = this.add.sprite(625, 600, "flechaLEFT2").setScale(1.5).setVisible(false);
            flechaD2.angle = 180;   

            if(language == 0){

                if(pag == 1){

                    this.add.text(100, 25, 'Fiebre Hemorrágica Argentina', {fontFamily: 'pixelated', fontSize: 39});

                    this.add.text(40, 100, 'La Fiebre Hemorrágica Argentina (FHA) es una enfermedad viral', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(270 , 130, 'aguda grave', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(25, 200, 'Es transmitida por el contacto directo con roedores o inhalación', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(160, 230, 'de excretas de roedores infectados', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(40, 310, 'Roedor: Calomys musculinus (Laucha manchada, laucha del maíz,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(260, 340, 'ratón maicero)', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.image(125, 420, "fotoRata");
                    this.add.image(325, 420, "fotoRata2");
                    this.add.image(525, 420, "fotoRata3");

                    this.add.text(45, 530, 'En Argentina está limitada a las provincias de Buenos Aires,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(125, 560, 'Córdoba, Santa Fe, Entre Ríos y de La Pampa', {fontFamily: 'pixelated', fontSize: 22});
                }

                if(pag == 2){

                    this.add.text(265, 25, 'Síntomas', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(165, 100, 'Tiempo de incubación: 1 a 2 semanas', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(30, 160, 'La enfermedad tiene un comportamiento estacional, con su mayor', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(120, 190, 'incidencia principalmente de marzo a octubre', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(15, 250, 'Es más frecuente en el sexo masculino, en las edades comprendidas', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(240, 280, 'entre los 15 y los 60', {fontFamily: 'pixelated', fontSize: 22});


                    this.add.text(20, 340, 'Los primeros síntomas incluyen fiebre, dolor de cabeza, debilidad,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(50, 370, 'desgano, dolores articulares y oculares, pérdida de apetito', {fontFamily: 'pixelated', fontSize: 22});


                    this.add.text(53, 430, 'Estos síntomas se intensifican produciéndose síntomas de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(68, 460, 'alteración vascular, renal, hematológica y neurológica,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(200, 490, 'choque y crisis convulsivas', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(160, 550, 'La mortalidad de la FHA alcanza el 30%', {fontFamily: 'pixelated', fontSize: 22});
                }

                if(pag == 3){

                    this.add.text(240, 25, 'Tratamiento', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(15, 75, 'El tratamiento incluye la aplicación de plasma inmune específico de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(40, 105, 'pacientes convalecientes en el término de 8 días después del', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(25, 135, 'comienzo de la enfermedad, es extremadamente efectivo y reduce', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(90, 165, 'la mortalidad al 1% si se comienza tempranamente', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(40, 205, 'La Ribavirina ha mostrado alguna ventaja en el tratamiento de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(195, 235, 'enfermedades por arenavirus', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(105, 285, 'Factores de riesgo y prevención', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(20, 335, 'La FHA afecta a la población rural, predominantemente agricultores', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(10, 365, 'del sexo masculino, lo que indica que esta actividad es un factor de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(45, 395, 'riesgo determinante de la infección al exponerse a material', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(150, 425, 'contaminado con excretas de roedores', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(50, 475, 'La vacuna Candid #1, producida por el Instituto Nacional de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(10, 505, 'Enfermedades Virales Humanas "Dr. Julio I Maiztegui" contra el virus', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(45, 535, 'Junin ha demostrado ser inocua, inmunogénica y con un 95,5%', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(255, 565, 'de efectividad', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(85, 595, 'También reacciona al virus Machupo y, por ende, ha sido', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(85, 625, 'considerada como tratamiento alternativo para la FHA', {fontFamily: 'pixelated', fontSize: 22});
                }
            }

            if(language == 1){

                if(pag == 1){

                    this.add.text(110, 25, 'Argentine hemorrhagic fever', {fontFamily: 'pixelated', fontSize: 39});

                    this.add.text(25, 120, 'Argentine Hemorrhagic Fever (AHF) is a serious acute viral disease', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(25, 200, 'It is transmitted by direct contact with rodents or inhalation of', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(220, 230, 'infected rodent excreta', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(13, 310, 'Rodent: Calomys musculinus (Spotted laucha, corn laucha, corn mouse)', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.image(125, 420, "fotoRata");
                    this.add.image(325, 420, "fotoRata2");
                    this.add.image(525, 420, "fotoRata3");

                    this.add.text(45, 530, 'In Argentina, it is limited to the provinces of Buenos Aires,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(115, 560, ' Cordoba, Santa Fe, Entre Rios and La Pampa', {fontFamily: 'pixelated', fontSize: 22});
                }

                if(pag == 2){

                    this.add.text(260, 25, 'Symptoms', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(190, 100, 'Incubation time: 1 to 2 weeks', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(45, 175, 'The disease has a seasonal behavior, with its highest incidence', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(190, 205, 'mainly from March to October', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(10, 280, 'It is more frequent in males, in the ages between 15 and 60 years', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(35, 355, 'Early symptoms include fever, headache, weakness, listlessness,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(165, 385, 'joint and eye pain, loss of appetite', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(30, 460, 'These symptoms are intensified producing symptoms of vascular,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(20, 490, 'renal, hematological and neurological alteration, shock and seizures', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(210, 565, 'FHA mortality reaches 30%', {fontFamily: 'pixelated', fontSize: 22});
                }

                if(pag == 3){

                    this.add.text(260, 25, 'Treatment', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(20, 75, 'Treatment includes the application of specific immune plasma from', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(15, 105, 'convalescent patients within 8 days after the onset of the disease,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(15, 135, 'is extremely effective and reduces mortality to 1% if started early', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(65, 195, 'Ribavirin has shown some advantage in the treatment of', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(245, 225, 'arenavirus diseases', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(145, 285, 'Risk factors and prevention', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(15, 345, 'FHA affects the rural population, predominantly male farmers, which', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(5, 375, 'indicates that this activity is a determining risk factor for infection', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(55, 405, 'when exposed to material contaminated with rodent excreta', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(13, 465, 'The Candid #1 vaccine, produced by the National Institute of Human', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(25, 495, 'Viral Diseases "Dr. Julio I Maiztegui" against the Junin virus has', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(65, 525, 'proven to be innocuous, immunogenic and 95.5% effective', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(65, 555, 'It also reacts to the Machupo virus and has therefore', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(90, 585, 'been considered an alternative treatment for FHB', {fontFamily: 'pixelated', fontSize: 22});
                }
                
            }
            if(language == 2){

                if(pag == 1){

                    this.add.text(100, 25, 'Febre Hemorrágica Argentina', {fontFamily: 'pixelated', fontSize: 39});

                    this.add.text(70, 100, 'A febre hemorrágica argentina (AHF) é uma doença viral', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(275 , 130, 'aguda grave', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(55, 200, 'É transmitido por contato direto com roedores ou inalação', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(150, 230, 'de excrementos de roedores infectados', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(30, 310, 'Roedor: Calomys musculinus (laucha manchada, percevejo do milho,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(265, 340, 'rato do milho)', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.image(125, 420, "fotoRata");
                    this.add.image(325, 420, "fotoRata2");
                    this.add.image(525, 420, "fotoRata3");

                    this.add.text(80, 530, 'Na Argentina limita-se às províncias de Buenos Aires,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(140, 560, 'Córdoba, Santa Fé, Entre Ríos e La Pampa', {fontFamily: 'pixelated', fontSize: 22});
                }

                if(pag == 2){

                    this.add.text(270, 25, 'Sintomas', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(170, 100, 'Tempo de incubação: 1 a 2 semanas', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(60, 160, 'A doença tem comportamento sazonal, com maior incidência', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(175, 190, 'principalmente de março a outubro', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(60, 250, 'É mais comum em homens, com idades entre 15 e 60 anos', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(40, 310, 'Os primeiros sintomas incluem febre, dor de cabeça, fraqueza,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(49, 340, 'apatia, dores nas articulações e nos olhos, perda de apetite', {fontFamily: 'pixelated', fontSize: 22});


                    this.add.text(65, 400, 'Esses sintomas são intensificados produzindo sintomas de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(81, 430, 'alteração vascular, renal, hematológica e neurológica,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(240, 460, 'choque e convulsões', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(170, 520, 'A mortalidade por FHA chega a 30%', {fontFamily: 'pixelated', fontSize: 22});
                }

                if(pag == 3){

                    this.add.text(250, 25, 'Tratamento', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(40, 75, 'O tratamento inclui a aplicação de plasma imune específico de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(30, 105, 'pacientes convalescentes em até 8 dias após o início da doença,', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(60, 135, 'é extremamente eficaz e reduz a mortalidade para 1% se', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(230, 165, 'iniciado precocemente', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(65, 215, 'A ribavirina mostrou alguma vantagem no tratamento de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(225, 245, 'doenças do arenavírus', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(115, 295, 'Fatores de risco e prevenção', {fontFamily: 'pixelated', fontSize: 35});

                    this.add.text(40, 345, 'A FHA atinge a população rural, predominantemente agricultores', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(25, 375, 'do sexo masculino, o que indica que essa atividade é um fator de', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(50, 405, 'risco determinante para infecção quando exposta a material', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(140, 435, 'contaminado com excrementos de roedores', {fontFamily: 'pixelated', fontSize: 22});

                    this.add.text(25, 485, 'A vacina Candid # 1, produzida pelo Instituto Nacional de Doenças', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(20, 515, 'Virais Humanas "Dr. Julio I Maiztegui" contra o vírus Junin, provou', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(150, 545, 'ser segura, imunogênica e 95,5% eficaz', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(60, 575, 'Também reage ao vírus de Machupo e, por isso, tem sido', {fontFamily: 'pixelated', fontSize: 22});
                    this.add.text(85, 605, 'considerado uma alternativa de tratamento para FHA', {fontFamily: 'pixelated', fontSize: 22});
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

            flechaI = this.add.sprite(30, 940, "flechaLEFT").setScale(2).setInteractive()
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

            flechaI2 = this.add.sprite(30, 940, "flechaLEFT2").setScale(2).setVisible(false);

            flechaD = this.add.sprite(620, 940, "flechaLEFT").setScale(2).setInteractive()
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

            flechaD2 = this.add.sprite(620, 940, "flechaLEFT2").setScale(2).setVisible(false);
            flechaD2.angle = 180;   

            if(language == 0){

                if(pag == 1){

                    this.add.text(90, 75, 'Fiebre Hemorrágica Argentina', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(40, 200, 'La Fiebre Hemorrágica Argentina (FHA) es una', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(150, 240, 'enfermedad viral aguda grave', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(50, 350, 'Es transmitida por el contacto directo con', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(35, 390, 'roedores o inhalación de excretas de roedores', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(270, 430, 'infectados', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(50, 530, 'Roedor: Calomys musculinus (Laucha manchada,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(125, 570, 'laucha del maíz, ratón maicero)', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.image(125, 670, "fotoRata");
                    this.add.image(325, 670, "fotoRata2");
                    this.add.image(525, 670, "fotoRata3");

                    this.add.text(40, 790, 'En Argentina está limitada a las provincias de', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(40, 830, 'Buenos Aires, Córdoba, Santa Fe, Entre Ríos y', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(250, 870, 'de La Pampa', {fontFamily: 'pixelated', fontSize: 30});
                }

                if(pag == 2){

                    this.add.text(260, 40, 'Síntomas', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(95, 150, 'Tiempo de incubación: 1 a 2 semanas', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(15, 230, 'La enfermedad tiene un comportamiento estacional,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 270, 'con su mayor incidencia principalmente de marzo', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(260, 310, 'a octubre', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(30, 390, 'Es más frecuente en el sexo masculino, en las', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(50, 430, 'edades comprendidas entre los 15 y los 60', {fontFamily: 'pixelated', fontSize: 30});


                    this.add.text(25, 510, 'Los primeros síntomas incluyen fiebre, dolor de', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(35, 550, 'cabeza, debilidad, desgano, dolores articulares', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(145, 590, 'y oculares, pérdida de apetito', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(40, 680, 'Estos síntomas se intensifican produciéndose', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(75, 720, 'síntomas de alteración vascular, renal,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(50, 760, 'hematológica y neurológica, choque y crisis', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(260, 800, 'convulsivas', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(85, 890, 'La mortalidad de la FHA alcanza el 30%', {fontFamily: 'pixelated', fontSize: 30});
                }

                if(pag == 3){

                    this.add.text(235, 30, 'Tratamiento', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(40, 90, 'El tratamiento incluye la aplicación de plasma', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(6, 130, 'inmune específico de pacientes convalecientes en el', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(35, 170, 'término de 8 días después del comienzo de la', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(17, 210, 'enfermedad, es extremadamente efectivo y reduce', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(15, 250, 'la mortalidad al 1% si se comienza tempranamente', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(30, 310, 'La Ribavirina ha mostrado alguna ventaja en el', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(50, 350, 'tratamiento de enfermedades por arenavirus', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(60, 410, 'Factores de riesgo y prevención', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(105, 470, 'La FHA afecta a la población rural,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(15, 510, 'predominantemente agricultores del sexo masculino,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(20, 550, 'lo que indica que esta actividad es un factor de', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(10, 590, 'riesgo determinante de la infección al exponerse a', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(35, 630, 'material contaminado con excretas de roedores', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(30, 690, 'La vacuna Candid #1, producida por el Instituto', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(5, 730, 'Nacional de Enfermedades Virales Humanas "Dr. Julio', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(6, 770, 'Maiztegui" contra el virus Junin ha demostrado ser', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(13, 810, 'inocua, inmunogénica y con un 95,5% de efectividad', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 850, 'También reacciona al virus Machupo y, por ende,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(90, 890, 'ha sido considerada como tratamiento', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(180, 930, 'alternativo para la FHA', {fontFamily: 'pixelated', fontSize: 30});
                }
            }

            if(language == 1){

                if(pag == 1){

                    this.add.text(100, 75, 'Argentine hemorrhagic fever', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(35, 200, 'Argentine Hemorrhagic Fever (AHF) is a serious', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(200, 240, 'acute viral disease', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(15, 350, 'It is transmitted by direct contact with rodents', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(70, 390, 'or inhalation of infected rodent excreta', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(60, 510, 'Rodent: Calomys musculinus (Spotted laucha,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(170, 550, 'corn laucha, corn mouse)', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.image(125, 650, "fotoRata");
                    this.add.image(325, 650, "fotoRata2");
                    this.add.image(525, 650, "fotoRata3");

                    this.add.text(35, 790, 'In Argentina, it is limited to the provinces of', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(30, 830, 'Buenos Aires, Cordoba, Santa Fe, Entre Rios and', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(280, 870, 'La Pampa', {fontFamily: 'pixelated', fontSize: 30});
                }

                if(pag == 2){

                    this.add.text(250, 40, 'Symptoms', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(140, 150, 'Incubation time: 1 to 2 weeks', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(100, 230, 'The disease has a seasonal behavior,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(85, 270, 'with its highest incidence mainly from', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(220, 310, 'March to October', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(140, 390, 'It is more frequent in males,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(90, 430, 'in the ages between 15 and 60 years', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(80, 510, 'Early symptoms include fever, headache,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(65, 550, 'weakness, listlessness, joint and eye pain,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(225, 590, 'loss of appetite', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(10, 680, 'These symptoms are intensified producing symptoms', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 720, 'of vascular, renal, hematological and neurological', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(140, 760, 'alteration, shock and seizures', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(165, 870, 'FHA mortality reaches 30%', {fontFamily: 'pixelated', fontSize: 30});
                }

                if(pag == 3){

                    this.add.text(250, 30, 'Treatment', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(40, 90, 'Treatment includes the application of specific', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(10, 130, 'immune plasma from convalescent patients within 8', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(11, 170, 'days after the onset of the disease, is extremely', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(85, 210, 'effective and reduces mortality to 1%', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(230, 250, 'if started early', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(60, 310, 'Ribavirin has shown some advantage in the', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(115, 350, 'treatment of arenavirus diseases', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(95, 410, 'Risk factors and prevention', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(30, 470, 'FHA affects the rural population, predominantly', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 510, 'male farmers, which indicates that this activity', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(60, 550, 'is a determining risk factor for infection', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(50, 590, 'when exposed to material contaminated with', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(240, 630, 'rodent excreta', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(25, 690, 'The Candid #1 vaccine, produced by the National', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(37, 730, 'Institute of Human Viral Diseases "Dr. Julio I ', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(40, 770, 'Maiztegui" against the Junin virus has proven ', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(20, 810, 'to be innocuous, immunogenic and 95.5% effective', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(45, 850, 'It also reacts to the Machupo virus and has ', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(150, 890, 'therefore been considered an ', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(145, 930, 'alternative treatment for FHB', {fontFamily: 'pixelated', fontSize: 30});
                }
                
            }
            if(language == 2){

                if(pag == 1){

                    this.add.text(95, 75, 'Febre Hemorrágica Argentina', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(60, 200, 'A febre hemorrágica argentina (AHF) é uma', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(170 ,240, 'doença viral aguda grave', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(90, 350, 'É transmitido por contato direto com', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(95, 390, 'roedores ou inalação de excrementos', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(183, 430, 'de roedores infectados', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(50, 530, 'Roedor: Calomys musculinus (laucha manchada,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(110, 570, 'percevejo do milho, rato do milho)', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.image(125, 670, "fotoRata");
                    this.add.image(325, 670, "fotoRata2");
                    this.add.image(525, 670, "fotoRata3");

                    this.add.text(75, 790, 'Na Argentina limita-se às províncias de', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(130, 830, 'Buenos Aires, Córdoba, Santa Fé,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(185, 870, 'Entre Ríos e La Pampa', {fontFamily: 'pixelated', fontSize: 30});
                }

                if(pag == 2){

                    this.add.text(270, 40, 'Sintomas', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(105, 170, 'Tempo de incubação: 1 a 2 semanas', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(65, 260, 'A doença tem comportamento sazonal, com', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(75, 300, 'maior incidência principalmente de março', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(280, 340, 'a outubro', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(55, 430, 'É mais comum em homens, com idades entre', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(260, 470, '15 e 60 anos', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(50, 560, 'Os primeiros sintomas incluem febre, dor de', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(15, 600, 'cabeça, fraqueza, apatia, dores nas articulações e', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(160, 640, 'nos olhos, perda de apetite', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(50, 730, 'Esses sintomas são intensificados produzindo', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(10, 770, 'sintomas de alteração vascular, renal, hematológica', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(115, 810, 'e neurológica, choque e convulsões', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(110, 900, 'A mortalidade por FHA chega a 30%', {fontFamily: 'pixelated', fontSize: 30});
                }

                if(pag == 3){

                    this.add.text(250, 30, 'Tratamento', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(65, 90, 'O tratamento inclui a aplicação de plasma', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(45, 130, 'imune específico de pacientes convalescentes', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(65, 170, 'em até 8 dias após o início da doença, é', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 210, 'extremamente eficaz e reduz a mortalidade para', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(160, 250, '1% se iniciado precocemente', {fontFamily: 'pixelated', fontSize: 30});0

                    this.add.text(75, 310, 'A ribavirina mostrou alguma vantagem no', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(95, 350, 'tratamento de doenças do arenavírus', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(85, 410, 'Fatores de risco e prevenção', {fontFamily: 'pixelated', fontSize: 40});

                    this.add.text(15, 470, 'A FHA atinge a população rural, predominantemente', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 510, 'agricultores do sexo masculino, o que indica que', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(25, 550, 'essa atividade é um fator de risco determinante ', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(75, 590, 'para infecção quando exposta a material', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(70, 630, 'contaminado com excrementos de roedores', {fontFamily: 'pixelated', fontSize: 30});

                    this.add.text(45, 690, 'A vacina Candid # 1, produzida pelo Instituto', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(30, 730, 'Nacional de Doenças Virais Humanas "Dr. Julio I ', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(53, 770, 'Maiztegui" contra o vírus Junin, provou ser', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(110, 810, 'segura, imunogênica e 95,5% eficaz', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(30, 850, 'Também reage ao vírus de Machupo e, por isso,', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(90, 890, 'tem sido considerado uma alternativa', {fontFamily: 'pixelated', fontSize: 30});
                    this.add.text(180, 930, 'de tratamento para FHA', {fontFamily: 'pixelated', fontSize: 30});
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