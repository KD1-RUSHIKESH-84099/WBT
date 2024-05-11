let forwardCounter = 0,
  fallingCounter = 0,
  rotCar = 0,
  tokenArray = new Array(),
  ftokenArr = new Array();
function keepMoving() {
  if (
    ((forwardCounter += 1),
    (document.getElementById("myImage").style.left = `${forwardCounter}px`),
    forwardCounter > 790)
  ) {
    for (let e = 0; e < tokenArray.length; e++)
      window.clearInterval(tokenArray.pop());
    document.getElementById("stopBtn").disabled = "disabled";
    let e = window.setInterval(falling, 10);
    ftokenArr.push(e);
  }
}
function start() {
  let e = window.setInterval(keepMoving, 10);
  tokenArray.push(e), (document.getElementById("stopBtn").disabled = null);
}
function stop() {
  let e = tokenArray.pop();
  if (null != e && (window.clearInterval(e), 0 == tokenArray.length)) {
    document.getElementById("stopBtn").disabled = "disabled";
  }
}
function falling() {
  (fallingCounter += 1), (forwardCounter += 1), (rotCar += 1);
  let e = document.getElementById("myImage");
  if (
    ((e.style.top = `${fallingCounter}px`),
    (e.style.left = `${forwardCounter}px`),
    (e.style.rotate = `${rotCar}deg`),
    fallingCounter > 800)
  )
    for (let e = 0; e < ftokenArr.length; e++)
      window.clearInterval(ftokenArr.pop());
}
