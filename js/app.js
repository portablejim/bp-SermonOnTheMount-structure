
const disablePanZoomParam = URL.parse(window.location).searchParams.get('nopanzoom');
if(!disablePanZoomParam){
  // Use PanZoom
  const elem = document.getElementById('primaryWrapper')
  const panzoom = Panzoom(elem, { canvas: true, maxScale: 2, roundPixels: true, step: 0.1 })
  const parent = elem.parentElement
// Bind to Shift + wheel
  parent.addEventListener('wheel', function(event) {
    //if (!event.shiftKey) return
    panzoom.zoomWithWheel(event)
  })
}


const themeParam = URL.parse(window.location).searchParams.get('theme');
if(themeParam && themeParam.length > 0)
{
  document.body.classList = [`colorStyle${themeParam}`]
}

// From: https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
var getFirstBrowserLanguage = function () {
  var nav = window.navigator,
    browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
    i,
    language;

  // support for HTML 5.1 "navigator.languages"
  if (Array.isArray(nav.languages)) {
    for (i = 0; i < nav.languages.length; i++) {
      language = nav.languages[i];
      if (language && language.length) {
        return language;
      }
    }
  }

  // support for other well known properties in browsers
  for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
    language = nav[browserLanguagePropertyKeys[i]];
    if (language && language.length) {
      return language;
    }
  }

  return null;
};

const langParam = URL.parse(window.location).searchParams.get('langusa');
const preferredLang = getFirstBrowserLanguage()?.toLowerCase() || '';
if(preferredLang !== 'en' && preferredLang !== 'en-us' && !langParam) {
  console.debug('Replacing words with non-USA ones');
  document.querySelectorAll('.spellDifferent').forEach(function (el) {
    if(el.dataset.enau) {
      el.innerHTML = el.dataset.enau;
    }
  })
}

