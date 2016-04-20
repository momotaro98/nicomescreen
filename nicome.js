(function(){

    function random_str() {
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

    // spanを生成して流して消すという一連の流れを関数にしてそれを並列で沢山繰り返したい

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
        flow_come.textContent = "さすがに草";

        var x = left
        ,v = 7;

        var g = setInterval(function(){ // 即時関数にしてしまえばクロージャ？として外スコープの変数を参照できるし上書きもできる?
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
