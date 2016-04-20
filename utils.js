// ------------------------------------------------------------
// エレメントをフルスクリーン表示する関数
// ------------------------------------------------------------
function ElementRequestFullscreen(element){
    var list = [
        "requestFullscreen",
        "webkitRequestFullScreen",
        "mozRequestFullScreen",
        "msRequestFullscreen"
    ];
    var i;
    var num = list.length;
    for(i=0;i < num;i++){
        if(element[list[i]]){
            element[list[i]]();
            return true;
        }
    }
    return false;
}

// ------------------------------------------------------------
// フルスクリーンを終了する関数
// ------------------------------------------------------------
function DocumentExitFullscreen(document_obj){
    var list = [
        "exitFullscreen",
        "webkitExitFullscreen",
        "mozCancelFullScreen",
        "msExitFullscreen"
    ];
    var i;
    var num = list.length;
    for(i=0;i < num;i++){
        if(document_obj[list[i]]){
            document_obj[list[i]]();
            return true;
        }
    }
    return false;
}
