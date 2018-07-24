var scrollbarsHidden = true;
var contentScript;

function hideScrollbars() {
  browser.contentScripts.register({
    js: [{
      file: 'js/qashto_firefox-hide-scrollbars.user.js'
    }],
    css: [{
      file: 'css/content.css'
    }],
    matches: ['<all_urls>'],
    excludeMatches: ['*://mail.google.com/*', '*://accounts.google.com/*',
      '*://*/*.jpg', '*://*/*.png', '*://*/*.gif', '*://*/*.mp4',
      '*://*/*.tiff', '*://*/*.skg', '*://*/*.tif', '*://*/*.avi',
      '*://*/*.mov', '*://*/*.flac', '*://*/*.wav', '*://*/*.aif',
      '*://*/*.m4a', '*://*/*.mqa'
    ],
    runAt: 'document_start'
  }).then(contentScriptObject => {
    contentScript = contentScriptObject;
  });

  scrollbarsHidden = true;
}

function showScrollbars() {
  if (contentScript) {
    contentScript.unregister();
  }

  scrollbarsHidden = false;
}

hideScrollbars();
