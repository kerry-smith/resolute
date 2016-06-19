(function($){
  $(function(){

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('.materialboxed').materialbox();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      alignment: 'right' // Displays dropdown with edge aligned to the right of button
    }
  );


  }); // end of document ready
})(jQuery); // end of jQuery name space
