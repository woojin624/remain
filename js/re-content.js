/* console.log("Script Load"); */

(function($) {
/*  */




const target1 = $('.black-div1');
const option1 = {       
  numOfSlices: 12,
  startPosition: 'middle',
  endPosition: 'top',
  transitionOrder: [11,10,9,8,7,6,5,4,3,2,1,0],
  direction: 'vertical',
  color: "#000"
}
const instance1 = sliceRevealer(target1, option1);
 
jQuery(document).ready(function($) { 
    instance1.goPhase('end');
});  


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

/* icon */
$('.list').children().on('click', function(e) {
  e.preventDefault();
  /* console.log('click!'); */
  $('.explain-area').toggleClass('visible');
  $('.explain-area').toggleClass('animate__animated animate__fadeInUpBig');
  $('.list').css('pointer-events','none');
  $('.list').removeClass('animate__animated animate__fadeInUp');
  $('.title').addClass('animate__animated animate__flipInX');
  $('.text').addClass('animate__animated animate__fadeInUp');
  $('.close-icon').addClass('animate__animated animate__bounce');
  $('.list-ko').addClass('animate__animated animate__fadeInUpBig');
  $('.list-ko').addClass('animate__animated animate__fadeInUpBig');
  $('.how-area').css('display','none');
});




/* close-icon */
$('.close-icon').on('click', function(e){
  e.preventDefault();
  /* console.log('click'); */
  $('.explain-area').toggleClass('visible');
  $('.explain-area').toggleClass('animate__animated animate__fadeInUpBig');
  $('.list').css('pointer-events','auto');
  $('.big-title').removeClass( 'animate__animated animate__fadeInUp');
  $('.big-re-title').removeClass( 'animate__animated animate__fadeInDown');
  $('.re-icon').removeClass('animate__animated animate__fadeIn');
  $('.list').addClass('animate__animated animate__fadeInUp');
  $('.title').removeClass('animate__animated animate__flipInX');
  $('.text').removeClass('animate__animated animate__fadeInUp');
  $('.close-icon').removeClass('animate__animated animate__bounce');
  $('.list-ko').removeClass('animate__animated animate__fadeInUpBig');
  $('.re-pic').removeClass('animate__animated animate__tada');  
});


/* change */
$('.list').children().click(function(){
  
  var $number = $(this).prop('id');
  var word = ($(this).html());
  $('.title').html(word);
  $('.title').addClass( 'animate__animated animate__fadeInUp');

  var title = words[$number].e_text;
  $('.text').html(title);

  var bigTitle = words[$number].title;
  $('.big-title').html(bigTitle);

  var reBigTitle = words[$number].re_word;
  $('.big-re-title').html(reBigTitle);

  var icon = words[$number].icon;
  $('.re-icon').children().attr('src',icon);

  var K_Text = words[$number].k_text;
  $('.list-ko').html(K_Text);

  var word_bg0 = words[$number].bg_gif;
  $('.top-bg').children().attr('src',word_bg0);

  var word_bg1 = words[$number].bg_re_gif;
  $('.bottom-bg').children().attr('src',word_bg1);



  $('.re-pic').on('click',function(e){
    e.preventDefault();
    //console.log('change');
    var cursor = words[$number].cursor;
    localStorage.cursorUrl = cursor;
    // console.log(cursor);
    $('.cursor').css('background-image','url(' + cursor + ')');
    $('.re-pic').removeClass('animate__animated animate__rotateIn');
    $('.re-pic').addClass('animate__animated animate__tada');
  });
  

  Fadein();
});

function Fadein(){
  $('.big-title').addClass( 'animate__animated animate__fadeInUp');
  $('.big-re-title').addClass( 'animate__animated animate__fadeInDown');
  $('.re-icon').addClass('animate__animated animate__fadeIn');
}


/* cursor change */

/* bg-gif */
$('.big-title').mouseover(function(){
  //console.log('enter');
  $('.top-bg').css('opacity','1');
}).mouseout( function(){
  //console.log('out');
  $('.top-bg').css('opacity','0');
});

$('.big-re-title').mouseover(function(){
  //console.log('enter');
  $('.bottom-bg').css('opacity','1');
}).mouseout( function(){
  //console.log('out');
  $('.bottom-bg').css('opacity','0');
});


/*  */
}) (jQuery);