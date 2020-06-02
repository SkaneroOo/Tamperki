// ==UserScript==
// @name     Anty testportal
// @include  https://www.testportal.pl/*
// @run-at   document-start
// @version  4.2
// @grant unsafeWindow
// @require http://code.jquery.com/jquery-latest.js
// @downloadURL  https://raw.githubusercontent.com/SkaneroOo/Tamperki/master/antytestportal.user.js
// ==/UserScript==

function setStrikesON(){
    unsafeWindow.b = function(c,d){c=c-0x0;var e=a[c];return e;};
    document.getElementsByClassName("Strikes_OFF")[0].style.backgroundColor = "red";
    document.getElementsByClassName("Strikes_ON")[0].style.backgroundColor = "green";
}
function setStrikesOFF(){
    unsafeWindow.b = function(str){return 0;};
    document.getElementsByClassName("Strikes_OFF")[0].style.backgroundColor = "green";
    document.getElementsByClassName("Strikes_ON")[0].style.backgroundColor = "red";
}




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
    button.onclick = setStrikesOFF;
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    return button;
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

    button.onclick = setStrikesON;
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    return button;
  }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", () => {
    document.getElementsByClassName("Strikes_OFF")[0].click();
  });

