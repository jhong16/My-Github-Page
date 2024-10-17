// Get the button and the popup elements
var popup = document.getElementById('myPopup');
var openBtn = document.getElementById('openPopup');
var closeBtn = document.getElementById('closePopup');

// When the user clicks the button, open the popup
openBtn.onclick = function() {
  popup.style.display = 'block';
}

// When the user clicks on <span> (x), close the popup
closeBtn.onclick = function() {
  popup.style.display = 'none';
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
}