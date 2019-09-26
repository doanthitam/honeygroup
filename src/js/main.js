$(window).on('resize',function(){
});
resize();
function resize() {
  if ($(window).width() <= 768) {
    $('.resimg').each(function(index,el) {
      $(el).attr('src', $(el).attr('src').replace('pc', 'sp'));
    });
  }
  else {
    $('.resimg').each(function(index,el) {
      $(el).attr('src', $(el).attr('src').replace('sp', 'pc'));
    });
  }
}

$("#js-menuButton").on("click", function() {
 $(this).toggleClass("active");
 $("#js-menu").slideToggle(400);
 if ($(window).width() < 768) {
   $("#js-menu li").hide();
   $("#js-menu li").each(function(i) {
     $(this)
       .delay(50 * i)
       .fadeIn(500);
   });
 }
 return false;
});



$(function(){
  $('#list_photo').slick({
    autoplay: true,
    swipe: false,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 3500,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false
  });
});

var $delayTime = 1000;
 $(window).on('load', function() {
   var $loadingAnim = $('#loadingAnim'),
       $body = $('body');

     setTimeout( function(){

       $body.addClass('loaded');

       $loadingAnim.find('.loadingAnim_line').on('transitionend', function( e ){
         $(this).parent().remove(); }); }, $delayTime );
 });

 $('a[href^="#"]').click(function(){
   var hasttop = $(this.hash).offset().top;
   var hasttopNew = hasttop;
   var hasttopNewSp = hasttop - 71;
   if ($(window).width() > 768) {
     $('html, body').animate({
       scrollTop: hasttopNew
     }, 500);
   }
   $("#js-menuButton").removeClass("active");
   if ($(window).width() < 768) {
       $("#js-menu").hide();
       $('html, body').animate({
         scrollTop: hasttopNewSp
       }, 500);
     }
   return false;
 });

$(document).ready(function() {
	$('.faq dl dt').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});
});
