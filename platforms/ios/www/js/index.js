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
        
        
    }
};

function onImageClicked(){
    window.open("https://ecusis.ecu.edu.au/", '_system');
}
