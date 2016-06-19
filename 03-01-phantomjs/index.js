var casper = require('casper').create();

/*
var fs = require('fs');

// フォルダ作成
var folderName = 'out';
if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
}
*/

//casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53');

// パラメータチェック
var args = casper.cli.args;
if (args.length < 1) {
    casper.echo('URLを指定してね！');
    casper.exit();
}

// capture
casper.start();
casper.viewport(1024, 768);
var arg = args[0];
var text = encodeURIComponent(arg);
casper.open('https://www.flickr.com/search/?text=' + text);
casper.echo('capture:' + text);
casper.then(function() {
    var fileName = arg + '.png';
    this.capture('out/' + fileName, { top:0, left:0, width:1024, height:800 });
});
casper.run();
