'use strict';

{

  function setWord() {
    //wordsの中の配列をランダムに取り出す。最後の[0]はspliceの結果は配列で返されるのでランダムに取り出されたものを取り出している
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0]; //ランダムなものを一個削除する
    target.textContent = word; //キーを取得
    loc = 0; //新しい単語を取得したらlocを初期化する
  }
 const words = [
   'red',
   'blue',
   'pink',
 ];
  let word;
  //今何文字めを打っているかどうかを取得するために定義
  let loc = 0;
  //タイピング時刻を取得する
  let startTime;
  //ゲーム中かどうかを取得するために定義
  let isPlaying = false; //最初はfalse
  // keyが押されたときの処理
   //keydown キーが押されたときのイベント 
    //押されたキーの内容を取得するためにイベントオブジェクト eを引数
    const target = document.getElementById('target');

     //top画面でClick to start!と表示してクリックしたらタイピングゲームが始まる
    document.addEventListener('click', () => {
      // ゲームが始まっていたらクリックしても次に行かないようにする
      if (isPlaying === true) {
        return;
      }
      isPlaying = true;
      startTime = Date.now();
      setWord();
    })

    document.addEventListener('keydown', e => { 
      //打ったキーがloc番目でなかった場合 = 不正解だった場合
      if (e.key !== word[loc]) { 
         return;
      }
      //正解したら打つべき文字は次の文字になるのでlocを一ずつ増やす
      loc++;

      // 1: _ed  0番目、1番目以降を取り出せばいい
      // 2: __d  0番目、1番目、2番目以降を取り出す
      // 3: ___
      //'_'.repeat(loc)  => アンダーバーをlocの個数分繋げた文字列を作ってくれる
      //+ word.substring(loc); => substringというメソッドでloc番目以降の文字を取り出す。
      target.textContent = '_'.repeat(loc) + word.substring(loc);
      //locがword.lengthと同じであればsetWord();を実行
      if (loc === word.length) {  
        if (words.length === 0) { //wordsのlengthが0だったら
          //タイピング時刻を表示するために定義。Date.nowから定義したstartTimeを引けば出るがミリ単位で表示されてしまうので
          //　/ 1000割り算する
          // toFixed(2) => 小数点2けたまで表示
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');　//要素を取得
          result.textContent = `Finished! ${elapsedTime} seconds!`;
          return;
        }
        setWord();
      }
  });
}