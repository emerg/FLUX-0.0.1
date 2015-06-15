
// Off canvas navigation code
$('.mobile-menu-icon').on('click', function(e){
	console.log('click');
	$('.site-container').toggleClass('site-slid-left');
	$('.offcanvas-nav').toggleClass('menu-slid-left');

});


$('.search-icon').on('click', function(e){
    console.log('click');
    $('.main-nav .search-container').toggleClass('hide');

});

$(window).resize(function() {
	viewportWidth = $(window).width();
    if (viewportWidth > 750) {
		$('.site-container').removeClass('slid-right');
    }
});
// End off canvas navigation code
  


// SWIPER ROTATION CODE
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });


        var swiper2 = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true
    });



        var swiper3 = new Swiper('.swiper-container-3', {
        pagination: '.swiper-pagination-3',
        paginationClickable: true
    });


// END SWIPER ROTATION CODE