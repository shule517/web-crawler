function download(url, savePath, callback) {
    var http = require('http');
    var fs = require('fs');
    var outfile = fs.createWriteStream(savePath);

    http.get(url, function(res) {
        res.pipe(outfile);
        res.on('end', function(){
            outfile.close();
            callback(url);
        });
    });
}

download("http://www.aozora.gr.jp/index_pages/person81.html", "out/kenji.html", function(url){ {
    console.log(url + ':ok');
}});

download("http://www.aozora.gr.jp/index_pages/person148.html", "out/soseki.html", function(url){ {
    console.log(url + ':ok');
}});

// TODO リダイレクト先のページがダウンロードできていない
// TODO downloadに成功した時の処理をcallbackで渡すの好きじゃない
// requireって関数実行事に呼ぶと遅くなるのでは？
