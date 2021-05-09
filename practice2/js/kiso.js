// 'use strict'; //エラーをチェックする
// ブラウザのコンソールに文字列を表示-------------------
  // console.log('Hello World from main.js!');
  // console.log('it\'s me!') => \バックスラッシュで'が途中で入っても文字列とみなされる。
  // console.log('hel\nlo wor\tld'); => \nで改行、\tでタブ (空白)
  // console.log('hello' + 'world'); => 文字列の連結
// ------------------------------------------------

// 四則演算 -----------------------------------------
  // console.log(10 + 3); // 13
  // console.log(10 - 3); // 7
  // console.log(10 * 3); // 30
  // console.log(10 / 3); // 3.333....
  // console.log(10 % 3); // 1
  // console.log(10 ** 3); // １０の3乗 => 1000
  // console.log(2 + 10 * 3); // 掛け算の方が優先される　10 * 3が先に行われる　=> 32
  // console.log((2 + 10) * 3); //2 + 10を優先にしたいとき => 36
// -------------------------------------------------

//変数、定数の使い方-----------------------------------
//定数 const
//変数 let
 //定数/変数命名規則****************
  // let my-name;  ハイフンは使えない
  // let 0price;　　数値から始められない
  // let const;　　 予約語(jsが持っている命令語)は使えない
 //********************************

  // console.log(150 * 140);
  // console.log(150 * 160);
  //priceに150を代入
  // const price = 150; 定数には再代入できないので変数で記述
  // let price = 150;
  // console.log(price * 140);　price 150
  // console.log(price * 160);

  // price = 170;
  // console.log(price * 140); price 170
  // console.log(price * 160);
// --------------------------------------------------

//変数　letの使い方------------------------------------

// let price = 500;

// // price = price + 100;この省略↓
//        price += 100; //600
// //price = price * 2;
//        price *= 2; //1200
// //price = price + 1;
// //price += 1;  もっと省略↓
//        price ++;// 1201
// //price -= 1;
//        price --; //1200 最終

// console.log(price);
// -------------------------------------------------

// データ型を調べる------------------------------------

  // console.log(typeof 'hello');　=> string
  // console.log(typeof 5); => number
  // console.log(typeof undefined); => undefined
  // console.log(typeof null); => object　バグ

// -------------------------------------------------

// 文字列と数値---------------------------------------

  //javascriptでは文字列でも数値に変換して計算できる。
  // console.log('5' * 3); //15
  // console.log('5' - '3'); // 2
  // // +の場合は文字列として表示
  // console.log('5' + 3); //53
  // // parseIntを使って１０進数にすれば数値として扱ってくれる
  // console.log(parseInt('5', 10) + 3); //8
  // console.log(parseInt('hello', 10)); //helloは数値に変換できないのでエラーが出る

// -------------------------------------------------

// 真偽値(true, false)-------------------------------

  // const price = 1200;

  // // console.log(price > 1000); //true
  // // console.log(price < 1000); //false
  // // console.log(price >= 1000); //true
  // // console.log(price <= 1000); //false
  // // console.log(price === 1000); //false
  // // console.log(price !== 1000); //true

  // // false <- 0, null, undefined, '', false
  // // true <- それ以外
  // //値を真偽値で表すのはBoolean
  // console.log(Boolean(0)); //false
  // console.log(Boolean('hello')); //true

// -------------------------------------------------

//if文----------------------------------------------

  // const score = 60;

  // if (score >= 80) {
  //   console.log('Great!');
  // } else if (score >= 60) {
  //   console.log('Good.');
  // } else {
  //   console.log('OK...');
  // }

// -------------------------------------------------

// 条件演算子-----------------------------------------

  // const score = 80;
  // if (score >= 80) {
  //   console.log('Great!');
  // } else {
  //   console.log('OK...');
  // }

  // 条件演算子
  // 構文 (条件式 ? trueの処理 : falseの処理)
    // score >= 80 ? console.log('Great!') : console.log('OK...');

// -------------------------------------------------

// 論理演算子-----------------------------------------

  // const score = 60;
  // const name = 'taguchi';

  // *** このif文を下で論理演算子にして短くする ***
  // if (score >= 50) {
  //   if (name === 'taguchi') {
  //     console.log('Good job');
  //   }
  // }
  // *** *** *** *** *** *** *** *** *** ***

  // && なおかつ (AND)
  // || もしくは (OR)
  // ! 〜ではない (NOT)

  // 論理演算子
  // if (score >= 50 && name === 'taguchi') {
  //   console.log('Good job');
  // }

// -------------------------------------------------

// switch文(条件分岐)---------------------------------

  // const signal = 'pink';

  /*　ここから */
  // if (signal === 'red') {
  //   console.log('Stop!');
  // } else if (signal === 'yellow') {
  //   console.log('Caution!');
  // } else if (signal === 'blue') {
  //   console.log('Go');
  // }
  /* ここまでの文をswitch文にする */


  // switch (signal) {
  //   case 'red':
  //     console.log('Stop!');
  //     break;
  //   case 'yellow':
  //     console.log('Caution!');
  //     break;
  //   case 'blue':
  //   case 'green':
  //     console.log('Go');
  //     break;
  //   default: // どれにも一致しない場合
  //     console.log('Wrong signal!');
  //     break;
  // }
// -------------------------------------------------

// for文(繰り返し処理)---------------------------------

  //10までの間一ずつ増えて繰り返す

  // for (let i = 1; i <= 10; i++) {
  //   // console.log('hello');
  //   // console.log('hello' + i);
  //   console.log(`hello ${i}`) //数値を文字列に変換　
  // }                           // テンプレートリテラル　シングルクウォーテーションではなくバッククオートを使う

// -------------------------------------------------

// while, do...while文-------------------------------

  ///* while文  ここから*///

  // let hp = 100;
  // //hpを100から15ずつ減らして0は表示しない
  // while (hp > 0) {
  //   console.log(`${hp} HP left!`);
  //   hp -= 15; //この条件を必ず書かなければ無限ループになる。
  // }

  ///* ここまでwhile文 *///

  ///* do...while ここから *///

  // let hp = -50;　//初めから条件を満たさないのでwhileでは表示されない
  // // do...whileを使う  => -50HP
  // do {
  //   console.log(`${hp} HP left!`);
  //   hp -= 15; //この条件を必ず書かなければ無限ループになる。
  // } while (hp > 0);

  ///* ここまで　*///

  // -------------------------------------------------

  // break, continue ---------------------------------

    // for (let i = 1; i <= 10; i++) {
      /* continue */
    //  // if (i % 3 === 0) { //３の倍数
    //  //  continue; // 条件の数字をスキップする
    //  // }
    //   // // }

      /* break */
    //   if (i === 4) {
    //     break; //ループを途中で終わらしたい場合に使う(今回はiが4になったらとまる)
    //   }
    //   console.log(i);
    // }

  // -------------------------------------------------

// 関数の構文(関数宣言、関数式)---------------------------

/* 関数宣言 * /
 // function 関数名(仮引数, 仮引数, ...) {
 // 処理；
 // 処理；
 //　return 返り値；
 //}
/* 関数呼び出し */
  // 関数名(実引数, 実引数, ...);
/* 関数式 */
  // const 定数名 = function(仮引数, 仮引数, ...) {
    //処理；
    //処理；
    //return 返り値;
  //};

  /* 関数式例文 */
    // const sum = function(a, b, c) {
    //   return a + b + c;
    // };
    
    // const total = sum(1, 2, 3) + sum(3, 4, 5); //18
    // console.log(total);
  /* 関数式の呼び出し */
    // 定数名(実引数, 実引数);

// -----------------------------------------------------

// 関数 -------------------------------------------------

  // function showAd() { //functionにアクション名を定義して中に処理をかく
  //   　console.log('----------');
  //     console.log('---Ad-----');
  //     console.log('----------');
  //   }


    //   ** console.log('----------');
    //   ** console.log('---Ad-----');
    //   ** console.log('----------');
    //   ** console.log('Tom is great1');
    //   ** console.log('Bob is great1');
    //   ** console.log('----------');
    //   ** console.log('---Ad-----');
    //   ** console.log('----------');
    //   ** console.log('Steve is great1');
    //   ** console.log('Richard is great1');
    //   ** console.log('----------');
    //   ** console.log('---Ad-----');
    //   ** console.log('----------');
    
  //    //         ↓　上の文を省略
    
  //   showAd(); //呼び出し
  //   console.log('Tom is great1');
  //   console.log('Bob is great1');
  //   showAd();
  //   console.log('Steve is great1');
  //   console.log('Richard is great1');
  //   showAd();

// -------------------------------------------------

// 引数 ---------------------------------------------

  //   // 関数１
  // // 渡された値を受け取るために変数を()にかく。この変数にはletやconstは書かない
  // // function showAd(message) { // 仮引数
  // //   console.log('----------');
  // //   console.log(`---${message}-----`); //テンプレートリテラルでメッセージを埋め込む
  // //   console.log('----------');
  // // }

  // // 関数２
  // function showAd(message = 'Ad') { // 関数を呼び出すときに値を渡さなかった場合のデフォルト値を設定する
  //   console.log('----------');
  //   console.log(`---${message}-----`); //テンプレートリテラルでメッセージを埋め込む
  //   console.log('----------');
  // }

  // showAd('Header Ad'); //　実引数
  // console.log('Tom is great1');
  // console.log('Bob is great1');
  // // showAd('Ad');
  // showAd(); //関数２でデフォルト値をAdと設定しているのでAdが表示される
  // console.log('Steve is great1');
  // console.log('Richard is great1');
  // showAd('footer Ad');

// -------------------------------------------------

// 関数 ---------------------------------------------
  // 関数内で戻り値で値を返すことで、下のtotalの計算ができるようになる
  // function sum(a, b, c) {
  //   ** console.log(a + b + c);
  //   return a + b + c; //関数内で戻り値(return)を使うとその時点で値が戻されるのでそれ以降の処理は実行されない
  // }                   // 例: function sum {
  //                     // return (1 + 2)
  //                     // console.log(sum);  //returnより下は処理されない

  // ** sum(1, 2, 3);
  // ** sum(3, 4, 5);

  // const total = sum(1, 2, 3) + sum(3, 4, 5); //18
  // console.log(total);
// -------------------------------------------------

// アロー関数-----------------------------------------

  // const sum = (a, b, c) => {
  //   return a + b + c;
  // };

  //アロー関数では、処理がreturnのみの場合は、以下の形にすることができる。
  // const sum = (a, b, c) => a + b + c;
  // const total = sum(1, 2, 3) + sum(3, 4, 5); //18
  // console.log(total);

  //引数の値が一つの場合は()はいらない
  // const double = a => a * 2;
  // console.log(double(12));

// -------------------------------------------------

// スコープ-------------------------------------------

  // const x = 2; //fのなか以外で出力するためにxを定義 全て範囲で有効。グローバルスコープ(ブロックの中で同名の変数が定義されていればそれがブロック内では優先される)
  //              // fの中のxとはまた別物

  // function f() {
  //   const x = 1; //定数や変数がブロック内で使用したら、ブロック内でしか使えない。
  //   console.log(x);
  // }

  // f(); //関数呼び出す
  // console.log(x); //これだけではエラーになる。

// -------------------------------------------------

// 複数のscriptタグ-----------------------------------
  // index.htmlにscriptタグを増やしてもブロックごとに分けられるというわけではない
  //{}でブロックを作ると1!と2!のxの定数は別物とみなされるのでエラーは起きない

  /* main.js */

    // {
    //   const x = 100;
    //   console.log(x); // 1!
    // }

  /* index.html */

    /* <body>
        </script>
        <script src="js/main.js"></script>
        <script>
          'use strct';
          {
            const x = 300;
            console.log(x); // 2!
          }
        </script>
      </body> */
// -------------------------------------------------