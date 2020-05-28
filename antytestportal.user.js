// ==UserScript==
// @name     Anty testportal
// @include  https://www.testportal.pl/*
// @include  https://www.google.pl/*
// @include  https://www.google.com/*
// @run-at   document-start
// @version  3.0
// @grant unsafeWindow
// @require http://code.jquery.com/jquery-latest.js
// @updateURL  https://raw.githubusercontent.com/SkaneroOo/Tamperki/master/antytestportal.user.js
// ==/UserScript==


(function() {
  window.addEventListener("load", () => {
    addButton("Strikes OFF");
  });

  function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {
      position: "fixed",
      top: "15%",
      right: "4%",
      "z-index": 3,
      fontWeight: "600",
      fontSize: "14px",
      backgroundColor: "#00cccc",
      color: "white",
      border: "none",
      padding: "10px 20px"
    };
    let button = document.createElement("button"),
      btnStyle = button.style;
    document.body.appendChild(button);
    button.className = "Strikes_OFF"
    button.innerHTML = text;
    // Settin function for button when it is clicked.
    button.onclick = selectReadFn;
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    return button;
  }

  function selectReadFn() {
    unsafeWindow.b = function(str){return 0;};
  }
})();







(function() {
  window.addEventListener("load", () => {
    addButton("Strikes ON");
  });

  function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {
      id: "Strikes_ON",
      position: "fixed",
      top: "20%",
      right: "4%",
      "z-index": 3,
      fontWeight: "600",
      fontSize: "14px",
      backgroundColor: "#00cccc",
      color: "white",
      border: "none",
      padding: "10px 20px"
    };
    let button = document.createElement("button"),
      btnStyle = button.style;
    document.body.appendChild(button);
    button.className = "Strikes_ON"
    button.innerHTML = text;
    // Settin function for button when it is clicked.
    button.onclick = selectReadFn;
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    return button;
  }

  function selectReadFn() {
    unsafeWindow.b = function(c,d){c=c-0x0;var e=a[c];return e;};
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



//if (1){
//    document.getElementsByClassName("Strikes_OFF")[0].click();}
setTimeout(function() {
    document.getElementsByClassName("Strikes_OFF")[0].click();
}, 1000)

 if (startingRemainingTimeInMs == null) {
            setTimeout(function() {
    document.getElementsByClassName("Strikes_ON")[0].click();
}, 10)}





/*


document.b = function(str) {};
sleep(2000);
var a = 0
var origHasFocus = a;
document.UpdateContent = function(str) {

     alert("And I'm in your floats!");
     return 0;

}
*/




/*
startingRemainingTimeInMs = 1000000000;
document.hasFocus = function(str) {

     alert("And I'm in your floats!");
     return 0;

}
*/
//document.hasFocus = function() {return true};




