	JSO.enablejQuery($);

	// Når hele dokumentet er lastet
	$( document ).ready(function() {
		//  ...HVIS vi har en token fra Dataporten
		if(DATAPORTEN_AUTH.token()){
			// Wait for userinfo to complete
			$.when(DATAPORTEN.xhrUserInfo()).done(function(data){
				// Accountinfo header
				$('.user-full-name').text(data.user.name);
				$('.user-email').text(data.user.email);
				// STOP here if logged on user is not from UNINETT
				if(data.user.email.indexOf("uninett.no") === -1) {
					$('#xhrButtons').empty();
					$('.content-wrapper').prepend(
						'<div class="alert alert-danger">' +
							'<h4><i class="icon fa fa-ban"></i> Begrenset tilgang!</h4>' +
							'Tilgang til denne klienten er begrenset til personell fra UNINETT.' +
						'</div>'
					);
					// Exit
					return;
				}
				// Activate menu
				MENU.init();

				// Fill in defaults
				$('#routeSettings').find('.serviceOrg').val(data.user.email.split("@")[1]);
				$('#routeSettings').find('.serviceId').val(DATAPORTEN_AUTH.config().kind_test.service_id);
				// Get all available routes from the API
				$.when(KIND.xhrRoutes()).done(function (routes) {
					// Empty button container div
					$('#xhrButtons').empty();
					$.each(routes.data, function(index, route){
						// FROM API:
						// route[0] == METHOD (e.g. 'GET')
						// route[1] == PATH
						// route[3] == DESCRIPTION
						$('#xhrButtons').append(
							'<p><strong>' + route[3] + '</strong></p> <p><button class="xhrButton btn btn-sm btn-success"><strong>' + route[1] + '</strong></button></p>'
						);
					});
				});
				
			});
		}
	});


	$('body').on('click', '#xhrBtnGetEmailList', function(){
		var serviceId = $('#emailExportSettings').find('.serviceId').val();
		// If textbox is empty
		if( serviceId.length === 0) {
			alert("Mangler serviceId!"); return;
		}
		// Check if ID is indeed a number
		if (!isInt(serviceId)){
			alert("Feil format på serviceId!"); return;
		}
		// All good
		var route = '/service/' + serviceId + '/mailinglist/';
		// Loading state
		var $btn = $(this).button('loading');
		// Call API with route on button
		$.when(KIND.xhrKindRoute(route)).done(function(data){
			// Reset state
			$btn.button('reset');
			$('#mailinglistBoxes').empty();

			$.each(data.data, function (type,list){
				$('#mailinglistBoxes').append(
					'<p><strong>' + type + '</strong></p>' +
					'<div class="well"><pre>' + list + '</pre></div>'
				);
			});





		});
	});
	//
	$('body').on('click', '.xhrButton', function(){
		var route = $(this).text();
		// If route for button includes service ID
		if( $(this).text().indexOf("[i:serviceId]") !== -1 ) {
			// If textbox is empty
			if( $('#routeSettings').find('.serviceId').val().length === 0) {
				alert("Mangler serviceId!"); return;
			} 
			// Check if ID is indeed a number
			if (!isInt($('#routeSettings').find('.serviceId').val())){
				alert("Feil format på serviceId!"); return;
			}
			// All good: Add service ID from text box to route
			else {
				route = route.replace("[i:serviceId]", $('#routeSettings').find('.serviceId').val());
			}
		}
		// If route for button includes service ORG
		if ( $(this).text().indexOf("[*:orgId]") !== -1 ) {
			// If textbox is empty
			if( $('#routeSettings').find('.serviceOrg').val().length === 0) {
				alert("Mangler orgId!");
				return;
			} 
			// All good: Add service ORG from text box to route
			else {
				route = route.replace("[*:orgId]", encodeURIComponent($('#routeSettings').find('.serviceOrg').val()));
			}
		}
		
		// Loading state
		$btn = $(this).button('loading');
		// Call API with route on button
    	$.when(KIND.xhrKindRoute(route)).done(function(data){
			// Reset state
			$btn.button('reset');
			// Show result
			$('#apiResponseModal').find('.modal-body').empty();
			$('#apiResponseModal').find('.modal-body').html(
				'<div class="well"><pre>' + JSON.stringify(data, null, 4) + '</pre></div>'
			);
			$('#apiResponseModal').modal();
		});
	});
	
	// LOGOUT
	$('body').on('click', '.dataporten-logout', function(){
		console.log('LOGOUT');
		DATAPORTEN_AUTH.logout();
	});
	
	
	// Util
	function isInt(value) {
		var x;
		if (isNaN(value)) {
			return false;
		}
		x = parseFloat(value);
		return (x | 0) === x;
	}