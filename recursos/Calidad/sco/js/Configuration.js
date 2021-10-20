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
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_01.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_02.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_03.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_04.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_05.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_06.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_07.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_08.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_09.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_10.html", navegacion: true, menu: true },   
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_11.html", navegacion: true, menu: true },   
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_12.html", navegacion: true, menu: true },     
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_13.html", navegacion: true, menu: true },   
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_14.html", navegacion: true, menu: true },  
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_15.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_16.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_17.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_18.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_19.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_20.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_21.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_22.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_23.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_24.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_25.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_26.html", navegacion: true, menu: true }
    /*{ title: "eLearning", url: "SANOFI_CALIDAD_BFP_27.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_28.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_29.html", navegacion: true, menu: true },
    { title: "eLearning", url: "SANOFI_CALIDAD_BFP_30.html", navegacion: true, menu: true }*/
   
   
];


/* audios del curso */
var grupoAudios = new buzz.group([
 /*0*/  new  buzz.sound("contenido/audios/audio0", { formats: ["mp3"], preload: true }),
/*1*/   new buzz.sound("contenido/audios/Sanofi_BPF_01_1", { formats: ["mp3"], preload: true }),
/*2*/	new buzz.sound("contenido/audios/Sanofi_BPF_02_1", { formats: ["mp3"], preload: true }),
/*3*/   new buzz.sound("contenido/audios/Sanofi_BPF_02_2", { formats: ["mp3"], preload: true }),
/*4*/	new buzz.sound("contenido/audios/Sanofi_BPF_02_3", { formats: ["mp3"], preload: true }),
/*5*/	new buzz.sound("contenido/audios/Sanofi_BPF_02_4", { formats: ["mp3"], preload: true }),
/*6*/	new buzz.sound("contenido/audios/Sanofi_BPF_03_1", { formats: ["mp3"], preload: true }),
/*7*/	new buzz.sound("contenido/audios/Sanofi_BPF_04_1", { formats: ["mp3"], preload: true }),
/*8*/	new buzz.sound("contenido/audios/Sanofi_BPF_05_1", { formats: ["mp3"], preload: true }),
/*9*/   new buzz.sound("contenido/audios/Sanofi_BPF_05_2", { formats: ["mp3"], preload: true }),
/*10*/  new buzz.sound("contenido/audios/Sanofi_BPF_05_3", { formats: ["mp3"], preload: true }),
/*11*/  new buzz.sound("contenido/audios/Sanofi_BPF_05_4", { formats: ["mp3"], preload: true }),
/*12*/  new buzz.sound("contenido/audios/Sanofi_BPF_05_5", { formats: ["mp3"], preload: true }),
/*13*/  new buzz.sound("contenido/audios/Sanofi_BPF_05_6", { formats: ["mp3"], preload: true }),
/*14*/  new buzz.sound("contenido/audios/Sanofi_BPF_05_7", { formats: ["mp3"], preload: true }),
/*15*/  new buzz.sound("contenido/audios/Sanofi_BPF_05_8", { formats: ["mp3"], preload: true }),
/*16*/  new buzz.sound("contenido/audios/Sanofi_BPF_06_1", { formats: ["mp3"], preload: true }),
/*17*/  new buzz.sound("contenido/audios/Sanofi_BPF_06_2", { formats: ["mp3"], preload: true }),
/*18*/  new buzz.sound("contenido/audios/Sanofi_BPF_06_3", { formats: ["mp3"], preload: true }),
/*19*/  new buzz.sound("contenido/audios/Sanofi_BPF_07_1", { formats: ["mp3"], preload: true }),
/*20*/  new buzz.sound("contenido/audios/Sanofi_BPF_07_2", { formats: ["mp3"], preload: true }),
/*21*/  new buzz.sound("contenido/audios/Sanofi_BPF_07_3", { formats: ["mp3"], preload: true }),
/*22*/  new buzz.sound("contenido/audios/Sanofi_BPF_07_4", { formats: ["mp3"], preload: true }),
/*23*/  new buzz.sound("contenido/audios/Sanofi_BPF_07_5", { formats: ["mp3"], preload: true }),
/*24*/  new buzz.sound("contenido/audios/Sanofi_BPF_08_1", { formats: ["mp3"], preload: true }),
/*25*/  new buzz.sound("contenido/audios/Sanofi_BPF_08_2", { formats: ["mp3"], preload: true }),
/*26*/  new  buzz.sound("contenido/audios/Sanofi_BPF_08_3", { formats: ["mp3"], preload: true }),
/*27*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_4", { formats: ["mp3"], preload: true }),
/*28*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_5", { formats: ["mp3"], preload: true }),
/*29*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_6", { formats: ["mp3"], preload: true }),
/*30*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_7", { formats: ["mp3"], preload: true }),
/*31*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_8", { formats: ["mp3"], preload: true }),
/*32*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_9", { formats: ["mp3"], preload: true }),
/*33*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_10", { formats: ["mp3"], preload: true }),
/*34*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_11", { formats: ["mp3"], preload: true }),
/*35*/   new buzz.sound("contenido/audios/Sanofi_BPF_08_12", { formats: ["mp3"], preload: true }),
/*36*/  new buzz.sound("contenido/audios/Sanofi_BPF_08_13", { formats: ["mp3"], preload: true }),
/*37*/  new buzz.sound("contenido/audios/Sanofi_BPF_09_1", { formats: ["mp3"], preload: true }),
/*38*/  new buzz.sound("contenido/audios/Sanofi_BPF_10_1", { formats: ["mp3"], preload: true }),
/*39*/  new buzz.sound("contenido/audios/Sanofi_BPF_10_2", { formats: ["mp3"], preload: true }),
/*40*/  new buzz.sound("contenido/audios/Sanofi_BPF_10_3", { formats: ["mp3"], preload: true }),
/*41*/  new buzz.sound("contenido/audios/Sanofi_BPF_11_1", { formats: ["mp3"], preload: true }),
/*42*/  new buzz.sound("contenido/audios/Sanofi_BPF_11_2", { formats: ["mp3"], preload: true }),
/*43*/  new buzz.sound("contenido/audios/Sanofi_BPF_11_3", { formats: ["mp3"], preload: true }),
/*44*/  new buzz.sound("contenido/audios/Sanofi_BPF_11_4", { formats: ["mp3"], preload: true }),
/*45*/   new buzz.sound("contenido/audios/Sanofi_BPF_11_5", { formats: ["mp3"], preload: true }),
/*46*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_1", { formats: ["mp3"], preload: true }),
/*47*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_2", { formats: ["mp3"], preload: true }),
/*48*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_3", { formats: ["mp3"], preload: true }),
/*49*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_4", { formats: ["mp3"], preload: true }),
/*50*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_5", { formats: ["mp3"], preload: true }),
/*51*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_6", { formats: ["mp3"], preload: true }),
/*52*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_7", { formats: ["mp3"], preload: true }),
/*53*/   new buzz.sound("contenido/audios/Sanofi_BPF_12_8", { formats: ["mp3"], preload: true }),
/*54*/  new buzz.sound("contenido/audios/Sanofi_BPF_13_1", { formats: ["mp3"], preload: true }),
/*55*/  new buzz.sound("contenido/audios/Sanofi_BPF_13_2", { formats: ["mp3"], preload: true }),
/*56*/  new buzz.sound("contenido/audios/Sanofi_BPF_13_3", { formats: ["mp3"], preload: true }),
/*57*/  new buzz.sound("contenido/audios/Sanofi_BPF_13_4", { formats: ["mp3"], preload: true }),
/*58*/  new buzz.sound("contenido/audios/Sanofi_BPF_14_1", { formats: ["mp3"], preload: true }),
/*59*/  new buzz.sound("contenido/audios/Sanofi_BPF_14_2", { formats: ["mp3"], preload: true }),
/*60*/  new buzz.sound("contenido/audios/Sanofi_BPF_14_3", { formats: ["mp3"], preload: true }),
/*61*/  new buzz.sound("contenido/audios/Sanofi_BPF_15_1", { formats: ["mp3"], preload: true }),
/*62*/  new buzz.sound("contenido/audios/Sanofi_BPF_15_2", { formats: ["mp3"], preload: true }),
/*63*/  new buzz.sound("contenido/audios/Sanofi_BPF_16_1", { formats: ["mp3"], preload: true }),
/*64*/  new buzz.sound("contenido/audios/Sanofi_BPF_17_1", { formats: ["mp3"], preload: true }),
/*65*/  new buzz.sound("contenido/audios/Sanofi_BPF_18_1", { formats: ["mp3"], preload: true }),
/*66*/  new buzz.sound("contenido/audios/Sanofi_BPF_19_1", { formats: ["mp3"], preload: true }),
/*67*/  new buzz.sound("contenido/audios/Sanofi_BPF_19_2", { formats: ["mp3"], preload: true }),

/*68*/  new buzz.sound("contenido/audios/Sanofi_BPF_19_3", { formats: ["mp3"], preload: true }),
/*69*/  new buzz.sound("contenido/audios/Sanofi_BPF_19_4", { formats: ["mp3"], preload: true }),
/*70*/  new buzz.sound("contenido/audios/Sanofi_BPF_20_1", { formats: ["mp3"], preload: true }),
/*71*/  new buzz.sound("contenido/audios/Sanofi_BPF_20_2", { formats: ["mp3"], preload: true }),
/*72*/  new buzz.sound("contenido/audios/Sanofi_BPF_20_3", { formats: ["mp3"], preload: true }),
/*73*/  new buzz.sound("contenido/audios/Sanofi_BPF_20_4", { formats: ["mp3"], preload: true }),

 /*74*/  new buzz.sound("contenido/audios/Sanofi_BPF_21_1", { formats: ["mp3"], preload: true }),
 /*75*/  new buzz.sound("contenido/audios/Sanofi_BPF_21_2", { formats: ["mp3"], preload: true }),
 /*76*/  new buzz.sound("contenido/audios/Sanofi_BPF_22_1", { formats: ["mp3"], preload: true }),
 /*77*/  new buzz.sound("contenido/audios/Sanofi_BPF_23_1", { formats: ["mp3"], preload: true }),
 /*78*/  new buzz.sound("contenido/audios/Sanofi_BPF_24_1", { formats: ["mp3"], preload: true }),
 /*79*/  new buzz.sound("contenido/audios/Sanofi_BPF_24_3", { formats: ["mp3"], preload: true }),
 /*80*/  new buzz.sound("contenido/audios/Sanofi_BPF_25_1", { formats: ["mp3"], preload: true }),
 /*81*/  new buzz.sound("contenido/audios/Sanofi_BPF_26_1", { formats: ["mp3"], preload: true }),

 /*82*/  new buzz.sound("contenido/audios/s_bien", { formats: ["mp3"], preload: true }),
 /*83*/  new buzz.sound("contenido/audios/s_mal", { formats: ["mp3"], preload: true }),
 /*84*/  new buzz.sound("contenido/audios/Sanofi_BPF_02_5", { formats: ["mp3"], preload: true })


]);
