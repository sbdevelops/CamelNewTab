var pageToRedirect
chrome.storage.sync.get({
    settings_ui_experience_main: 'original',
  }, function(items) {
    pageToRedirect = items.settings_ui_experience_main;
    console.log(pageToRedirect);
    if (pageToRedirect == "original") {
    window.location.replace("../CamelNewTab.html");
} else if (pageToRedirect == "simple") {
    window.location.replace("../CamelNewTabSimple.html");
} else if (pageToRedirect == "hamilton") {
    window.location.replace("../HamiltonNewTab.html");
} else if (pageToRedirect == "nothing") {

} else if (pageToRedirect == "google") {
    window.location.replace("https://www.google.com");
} else if (pageToRedirect == "bing") {
    window.location.replace("https://www.bing.com");
} else if (pageToRedirect == "ancient") {
    window.location.replace("../CamelNewTabOld.html");
}
else {
    window.location.replace("../FirstRun/firstInstall.html")
}
  });

