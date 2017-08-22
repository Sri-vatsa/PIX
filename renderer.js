const ipcRenderer = require('electron').ipcRenderer;

document.getElementById("start-slideshow").addEventListener("click", function (e) {
  let instatag = document.getElementById("instatag").value;
  let instaid = document.getElementById("instaid").value;
  let flickrtag = document.getElementById("flickrtag").value;
  let flickrurl = document.getElementById("flickrurl").value;

  //split flickrurl to determine user-id & album-id
  var str = flickrurl.split("/");
  var flickruser_id = str[4];
  var flickruser_alb_id = str[6];
  /*
  if (instatag.trim().length > 0)
  ipcRenderer.send('begin', instatag);
  else {
  instatag = "blank";
  ipcRenderer.send('begin', instatag);
}*/

if(instatag == null || instatag == "")
  instatag = "BLANK";

if(instaid == null || instaid == "")
  instaid = "BLANK";

if(flickrtag == null || flickrtag == "")
  flickrtag = "BLANK";

if(flickruser_id == null || flickruser_id == "")
  flickruser_id = "BLANK";

if(flickruser_alb_id == null || flickruser_alb_id == "")
  flickruser_alb_id = "BLANK";

ipcRenderer.send('begin', instatag, instaid, flickrtag, flickruser_id, flickruser_alb_id);



});


/*
// On click start slideshow
document.getElementById("start-slideshow").addEventListener("click", function (e) {
ipcRenderer.send('start-slideshow');
}); */
