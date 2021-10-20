/* Copyright Ideas4Learning 2017. http.//ideas4learning.com */

var conection = true; // Conecta o no con el LMS.
var mostrarAlertas = false; // Muestra las alertas de fallo de conexión.
var contentPath = "contenido/"; // Directorio de contenido.
var modulos = 1; // No. total de módulos con evaluación.
var mobileCurse = false; // Fuerza la vista para dispositivos móviles.
var navegationBlock = true; // Bloquea o libera la navegación libre.
var haySubtitulos = false;
var intentos = 0;
var intento = 1;
var cuantosEjercicios = 2;

/* Listado de pantalla del curso */
var course = new Object();
course.pages = [
    { title: "eLearning", url: "SANOFI_AISC_01.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_02.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_03.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_04.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_05.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_06.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_07.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_08.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_09.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_10.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_11.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_AISC_12.html", navegacion: true, menu: true },   
    { title: "eLearning", url: "SANOFI_AISC_13.html", navegacion: true, menu: true }

    
];


/* audios del curso */
var grupoAudios = new buzz.group([
 /*0*/  new  buzz.sound("contenido/audios/audio0", { formats: ["mp3"], preload: true }),
/*1*/   new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_01_01", { formats: ["mp3"], preload: true }),
/*2*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_02_01", { formats: ["mp3"], preload: true }),
/*3*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_02_02", { formats: ["mp3"], preload: true }),
/*4*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_02_03", { formats: ["mp3"], preload: true }),
/*5*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_02_04", { formats: ["mp3"], preload: true }),
/*6*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_02_05", { formats: ["mp3"], preload: true }),
/*7*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_02_06", { formats: ["mp3"], preload: true }),
/*8*/	new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_03_01", { formats: ["mp3"], preload: true }),
/*9*/   new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_04_01", { formats: ["mp3"], preload: true }),
/*10*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_05_01", { formats: ["mp3"], preload: true }),
/*11*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_06_01", { formats: ["mp3"], preload: true }),
/*12*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_06_02", { formats: ["mp3"], preload: true }),
/*13*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_06_03", { formats: ["mp3"], preload: true }),
/*14*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_07_01", { formats: ["mp3"], preload: true }),
/*15*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_07_02", { formats: ["mp3"], preload: true }),
/*16*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_08_01", { formats: ["mp3"], preload: true }),
/*17*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_09_01", { formats: ["mp3"], preload: true }),
/*18*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_10_01", { formats: ["mp3"], preload: true }),
/*19*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_10_02", { formats: ["mp3"], preload: true }),
/*20*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_10_03", { formats: ["mp3"], preload: true }),
/*21*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_10_04", { formats: ["mp3"], preload: true }),
/*22*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_11_01", { formats: ["mp3"], preload: true }),
/*23*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_11_02", { formats: ["mp3"], preload: true }),
/*24*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_12_01", { formats: ["mp3"], preload: true }),
/*25*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_13_01", { formats: ["mp3"], preload: true }),
/*26*/  new buzz.sound("contenido/audios/Sanofi_CuidadoDeSalud_10_00", { formats: ["mp3"], preload: true })
]);
