/* Copyright Ideas4Learning 2016. http.//ideas4learning.com */
var ADAPT_CONFIG = {
    dynamic: true,
    path: 'css/',
    range: [
        '0px    to 1px    = 01_max320.css',
        '1px    to 320px  = 01_max320.css',
        '320px  to 582px  = 02_max582.css',
        '582px  to 768px  = 03_max768.css',
        '768px  to 1024px = 04_max1024.css',
        '1024px to 1920px = 05_max1920.css',
        '1920px           = 05_max1920.css'
    ]
};
!function(a,b,c,d){function m(a,b){l.href=e,f=e,h(a,b)}function n(){clearTimeout(g);var c,h,n,o,p,q,a=b.documentElement?b.documentElement.clientWidth:0,r=k,s=k-1;for(e=d;r--;)if(c=j[r].split("="),h=c[0],q=c[1]?c[1].replace(/\s/g,""):d,p=h.match("to"),n=p?parseInt(h.split("to")[0],10):parseInt(h,10),o=p?parseInt(h.split("to")[1],10):d,!o&&r===s&&a>n||a>n&&o>=a){q&&(e=i+q);break}f?f!==e&&m(r,a):(m(r,a),e&&(b.head||b.getElementsByTagName("head")[0]).appendChild(l))}function o(){clearTimeout(g),g=setTimeout(n,16)}if(c){var e,f,g,h=c.callback||function(){},i=c.path?c.path:"",j=c.range,k=j.length,l=b.createElement("link");l.rel="stylesheet",l.media="screen",n(),c.dynamic&&(a.addEventListener?a.addEventListener("resize",o,!1):a.attachEvent?a.attachEvent("onresize",o):a.onresize=o)}}(this,this.document,ADAPT_CONFIG);
