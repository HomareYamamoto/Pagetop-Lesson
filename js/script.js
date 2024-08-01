$(function() {
  $('#back a').on('click',function(event){
    // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定されます。
    $('body, html').animate({
      // animate() は、アニメーション効果を設定するjQueryの関数です。
      // HTML要素のCSSプロパティを変化させることで動きを設定します。
      scrollTop:0
      // scrollTop は、スクロール位置を取得できるメソッドでscrollTop:0」を指定しているので、
      // 「最上部に移動する」の意味になります。
    }, 800);
    // 800ミリ秒間（0.8秒間）かけてページの最上部まで移動する
    // 「slow」、「normal」、「fast」で指定することも可能
    event.preventDefault();
    // event.preventDefault(); は、aタグの画面遷移機能を無効にするメソッドです。
  });
});