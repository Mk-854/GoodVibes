$(function () {
    
    var h = $(window).height();
    $('#wrap').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
    });
    
    $(window).load(function () { //全ての読み込みが完了したら実行
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#wrap').css('display', 'block');


    // モーダルウィンドウ
    $("main").append("<div id='glay_layer'></div><div id='over_layer'></div>"); // main要素の最後に glay_layerとover_layerを配置
    $("#glay_layer").click(function(){
        $(this).hide();                 // glay_layer非表示
        $("#over_layer").hide();        // over_layer非表示
    });
    $("a.modal").click(function(){      // サムネイルのaタグクリック時
        $("#glay_layer").show();        // glay_layerを表示
        $("#over_layer").show().html("<img src="+$(this).attr("href")+">"); //aタグのhfef属性の値を取得して、over_layerのhtmlにimgタグを追加する
        return false;
    });

    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });

});
