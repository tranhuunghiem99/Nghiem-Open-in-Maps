chrome.runtime.sendMessage({
  'title': document.title,
  'url': window.location.href,
  'selected': window.getSelection().toString()
});
