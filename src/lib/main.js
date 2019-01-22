!(function(scriptUrl) {
  if (!window.pintrk) {
    window.pintrk = function() {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments));
    };
    var pintrk = window.pintrk;
    pintrk.queue = [];
    pintrk.version = "3.0";
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptUrl;
    var firstScriptInPage = document.getElementsByTagName("script")[0];
    firstScriptInPage.parentNode.insertBefore(script, firstScriptInPage);
  }
})("https://s.pinimg.com/ct/core.js");
pintrk("load", "YOUR_TAG_ID");
pintrk("page");
