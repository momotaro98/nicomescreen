# nicomescreen
ニコ動みたいにテキストが流れます

## Usage

### id名がnicomeのタグを作成
ニコ動みたいなテキストはid名が`nicome`というタグに挿入する仕様なので書いてください
ex.
```
<body>
    ...
    <div id="nicome">
    </div>
    ...
</body>
```

### comme_contentsの設定
`comme_contents`という名前の配列を事前に作成してわたす
現状は`comme_contents`の配列内のコメントをランダムに取り出して画面に流すという仕様
ex.
```
<script type="text/javascript">
    var = comme_contents = ['わろたわ', 'なんやねん', 'あほくさ'];
</script>
<script type="text/javascript" src="../nicomescreen.js"></script>
```

