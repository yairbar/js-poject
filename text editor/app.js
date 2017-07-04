$(function() 
{
    var counter=0;
    
$('#heading').html(localStorage['title'] || 'Just Write');
$('#content').html(localStorage['text'] || 'This text is automatically saved every second :)');
   
    setInterval(function(){
        counter++;
        $('#counter').html(counter);
        
        localStorage['title']=$('#heading').html();
        localStorage['text']=$('#content').html();
    },1000)
    
    
});
