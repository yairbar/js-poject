$(function()
{
    
function getColor()
   { console.log(Math.random().toString(16))
       return '#' + Math.random().toString(16).slice(2, 8);
   
   }
          
function back() {
        var bkg = getColor();
  $('body').css('background', bkg);
    
    }
 
    
$(window).keypress(function (e) {if (e.keyCode === 32) { back(); } });
$(window).on('click',function (e) { back(); } );   
    
    back();
});
