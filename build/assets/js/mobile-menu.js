/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {

    'use strict';
    /*--------------------------------------------------------------------------------------------
        document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    // > Nav submenu show hide on mobile by = custom.js
	 function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery(".mega-menu").parent('li').addClass('has-child');
		//jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");
		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
			jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
				jQuery(this).parent().toggleClass('nav-active');
			});
			ev.stopPropagation();
		});
	 }


    /*--------------------------------------------------------------------------------------------
       document.ready ALL FUNCTION START
   ---------------------------------------------------------------------------------------------*/
    jQuery(document).ready(function () {
       // > Nav submenu on off function by = custome.js ===================//
		mobile_nav();
    });

})(window.jQuery);