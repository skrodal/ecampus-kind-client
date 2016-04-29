/**
 * MENU Controller
 *
 * @author Simon Skrodal
 * @since August 2015
 */


var MENU = (function () {

	/**
	 * Called by APP, which has already waited for all XHR calls to complete.
	 */
	function init() {
		$('#sidebar-menu').removeClass('hidden');
		$('li#menuEmailExport').trigger('click');
	}

	return {
		init: function () {
			init();
		}
	}
})();

// The menu
var $sidebarMenu = $('#sidebar-menu');

/**
 * Page show/hide logic
 */
$sidebarMenu.on('click', 'li', function () {
	console.log("INIT");
	// Make clicked li style active
	$(this).addClass('active').siblings().removeClass("active");
	// Hide all pages
	$('section.app_page').addClass('hidden');
	// Show selected page
	$('section#' + $(this).data('page')).removeClass('hidden').hide().fadeIn();
	console.log($(this).data('page'));
});
