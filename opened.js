chrome.storage.sync.get
 (
  {'prefix': '• '},
  function(items)
   {
    var prefix = items.prefix;
    var title = document.title;
    if (title.substr(0, prefix.length) != prefix) document.title = prefix + document.title;
   }
 );
