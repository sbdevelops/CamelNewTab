// Saves options to chrome.storage.sync.
function save_options() {
  var ui_experience_main = document.getElementById('experience_main').value;
  chrome.storage.sync.set({
    settings_ui_experience_main: ui_experience_main,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
      window.close();
      window.open("../redirect.html")
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    settings_ui_experience_main: 'original',
  }, function(items) {
    document.getElementById('experience_main').value = items.settings_ui_experience_main;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);