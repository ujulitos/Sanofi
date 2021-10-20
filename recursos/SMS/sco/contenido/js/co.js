/* Copyright Ideas4Learning 2020. http.//ideas4learning.com */

	function audioconimagen([[audios],[imagens],[efectos],[tiempos],[alpha],alterminar]){
            for (var a = 0; a <= arguments[0][1].length; a++) {
                
                if(arguments[0][4][a] == true){
                    
                    animacion_entrada($("#" + arguments[0][1][a]), arguments[0][2][a], .5, arguments[0][3][a],conviertealpha(arguments[0][1][a]));

                   }else{
                    
                       animacion_entrada($("#" + arguments[0][1][a]), arguments[0][2][a], .5, arguments[0][3][a]);

                   }
 
            }
                parent.playAudio(arguments[0][0][0], arguments[0][0][1],smg);
        
        
        function smg(){
        
            alterminar();
            
        }
        
        
        
        }
        
        function conviertealpha(laimagen){
            
        console.log("la imsgen transparente es la imagen ="+laimagen);
                    
              TweenMax.to($("#"+laimagen), 1, {autoAlpha:.3});
                   
                    $("#"+laimagen).css({
                           'cursor': 'default',
                            'opacity': '.5'
                    
                    });
        }


//---------------------------------------------------------------------------------------------------------------------

function botones1(botones, audio, visto, accion, dato, [audios],alterminar) {
            bloqesce = false;
            b1act = 0;
            b1tot = botones;
            aup = arguments[5];
            aupl = 0;
            aupl = arguments[5].length;
            console.log("los audios son  =" + arguments[5]);
            console.log("los audios son  =" + arguments[5][0]);
            console.log("botones totales =" + botones);
            console.log("al terminar  =" + alterminar);
    
            for (var a = 1; a <= botones; a++) {
                eval["aum" + a] = false;
                console.log("la variable aum" + a + "=" + eval["aum" + a]);
                activadob = 1;
                animacion_entrada($("#boton" + a), "default", .5, 0);
                $("#boton" + a).click(function() {
                    if ($(this).css('cursor') == 'pointer') {
                        cualBoton = parseInt($(this).attr("id").substr(5, 2));
                        TweenMax.killTweensOf($(this));
                        //TweenMax.killTweensOf($(this));

                        //$(this).hide();
                        if (visto == true) {
                            $(this).css({
                                'cursor': 'default',
                                'opacity': '1'
                            });
                        } else {
                            $(this).css({
                                'cursor': 'pointer',
                                'opacity': '1'
                            });
                        }
                        console.log("la variable aum" + cualBoton + "=" + eval["aum" + cualBoton]);
                        b1act = cualBoton;
                        console.log("b1act =" + b1act);
                        if (accion == "ir_pagina") {
                            parent.nextPage();
                        }
                        if (accion == "abrir_pop1") {
                            
                            console.log("entro en la opcion pop 1 alterminar = " +alterminar);

                            abreventanapop(cualBoton, audio, accion, alterminar);
                        }
                        if (accion == "abrir_pop2") {
                            abreventanapop(cualBoton, audio, accion, alterminar);
                        }
                        if (accion == "botones_estilo1") {
                            abreventanapop(cualBoton, audio, accion, alterminar);
                        }
                        if (accion == "descarga_pdf") {
                           descargapdf(dato,cualBoton,alterminar);
                        }
                        if (accion == "reproducir_audio") {

                        }
                    }
                });

            }
            activadesactivabotones(activadob,alterminar);
        }

        function abreventanapop(cualBoton, audio, accion, alterminar) {
            
            console.log("abre ventana pop alterminar  = " +alterminar);

             if (accion == "abrir_pop2") {
                  
                 
             }else if(accion == "botones_estilo1"){
   

             }else{
                 
                                           animacion_entrada($("#cortinapop"), "der_izq", 0, 0);
 
             }
            if (accion == "abrir_pop2") {
                for (var a = 1; a <= b1tot; a++) {
                    animacion_salida($("#pop" + a), "desaparece", 0);
                    console.log("botonactivo = " + b1act + "es distinto a" + a);
                    if (b1act != a && eval["aum" + a] == true) {
                        console.log("boton se deberia activar  = " + a);
                        $("#boton" + a).css({
                            'cursor': 'pointer',
                            'opacity': '1'
                        });
                    }
                }
            }
            animacion_entrada($("#pop" + cualBoton), "der_izq", .5, 0);

            if (audio == true) {
                if (eval["aum" + cualBoton] == true) {
                    if (accion == "abrir_pop2") {
                        parent.playAudio(aup[cualBoton - 1], 0, cambiacontenidospop2);
                    } else if(accion == "botones_estilo1"){
                                 
                              
                       }else{
                        parent.playAudio(aup[cualBoton - 1], 0, nada);
                        animacion_entrada($("#btn_cerrar"), "der_izq", .5, 0);
                        $("#btn_cerrar").css({
                            'cursor': 'pointer',
                            'opacity': '1'
                        });
                    }
                } else {
                    if (accion == "abrir_pop2") {
                        parent.playAudio(aup[cualBoton - 1], 0,cambiacontenidospop2(alterminar));
                        eval["aum" + cualBoton] = true;
                        //cambiacontenidospop2(alterminar);
                    } else if(accion == "botones_estilo1"){
                        
                       parent.playAudio(aup[cualBoton - 1], 0,cambiacontenidospop2(alterminar));
                     console.log("alterninar22222222222222 = "+alterminar);
    
                       //cambiacontenidospop2(alterminar);
                     }else{
                        parent.playAudio(aup[cualBoton - 1], 0, cerrarpop);
                        eval["aum" + cualBoton] = true;
                    }
                }
            } else {

                if (accion == "abrir_pop2"){

                }else if(accion == "botones_estilo1"){
                        cambiacontenidospop2();
                }else {
                    animacion_entrada($("#btn_cerrar"), "der_izq", .5, 0);
                    $("#btn_cerrar").css({
                        'cursor': 'pointer',
                        'opacity': '1'
                    });
                    activabotoncerrar(alterminar);
                }
            }
        }

        function cerrarpop() {
            animacion_entrada($("#btn_cerrar"), "der_izq", .5, 0);
            parpadea($("#btn_cerrar"), .6);
            console.log("actor =" + actor);
             activabotoncerrar(alterminar);
        }

        function activadesactivabotones(act) {
            if (eval["aum" + act] == true) {} else {
                parpadea($("#boton" + act), 0);
            }
        }

        function nada() {
            console.log("aqui no pasa nada");
        }
        
        function cambiacontenidospop2(alterminar) {
            if (b1tot == b1act && bloqesce == false) {
                //escenario();
                console.log("alterninar2777772222222222222 = "+alterminar);
               alterminar();
                bloqesce = true;
            } else {

            }
            activadesactivabotones(b1act + 1);
        }
        
        function descargapdf(dato,cualBoton){
            
            if( eval["aum" + cualBoton] == true){
               
               }else{
                   eval["aum" + cualBoton] = true;
                   //escenario();
                   alterminar();
               }
            window.open("docs/"+dato);
          
        }


function activabotoncerrar(alterminar){
    console.log("alterninar = "+alterminar);
        
////////////////////////////////////////////////////////// cerrerpop ////////////////////////////////////////////////////////
        $("#btn_cerrar").click(function() {
            if ($(this).css('cursor') == 'pointer') {
                TweenMax.killTweensOf($(this));
                $(this).hide();
                $(this).css({
                    'cursor': 'default',
                    'opacity': '1'
                });
            }
            animacion_salida($("#cortinapop"), "default", 0, 0);

            animacion_salida($("#btn_cerrar"), "default", 0, 0);
            animacion_salida(("#pop" + b1act), "default", 0, 0);

            $("#pop" + b1act).hide();
            $("#cortinapop").hide();


            console.log("b1act en cerrar  =" + b1act);
            console.log("b1tot en cerrar  =" + b1tot);

            if (b1tot == b1act && bloqesce == false) {
             alterminar();
                bloqesce = true;
            } else {

            }
            parent.playAudio(0, 0, nada);
            activadesactivabotones(b1act + 1);
        });
////////////////////////////////////////////////////////// cerrerpop ////////////////////////////////////////////////////////
}
        
        function nada() {
            console.log("aqui no pasa nada");
        }