$(function(){
   var inWrap = $('.image_wrapper-inner');
    
    $('.btn-prev').on('click', function(){
        
        
       inWrap.animate({left: '0%'}, 2000, function(){
           
           inWrap.css('left','-100%');
           
           $('.slide').first().before($('.slide').last());
           
           
       }); 
        
    });
    
    
    $('.btn-next').on('click', function(){
        
        
       inWrap.animate({left: '-200%'}, 2000, function(){
           
           inWrap.css('left','-100%');
           
           $('.slide').last().after($('.slide').first());
           
           
       }); 
        
    });
    
    
    
    
})