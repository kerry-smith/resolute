(function($){
  $(function(){

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      alignment: 'right' // Displays dropdown with edge aligned to the right of button
    }
  );
    
    $("#menu-dropdown li a").click(function () {
        $(this).removeClass("active");
        $("#menu-dropdown").hide();
        return false;
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space

function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}

// Vanilla JavaScript
var SharePopup = document.querySelectorAll(".share-popup");
if (SharePopup) {
  [].forEach.call(SharePopup, function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      windowPopup(this.href, 500, 300);
    });
  });
}
