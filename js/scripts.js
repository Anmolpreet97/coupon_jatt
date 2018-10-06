jQuery(function($){
  $('#search-trigger').click(function(){
 $('#search-input').toggleClass('search_input-open');

  });
$(document).click(function(e){
  if(!$(e.target).class(!'.search-form').length){
    $('#search-input').removeClass('search_input-open');
  } 
  
})
})

