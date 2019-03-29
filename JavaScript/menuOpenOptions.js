function open_options(){
    chrome.runtime.openOptionsPage();
    console.log("CamelNewTab");
}
document.getElementById('optionsLink').addEventListener('click',
    open_options);