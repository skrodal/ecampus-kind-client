/**
 * @author Simon Skrødal
 * @since August 2015
 */
 
 var DATAPORTEN = (function () {
	 
	 var DEBUG = true;
	
	 /**
	  * 
	  */
	 function getUserInfoXHR(){
		return DATAPORTEN_AUTH.jso().ajax({
			url: DATAPORTEN_AUTH.config().dp_endpoints.userinfo,
			dataType: 'json'
		}).pipe(function (data) {
			DEBUG : console.log(data);
			return data;
		}).fail(function (jqXHR, textStatus, error) {
			console.log(textStatus);
		});
	 }
	 
	// 
	return {
		xhrUserInfo : function() {
			return getUserInfoXHR();
		}
	};

})();
