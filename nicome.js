(function(){

    function random_str() {
        // 流れるコメントにランダムのidをつけるための関数
        var l = 8; // 生成する文字数

        // 生成する文字列に含める文字セット
        var c = "abcdefghijklmnopqrstuvwxyz0123456789";

        var cl = c.length;
        var r = "";
        for(var i=0; i<l; i++){
              r += c[Math.floor(Math.random()*cl)];
        }
        return r;
    }

    var comme_template = document.createElement("span");
    comme_template.setAttribute('style', "width: 1000px; color: white; font-size: 64px; position: absolute;");

    setInterval(function(){ // このインターバルの中でDOMの生成、流す、消すを行う
        // DOMを生成・BODYに追加
        var comment = comme_template.cloneNode(true);
        var random_id = random_str();
        comment.id = random_id;
        // var objdiv = document.getElementsByTagName("body").item(0); // bodyだけではなく任意のものにしたい
        var objdiv = document.getElementById("nicome"); // bodyだけではなく任意のものにしたい
        objdiv.appendChild(comment);

        // DOMを流す
        var flow_come = document.getElementById(random_id)
        ,bh = flow_come.offsetHeight
        ,bw = flow_come.offsetWidth
        ,left = window.innerWidth
        ,top = Math.floor((window.innerHeight - bh) * Math.random()); // 縦軸はランダム
        flow_come.style.left = left + "px"; // 横座標初期化
        flow_come.style.top = top + "px"; // 縦座標初期化

        // 流すコメント
        // app側でcomme_contentsを事前につくっておいてその中の一つをランダムで流す
        flow_come.textContent = comme_contents[Math.floor(Math.random() * comme_contents.length)];

        var x = left, v = 7;

        var g = setInterval(function(){
            // コメントを逐次移動させる処理
            x -= v;
            if( x <= -flow_come.offsetWidth ) { // コメントが隠れたとき
                clearInterval(g);
                // DOMを消す
                var delete_come = document.getElementById(random_id);
                delete_come.parentNode.removeChild(delete_come);
            }
            flow_come.style.left = x + "px";
        }, 20);
    }, 1000)
}());
