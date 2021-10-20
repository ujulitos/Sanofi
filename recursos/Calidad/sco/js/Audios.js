var volPage = 100;
var elRetardo;

function playAudio(cualAudio, delay, funcion, [parametro]) {
    // console.log('playAudio', cualAudio, delay, funcion, parametro);
    stopAll();
    if (delay == undefined) {
        delay = 0;
    }
    if (parametro == undefined) {
        parametro = 0;
    }

    elRetardo = setTimeout(function() {
        buzz.sounds[cualAudio].play();
    }, delay);

    if (funcion != undefined && funcion != 'repetir') {
        // console.log('funcion undefined', cualAudio, delay, funcion, parametro);
        buzz.sounds[cualAudio].unbind('ended');
        buzz.sounds[cualAudio].bind("ended", function(e) {
    onsole.log('los parametros de la funcion son = '+parametro);

            funcion(parametro);
        });
    }
    if (funcion == 'repetir') {
        // console.log('funcion repetir', buzz.sounds[cualAudio], delay, funcion, parametro);
        buzz.sounds[cualAudio].unbind('ended');
        buzz.sounds[cualAudio].bind("ended", function(e) {
            buzz.sounds[cualAudio].play();
        });
    }
}

// function terminaAudio(cualAudio, delay, funcion, parametro) {
//     // console.log('playAudio', cualAudio, delay, funcion, parametro);

// }

function playAll() {
    buzz.all().mute();
    buzz.all().play();
    setTimeout(function() {
        buzz.all().pause();
    }, 200);
    setTimeout(function() {
        buzz.all().setTime(0);
        buzz.all().unmute();
    }, 491);
}

function playOne() {
    // buzz.all().mute();
    // buzz.all().play();
    buzz.sounds[0].mute();
    buzz.sounds[0].play();
    setTimeout(function() {
        // buzz.all().pause();
        buzz.sounds[0].pause();
    }, 200);
    setTimeout(function() {
        // buzz.all().setTime(0);
        // buzz.all().unmute();
        buzz.sounds[0].setTime(0);
        buzz.sounds[0].unmute();
    }, 491);
    setTimeout(function() {
        grupoAudios.load();
    }, 1000);
}

function stopAll() {
    console.log('detieneAudio');
    clearTimeout(elRetardo);
    buzz.all().pause();
    buzz.all().setTime(0);
    audiosActivos = false;
}

function changeVolumen(volumens) {
    volPage = volumens;
    setVolumen();
}

function setVolumen() {
    buzz.all().setVolume(volPage);
}

$(document).ready(function() {
    setVolumen();

    grupoAudios.load();
    grupoAudios.bind("loadstart", function() {
        // grupoAudiosMin.load();
        // grupoAudiosMin.bind("loadstart", function() {
        // console.log('loadstart');
    });
    var cuantosAudios = buzz.sounds.length;
    // var cuantosAudios = 1;
    console.log('cuantosAudios', cuantosAudios);
    var contador = 0;
    // grupoAudiosMin.bind("loadeddata", function() {
    grupoAudios.bind("loadeddata", function() {
        contador++;
        // console.log('loadeddata', contador);
        if (contador >= cuantosAudios) {
            console.log('todos los audios cargados.');
            audios_cargados();
        }
    }).bind("error", function() {
        console.log('hubo un error');
    });
});
