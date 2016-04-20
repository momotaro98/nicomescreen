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

    // DOMテンプレ生成
    var comme_template = document.createElement("span");
    comme_template.setAttribute('style', "width: 2400px; color: white; font-size: 64px; position: absolute;");

    var whole_height = window.innerHeight;
    var split10_array = [
        0.0 * whole_height,
        0.1 * whole_height,
        0.2 * whole_height,
        0.3 * whole_height,
        0.4 * whole_height,
        0.5 * whole_height,
        0.6 * whole_height,
        0.7 * whole_height,
        0.8 * whole_height,
        0.9 * whole_height,
    ];

    // フローブロックを現在流れているかのフラグ
    var current_flow_array = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];

    setInterval(function(){ // このインターバルの中でDOMの生成、流す、消すを行う
        var index = Math.floor(Math.random() * split10_array.length);
        if(current_flow_array[index] == false){
            // DOMを生成・BODYに追加
            var comment = comme_template.cloneNode(true);
            var random_id = random_str();
            comment.id = random_id;
            var objdiv = document.getElementById("nicome");
            objdiv.appendChild(comment);

            // DOMを流す
            var flow_come = document.getElementById(random_id);
            var left = window.innerWidth;
            var top = split10_array[index];
            current_flow_array[index] = true;

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
                    // DOMを消す・フローフラグを下げる・インターバル解除
                    var delete_come = document.getElementById(random_id);
                    delete_come.parentNode.removeChild(delete_come);
                    current_flow_array[index] = false;
                    clearInterval(g);
                }
                flow_come.style.left = x + "px";
            }, 20);
        }
    }, 1000)
}());
