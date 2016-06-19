var client = require('cheerio-httpcli');
var URL = require('url');

var url = 'https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C';
var param = {};
client.fetch(url, param, function(err, $, res) {
    if (err) {
        console.log("error");
        return;
    }

    $('img').each(function(index) {
        var src = $(this).attr('src');
        src = URL.resolve(url, src);
        console.log(src);
        var savePath = 'img/' + URL.parse(src).pathname.replace(/[^a-zA-Z0-9\.]+/g, '_');
        download(src, savePath);
    });
});

var request = require('request');
var fs = require('fs');

var savedir = __dirname + '/img';
if (!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

function download(downloadUrl, savePath) {
    request(downloadUrl).pipe(fs.createWriteStream(savePath));
}
