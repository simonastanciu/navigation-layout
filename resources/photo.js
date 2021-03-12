$(function () {
    const galleryImage = $('.product-img');
    const galleryOverlay = $('.gallery-overlay');
    const imageWrapper = $('.full-image-wrapper');

    galleryImage.click(function() {
        imageWrapper.css({backgroundImage:"url(assets/product-1/" + $(this).data('image') + ")"});
        galleryOverlay.fadeIn('slow');
    });

    imageWrapper.click(function(e) {
        e.stopPropagation();
    });

    galleryOverlay.click(function(){
        $(this).fadeOut('slow');
    })
})