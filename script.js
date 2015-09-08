function changeBackgroundOnScroll() {
	var nav = document.getElementsByTagName('nav')[0];
	if (window.scrollY > 20) {
		nav.className = 'coral-bg';
	} else {
		nav.className = '';
	}
}

window.onscroll = function() {
	changeBackgroundOnScroll();
	showPortfolioImagesOnScroll();
};

// window.onscroll = changeBackgroundOnScroll;
// window.onscroll = showPortfolioImagesOnScroll;

$(".imageOne").css("height", window.innerWidth);
console.log(window.innerWidth);

function showPortfolioImagesOnScroll() {
 if (window.scrollY > 800) {
 	$('#projOne').show();
 	 // $('#projOne').addClass("projects")
 	 	$('#projOne').addClass('animated fadeInDown');
 }

}

// $('#projOne').addClass("projects")

// console.log("ready!");

// $(document).ready(function(){
//     $(window).scroll(function(){
//         alert(2);   
//     });
// });


// console.log( "ready!");

// $(window).scroll(function() {

// 	$(".daphne-menu").css("background", "green").fadeOut("slow");

// });