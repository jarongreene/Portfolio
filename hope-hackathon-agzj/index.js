

function authenticate() {
	return gapi.auth2.getAuthInstance()
		.signIn({scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/jobs"})
		.then(function() { console.log("Sign-in successful"); },
				function(err) { console.error("Error signing in", err); });
	}

	
	function loadClient() {
	gapi.client.setApiKey("D2pUgYCYx6wFG6MPWx_Tuzjy");
	return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/jobs/v4beta1/rest")
		.then(function() { console.log("GAPI client loaded for API"); },
				function(err) { console.error("Error loading GAPI client for API", err); });
	}

	function execute() {
	return gapi.client.jobs.projects.jobs.search({
		"resource": {
		"jobQuery": {}
		}
	})
		.then(function(response) {

			console.log("Response", response);
				},
				function(err) { console.error("Execute error", err); });
			}

var GoogleAuth;
function initClient() {
	gapi.client.init({
		'apikey': "AIzaSyAs1sXDMp1pjLmZpF6xiZH4VdvGrGuUBOI",
		'clientId': '419223357801-j7usi5rea5nmmnh5nrcp1i9m85u2bs0i.apps.googleusercontent.com',
		'scope': 'https://www.googleappis.com/auth/drive.metadata.readonly',
	}).then(function () {
		GoogleAuth = gapi.auth2.getAuthInstance();
	});


	gapi.load("client:auth2", function() {
		gapi.auth2.init({client_id: "419223357801-j7usi5rea5nmmnh5nrcp1i9m85u2bs0i.apps.googleusercontent.com"});
	  });
}