const ipcRenderer = require('electron').ipcRenderer;

document.getElementById("start-slideshow").addEventListener("click", function (e) {
  let instatag = document.getElementById("instaperson").value;
  if (instatag.trim().length > 0)
    ipcRenderer.send('begin', instaperson);
  else {
    instatag = "blank";
    ipcRenderer.send('begin', instaperson);
  }

});


      /*
      // On click start slideshow
      document.getElementById("start-slideshow").addEventListener("click", function (e) {
        ipcRenderer.send('start-slideshow');
      }); */
