
var onAddressDetailsReceived = function(daddr,saddr) {
  if(saddr && daddr &&saddr!=" " && daddr !=) {
    var link = "https://maps.google.com?saddr=" + encodeURIComponent(saddr) + "&daddr=" + encodeURIComponent(daddr);
    window.open(link, "", "width=" + screen.width/2 +", height=" + screen.height/2);
  }
   else {
    console.log('Please highlight or select the address.');
  }
};

var openInMaps = function(e) {
  var address1 = document.getElementById('address1');
  var saddr = address1.value;
  console.log("Address = " + saddr);
  var address2 = document.getElementById('address2');
  var daddr = address2.value;
  console.log("Address = " + daddr);
  onAddressDetailsReceived(daddr,saddr);
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.getBackgroundPage(function(eventPage) {
    // Inject 
    eventPage.getSelectedText(onAddressDetailsReceived);
  });
  var button = document.getElementById('map-it');
  button.addEventListener('click', openInMaps);
});
