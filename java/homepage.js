function gifOff () {
    var stylesheet = document.getElementById('stylesheet');

    if(stylesheet.getAttribute('href')=='./css/web.css') {
        stylesheet.setAttribute('href', './css/web2.css');
    } else {
        stylesheet.setAttribute('href', './css/web.css');
    }
}