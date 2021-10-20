/* Copyright Ideas4Learning 2016. http.//ideas4learning.com */
var lmsData;
var datos = new Object();
function call_data(){
    //lmsData = parent.lmsCall("GetValue", "cmi.suspend_data");
    parent.lmsCall("SetValue","cmi.core.lesson_status","incomplete");
    mixDatos();
}

/* <<<<<<<<<<<<<<< SOLO para pruebas >>>>>>>>>>>>>>>>>*/
//lmsData = "1;scores+83;estatus+e;tiempo+00:01:08;r1+3;r2+2;r3+3;r4+2;r5+1;r6+";
//lmsData = "1;scores<100;estatus<e;tiempo<00:32:05;r1<3;r2<2;r3<3;r4<2;r5<1;r6<1";
//lmsData = "1;scores<33;estatus<f;tiempo<00:00:25;r1<2;r2<3;r3<2;r4<1;r5<1;r6<1";
//lmsData = "3;scores<67<83<83;estatus<f<f<e;tiempo<00:00:24<00:00:24<00:00:24;r1<2<1<3;r2<1<2<2;r3<3<3<3;r4<2<2<2;r5<1<1<1;r6<1<1<";
//lmsData = "2;scores<60<30;estatus<f<e;tiempo<00:32:05<00:15:14;r1<1<3;r2<1<2;r3<3<1;r4<2<;r5<3<;r6<1<";
//lmsData = "2;scores<60<80;estatus<f<f;tiempo<00:32:05<00:15:14;r1<1<3;r2<1<2;r3<3<1;r4<2<2;r5<3<1;r6<1<2";
//lmsData = "2;scores<60<80;estatus<f<f;tiempo<00:32:05<00:15:14;r1<1<3;r2<1<2;r3<3<1;r4<2<2;r5<3<1;r6<1<2*1;scores<78;estatus<f;tiempo<00:50:11;r1<1;r2<1;r3<3;r4<2;r5<3;r6<1*2;scores<60<80;estatus<f<f;tiempo<00:32:05<00:15:14;r1<1<3;r2<1<2;r3<3<1;r4<2<2;r5<3<1;r6<1<2";
//lmsData = "1;scores<78;estatus<f;r1<1;r2<1;r3<3;r4<2;r5<3;r6<1";
lmsData = "";
//lmsData = undefined;
/* <<<<<<<<<<<<<<< SOLO para pruebas >>>>>>>>>>>>>>>>>*/

function mixDatos(){
    //console.log("Suspend Data: '"+ lmsData+"'");
    if (lmsData != undefined){
        if (lmsData == "") {
            intento = 1;
            contador = 1;
            puntaje = 0;
            estatus = "e";
            datos[indice] = new Array();
            datos[indice].intentos = 1;
            datos[indice].scores = new Array();
            datos[indice].scores[0] = "scores";
            datos[indice].scores[intento] = 0;
            datos[indice].status = new Array();
            datos[indice].status[0] = "estatus";
            datos[indice].status[intento] = "e";
            datos[indice].tiempo = new Array();
            datos[indice].tiempo[0] = "tiempo";
            resetTimer();
            datos[indice].tiempo[intento] = currentTime;
            datos[indice].preguntas = new Array();
            for(var i=1;i<=NoPreguntas;i++){
                datos[indice].preguntas[i] = new Array();
                datos[indice].preguntas[i][0] = "r"+i;
            }

        }else{
            var bloqueGral = lmsData.split("*");
            for(var i=0;i<bloqueGral.length;i++){
                datos[i] = new Array();
                var bloqueCadena = bloqueGral[i].split(";");
                //console.log(bloqueCadena);
                datos[i].intentos = bloqueCadena[0];
                datos[i].scores = new Array();
                datos[i].scores = bloqueCadena[1].split("+");
                datos[i].status = new Array();
                datos[i].status = bloqueCadena[2].split("+");
                datos[i].tiempo = new Array();
                datos[i].tiempo = bloqueCadena[3].split("+");
                datos[i].preguntas = new Array();
                for(var j=bloqueCadena.length-1;j>3;j--){
                    //console.log((j-3)+": "+bloqueCadena[j]);
                    datos[i].preguntas[j-3] = new Array();
                    datos[i].preguntas[j-3] = bloqueCadena[j].split("+");
                }
            }
            if(datos[indice] == undefined)
            {
                //console.log("indice no definido");
                intento = 1;
                contador = 1;
                puntaje = 0;
                estatus = "e";
                datos[indice] = new Array();
                datos[indice].intentos = 1;
                datos[indice].scores = new Array();
                datos[indice].scores[0] = "scores";
                datos[indice].scores[intento] = 0;
                datos[indice].status = new Array();
                datos[indice].status[0] = "estatus";
                datos[indice].status[intento] = "e";
                datos[indice].tiempo = new Array();
                datos[indice].tiempo[0] = "tiempo";
                resetTimer();
                datos[indice].tiempo[intento] = currentTime;
                datos[indice].preguntas = new Array();
                for(var i=1;i<=NoPreguntas;i++){
                    datos[indice].preguntas[i] = new Array();
                    datos[indice].preguntas[i][0] = "r"+i;
                }
            }else{
                intento = parseInt(datos[indice].intentos, 10);
                contador = NoPreguntas+1;
                puntaje = 0;
                var time = datos[indice].tiempo[intento].split(":");
                seconds = time[2];
                minutes = time[1];
                hours = time[0];
                startTime();
                //resetTimer();
                for(var i=NoPreguntas;i>=1;i--){
                    if(datos[indice].preguntas[i][intento] == undefined || datos[indice].preguntas[i][intento] == ""){
                        contador = i;
                    }
                    //console.log(datos[indice].preguntas[i][intento] + " - " + answers[i]);
                    if(datos[indice].preguntas[i][intento] == answers[i]){
                        puntaje++;
                    }
                }
            }
        }
    }else{
        parent.errorAPI();

            intento = 1;
            contador = 1;
            puntaje = 0;
            estatus = "e";
            datos[indice] = new Array();
            datos[indice].intentos = 1;
            datos[indice].scores = new Array();
            datos[indice].scores[0] = "scores";
            datos[indice].scores[intento] = 0;
            datos[indice].status = new Array();
            datos[indice].status[0] = "estatus";
            datos[indice].status[intento] = "e";
            datos[indice].tiempo = new Array();
            datos[indice].tiempo[0] = "tiempo";
            resetTimer();
            datos[indice].tiempo[intento] = currentTime;
            datos[indice].preguntas = new Array();
            for(var i=1;i<=NoPreguntas;i++){
                datos[indice].preguntas[i] = new Array();
                datos[indice].preguntas[i][0] = "r"+i;
            }
    }
    lanza_pregunta();
}
function enviaDatos(){
    var cadenaEnvio = "";
    var NoIndices = Object.size(datos);
    var puntajesTotales = new Array();
    var puntajeGLobalEnvio = 0;

    //console.log("No de Indices: "+NoIndices);
    for (i = 0; i < NoIndices; i++) {
        if(i!=0){
            cadenaEnvio = cadenaEnvio + "*";
        }
        cadenaEnvio = cadenaEnvio + datos[i].intentos + ";";
        for(j=0;j<datos[i].scores.length;j++){
            if(j==0){
                cadenaEnvio = cadenaEnvio + datos[i].scores[j];
            }else{
                cadenaEnvio = cadenaEnvio + "+"  + datos[i].scores[j];
            }
        }
        cadenaEnvio = cadenaEnvio + ";";
        for(j=0;j<datos[i].status.length;j++){
            if(j==0){
                cadenaEnvio = cadenaEnvio + datos[i].status[j];
            }else{
                cadenaEnvio = cadenaEnvio + "+"  + datos[i].status[j];
            }
        }
        cadenaEnvio = cadenaEnvio + ";";
        for(j=0;j<datos[i].tiempo.length;j++){
            if(j==0){
                cadenaEnvio = cadenaEnvio + datos[i].tiempo[j];
            }else{
                cadenaEnvio = cadenaEnvio + "+"  + datos[i].tiempo[j];
            }
        }
        //cadenaEnvio = cadenaEnvio + ";";
        for(j=1;j<datos[i].preguntas.length;j++){
            //console.log(datos[i].preguntas[j][0]);
            cadenaEnvio = cadenaEnvio + ";";
            for(k=0;k<=datos[i].intentos;k++){
                if(datos[i].preguntas[j][k] == undefined){
                    var resultado = "";
                }else{
                    var resultado = datos[i].preguntas[j][k];
                }
                if(k==0){
                    cadenaEnvio = cadenaEnvio + resultado;
                }else{
                    cadenaEnvio = cadenaEnvio + "+" + resultado;
                }
            }

        }
        var puntaje_maximo = 0;
        for (var j = 1; j<=datos[i].intentos; j++) {
            if(puntaje_maximo<parseInt(datos[i].scores[j], 10)) {
                puntaje_maximo = parseInt(datos[i].scores[j], 10);
            }
        }
        puntajeGLobalEnvio = puntajeGLobalEnvio + puntaje_maximo;
    }
    puntajeGLobalEnvio = Math.round(puntajeGLobalEnvio/parent.modulos);
    //console.log("Cadena enviada: "+cadenaEnvio);
    //console.log("Puntaje Global enviado: "+puntajeGLobalEnvio);
    parent.lmsCall("SetValue","cmi.suspend_data",cadenaEnvio);
    parent.lmsCall("SetValue","cmi.core.score.raw",puntajeGLobalEnvio);
    if(puntajeGLobalEnvio >= 80){
        parent.lmsCall("SetValue","cmi.core.lesson_status","passed");
    }else{
        parent.lmsCall("SetValue","cmi.core.lesson_status","failed");
    }
    var success = parent.lmsCall("Commit");
    if (!success){
        parent.errorAPI();
    }
}
function closeConection(){
    parent.lmsCall("SetValue","cmi.core.lesson_status","completed");
    parent.lmsCall("Finish");
}
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
