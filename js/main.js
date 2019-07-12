/* LANDING ANIMATION WITH GSAP */
document.addEventListener('DOMContentLoaded', function() {

  // init controller
  var controller = new ScrollMagic.Controller();



  /* FIRST SCREEN */

  var tl = new TimelineMax();
  tl.to('.logo', .3, {left:0, opacity:1, ease:Back.easeOut.config(3)}, 1)
    .staggerTo('.toggle-lang .lang', .5, {opacity:1}, .2)
    .to('.icon-local', 1, {top:0, opacity:1, ease:Elastic.easeOut.config(1, 0.3)})
    .to('.address-info', .5, {opacity:1, scale:1}, '-=1') 
    .to('.order-call .phone', .3, {right:0, opacity:1, scale:1, ease:Back.easeOut.config(1.7)}, '-=.5')
    .to('.callback-link', .8, {bottom:0, opacity:1}, '-=1')
    .to('.home, .inner_banner_image', 1.5, {opacity:1}, .5)
    .staggerTo('.home-text-block span', 1, {opacity:1}, .7, 2)
    .to('.signup-btn-box', 2, {rotationX:1080, ease:Power4.easeOut}, '-=.5')
    .to('.top-nav', 1, {opacity:1}, 1)
    .staggerTo(selectReversed('.list-item'), .8, {left:0, opacity:1, ease:Power4.easeOut}, .2, 1)
    .to('.toggle_menu_button', 1, {opacity:1}, 1);

    /* Reverse order of top menu item on animation */
    function selectReversed(query) {   
      var nodes = document.querySelectorAll(query);  
      nodes = Array.prototype.slice.call(nodes, 0);
      return nodes.reverse();
    }



    
  /* ABOUT SECTION */

  /* About Heading */
  var aboutHeadingAnima = TweenMax.to('.about_heading', 1, {top:0, opacity:1});

  var aboutHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.about_heading',
    reverse: false,
    triggerHook: 1
  })
  .setTween(aboutHeadingAnima);

  
  /* About Text */
  var aboutTextAnima = new TimelineMax();
  aboutTextAnima.staggerTo('.about_description span', 1.5, {opacity:1}, .01);

  var aboutTextScene = new ScrollMagic.Scene({
    triggerElement: '.about_description',
    reverse: false,
    triggerHook: .5
  })
  .setTween(aboutTextAnima);


  /* About Images */
  var aboutImagesAnima = new TimelineMax();
  aboutImagesAnima.staggerTo('.about_images img', 1, {scale:1, ease:Back.easeOut.config(1.7)}, .2);

  var aboutImagesScene = new ScrollMagic.Scene({
    triggerElement: '.about_images',
    reverse: false,
    triggerHook: .5
  })
  .setTween(aboutImagesAnima);




  /* SERVICES SECTION */

  /* Services Heading */
  var servicesHeadingAnima = TweenMax.to('.services_heading', 1, {left:0, opacity:1, ease:Back.easeOut.config(2)});

  var servicesHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.services_heading',
    reverse: false,
    triggerHook: .8
  })
  .setTween(servicesHeadingAnima);

  
  /* Services Items */
  if (window.matchMedia('(max-width: 991px)').matches) {

    var servicesItemsAnima1 = TweenMax.to('.services_item.first', 1.5, {opacity:1, rotationY:0});

    var servicesItemsScene1 = new ScrollMagic.Scene({
      triggerElement: '.services_item.first',
      reverse: false,
      triggerHook: .4
    })
    .setTween(servicesItemsAnima1);

    var servicesItemsAnima2 = TweenMax.to('.services_item.second', 1.5, {opacity:1, rotationY:0});

    var servicesItemsScene2 = new ScrollMagic.Scene({
      triggerElement: '.services_item.second',
      reverse: false,
      triggerHook: .4
    })
    .setTween(servicesItemsAnima2);

    var servicesItemsAnima3 = TweenMax.to('.services_item.third', 1.5, {opacity:1, rotationY:0});

    var servicesItemsScene3 = new ScrollMagic.Scene({
      triggerElement: '.services_item.third',
      reverse: false,
      triggerHook: .4
    })
    .setTween(servicesItemsAnima3);

  } else {

    var servicesItemsAnima = new TimelineMax();
    servicesItemsAnima.staggerTo('.services_item', 1.5, {opacity:1, rotationY:0}, .5);

    var servicesItemsScene = new ScrollMagic.Scene({
      triggerElement: '.services_item',
      reverse: false,
      triggerHook: .4
    })
    .setTween(servicesItemsAnima);
  
  }




  /* SIGNUP SECTION */

  var signupAnima = TweenMax.to('.signup', 1.5, {
    opacity: 1
  });

  var signupScene = new ScrollMagic.Scene({
    triggerElement: '.signup',
    reverse: false,
    triggerHook: .5
  })
  .setTween(signupAnima);




  /* PORTFOLIO SECTION */

  /* Portfolio Heading */
  var portfolioHeadingAnima = TweenMax.to('.portfolio_heading', 1, {
    left: 0,
    opacity: 1,
    ease:Back.easeOut.config(2)
  });

  var portfolioHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio_heading',
    reverse: false,
    triggerHook: .8
  })
  .setTween(portfolioHeadingAnima);


  /* Portfolio List */
  var portfolioListAnima = new TimelineMax();
  portfolioListAnima.staggerTo('.portfolio_item', 1, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut.config(3)
  }, .1);

  var portfolioListScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio_item',
    reverse: false,
    triggerHook: .8
  })
  .setTween(portfolioListAnima);


  /* Portfolio Big Image */
  var portfolioBigImageAnima = TweenMax.to('.portfolio_photo-big', 1, {
    opacity: 1,
    scale: 1
  });

  var portfolioBigImageScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio_photo-big',
    reverse: false,
    triggerHook: .9
  })
  .setTween(portfolioBigImageAnima);

  
  /* Portfolio Smaller Images */
  var portfolioImagesAnima = new TimelineMax();
  portfolioImagesAnima.staggerTo('.portfolio_photo', 1, {
    opacity: 1
  }, .3);

  var portfolioImagesScene = new ScrollMagic.Scene({
    triggerElement: '.portfolio_photo',
    reverse: false,
    triggerHook: .42
  })
  .setTween(portfolioImagesAnima);




  /* SHARE EVENT FORM SECTION */

  var shareEventAnima = TweenMax.to('.share_event', 1, {
    opacity: 1
  });

  var shareEventScene = new ScrollMagic.Scene({
    triggerElement: '.share_event',
    reverse: false,
    triggerHook: .5
  })
  .setTween(shareEventAnima);




  /* TESTIMONIALS SECTION */

  /* Testimonials Heading */
  var testHeadingAnima = TweenMax.to('.testimonials_heading', 1, {
    top: 0,
    opacity: 1
  });

  var testHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.testimonials_heading',
    reverse: false,
    triggerHook: 1
  })
  .setTween(testHeadingAnima);


  /* Testimonials Item Box */
  var testItemAnima = new TimelineMax();
  testItemAnima.staggerTo('.testimonials_item', 1, {
    top: 0,
    opacity: 1
  }, .5);

  var testItemScene = new ScrollMagic.Scene({
    triggerElement: '.testimonials_item',
    reverse: false,
    triggerHook: .8
  })
  .setTween(testItemAnima);


  /* Testimonials Read All Button */
  var testAllAnima = TweenMax.to('.testimonials_read_all', 2, {
    top: 0,
    opacity: 1,
    rotationX: 1080,
    ease: Power4.easeOut
  });

  var testAllScene = new ScrollMagic.Scene({
    triggerElement: '.testimonials_read_all',
    reverse: false,
    triggerHook: .7
  })
  .setTween(testAllAnima);




  /* MAIN DESCRIPTION */

  /* First Text Block */
  var firstTextBlockAnima = TweenMax.to('.main_description .first', 2, {
    left: 0,
    opacity: 1,
    ease: Power4.easeOut
  });

  var firstTextBlockScene = new ScrollMagic.Scene({
    triggerElement: '.main_description p',
    reverse: false,
    triggerHook: .6
  })
  .setTween(firstTextBlockAnima);


  /* Second Text Block */
  var secondTextBlockAnima = TweenMax.to('.main_description .second', 2, {
    right: 0,
    opacity: 1,
    ease: Power4.easeOut
  });

  var secondTextBlockScene = new ScrollMagic.Scene({
    triggerElement: '.main_description p',
    reverse: false,
    triggerHook: .6
  })
  .setTween(secondTextBlockAnima);




  /* FOOTER */

  /* Footer Menu */
  var fooMenuAnima = new TimelineMax();
  fooMenuAnima.to('footer', 1, {opacity:1})
             .staggerTo('.foo_item', .3, {scale:1, opacity:1}, .1);

  var fooMenuScene = new ScrollMagic.Scene({
    triggerElement: '.foo_menu',
    reverse: false,
    triggerHook: .6
  })
  .setTween(fooMenuAnima);


  /* Footer Contacts */
  var fooContactsAnima = TweenMax.to('.foo_contacts_block', .4, {scaleY:1});

  var fooContactsScene = new ScrollMagic.Scene({
    triggerElement: '.foo_contacts_block',
    reverse: false,
    triggerHook: .8
  })
  .setTween(fooContactsAnima);


  /* Footer Form */
  var fooFormAnima = TweenMax.to('.foo_form_block', .5, {top:0, opacity:1, scaleX:1});

  var fooFormScene = new ScrollMagic.Scene({
    triggerElement: '.foo_form_block',
    reverse: false,
    triggerHook: .9
  })
  .setTween(fooFormAnima);


  /* Footer Social */
  var fooSocialAnima = new TimelineMax();
  fooSocialAnima.staggerTo('.social img', 1, {top:0, opacity:1, ease:Elastic.easeOut.config(1, 0.3)}, .3)
                .to('.up-btn', 1, {opacity:1}, .5);

  var fooSocialScene = new ScrollMagic.Scene({
    triggerElement: '.social',
    reverse: false,
    triggerHook: 1
  })
  .setTween(fooSocialAnima);



  // Controller of Scenes
  controller.addScene([
    aboutHeadingScene,
    aboutTextScene,
    aboutImagesScene,

    servicesItemsScene1,
    servicesItemsScene2,
    servicesItemsScene3,
    servicesHeadingScene,
    servicesItemsScene,

    signupScene,

    portfolioHeadingScene,
    portfolioListScene,
    portfolioBigImageScene,
    portfolioImagesScene,

    shareEventScene,

    testHeadingScene,
    testItemScene,
    testAllScene,

    firstTextBlockScene,
    secondTextBlockScene,

    fooMenuScene,
    fooContactsScene,
    fooFormScene,
    fooSocialScene
	]);

});









/* Mobile menu */
$(".toggle_menu_button").click(function() {
  $(this).fadeOut("fast");
  $(".mask_bg").fadeIn("fast");
	$(".mobile_menu").addClass("open_mobile_menu");
  $('body').css('overflow', 'hidden');
});

$(".mask_bg").click(function() {
  $(".mobile_menu").removeClass("open_mobile_menu");
	$(".mask_bg").fadeOut("fast");
  $(".toggle_menu_button").fadeIn("fast");
  $('body').css('overflow', 'initial');
});

$(".close_menu_button").click(function() {
	$(".mask_bg").fadeOut("fast");
	$(".mobile_menu").removeClass("open_mobile_menu");
  $(".toggle_menu_button").fadeIn("fast");
  $('body').css('overflow', 'initial');
});


/* Open popup btn */
$('.callback-link, .foo_callback').on('click', function(){
  /* blocking to scroll on open popup */
  $('body').css('overflow', 'hidden');
  $('.order_callback_overlay').addClass('open');
  setTimeout(function(){
  	$('.order_callback_popup').addClass('open');
  	$('.popup_form').addClass('open');
   }, 250);
});

/* Close popup btn */
$('.popup_close_btn').on('click', function(){
	$('.popup_form').removeClass('open');
	$('.order_callback_popup').removeClass('open');
  $('.order_callback_overlay').removeClass('open');
  $('body').css('overflow', 'initial');
});

/* Close popup by click anywhere */
$(document).mouseup(function(e){
  var popup = $('.order_callback_overlay');
  if (e.target === popup[0]) {
    $('.popup_form').removeClass('open');
		$('.order_callback_popup').removeClass('open');
    $('.order_callback_overlay').removeClass('open');
    $('body').css('overflow', 'initial');
  }
});


/* Submit popup form */
$(".popup_btn_submit").on('click', function(){
  $(".popup_form").submit();
});


/* UP BUTTON */
$(function() {

  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('.up-btn').fadeIn();
      } else {
        $('up-btn').fadeOut();
      }
  });
   
  $('.up-btn').click(function() { 
    $('body,html').animate({scrollTop:0}, 800);
  });
   
});


/* FOPM INPUT MASK PATTERN VALIDATION */
$(document).ready(function() {
  $(".form_phone").mask("+38 (999) 999-99-99");
});
