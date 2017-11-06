var webViewerRef;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    },
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {
        //webViewerRef = cordova.InAppBrowser.open("http://afm.integratedfm.com.au/", '_blank',  'location=yes');
        
        //window.open("http://afm.integratedfm.com.au/", '_self');//self system
        //window.open("http://afm.integratedfm.com.au/", '_blank', 'location=yes');//self system
       window.open("https://ecusis.ecu.edu.au/", '_system');
        //onImageClicked();
        navigator.splashscreen.hide();
        window.screen.orientation.lock("portrait");
        alignOrgPageImage();
        
        
    }
};

function onImageClicked(){
    window.open("https://ecusis.ecu.edu.au/", '_system');
}

function alignOrgPageImage(){
	var org_page_image=null;
	org_page_image=$("#org-page-image-place-holder")[0];
	if (org_page_image==null){
		return;
	}
    
	
	var image_left = $.mobile.window.width() / 2 - org_page_image.width/2;//org_page_image.width/2;
	$(".image-custom").css('left', image_left);
	$(".page-sisfm-org").css("background-color",stored_msg.screen_color);
	
};
