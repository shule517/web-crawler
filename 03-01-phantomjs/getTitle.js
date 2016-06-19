var casper = require('casper').create();

casper.start('http://www.google.co.jp/', function() {
    this.echo(casper.getTitle());
})

casper.run();
