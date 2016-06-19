var casper = require('casper').create();

casper.start();

casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53');
casper.viewport(750, 1334);

casper.open('https://google.co.jp/');

var text = encodeURIComponent("ネコ");
casper.open('https://www.flickr.com/search/?text=' + text);

/*
window.setTimeout(function() {
    casper.then(function() {
        this.capture('fliclr-cat-iPhone.png');
    });
}, 3000);
*/

casper.then(function() {
    this.capture('fliclr-cat-iPhone.png');
});

casper.run();
