// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        window.open("../FirstRun/firstInstall.html");
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        window.open("../FirstRun/update.html");
    }
});