var casper = require('casper').create();

/*
casper.start('http://www.google.co.jp/', function() {
    this.echo(casper.getTitle());
})
*/
casper.start();

casper.open('http://google.co.jp');

casper.then(function() {
    casper.capture('screenshot.png');
});

casper.run();
