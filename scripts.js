$( document ).ready(function() {
    $(".parcours-box").removeClass("parcours-active");
    
    
    $(".round1").on("click",function(){
       $(".tl-round").css("background-color","rgb(85, 69, 69)");
       $(".round1").css("background-color","white");
       $(".timeline-indicator").css("width","0");
       $(".parcours-box").css("top","200px");
       $(".parc1").css("top","10px");
    })
    
    $(".round2").on("click",function(){
       $(".tl-round").css("background-color","rgb(85, 69, 69)");
       $(".round1").css("background-color","white");
       $(".round2").css("background-color","white");
       $(".timeline-indicator").css("width","240");
       $(".parcours-box").css("top","200px");
       $(".parc2").css("top","10px");
    })
    
    $(".round3").on("click",function(){
       $(".tl-round").css("background-color","rgb(85, 69, 69)");
       $(".round1").css("background-color","white");
       $(".round2").css("background-color","white");
       $(".round3").css("background-color","white");
       $(".timeline-indicator").css("width","480");
       $(".parcours-box").css("top","200px");
       $(".parc3").css("top","10px");
    })
    
    $(".round4").on("click",function(){
       $(".tl-round").css("background-color","rgb(85, 69, 69)");
       $(".round1").css("background-color","white");
       $(".round2").css("background-color","white");
       $(".round3").css("background-color","white");
       $(".round4").css("background-color","white");
       $(".timeline-indicator").css("width","720");
       $(".parcours-box").css("top","200px");
       $(".parc4").css("top","10px");
    })
    
 });

 //Attributes//

 $(function () { 
   $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
 });  
 
 // ( window ).scroll(function() {   
  // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
   $(".progress-bar").each(function(){
     each_bar_width = $(this).attr('aria-valuenow');
     $(this).width(each_bar_width + '%');
   });
        
  //  }  
 // jQuery for page scrolling feature - requires jQuery Easing plugin
 function collapseNavbar() {
   if ($(".navbar").offset().top > 50) {
       $(".navbar-fixed-top").addClass("top-nav-collapse");
   } else {
       $(".navbar-fixed-top").removeClass("top-nav-collapse");
   }
}
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar); 







$(function() {
   $('body').on('click', '.page-scroll a', function(event) {
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
       }, 1500, 'easeInOutExpo');
       event.preventDefault();
   });
});




// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//    $('.navbar-toggle:visible').click();
// });


// // Bouncing arrow bottom of full screen
// // Different arrow choices from Font Awesome
// // Fades away as you scroll down
// $(window).scroll(function(){
//    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
//  //250 is fade pixels
//  });

 

// // // Highlight the top nav as scrolling occurs
// // $('body').scrollspy({
// //    target: '.navbar-fixed-top'
// // })



// //  $(function() {
// //  // This will select everything with the class smoothScroll
// //  // This should prevent problems with carousel, scrollspy, etc...
// //  $('.smoothScroll').click(function() {
// //    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// //      var target = $(this.hash);
// //      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// //      if (target.length) {
// //        $('html,body').animate({
// //          scrollTop: target.offset().top
// //        }, 1500); // The number here represents the speed of the scroll in milliseconds
// //        return false;
// //      }
// //    }
// //  });
// });  




