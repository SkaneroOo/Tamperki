// ==UserScript==
// @name     Anty testportal
// @include  https://www.testportal.pl/*
// @run-at   document-start
// @grant    none
// @version  2.1
// @updateURL  https://raw.githubusercontent.com/SkaneroOo/Tamperki/master/antytestportal.js
// ==/UserScript==


window.onerror = () => {};
document.hasFocus = () => true;

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);

window.addEventListener("contextmenu", function(e){
     e.stopPropagation()
}, true);
