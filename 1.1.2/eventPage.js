// This function is called onload in the popup code
function getSelectedText(callback) {
  // Inject the content script into the current page 
  chrome.tabs.executeScript(null, { file: 'content.js' }); 
  chrome.runtime.onMessage.addListener(function(message)  { 
    // Call the callback function
    callback(message.selected);          
  });
};
