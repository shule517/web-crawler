var casper = require('casper').create();

casper.start();

casper.viewport(1024, 800);

// casper.open('https://www.flickr.com/search/?text=%E3%83%8D%E3%82%B3');

//casper.open('https://www.flickr.com/');

/*
casper.then(function() {
    this.fill("form[role='search']", { q : "ネコ" }, true);
});
*/
var text = encodeURIComponent("ネコ");
casper.open('https://www.flickr.com/search/?text=' + text);

casper.then(function() {
    this.capture('fliclr-cat.png', { top:0, left:0, width:1024, height:800 });
});

casper.run();
