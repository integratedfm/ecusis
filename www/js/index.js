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
       window.open("http://afm.integratedfm.com.au/", '_system');
        
        
    }
};

function onImageClicked(){
    if (typeof(webViewerRef)=="undefined" || webViewerRef==null){
        webViewerRef = cordova.InAppBrowser.open("https://ecusis.ecu.edu.au/", '_blank', 'location=yes');
        
    }else{
        webViewerRef.close();
        webViewerRef = cordova.InAppBrowser.open("https://ecusis.ecu.edu.au/", '_blank', 'toolbar=no');
    }
}