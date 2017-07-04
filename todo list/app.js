$(function(){

    $(window).keypress(function(e){
        if( e.keyCode=== 13)
         newItem();});
   
    
function newItem(){   
    
    var item =$('input').val();
$('ul').append('<li>'+ item +'</li>');
 $('input').val('');   
    }
  $('ul').on('click','li',function(e){
     $(e.target).remove();
  })  
    

});
