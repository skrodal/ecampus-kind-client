/**
 * @author Simon Skrødal
 * @since August 2015
 */
 
 var KIND = (function () {
	 
	 var DEBUG = true;
	 
	 /**
	  * 
	  */
	 function getRoutesXHR(){
		return DATAPORTEN_AUTH.jso().ajax({
			url: DATAPORTEN_AUTH.config().api_endpoints.kind,
			dataType: 'json'
		}).pipe(function (data) {
			DEBUG : _consoleDebug(data, '/');
			return data;
		}).fail(function (jqXHR, textStatus, error) {
			console.log(textStatus);
		});
	 }
	 
	 // Generic
	 function callKindRouteXHR(route){
		 
		return DATAPORTEN_AUTH.jso().ajax({
			url: DATAPORTEN_AUTH.config().api_endpoints.kind.substring(0, DATAPORTEN_AUTH.config().api_endpoints.kind.length - 1) + route,	// Drop last slash in endpoint...
			dataType: 'json'
		}).pipe(function (data) {
			DEBUG : _consoleDebug(data, route);
			return data;
		}).fail(function (jqXHR, textStatus, error) {
			console.log(textStatus);
		});
	 }
	 
	 //-------------------- PRIVATE FUNCTIONS ----------------
	 
	 //
	 function _consoleDebug(data, route){
		 console.log("Rådata fra KIND API [" + route + "]:");
		 console.log(data);
	 }
	 
	 
	 //-------------------- ./PRIVATE FUNCTIONS ----------------

	// 
	return {
		xhrRoutes : function() {
			return getRoutesXHR();
		},
		xhrKindRoute : function (route){
			return callKindRouteXHR(route);
		}
	};

})();
