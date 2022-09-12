/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {

    'use strict';
    /*--------------------------------------------------------------------------------------------
        document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
    function lightbox_popup() {
       lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery: true,
            thumb_attr: 'data-lcl-thumb',

            skin: 'minimal',
            radius: 0,
            padding: 0,
            border_w: 0,
        });
    }

    function masonryBox() {
        if (jQuery().isotope) {
            var $container = jQuery('.masonry-wrap');
            $container.isotope('reloadItems');
            $container.isotope({
                itemSelector: '.masonry-item',
                transitionDuration: '1s',
                originLeft: true,
                stamp: '.stamp'
            });
        }
    }

    // > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}

    /*--------------------------------------------------------------------------------------------
       document.ready ALL FUNCTION START
   ---------------------------------------------------------------------------------------------*/
    jQuery(document).ready(function () {
        // > masonry function function by = isotope.pkgd.min.js	
        masonryBox();

        scroll_top();

        // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
        lightbox_popup();
        
    });

})(window.jQuery);

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
    // > page loader function by = custom.js		
    page_loader();
});

// > page loader function by = custom.js ========================= //		
function page_loader() {
    $('.loading-area').fadeOut(1000);
}