$( document ).ready(function(){
  $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
    }
  );
  
})
