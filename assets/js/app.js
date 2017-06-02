// $(document).ready();
//En lugar de parentesis _

//$()=>

$(_=>{

    var slideContainer = $(".slide-container"),
        imgContainer = $(".image-container"),
        buttonPrevious = $(".btn-previous"),
        buttonNext = $(".btn-next");
        $(".slide-container .image-container:last").insertBefore(".slide-container .image-container:first");
        slideContainer.css("margin-left", "-"+ 100 +"%");

         function moverD() {
            slideContainer.animate({
            "margin-left":'-'+200+'%'
         } ,700, function(){
             $(".slide-container .image-container:first").insertAfter(".slide-container .image-container:last");
             slideContainer.css('margin-left', '-'+100+'%');
         });
     }

     function moverI() {
         slideContainer.animate({
             "margin-left":0
         } ,700, function(){
             $(".slide-container .image-container:last").insertBefore(".slide-container .image-container:first");
             slideContainer.css('margin-left', '-'+100+'%');
         });
   }
     function autoplay() {
       interval = setInterval(function(){
         moverD();
       }, 10000);
    }

    buttonNext.on('click',function() {
       moverD();
       clearInterval(interval);
       autoplay();
   });

   buttonPrevious.on('click',function() {
       moverI();
       clearInterval(interval);
       autoplay();
   });


   autoplay();

 });
