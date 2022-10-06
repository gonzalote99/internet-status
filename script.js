const audio = new Audio("https://raw.githubusercontent.com/subhranshuchoudhury/internetstatus/main/error.wav");
let detector = 0;
var cI = (function() {
  return {
    online: function() {},
    offline: function() {},
    test: function() {
      var displayStatus = document.querySelector("#status");
      var checkingDisplay = document.querySelector("#checking");
      var i = new Image();
      i.onload = this.online;
      i.onerror = this.offline;
      i.src = `https://raw.githubusercontent.com/subhranshuchoudhury/internetstatus/main/test.png?${String(Date())}`;
      checkingDisplay.textContent = "[checking]";

    }
  };
})();

cI.online = function() {
  detector = 1;
  var displayStatus = document.querySelector("#status");
  var displayStatusHolder = document.querySelector("#status-holder");
  var checkingDisplay = document.querySelector("#checking");
  displayStatus.textContent = "Online";
  displayStatus.style.color = "rgb(203, 253, 67)";
  checkingDisplay.textContent = "[wait...]";
  document.body.style.color = "rgb(49, 43, 43)";
  displayStatusHolder.style.borderTop = `30px solid rgb(203, 253, 67)`;
  document.querySelector(".log").textContent = `online: ${Date()}`;


};

cI.offline = function() {
  detector = 1;
  var displayStatus = document.querySelector("#status");
  var displayStatusHolder = document.querySelector("#status-holder");
  var checkingDisplay = document.querySelector("#checking");
  displayStatus.textContent = "Offline";
  displayStatus.style.color = "white";
  document.body.style.color = "red";
  audio.play();
  checkingDisplay.textContent = "[wait..]";
  displayStatusHolder.style.borderTop = `30px solid red `;
  document.querySelector(".log").textContent = `offline ${Date()}`;

};

function setDelay() {
  document.getElementById("timerTable").style.display = "none";
  var delay = document.querySelector("#delayTime").value*1000;
  if (delay > 3000) {

  }else {
    delay = 3000;
    alert("less 3 sec");
  }
  document.querySelector(".log").textContent = `set interval ${delay/1000}, wait ${delay/1000}`
  var intId = setInterval(function() {
    detector = 0;
    cI.test()
  }, delay);

   setInterval(function() {
     if(detector == 0) {
       cI.offline();
     }

   }, delay+9000);



}

window.addEventListener("offline", () => {
  document.querySelector("#status").textContent = "no connected";
  audio.play();
})

function moreDetails() {
  const moreDetalis = document.getElementById("moreDetails");
  console.log(navigator);
  moreDetails.innerHTML = `server details ${navigator.userAgent}`; 
}