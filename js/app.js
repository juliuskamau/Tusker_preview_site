GALLERY = {
    bindImageGallery: function () {
        $(document).ready(function() {
            if ($("#image-gallery").length) {
                  $('#image-gallery').lightSlider({
                      gallery:true,
                      item:1,
                      thumbItem:9,
                      slideMargin: 0,
                      speed:500,
                      auto:true,
                      loop:true 
                  });
                }                
          });
    },
};


ANIMATION = {
    bindAnimation: function () {
    //<![CDATA[ 
        $(function(){
            function onScrollInit( items, trigger ) {
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');
                  
                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });

                    var osTrigger = ( trigger ) ? trigger : osElement;
                    
                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: true,
                            offset: '90%'
                    });
                });
            }

            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]> 
    },
};


var onLoad = function () {
    GALLERY.bindImageGallery();
    ANIMATION.bindAnimation();
};


$(document).foundation();
window.onload = onLoad();