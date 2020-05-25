
window.$docsify = {
      
   // site title
   name: '<img src="images/rstudio-logo.png" width="50%"/><br/>Rmd Visual Mode',
   
   // google analytics
   ga: 'UA-77306155-5',
   
   // core options
   homepage: 'intro.md',
   auto2top: true,
   topMargin: 15,
   
   // navbar/sidebar/toc
   loadSidebar: '_sidebar.md',
   autoHeader: true,
   maxLevel: 2,
   subMaxLevel: 2,
   
   // search (https://docsify.js.org/#/plugins?id=full-text-search)
   search: {
     maxAge: 0,
     depth: 4,
     namespace: 'visual-markdown-editing'
   },
  
   // copy code (https://github.com/jperasmus/docsify-copy-code/blob/master/README.md#options)
   copyCode: {
     buttonText: 'Copy'
   },
   
   // markdown (https://docsify.js.org/#/markdown?id=markdown-configuration)
   markdown: {},
   
   // themable (https://jhildenbiddle.github.io/docsify-themeable/#/options)
   themeable: {},
   
   // custom plugins
   plugins: [
     introNavigatePlugin,
     cmdToCtrlPlugin
   ],
   
};


// fixups to navigation
function introNavigatePlugin(hook, vm) {
  hook.ready(function() {
    // expand intro on navigation to route
    if (window.location.hash === "#/")
      window.location.hash = "#/intro";
  });
}

// convert Cmd keyboard shortcuts to Ctrl on non-mac systems
function cmdToCtrlPlugin(hook, vm) {
  const kPlatformMac = typeof navigator !== 'undefined' ? /Mac/.test(navigator.platform) : false;
  hook.ready(function() {
    if (!kPlatformMac) {
      const kbdTags = window.document.getElementsByTagName('kbd');
      for (let i = 0; i<kbdTags.length; i++) {
        const kbd = kbdTags.item(i);
        kbd.innerText = kbd.innerText.replace('⌘', '⌃');
      }
    }
  });
}
