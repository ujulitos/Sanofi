/* Copyright Ideas4Learning 2016. http.//ideas4learning.com */
var styleVersions = new Array("-ms-", "-webkit-", "-moz-", "-o-", "");
var scalePage = 1;
var pageHeight = 560;
var pegeWidth = 1024;
var cargandoHeight = 50;
var cargandoWidth = 50;


if (parent.course != undefined) {
    volPage = parent.soundVolume;
}

function cacularEscala() {
    $('#btnAudio').attr('_origeny', "496");
    var contentHeight = $(document).height();
    var contentWidth = $(document).width();
    var _scaleX = contentWidth / pegeWidth;
    var _scaleY = contentHeight / pageHeight;
    if (_scaleX <= _scaleY) {
        scalePage = _scaleX;
    } else {
        scalePage = _scaleY;
    }
    if (scalePage >= 1) {
        scalePage = 1;
    }

}

function incrustaID(objeto, ID) {
    objeto.attr("_id", ID);
}

function ajustarEscenario() {
    $('#contenido').height(pageHeight * scalePage);
    $('#contenido').css("width", (pegeWidth * scalePage) + "px");
    for (var i = 0; i <= styleVersions.length - 1; i++) {
        $('#contenido').css(styleVersions[i] + "transform-origin", "0 0");
    }
    $('#cargando').css({
        "top": (((pageHeight * scalePage) / 2) - (cargandoHeight / 4)) + "px",
        "left": (((pegeWidth * scalePage) / 2) - (cargandoWidth / 1)) + "px",
        "-ms-transform": "scale(" + scalePage + "," + scalePage + ")",
        "-webkit-transform": "scale(" + scalePage + "," + scalePage + ")",
        "transform": "scale(" + scalePage + "," + scalePage + ")"
    });
}

function inicializar(objeto, Test) {

    objeto.css("top", (parseInt(objeto.attr("_origeny")) * scalePage) + "px");
    objeto.css("left", (parseInt(objeto.attr("_origenx")) * scalePage) + "px");
    for (var i = 0; i <= styleVersions.length - 1; i++) {
        objeto.css(styleVersions[i] + "transform", "scale(" + scalePage + ", " + scalePage + ")");
        objeto.css(styleVersions[i] + "transform-origin", "0 0");
    }

    if (Test) {
        objeto.css("opacity", "1");
        objeto.css("display", "block");
    } else {
        objeto.css("opacity", "0");
        objeto.css("display", "none");
    }

    cambiaSubtitulos(parent.haySubtitulos);
}

function parpadea(elemento, retardo) {
    if (retardo == undefined) {
        retardo = 0;
    }
    elemento.show();
    TweenMax.to(elemento, .3, {
        alpha: 1,
        delay: retardo
    });
    TweenMax.to(elemento, .5, {
        alpha: 0.2,
        yoyo: true,
        repeat: -1,
        ease: Sine.easeIn,
        delay: (retardo + 0.5)
    });

    setTimeout(function() {
        elemento.css({
            'cursor': 'pointer'
        });
    }, (retardo * 1000));
}

function terminarPantalla() {
    if (parent.course != undefined) {
        parent.alert_next();
    }
    console.log("Termina Pantalla");
}

function salen_subtitulos() {
    animacion_salida($("#img_subts_00, #img_subts_01, #img_subts_01_1, #img_subts_01_2, #img_subts_01_3, #img_subts_01_4, #img_subts_01_5, #img_subts_02, #img_subts_02_1, #img_subts_02_2, #img_subts_02_3, #img_subts_02_4, #img_subts_02_5, #img_subts_03, #img_subts_03_1, #img_subts_03_2, #img_subts_03_3, #img_subts_03_4, #img_subts_03_5, #img_subts_04, #img_subts_04_1, #img_subts_04_2, #img_subts_04_3, #img_subts_04_4, #img_subts_04_5, #img_subts_05, #img_subts_05_1, #img_subts_05_2, #img_subts_05_3, #img_subts_05_4, #img_subts_05_5, #img_subts_06, #img_subts_06_1, #img_subts_06_2, #img_subts_06_3, #img_subts_06_4, #img_subts_06_5, #img_subts_07, #img_subts_07_1, #img_subts_07_2, #img_subts_07_3, #img_subts_07_4, #img_subts_07_5, #img_subts_08, #img_subts_08_1, #img_subts_08_2, #img_subts_08_3, #img_subts_08_4, #img_subts_08_5, #img_subts_09, #img_subts_09_1, #img_subts_09_2, #img_subts_09_3, #img_subts_09_4, #img_subts_09_5, #img_subts_10, #img_subts_10_1, #img_subts_10_2, #img_subts_10_3, #img_subts_10_4, #img_subts_10_5, #img_subts_11, #img_subts_12, #img_subts_13, #img_subts_14, #img_subts_15, #img_subts_16, #img_subts_17, #img_subts_18, #img_subts_19, #img_subts_20, #img_subts_21, #img_subts_22, #img_subts_23, #img_subts_24, #img_subts_25, #img_subts_26, #img_subts_27, #img_subts_28, #img_subts_29, #img_subts_30"), "derecha_izquierda", 0);
}

function animacion_entrada(objeto, tipo, velocidad, retardo, funcion_sigue) {
    //tipos de animación: "default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda", "ampliar", "reducir" */

    TweenMax.killTweensOf(objeto);
    if (bounce) {
        bounce.remove();
    }

    if (velocidad == undefined) {
        velocidad = 1;
    }
    if (tipo == undefined) {
        tipo = "default";
    }
    if (retardo == undefined) {
        retardo = 0;
    }
    if (tipo == "aleatorio") {
        tipo = animaciones[random(animaciones.length - 1)];
    }
    if (funcion_sigue == undefined) {
        funcion_sigue = null;
    }

    var bounce = new Bounce();
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izq_der", "der_izq", "gira_arriba_abajo", "rebota", "rebota_arriba_abajo", "rebota_izq_der", "rebota_der_izq", "rebota_abajo_arriba", "explosion_clic");
    objeto.css("display", "block");


    switch (tipo) {

        case "default":
            TweenMax.to(objeto, velocidad, {
                alpha: 1,
                ease: Quart.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });
            break;

        case "arriba_abajo":
            TweenMax.fromTo(objeto, velocidad, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage) - 80
            }, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });
            break;
        case "abajo_arriba":
            TweenMax.fromTo(objeto, velocidad, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage) + 80
            }, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });
            break;
        case "izq_der":
            TweenMax.fromTo(objeto, velocidad, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage) - 150
            }, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });
            break;
        case "der_izq":
            TweenMax.fromTo(objeto, velocidad, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage) + 150
            }, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });
            break;

        case "gira_arriba_abajo": //solo para objetos pequeños como botones

            TweenMax.fromTo(objeto, velocidad, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage) - 300
            }, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage),
                rotation: 1440, //vueltas 4 --1= 380
                transformOrigin: "50% 50%",
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });


            break;


        case "rebota": //ya tiene efecto de gelatina predeterminado
            console.log('objeto', objeto.attr("id"));

            var topDelObjeto = $('#' + objeto.attr('id')).position().top;
            var leftDelObjeto = $('#' + objeto.attr('id')).position().left;
            var altoDelObjeto = parseInt($('#' + objeto.attr('id')).height() * scalePage);
            var anchoDelObjeto = parseInt($('#' + objeto.attr('id')).width() * scalePage);
            console.log('objeto', objeto.attr('id'), topDelObjeto, leftDelObjeto, altoDelObjeto, anchoDelObjeto);

            for (var i = 0; i <= styleVersions.length - 1; i++) {
                objeto.css(styleVersions[i] + "transform", "scale(" + scalePage + ", " + scalePage + ")");
                objeto.css(styleVersions[i] + "transform-origin", "center center");
            }

            TweenMax.fromTo(objeto, velocidad, {}, {
                //
                // top: (topDelObjeto - (altoDelObjeto / 2)),
                // left: (leftDelObjeto - (anchoDelObjeto / 2)),
                //     transformOrigin: "50% 50%",
                //     alpha: 1,
                //     ease: Back.easeOut,
                delay: (retardo + 0.1)
            });



            setTimeout(function() {
                objeto.css({
                    "display": "block"
                }).animate({
                    "opacity": "1"
                }, 400);
            }, (retardo * 1000));


            // bounce
            bounce
                .scale({
                    from: {
                        x: 0,
                        y: 0.3
                    },
                    to: {
                        x: (1 * scalePage),
                        y: (1 * scalePage)
                    },

                    easing: "bounce",
                    duration: 2000,
                    delay: (retardo * 1000),
                    bounces: 20,
                    stiffness: 3
                })
                .applyTo(document.querySelectorAll(('#' + objeto.attr('id')))).then(function() {
                    bounce.remove();
                    console.log("Animación completa");
                });

            break;


        case "rebota_arriba_abajo":
            TweenMax.fromTo(objeto, velocidad, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage) - 300
            }, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue,
                transformOrigin: "50% 50%"

            });
            setTimeout(function() {
                objeto.css({
                    "display": "block"
                }).animate({
                    "opacity": "1"
                }, 400);
            }, (retardo * 1000));

            // var bounce = new Bounce();
            bounce
                .scale({
                    from: {
                        x: 1 * scalePage,
                        y: 1 * scalePage
                    },
                    to: {
                        x: 1.5 * scalePage,
                        y: 1.7 * scalePage
                    },
                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .scale({
                    from: {
                        x: 1,
                        y: 1
                    },
                    to: {
                        x: 1.7,
                        y: 1.5
                    },

                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .applyTo(document.querySelectorAll(('#' + objeto.attr('id')))).then(function() {
                    console.log("Animación completa");
                    bounce.remove();
                });
            break;

        case "rebota_izq_der":
            TweenMax.fromTo(objeto, velocidad, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage) - 270
            }, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue,
                transformOrigin: "50% 50%"
            });

            setTimeout(function() {
                objeto.css({
                    "display": "block"
                }).animate({
                    "opacity": "1"
                }, 400);
            }, (retardo * 1000));

            // var bounce = new Bounce();
            bounce
                .scale({
                    from: {
                        x: 1 * scalePage,
                        y: 1 * scalePage
                    },
                    to: {
                        x: 1.5 * scalePage,
                        y: 1.7 * scalePage
                    },

                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .scale({
                    from: {
                        x: 1,
                        y: 1
                    },
                    to: {
                        x: 1.7,
                        y: 1.5
                    },

                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .applyTo(document.querySelectorAll(('#' + objeto.attr('id')))).then(function() {
                    console.log("Animación completa");
                    bounce.remove();
                });

            break;

        case "rebota_der_izq":

            TweenMax.fromTo(objeto, velocidad, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage) + 270
            }, {
                left: (parseInt(objeto.attr("_origenx")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue,
                transformOrigin: "50% 50%"
            });

            setTimeout(function() {
                objeto.css({
                    "display": "block"
                }).animate({
                    "opacity": "1"
                }, 400);
            }, (retardo * 1000));

            // var bounce = new Bounce();
            bounce
                .scale({
                    from: {
                        x: 1 * scalePage,
                        y: 1 * scalePage
                    },
                    to: {
                        x: 1.5 * scalePage,
                        y: 1.7 * scalePage
                    },

                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .scale({
                    from: {
                        x: 1,
                        y: 1
                    },
                    to: {
                        x: 1.7,
                        y: 1.5
                    },

                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .applyTo(document.querySelectorAll(('#' + objeto.attr('id')))).then(function() {
                    console.log("Animación completa");
                    bounce.remove();
                });
            break;

        case "rebota_abajo_arriba":

            bounce.remove();


            TweenMax.fromTo(objeto, velocidad, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage) + 300
            }, {
                top: (parseInt(objeto.attr("_origeny")) * scalePage),
                alpha: 1,
                ease: Back.easeOut,
                delay: retardo,
                onComplete: funcion_sigue,
                transformOrigin: "50% 50%"

            });

            setTimeout(function() {

                objeto.css({
                    "display": "block"
                }).animate({
                    "opacity": "1"
                }, 400);
            }, (retardo * 1000));

            // var bounce = new Bounce();
            bounce
                .scale({
                    from: {
                        x: (1 * scalePage),
                        y: (1 * scalePage)
                    },
                    to: {
                        x: (1.5 * scalePage),
                        y: (1.7 * scalePage)
                    },
                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .scale({
                    from: {
                        x: 1,
                        y: 1
                    },
                    to: {
                        x: 1.7,
                        y: 1.5
                    },

                    easing: "sway",
                    duration: 5000,
                    delay: (retardo * 1000),
                    bounces: 22,
                    stiffness: 2
                })
                .applyTo(document.querySelectorAll(('#' + objeto.attr('id')))).then(function() {
                    console.log("Animación completa");
                    bounce.remove();
                });


            break;




    } //fin de swich


} //fin animacion entrada


function explosion(objeto, retardo) {

    console.log('explosion del objeto', objeto);

    // $("#canvas_id").css({
    //     'display': 'block',
    //     'opacity': '1'
    // });


    var topDelObjeto = $('#' + objeto.attr('id')).position().top;
    var leftDelObjeto = $('#' + objeto.attr('id')).position().left;
    var altoDelObjeto = parseInt($('#' + objeto.attr('id')).height() * scalePage);
    var anchoDelObjeto = parseInt($('#' + objeto.attr('id')).width() * scalePage);
    var suY = (topDelObjeto + (altoDelObjeto - (altoDelObjeto / 2)));
    var suX = (leftDelObjeto + (anchoDelObjeto - (anchoDelObjeto / 2)));
    // console.log('objeto', objeto.attr('id'), topDelObjeto, leftDelObjeto, altoDelObjeto, anchoDelObjeto);
    // console.log('suX', suX);
    // console.log('suY', suY);


    setTimeout(function() {
        // objeto.css({
        //     "display": "block"
        // }).animate({
        //     "opacity": "1"
        // }, 100);


        var colors = ['#ffc000', '#ff3b3b', '#ff8400'];
        var bubbles = 65;

        var explode = function explode(suX, suY) {
            var particles = [];
            var ratio = window.devicePixelRatio;
            // var c = document.createElement('canvas');
            var c = document.getElementById('canvas_id');
            var ctx = c.getContext('2d');

            var suAncho = 100;
            var suAlto = 100;
            c.style.position = 'absolute';
            c.style.left = (suX - (suAncho / 2)) + 'px';
            c.style.top = (suY - (suAlto / 2)) + 'px';
            c.style.pointerEvents = 'none';
            c.style.width = (suAncho + 'px');
            c.style.height = (suAlto + 'px');
            c.style.zIndex = suX;
            c.width = 300 * ratio;
            c.height = 300 * ratio;
            document.body.appendChild(c);

            for (var i = 0; i < bubbles; i++) {
                particles.push({

                    x: c.width / 2,
                    y: c.height / 2,
                    radius: r(20, 30),
                    color: colors[Math.floor(Math.random() * colors.length)],
                    rotation: r(0, 360, true),
                    speed: r(8, 20),
                    friction: 0.9,
                    opacity: r(0, 0.5, true),
                    yVel: 0,
                    gravity: 0.1
                });
            }

            render(particles, ctx, c.width, c.height);
            // setTimeout(() => document.body.removeChild(c), 1000);
            // setTimeout(function() {
            // $("#canvas_id").css({
            // 	'display': 'none',
            // 	'opacity': '0'
            // });
            // }, 1000);
        }

        var render = function render(particles, ctx, width, height) {
            requestAnimationFrame(function() {
                return render(particles, ctx, width, height);
            });
            ctx.clearRect(0, 0, width, height);

            particles.forEach(function(p, i) {
                p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
                p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);

                p.opacity -= 0.01;
                p.speed *= p.friction;
                p.radius *= p.friction;
                p.yVel += p.gravity;
                p.y += p.yVel;

                if (p.opacity < 0 || p.radius < 0) return;

                ctx.beginPath();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
                ctx.fill();
            });

            return ctx;
        }

        var r = function r(a, b, c) {
            parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));
        };

        explode(suX, suY);



    }, (retardo * 1000));


}

function explosionClick(objeto, retardo) {

    setTimeout(function() {
        objeto.css({
            "display": "block"
        }).animate({
            "opacity": "1"
        }, 400);
    }, (retardo * 1000));
    // function explota(e) {



    $("#canvas_id").css({
        'display': 'block',
        'opacity': '1'
    });


    $(objeto).click(function(e) {
        // explota(e);

        var colors = ['#ffc000', '#ff3b3b', '#ff8400'];
        var bubbles = 65;

        var explode = function explode(x, y) {
            var particles = [];
            var ratio = window.devicePixelRatio;
            // var c = document.createElement('canvas');
            var c = document.getElementById('canvas_id');
            var ctx = c.getContext('2d');

            c.style.position = 'absolute';
            c.style.left = (x - 100) + 'px';
            c.style.top = (y - 100) + 'px';
            c.style.pointerEvents = 'none';
            c.style.width = 200 + 'px';
            c.style.height = 200 + 'px';
            c.style.zIndex = 100;
            c.width = 300 * ratio;
            c.height = 300 * ratio;
            document.body.appendChild(c);

            for (var i = 0; i < bubbles; i++) {
                particles.push({
                    x: c.width / 2,
                    y: c.height / 2,
                    radius: r(20, 30),
                    color: colors[Math.floor(Math.random() * colors.length)],
                    rotation: r(0, 360, true),
                    speed: r(8, 20),
                    friction: 0.9,
                    opacity: r(0, 0.5, true),
                    yVel: 0,
                    gravity: 0.1
                });
            }

            render(particles, ctx, c.width, c.height);
            // setTimeout(() => document.body.removeChild(c), 1000);
            setTimeout(function() {
                // $("#canvas_id").css({
                // 	'display': 'none',
                // 	'opacity': '0'
                // });
            }, 1000);
        }

        var render = function render(particles, ctx, width, height) {
            requestAnimationFrame(function() {
                return render(particles, ctx, width, height);
                // ctx.clearRect(0, 0, width, height);
            });

            particles.forEach(function(p, i) {
                p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
                p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);

                p.opacity -= 0.01;
                p.speed *= p.friction;
                p.radius *= p.friction;
                p.yVel += p.gravity;
                p.y += p.yVel;

                if (p.opacity < 0 || p.radius < 0) return;

                ctx.beginPath();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
                ctx.fill();
            });

            return ctx;
        }

        var r = function r(a, b, c) {
            parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));
        };

        explode(e.pageX, e.pageY);


    });
    //explota(e);
    //.applyTo(document.querySelectorAll(('#' + objeto.attr('id'))));
    //explode(e.pageX, e.pageY);


}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function animacion_salida(objeto, tipo, retardo, funcion_sigue) {
    var animaciones = new Array("default", "arriba_abajo", "abajo_arriba", "izquierda_derecha", "derecha_izquierda");
    var velocidad = 0.3; // estaba en 0.8
    if (tipo == undefined) {
        tipo = "default";
    }
    if (retardo == undefined) {
        retardo = 0;
    }
    if (tipo == "aleatorio") {
        tipo = animaciones[random(animaciones.length - 1)];
    }

    if (funcion_sigue == undefined) {
        funcion_sigue = null;
    }


    switch (tipo) {
        case "default":
            TweenMax.to(objeto, velocidad, {
                alpha: 0,
                ease: Quart.easeOut,
                delay: retardo,
                onComplete: funcion_sigue
            });
            break;

        case "desaparece":
            TweenMax.to(objeto, velocidad, {
                alpha: 0,
                ease: Quart.easeOut,
                delay: retardo,
                onComplete: funcion_sigue,
                display: "none"
            });
            break;

        case "arriba_abajo":
            if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
                TweenMax.to(objeto, velocidad, {
                    bottom: parseInt(objeto.css("bottom")) - 80,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            } else {

                TweenMax.to(objeto, velocidad, {
                    top: parseInt(objeto.css("top")) + 80,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            }
            break;
        case "abajo_arriba":
            if (objeto.attr("_position") == "p3" || objeto.attr("_position") == "p4") {
                TweenMax.to(objeto, velocidad, {
                    bottom: parseInt(objeto.css("bottom")) + 80,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            } else {

                TweenMax.to(objeto, velocidad, {
                    top: parseInt(objeto.css("top")) - 80,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            }
            break;
        case "izquierda_derecha":
            if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
                TweenMax.to(objeto, velocidad, {
                    right: parseInt(objeto.css("right")) - 150,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            } else {

                TweenMax.to(objeto, velocidad, {
                    left: parseInt(objeto.css("left")) + 150,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            }
            break;
        case "derecha_izquierda":
            if (objeto.attr("_position") == "p2" || objeto.attr("_position") == "p3") {
                TweenMax.to(objeto, velocidad, {
                    right: parseInt(objeto.css("right")) + 150,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            } else {

                TweenMax.to(objeto, velocidad, {
                    left: parseInt(objeto.css("left")) - 150,
                    alpha: 0,
                    ease: Back.easeIn,
                    delay: retardo,
                    onComplete: funcion_sigue
                });
            }
            break;
    }

}


function cambiaSubtitulos(modo) {

    if (modo == false) {
        /////////////
        // $("#img_subts_fondo").animate({
        //     'margin-left': '-1500px'
        // }, 200, "easeInCubic");
        $("#img_subts_fondo, #img_subts_00, #img_subts_00_1, #img_subts_00_2, #img_subts_00_3, #img_subts_00_4, #img_subts_00_5, #img_subts_01, #img_subts_01_1, #img_subts_01_2, #img_subts_01_3, #img_subts_01_4, #img_subts_01_5, #img_subts_02, #img_subts_02_1, #img_subts_02_2, #img_subts_02_3, #img_subts_02_4, #img_subts_02_5, #img_subts_03, #img_subts_03_1, #img_subts_03_2, #img_subts_03_3, #img_subts_03_4, #img_subts_03_5, #img_subts_04, #img_subts_04_1, #img_subts_04_2, #img_subts_04_3, #img_subts_04_4, #img_subts_04_5, #img_subts_05, #img_subts_05_1, #img_subts_05_2, #img_subts_05_3, #img_subts_05_4, #img_subts_05_5, #img_subts_06, #img_subts_06_1, #img_subts_06_2, #img_subts_06_3, #img_subts_06_4, #img_subts_06_5, #img_subts_07, #img_subts_07_1, #img_subts_07_2, #img_subts_07_3, #img_subts_07_4, #img_subts_07_5, #img_subts_08, #img_subts_08_1, #img_subts_08_2, #img_subts_08_3, #img_subts_08_4, #img_subts_08_5, #img_subts_09, #img_subts_09_1, #img_subts_09_2, #img_subts_09_3, #img_subts_09_4, #img_subts_09_5, #img_subts_10, #img_subts_10_1, #img_subts_10_2, #img_subts_10_3, #img_subts_10_4, #img_subts_10_5, #img_subts_11, #img_subts_11_1, #img_subts_11_2, #img_subts_11_3, #img_subts_11_4, #img_subts_11_5, #img_subts_12, #img_subts_12_1, #img_subts_12_2, #img_subts_12_3, #img_subts_12_4, #img_subts_12_5, #img_subts_13, #img_subts_13_1, #img_subts_13_2, #img_subts_13_3, #img_subts_13_4, #img_subts_13_5, #img_subts_14, #img_subts_14_1, #img_subts_14_2, #img_subts_14_3, #img_subts_14_4, #img_subts_14_5, #img_subts_15, #img_subts_15_1, #img_subts_15_2, #img_subts_15_3, #img_subts_15_4, #img_subts_15_5, #img_subts_16, #img_subts_16_1, #img_subts_16_2, #img_subts_16_3, #img_subts_16_4, #img_subts_16_5, #img_subts_17, #img_subts_17_1, #img_subts_17_2, #img_subts_17_3, #img_subts_17_4, #img_subts_17_5, #img_subts_18, #img_subts_18_1, #img_subts_18_2, #img_subts_18_3, #img_subts_18_4, #img_subts_18_5").css({
            'margin-left': '-5000px'
        });
    } else {
        /////////////
        // $("#img_subts_fondo").animate({
        //     'margin-left': '0px'
        // }, 200, "easeOutCubic");
        // setTimeout(function() {
        $("#img_subts_fondo, #img_subts_00, #img_subts_00_1, #img_subts_00_2, #img_subts_00_3, #img_subts_00_4, #img_subts_00_5, #img_subts_01, #img_subts_01_1, #img_subts_01_2, #img_subts_01_3, #img_subts_01_4, #img_subts_01_5, #img_subts_02, #img_subts_02_1, #img_subts_02_2, #img_subts_02_3, #img_subts_02_4, #img_subts_02_5, #img_subts_03, #img_subts_03_1, #img_subts_03_2, #img_subts_03_3, #img_subts_03_4, #img_subts_03_5, #img_subts_04, #img_subts_04_1, #img_subts_04_2, #img_subts_04_3, #img_subts_04_4, #img_subts_04_5, #img_subts_05, #img_subts_05_1, #img_subts_05_2, #img_subts_05_3, #img_subts_05_4, #img_subts_05_5, #img_subts_06, #img_subts_06_1, #img_subts_06_2, #img_subts_06_3, #img_subts_06_4, #img_subts_06_5, #img_subts_07, #img_subts_07_1, #img_subts_07_2, #img_subts_07_3, #img_subts_07_4, #img_subts_07_5, #img_subts_08, #img_subts_08_1, #img_subts_08_2, #img_subts_08_3, #img_subts_08_4, #img_subts_08_5, #img_subts_09, #img_subts_09_1, #img_subts_09_2, #img_subts_09_3, #img_subts_09_4, #img_subts_09_5, #img_subts_10, #img_subts_10_1, #img_subts_10_2, #img_subts_10_3, #img_subts_10_4, #img_subts_10_5, #img_subts_11, #img_subts_11_1, #img_subts_11_2, #img_subts_11_3, #img_subts_11_4, #img_subts_11_5, #img_subts_12, #img_subts_12_1, #img_subts_12_2, #img_subts_12_3, #img_subts_12_4, #img_subts_12_5, #img_subts_13, #img_subts_13_1, #img_subts_13_2, #img_subts_13_3, #img_subts_13_4, #img_subts_13_5, #img_subts_14, #img_subts_14_1, #img_subts_14_2, #img_subts_14_3, #img_subts_14_4, #img_subts_14_5, #img_subts_15, #img_subts_15_1, #img_subts_15_2, #img_subts_15_3, #img_subts_15_4, #img_subts_15_5, #img_subts_16, #img_subts_16_1, #img_subts_16_2, #img_subts_16_3, #img_subts_16_4, #img_subts_16_5, #img_subts_17, #img_subts_17_1, #img_subts_17_2, #img_subts_17_3, #img_subts_17_4, #img_subts_17_5, #img_subts_18, #img_subts_18_1, #img_subts_18_2, #img_subts_18_3, #img_subts_18_4, #img_subts_18_5").css({
            'margin-left': '0px'
        });
        // }, 300);
    }
}
