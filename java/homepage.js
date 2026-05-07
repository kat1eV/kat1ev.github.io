function gifOff () {
    var stylesheet = document.getElementById('stylesheet');

    if(stylesheet.getAttribute('href')=='/Applications/MAMP/htdocs/mySite/homepage/css/web.css') {
        stylesheet.setAttribute('href', '/Applications/MAMP/htdocs/mySite/homepage/css/web2.css');
    } else {
        stylesheet.setAttribute('href', '/Applications/MAMP/htdocs/mySite/homepage/css/web.css');
    }
}