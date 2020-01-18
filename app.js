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


////////////////////////////////////////////////
//  زر المشاركة الرابط علي تويتر  
//  رقم 1
var twitterShare = document.querySelector('[data-js="twitter-share"]');
twitterShare.onclick = function (e) {
  e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
  if (twitterWindow.focus) { twitterWindow.focus(); }
  return false;
}

//  زر المشاركة الرابط علي فيسبوك  
//  رقم 1 
// يفتح الموقع غي new tab
var facebookShare = document.querySelector('[data-js="facebook-share"]');
facebookShare.onclick = function (e) {
  e.preventDefault();
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, "_blank");
  if (facebookWindow.focus) { facebookWindow.focus(); }
  return false;
}



//  زر المشاركة الرابط علي فيسبوك  
//  رقم 2 
// يفتح الموقع غي new window
!(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//   زر المشاركة الرابط علي تويتر  مع نسخ نص
//  رقم 2
var twt = document.getElementById("tweetShare");
var txt = document.getElementById("shareText").textContent;
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s); js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
    twt.setAttribute('data-text', txt);
  }
}(document, 'script', 'twitter-wjs');


function whatsAppShare(id) {
  var txt = document.getElementById(id);
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = "whatsapp://send?text=" + txt.textContent + "Link: " + document.URL;
  } else {
    var whatsAppWindow = window.open('https://web.whatsapp.com://send?text=' + txt.textContent + 'Link: ' + document.URL, "_blank");
    if (whatsAppWindow.focus) { whatsAppWindow.focus(); }
    return false;
  }
}


var fallbackToStore = function () {
  window.location.replace('https://play.google.com/store/apps/details?id=com.twitter.android&hl=en');
};
var openApp = function () {
  window.location.replace('twitter://');
};
function tst() {
  openApp();
  setTimeout(fallbackToStore, 500);
}