console.log("Script Load");



(function($) {
 /*  */
 $(document).ready(function(){
  
  instance1.goPhase('end');

});


/* 가로스크롤 */
/* $('body').on('scroll mousewheel', function(event) {	
    
  var direction = event.originalEvent.wheelDelta;

  if(direction > 0){
    $('.overview-content').animate({left:"0"}, 500);
  }
  else {
    $('.overview-content').animate({left:"-900px"}, 500);	
  }
}); */

$('.overview-area').on('scroll mousewheel', function(event,delta) {	
    
  var direction = event.originalEvent.wheelDelta;
  var overview = $('.overview-area');

  if(direction > 0){
    overview.scrollLeft(overview.scrollLeft() - 200);
  }
  else if(direction < 0) {
    overview.scrollLeft(overview.scrollLeft() + 200);
  }
  console.log(overview.scrollLeft());
});

$('.roadmap-wrap').on('scroll mousewheel', function(event,delta) {	
    
  var direction = event.originalEvent.wheelDelta;
  var roadmap = $('.roadmap-wrap');

  if(direction > 0){
    roadmap.scrollLeft(roadmap.scrollLeft() - 65);
  }
  else if(direction < 0) {
    roadmap.scrollLeft(roadmap.scrollLeft() + 65);
  }
  console.log(roadmap.scrollLeft());
});



/* slice */
const target1 = $('.black-div1');
const option1 = {       
  numOfSlices: 12,
  startPosition: 'middle',
  endPosition: 'top',
  transitionOrder: [11,10,9,8,7,6,5,4,3,2,1,0],
  direction: 'vertical',
  color: "#000",
}
const instance1 = sliceRevealer(target1, option1);


/* hamberger */
$('.hamburger').on('click', function(event) {
  event.preventDefault();    
  $(this).toggleClass('active');
  $('.menu').toggleClass('animate__animated animate__fadeInRight');
  $('.menu').toggleClass('animate__animated animate__fadeInLeft');
  $('.menu').toggleClass('visible');
});

$('.home').mouseover(function(){
  $('.hamburger').children().css('background-color','#fff');
}).mouseout(function(){
  $('.hamburger').children().removeAttr('style');
});

/* button */
$('.roadmap-title').on('click', function(){
  $('.roadmap-area').css('left', '4.78%');
  $('.roadmap-area').addClass('animate__animated animate__slideInRight');
  $('.check-box1').css('background-color','#fff');
  $('.check-box2').css('background-color','#000');
});
$('.overview-title').on('click', function(){
  /* $('.roadmap-area').css('left', '95.1%'); */
  $('.roadmap-area').removeAttr('style');
  $('.roadmap-area').removeClass('animate__animated animate__slideInRight');
  $('.check-box1').css('background-color','#000');
  $('.check-box2').css('background-color','#fff');
});

  console.log(localStorage.cursorUrl.typeof);
  $('.cursor').css('background-image','url(' + localStorage.cursorUrl + ')');
 

}) (jQuery);