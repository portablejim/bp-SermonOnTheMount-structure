
// Use PanZoom
const elem = document.getElementById('primaryWrapper')
const panzoom = Panzoom(elem, { canvas: true, maxScale: 2, roundPixels: true, step: 0.1 })
const parent = elem.parentElement
// Bind to Shift + wheel
parent.addEventListener('wheel', function(event) {
  //if (!event.shiftKey) return
  panzoom.zoomWithWheel(event)
})

const themeParam = URL.parse(window.location).searchParams.get('theme');
if(themeParam && themeParam.length > 0)
{
  document.body.classList = [`colorStyle${themeParam}`]
}
