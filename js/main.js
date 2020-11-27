console.log("Script Load");

(function($) {
 /*  */
 

var total_section = 7; //전체 원페이지 수
var current_idx = 0;
var page_h = 0;
var _isScroll = false;
var _isReady1 = false;
var _isReady2 = false;
var _isReady3 = false;




$(document).ready(function(){


  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    $('html').scrollTop(0);
    $('body').scrollTop(0);
    console.log('>>>')
  };
  
  instance1.goPhase('end', {doneCB: function() {
    _isReady1 = true;

  }});
  setHeight();
		
	// Scroll Event
	$('body').on('mousewheel', function(event) {
    if (current_idx === 0 && !_isReady1) return;	
    if (current_idx === 1 && !_isReady2) return;
    if (current_idx === 7 && !_isReady3) return;	
    if (_isScroll) return;
    
		console.log(current_idx);
			
		var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
		var y = 0;

		if(direction > 0){
			// up
			current_idx --;
			if(current_idx < 0){current_idx = 0;}
			y = current_idx * page_h;
		}
		else{
			// down
			current_idx ++;
			if(current_idx > total_section){
				current_idx = total_section;
				current_idx= 0;
			}
			
			y = current_idx * page_h;		
    }
    _isScroll = true;
    //console.log(y);
		$('html,body').stop(true).animate({scrollTop: y}, {duration: 500, complete: function() {
      _isScroll = false;
    }});	
  });
});

function setHeight(){
	
	// 높이 설정
	screen_h = document.body.clientHeight;
	page_h = screen_h;
	$("#onepage > section").height(page_h);
}


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


const target2 = $('.black-div2');
const option2 = {       
  numOfSlices: 12,
  startPosition: 'middle',
  endPosition: 'top',
  transitionOrder: [11,10,9,8,7,6,5,4,3,2,1,0],
  direction: 'vertical',
}
const instance2 = sliceRevealer(target2, option2);


const target3 = $('.black-div3');
const option3 = {       
  numOfSlices: 12,
  startPosition: 'middle',
  endPosition: 'top',
  transitionOrder: [11,10,9,8,7,6,5,4,3,2,1,0],
  direction: 'vertical',
  color: "#000",
}
const instance3 = sliceRevealer(target3, option3);


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

/* hover pixel text */
$('.delight-insight').mouseover(function(){
  $('.delight').children().css({'font-family':'NeuePixelGrotesk', 
  'text-shadow':' -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
  color: '#fff'});
  $('.insight').children().css({'font-family':'NeuePixelGrotesk', 
  'text-shadow':' -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
  color: '#fff'});
  $('.pixelation').css('display','');
  $('.pixelation').css('opacity','1');
  $('.pixelation').addClass('animate__animated animate__fadeIn');
  $('.black').children("span").addClass('animate__animated animate__fadeInUp');
  $('.pixelation-ko').children("li").addClass('animate__animated animate__fadeInUp');
  $('.number').css('opacity','0');
  $('.re').css('opacity','0');
  $('.icon-box').css('opacity','0');
}).mouseout(function(){
  $('.delight').children().removeAttr('style');
  $('.insight').children().removeAttr('style');
  $('.pixelation').css('display','none');
  $('.pixelation').css('opacity','0');
  $('.number').css('opacity','1');
  $('.re').css('opacity','1');
  $('.icon-box').css('opacity','1');
});

/* number hover */
$('.number').mouseover(function(){
  $(this).children().css({'font-family':'NeuePixelGrotesk', 
  'text-shadow':' -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
  color: '#fff'});
  $('.come').css('display','block');
  $('.come').addClass('animate__animated animate__fadeIn');
  $('.come').addClass('.move');
  $('.come').css('opacity','1');
  $('.delight-insight').css('opacity','0');
  $('.re').css('opacity','0');
  $('.icon').css('display','none');
  $('.normal').css("color",'#fff');
  $('.pixel').css("color",'#fff');
}).mouseout(function(){
  $(this).children().removeAttr('style');
  $('.come').css('display','none');
  $('.delight-insight').css('opacity','1');
  $('.re').css('opacity','1');
  $('.icon').css('display','');
  $('.normal').css("color",'#000');
  $('.pixel').css("color",'#000');
});

/* arrow hover */
$(".re").mouseover(function(e){
  $(".arrow").attr("src", "./img/arrow3.png");
  $('.arrow').addClass('animate__animated animate__fadeInDown');
}).mouseout(function(e){
  $(".arrow").attr("src", "./img/arrow2.png");
  $('.arrow').removeClass('animate__animated animate__fadeInDown');
}); 

/* re click */
$(".re").on('click', function(event) {
  event.preventDefault();    
  $('html,body').animate({scrollTop:969}, 500); 

});



/* scroll */
var scrollPosition1 = $(".paragraph-1").offset().top;
//console.log("1 = " + scrollPosition1); //0
var scrollPosition2 = $(".paragraph-2").offset().top;
//console.log("2 = " + scrollPosition2); // 969
var scrollPosition3 = $(".paragraph-3").offset().top;
//console.log("3 = " + scrollPosition3); //1938

/* scroll event */
/* scroll event */

document.addEventListener('scroll', function() {
  var now = document.documentElement.scrollTop;
  //console.log(now);

  if (now == scrollPosition1){
    $('.icon').attr("src", "./img/icon-1.gif");
    $('.icon').css({'top':'192px','right':'445px'}); 
    $('.hamburger').children().css('background','#000');


  } else if (now >= scrollPosition2 && now < scrollPosition3) {
    $('.icon').attr("src", "./img/icon-2.gif");
    $('.icon').css({'top':'415px','right':'1580px'}); 
    $('.icon').attr('class','icon animate__animated animate__backInDown');
    $('.hamburger').children().css('background','#fff');
    
    instance2.goPhase('end', {
      doneCB : function() {
        _isReady2 = true;
      }
    });

  } else if (now == scrollPosition3) {
   
    $('.icon').attr("src", "./img/icon-3.gif");
    $('.icon').css({'top':'230px','right':'190px'}); 
    $('.icon').attr('class','icon animate__animated animate__backInDown');
    $('.ko-text').addClass('animate__animated animate__fadeInDown');
    $('.hamburger').children().css('background','#000');

    instance3.goPhase('end' ,{
      doneCB : function() {
        _isReady3 = true;
      }
    });
  }
  
  if (current_idx == 1) {
    console.log('.text-are');
  }

});

/* icon click */
$(".re").on('click', function(event) {
  event.preventDefault();  
  console.log('icon click'); 
  $('html,body').animate({scrollTop:969}, 500); 

});

/* top btn */
$('.top-btn').on('click',function(){
  $('html,body').animate({scrollTop:$(".paragraph-1").offset().top}, 500); 
});


$('.top-btn').hover(function(){
 $(this).children().toggleClass('animate__animated animate__slideInUp');
});


/* instance.goPhase('end'); */

/* random */


/* load */
/* 
$(window).load(function() {
  $('#loading').hide();
}); */

 /*  */
 console.log(localStorage.cursorUrl.typeof);
 $('.cursor').css('background-image','url(' + localStorage.cursorUrl + ')');
 var lct = localStorage.cursorUrl;
 console.log(lct.typeof);
 if(lct.typeof === "undefined"){
   console.log("cursor change");
  
 }
 
}) (jQuery);

