//js

function twtPost(txtID, URL) {
  var txt = document.getElementById(txtID).textContent;
  window.open('https://twitter.com/share?text=' + txt + '&url=' + URL, "_blank");
}

function fbPost(URL) {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + URL, "_blank");
}

function whatsAppShare(txtID, URL) {
  var txt = document.getElementById(txtID).textContent;
  window.location.href = "whatsapp://send?text=" + txt + " -- Link: " + URL;
}

