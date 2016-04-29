/**
 * Konfigurer JSO modul for bruk med denne klienten og start autentiseringsflyt. 
 * 
 * @author Simon Skrødal
 * @since August 2015
 */
 
 var DATAPORTEN_AUTH = (function () {
	 
	 var CONFIG = 
	 {
		 dp_auth 		:	{
			providerID		: 	"DP-KindTing",
			client_id		:	"DASHBOARD",
			redirect_uri	: 	"DASHBOARD",
			authorization	: 	"https://auth.DATAPORTEN.no/oauth/authorization/"
		 },
		 dp_endpoints	:	{
			// For tilgang må klienten ha bedt om dette scopet i Dashboard
			groups: 	"https://groups-api.DATAPORTEN.no/groups/",
			// Base-URL for bildefil 		
			photo: 		"https://auth.DATAPORTEN.no/user/media/",
			// BrukerID, navn og profilbilde. For mer info (eks. epost, Feide-ting) må scopes etterspørres i Dashboard.
			userinfo: 	"https://auth.DATAPORTEN.no/userinfo"
		 }, 
		 api_endpoints	:	{
			// Andre 3.parts-APIer klienten har tilgang til via Dataporten (DASHBOARD)
			kind : 'https://ecampus-kind.DATAPORTEN-api.no/api/ecampus-kind/'
		 },
		 kind_test 		:	{
			 service_id		:	'SOME_KIND_SERVICE_ID',
			 org			:	'SOMEORG.NO'
		 }
	 };
	 

	// Sett opp JSO med konfig for denne klienten (DASHBOARD)
	var jso = new JSO({
		providerID		: 	CONFIG.dp_auth.providerID,
		client_id		: 	CONFIG.dp_auth.client_id,
		redirect_uri	: 	CONFIG.dp_auth.redirect_uri,
		authorization	: 	CONFIG.dp_auth.authorization,
		debug			: 	false
	});
	
	// Autentisering. Fanger respons-parametre -- denne bør kalles så tidlig som mulig, før applikasjonen lastes. 
	jso.callback();
	
	// 
	function getToken(){
		return jso.getToken(function (token) {
			return token;
		});
	}
	// 
	//getToken();
	

	// 
	return {
		jso: function() {
			return jso;				// Eksponer jso'en til resten av klienten
		}, 
		token: function(){
			return getToken();
		},
		// Dreper sesjonen, inkludert Feide-sesj.
		logout: function(){
			jso.wipeTokens();				
			window.location.replace("https://auth.DATAPORTEN.no/logout");
		}, 
		// Slett sesjon - krever ny runde med godkjenning (men slipper Feide-auth på nytt)
		wipeTokens: function(){
			jso.wipeTokens();
		}, 
		config : function (){
			return CONFIG;
		}
	};

})();
