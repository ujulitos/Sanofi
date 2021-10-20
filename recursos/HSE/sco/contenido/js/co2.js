/* Copyright Ideas4Learning 2020. http.//ideas4learning.com */

altermin = nada;

estilbot1 = "";

cf = false;

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

        function botones1(botones, audio, visto, accion, dato, [audios],nomboton,alterminar,cortinafrente,[entradapops]) {
            bloqesce = false;
            b1act = 1;
            b1tot = botones;
            aup = arguments[5];
            aupl = 0;
            aupl = arguments[5].length;
            altermin = alterminar;
            ss = arguments[6].length;
            estilbot1 = accion;
            audbt1 = audio;
            console.log("los audios son  =" + arguments[5]);
            console.log("los audios son  =" + arguments[5][0]);
            console.log("botones totales =" + botones);      
            console.log("nombre de boton es =" + nomboton);
            console.log("entradapops  =" + arguments[9][0]);
            vep =arguments[9][0];

            cf = cortinafrente;
            
            
            for (var a = 1; a <= botones; a++) {
                eval["aum"+nomboton + a] = false;
                
                eval["aumcerrar"+nomboton + a] = false;

               if(vep == false){
                
                eval["entpop"+nomboton+a] = "default";

                  } else{
                eval["entpop"+nomboton+a] = arguments[9][a-1];

                  }
                
                eval["dato"+nomboton+a] = dato;

               console.log("entpop"+nomboton+a+" = "+eval["entpop"+nomboton+a]);

                
                console.log("la variable aum" + a + "=" + eval["aum"+nomboton+a]);
                activadob = 1;
                animacion_entrada($("#"+nomboton+a), "default", .5, 0);
                $("#"+nomboton+a).click(function() {
                    if ($(this).css('cursor') == 'pointer') {
                        cualBoton = parseInt($(this).attr("id").substr(ss, 2));
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
                        console.log("la variable aum" + cualBoton + "=" + eval["aum"+nomboton + cualBoton]);
                        b1act = cualBoton;
                        console.log("b1act =" + b1act);
                        if (accion == "ir_pagina") {
                            parent.nextPage();
                        }
                        if (accion == "abrir_pop1") {
                            abreventanapop(cualBoton, audio, accion, alterminar,nomboton);
                        }
                        if (accion == "abrir_pop2") {
                            abreventanapop(cualBoton, audio, accion, alterminar,nomboton);
                        }
                        if (accion == "botones_estilo1") {
                            abreventanapop(cualBoton, audio, accion, alterminar,nomboton);
                        }
                        if (accion == "descarga_pdf") {
                           descargapdf(dato,cualBoton,alterminar);
                        }
                        if (accion == "siguientepaso") {
                             $(this).hide();
                           alterminar();
                        }
                    }
                });

            }
            activadesactivabotones(activadob,nomboton,alterminar);
        }

        function abreventanapop(cualBoton, audio, accion, alterminar,nomboton) {
            
            //console.log("la funcion al terminar  = "+ alterminar);
            
            if (accion == "abrir_pop2") {
                for (var a = 1; a <= b1tot; a++) {
                    animacion_salida($("#pop"+nomboton+ a), "desaparece", 0);
                    console.log("botonactivo = " + b1act + "es distinto a" + a);
                    if (b1act != a && eval["aum"+nomboton + a] == true) {
                        console.log("boton se deberia activar  = " + a);
                        $("#"+nomboton+a).css({
                            'cursor': 'pointer',
                            'opacity': '1'
                        });
                    }
                }
            }
            
             if (accion == "abrir_pop1") {
        animacion_entrada($("#cortina"+nomboton), "default", .5, 0);
        
        if(cf == true){
            
           animacion_entrada($("#cortinafrente"+nomboton), "default", .5, 0);

           }         
         

             }
            animacion_entrada($("#pop"+nomboton +cualBoton),    eval["entpop"+nomboton+cualBoton], .5, 0);
            
            if (audio == true) {
            console.log("------------------ entro si el audio es ============== true----------------------------");

                if (eval["aum"+nomboton+ cualBoton] == true) {
                    
                console.log("------------------ entro si el audio es  aum"+nomboton+cualBoton+"  ============== true----------------------------");

                    
                    if (accion == "abrir_pop2") {
                        parent.playAudio(aup[cualBoton - 1], 0, cambiacontenidospop2,nomboton);
                        
                        if(eval["dato"+nomboton+cualBoton] == false){
                           
                           
                           }else{
                               
                                    animacion_entrada($("#cortina"+nomboton), "default", .5, 0);
   
                           
                           }
                        
                    } else if(accion == "botones_estilo1"){
                              
                              
                              
                              
                       }else{
                        
                        parent.playAudio(aup[cualBoton - 1], 0, nada);
                        animacion_entrada($("#btn_cerrar"), "der_izq", .5, 0);//-------------------------------------------
                        $("#btn_cerrar").css({
                            'cursor': 'pointer',
                            'opacity': '1'
                        });  
                           activacerrarpop();
                    }
                } else {
                    
        console.log("------------------ entro si el audio es  aum"+nomboton+cualBoton+"  ============== false----------------------------");

                    if (accion == "abrir_pop2") {
                        parent.playAudio(aup[cualBoton - 1], 0, cambiacontenidospop2,nomboton);
                        eval["aum"+nomboton+ cualBoton] = true;
                        
                            if(eval["dato"+nomboton+cualBoton] == false){
                           
                           
                           }else{
                               
                                     animacion_entrada($("#cortina"+nomboton), "default", .5, 0);
  
                           
                           }
                    } else if(accion == "botones_estilo1"){
                        console.log("------------------ estilo 1 localizadorrrrrrr----------------------------");
                       parent.playAudio(aup[cualBoton - 1], 0, cambiacontenidospop2,nomboton);
                        
           
                     }else{
                         
                     console.log("------------------ pop1 localizadorrrrrrr con audioooooooooooooooooo----------------------------");
 
                            if(eval["dato"+nomboton+cualBoton] == "extra"){
                                                        parent.playAudio(aup[cualBoton - 1], 0);
                                                        extraslide(cerrarpop,nomboton);
                            }else{
                                
                                                      parent.playAudio(aup[cualBoton - 1], 0, cerrarpop,nomboton);
  
                            }
                         
                         
                         
                        
                    }
                }
            } else {

                if (accion == "abrir_pop2"){

                }else if(accion == "botones_estilo1"){
                        cambiacontenidospop2(alterminar,nomboton);
                }else {
                    animacion_entrada($("#btn_cerrar"), "der_izq", .5, 0);//-------------------------------------------
                    $("#btn_cerrar").css({
                        'cursor': 'pointer',
                        'opacity': '1'
                    }); 
                    
                    cerrarpop(nomboton);
                    //activacerrarpop(altermin,nomboton);
                }
            }
        }

        function cerrarpop(nomboton) {
            animacion_entrada($("#btn_cerrar"), "der_izq", .5, 0);//-------------------------------------------
            
            if (eval["aum"+nomboton+ b1act] == true) {
                
            } else {
                  parpadea($("#btn_cerrar"), .6);
                eval["aum" +nomboton +cualBoton] = true;
         
            }

            console.log("actor =" + actor);
            activacerrarpop(altermin,nomboton);
        }

        function activadesactivabotones(b1act,nomboton) {
            if (eval["aum"+nomboton+ b1act] == true) {
                
            } else {
                
            console.log("parpadea boton  ="+nomboton+b1act );
                
                if(estilbot1 == "abrir_pop1"){
                    
                    if( audbt1 == true){
                       
                       }else{
                           
                        eval["aum"+nomboton+ b1act] = true; 
                       }
                   //eval["aum"+nomboton+ b1act] = true;
                    
                   }else{
                       
                   }
                
                
                parpadea($("#"+nomboton+ b1act), 0);
            }
        }

        function nada() {
            console.log("aqui no pasa nada");
        }
        
        function cambiacontenidospop2(nomboton) {
            
            console.log("entra contenidos pop 22222222222222 nomboton = "+nomboton);

            
            if (b1tot == b1act && bloqesce == false) {
                altermin();
                bloqesce = true;
                            console.log("termina todoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");

            } else {

            }
            console.log("tiene que entrar en activaaaaa y descativa botonesssssssssssssssssss");
            
            console.log("activabotones ="+b1act+1 );

            
            activadesactivabotones(b1act+1,nomboton);
        }
        
        function descargapdf(dato,cualBoton,alterminar,nomboton){
            
            if( eval["aum"+nomboton+cualBoton] == true){
               
               }else{
                   eval["aum" +nomboton +cualBoton] = true;
                   alterminar();  
               }
            window.open("docs/"+dato);
          
        } 
////////////////////////////////////////////////////////// cerrerpop ////////////////////////////////////////////////////////
        

function activacerrarpop(altermin,nomboton){
    

            $("#btn_cerrar").click(function() {
            if ($(this).css('cursor') == 'pointer') {
                TweenMax.killTweensOf($(this));
                $(this).hide();
                $(this).css({
                    'cursor': 'default',
                    'opacity': '1'
                });
            }
            eval["aumcerrar"+nomboton + b1act] = true;
            animacion_salida($("#btn_cerrar"), "default", 0, 0);
            animacion_salida(("#pop"+nomboton+b1act), "default", 0, 0);
            animacion_salida($("#cortina"+nomboton), "default", 0, 0);
             


            $("#pop"+nomboton + b1act).hide();
            $("#cortina"+nomboton).hide();
                
                  if(cf == true){
                    $("#cortinafrente"+nomboton).hide();
                     animacion_salida($("#cortinafrente"+nomboton), "default", 0, 0);
                  }
                      



            console.log("b1act en cerrar  =" + b1act);
            console.log("b1tot en cerrar  =" + b1tot);

            if (b1tot == b1act && bloqesce == false) {
                
                   if(audbt1 == true){
                        parent.playAudio(0, 0, nada);
                   }else{
                       altermin(); 
                        bloqesce = true;
                   }
               
               
                
               console.log("el boton cerrar activa los ecsenarios");

            } else {
               console.log("el boton cerrar no se activan los ecsneariosssssssss");
              
                if(audbt1 == true){
                parent.playAudio(0, 0, nada);

                   }
           
                
                if(bloqesce == false){
                    activadesactivabotones(b1act+1,nomboton);

                   }else{
                   
                   }

            }
          
            });


}


function sinfuncion(){
    
    
}


////////////////////////////////////////////////////////// cerrerpop ////////////////////////////////////////////////////////
        function nada() {
            
            if(b1tot == b1act && bloqesce == false){
                
              altermin(); 
                 bloqesce = true;
            }
            console.log("aqui no pasa nada");
        }