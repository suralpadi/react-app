/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {

    'use strict';
    /*--------------------------------------------------------------------------------------------
        document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    // > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
        if ( jQuery().isotope ) {      
            var $container = jQuery('.masonry-wrap');
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp'
                });

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	}
	}	

    /*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
		// > page loader function by = custom.js		
		masonryBox();
});

})(window.jQuery);