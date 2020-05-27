// ==UserScript==
// @name     Anty testportal
// @include  https://www.testportal.pl/*
// @run-at   document-start
// @grant    none
// @version  3.0
// @updateURL  https://raw.githubusercontent.com/SkaneroOo/Tamperki/master/antytestportal.user.js
// ==/UserScript==

const PATCHES = {
    isMatching: () => false;
};

document.hasFocusIn = () => true;
document.SetFocus = () => true;
onBlurHandler = () => null;
window.onerror = () => {};


while 1 {
    window.onerror = () => {};
    document.forms["questionForm"]["wb"].value = 0;
    document.focus();
};

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);

window.addEventListener("contextmenu", function(e){
     e.stopPropagation()
}, true)
