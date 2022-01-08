//login-sign-up-form
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const login_wrap = document.getElementById('login-modal-wrap');

signUpButton.addEventListener('click', () => {
  login_wrap.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  login_wrap.classList.remove("right-panel-active");
});
// NAVIGATION
initializeStellarNav(1, '#main-nav');
function initializeStellarNav(index, element) {
	$(element).stellarNav({
		breakpoint: 1024,
		position: 'left'
	});
}
// Index banner slider
$('.bannerSlider').owlCarousel({
  	loop:true,
  	margin:10,
	autoplay:false,
  	dots: false,
  	nav:true,
  	responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
// index services ellipse active
$(document).ready(function(){
    $('.cardInner').hover(
      function(){ 
        $(this).find(".ellipse").addClass("active");
      },
      function() {
        $(this).find(".ellipse").removeClass("active");
      }
   )
});

//PRODUCT QUANTITY SELECT INPUT
$(document).ready(function(){
    $('.count').prop('disabled', false);
    $(document).on('click','.plus',function(){
       $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) + 1 );
   });
    $(document).on('click','.minus',function(){
      $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) - 1 );
      if ($(this).siblings('.count').val() == 0) {
        $(this).siblings('.count').val(1);
        }
    });
});

