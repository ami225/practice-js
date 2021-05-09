// 配列 -----------------------------------
// {
    // const score1 = 80;
    // const score2 = 90;
    // const score3 = 40;

    //これら上三つをまとめて代入

    //   const scores = [80, 90, 40];
    //   console.log(scores);
    // }

    // ----------------------------------------

    // 配列個々 --------------------------------

    // index.htmlにscriptタグを増やしてもブロックごとに分けられるというわけではない

    // {
    /*   const scores = [80, 90, 40]; */
    /*  // console.log(scores[1]); */

    /*  // scores[2] = 44; //再代入(const(定数)で代入はできないが、配列個々への代入は可能) */
    /*   // 例　scores = 10; これはできない。 */
    //   // console.log(scores);

    //   console.log(scores.length); //lengthで要素の個数を取得する
    //今回は三つ

    // }

    // ----------------------------------------

    // 配列とループ処理 --------------------------

    // {
    /* 要素が三つのとき */
    //   const scores = [80, 90, 40]; 配列１
    //   const scores = [80, 90, 40, 70];　配列2

    /* 一つずつ取り出す方法 　配列1 */
    // console.log(`Score: ${scores[0]}`);
    // console.log(`Score: ${scores[1]}`);
    // console.log(`Score: ${scores[2]}`);

    /* forで要素が3つなので0,1,2で3までを繰り返す　配列1 */
    // for (let i = 0; i < 3; i++) { // インデックス (0, 1, 2)は三つなのでfor文で繰り返し処理
    // console.log(`Score ${i}: ${scores[i]}`);
    // }
    /* 配列が増えたときに変更しなくてもいい方法 配列2 */
    // for (let i = 0; i < scores.length; i++) {// インデックスの数が変更されたときは書き換えるのが面倒なので  scores.length;　という書き方にしておく
    //   console.log(`Score ${i}: ${scores[i]}`); //インデックスの数はiで定義されているので、${i}を追加
    // }
    // }

    // ----------------------------------------

    // 配列の要素を変更---------------------------

    // 要素の先頭に追加 : unshift();
    // 要素の最後に追加 : push();
    // 要素の先頭を削除 : shift();
    // 要素の最後を削除 : pop();


    /* 例文 */
    // {
    //   const scores = [80, 90, 40, 70];
    // 最後に追加
    //   scores.push(60, 50);
    // 先頭を削除
    //   scores.shift();
    //   // 90, 40, 70, 60, 50
    //   for (let i = 0; i < scores.length; i++) {
    //     console.log(`Score ${i}: ${scores[i]}`);
    //   }
    // }

    // ----------------------------------------

    // spliceで配列を変更------------------------

    // {
    //   const scores = [80, 90, 40, 70];
    //   scores.splice(1, 1, 40, 50); // splice(変化が開始する位置, 削除数, 追加する要素,...)

    //   for (let i = 0; i < scores.length; i++) {
    //     console.log(`Score ${i}: ${scores[i]}`);
    //   }
    // }


    // 途中の要素を削除する時の構文: splice(変化が開始する位置(インデックス), 削除数)
    // 要素の間に要素を入れ込みたいときの構文: splice(変化が開始する位置, 削除数(削除する要素はないときは0), 追加する要素,...)

    // ----------------------------------------

    // スプレッド構文で要素を追加、合計を計算---------
    // {
    //   // 要素を追加する
    //   const otherScores = [10, 20];
    //   const scores = [80, 90, 40, 70, ...otherScores ];
    //   // console.log(scores);

    //   // 要素の合計を表示させる
    //   function sum(a, b) {
    //     console.log(a + b);
    //   }
    //   // 合計を表示
    //   sum(...otherScores);
    //   // sum(10, 20);と同じ意味
    // }
    // -----------------------------------------

    // 分割代入 ---------------------------------

    // {

    //   const scores = [80, 90, 40, 70];

    /* 配列に定数をつける */
    // const [a, b, c, d] =  scores;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);

    /* 配列のまま表示させたいものがあるとき */
    // const [a, b, ...others] =  scores; // 80 90 [40, 70]
    // console.log(a);
    // console.log(b);
    // console.log(others);

    /* xとyを入れ替えて表示 値の交換 */
    //  let x = 30;
    //  let y = 70;
    //  [x, y] = [y, x];
    //  console.log(x);
    //  console.log(y);

    // }

    // -----------------------------------------

    // forEach文で繰り返し処理---------------------

    // {
    //   const scores = [80, 90, 40, 70];

    //   // scores.forEach((score) => { // 引数のscoreの部分にscoresの配列を一つずつ代入
    //   scores.forEach((score, index) => { //インデックスも表示させるバージョン
    //     console.log(`Score ${index}: ${score}`); 
    //   });
    // }

    // -----------------------------------------

    // map()------------------------------------

    // {
    // mapは配列の各要素に何らかの処理をして別の配列を作りたいときに使う
    // const prices = [180, 190, 200];

    /* pricesの配列に + 20する */
    // const updatePrices = prices.map((price) => {
    //   return price + 20;
    // })

    /*上の文を短くする */
    // const updatePrices = prices.map (price => price + 20);
    // console.log(updatePrices);
    // }

    // -----------------------------------------

    // filter()で条件にあうものだけを抽出------------

    //　配列の要素をチェックして、条件にあうものだけを抽出して別の配列として取得する
    // {
    //   const numbers = [1, 4, 7, 8, 10];

    // 偶数の数字だけを取り出す
    // const evenNumbers = numbers.filter(number => {
    //   if (number % 2 === 0) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    //上を省略
    // const evenNumbers = numbers.filter(number => {
    //   return number % 2 === 0;
    // });
    // さらに省略
    //   const evenNumbers = numbers.filter(number => number % 2 === 0);
    //   console.log(evenNumbers);
    // }

    // -----------------------------------------

    // オブジェクトを作る--------------------------

    // {
    // const point = [100, 180];
    // }
    // xとyと分けて代入
    // const point = {x: 100, y: 180};
    //   const point = {
    //     x: 100,
    //     y: 180,
    //   }
    //   console.log(point);
    // }

    // -----------------------------------------

    // プロパティを操作----------------------------

    // {

    //   const point = {
    //     x: 100,
    //     y: 180,
    //   };
    //   // xを
    //   point.x = 120;
    //   // console.log(point.x);
    //   // console.log(point['y']);
    //   //zを追加
    //   point.z = 90;
    //   // キーを削除
    //   delete point.y;
    //   console.log(point);
    // }

    // -----------------------------------------

    // オブジェクト操作----------------------------

    // {
    //   const otherProps = {
    //     r:4,
    //     color: 'red',
    //   }
    //   // otherPropsというオブジェクトをpointに追加
    //   const point = {
    //     x: 100,
    //     y: 180,
    //     ...otherProps,
    //   };
    // //  console.log(point);
    /* xとrを定数として定義したいとき */
    // const {x, r, ...others} = point;
    // console.log(x);
    // console.log(r);
    // console.log(others);
    // }

    // -----------------------------------------

    // Object.keys------------------------------
    // {
    //   const point = {
    //     x: 100,
    //     y: 180,
    //   };
    //   // forEachはオブジェクトには使えないので配列として取得する必要がある
    //   // Object.keys(point);でpointのキーを配列で取得できる
    //   // const keys = Object.keys(point);
    //   // keys.forEach(key => {
    //   //   // 
    //   //   console.log(`Key: ${key} Value: ${point[key]}`);// キーに対する値(Value: ${point[key]})は文字列で取得されているのでpoint.keyではなく[]にkeyを入れる
    //   // });

    //   const points = [
    //     {x: 30, y: 20},
    //     {x: 10, y: 50}, //ここのyを取得↓
    //     {x: 40, y: 20},
    //   ];
    //   points[1].y;
    //   console.log(points[1].y);  
    // }

    // -----------------------------------------

    // 変数の挙動を理解----------------------------

    // {
    //  let x = 1;
    //  let y = x;
    //  x = 5;
    //  console.log(x); //5
    //  console.log(y); //1 xそのものを代入するので元々の1になる

    /*　配列　*/
    //  let x = [1, 2];
    //  let y = x;
    //  x[0] = 5;
    //  console.log(x); //[5, 2]
    //  console.log(y); //[5, 2] //配列になるとxに割り当てられた値ではなく、xの値がどこに格納されているかという情報だけが作られてそこにyという名前がつく

    /* 配列でもそのままxの値を元々の値でyに代入させる */
    //スプレット演算子でyをxの値そのものを代入する
    //  let x = [1, 2];
    //  let y = [...x];// スプレット演算子
    //  x[0] = 5;
    //  console.log(x); //[5, 2]
    //  console.log(y); //[1, 2] // xそのものの値が代入される
    // }

    // -----------------------------------------

    // 文字列の取得str(ストリング)------------------

    // {
    //   const str = 'hello';

    //  console.log(str.length);

    // str.substring(開始位置, 終了位置);
    // str.substring(2, 4);
    // console.log(str.substring(2, 4)); // ll


    //個々の文字列にアクセス
    // 値が取得できるだけで配列と同じように扱えるわけではない
    //  console.log(str[1]); //e
    // str[1] = 'a' このようなstr[1]に値を設定したり、strに対してforEachを使ったりできるわけではない
    //  }

    // -----------------------------------------

    // join(), split()--------------------------

    // {
    // const d = [2019, 11, 14];
    // 年月日を/で繋げてひとつの文字列にしたいとき
    //  console.log(d.join('/')); //joinという命令を使って引数に結合するときの文字列を渡す
    // => 2019/11/14
    // 文字列を区切り文字のところで分割して、それを配列にしたいとき
    //  const t = '17:08:24';
    // console.log(t.split(':')); //split命令文を使う
    // => ["17", "08", "24"]
    //  => 0: "17"  1:"08"  2:"24"
    //  const [hour, minute, second] = t.split(':');
    //  console.log(hour);
    //  console.log(minute);
    //  console.log(second);
    // => 17 08 24
    //  }

    // -----------------------------------------

    // 数値を操作---------------------------------

    //  {
    //   const scores = [10, 3, 9];

    /* 計算はforEachでsumに一ずつ足していく */
    // let sum = 0;
    // scores.forEach(score => {
    //   sum += score;
    // });


    /* 平均を出すには上で求めたsumをscoresの要素数で割り算 */
    // const avg = sum / scores.length; 

    //  console.log(sum); // => 22
    //  console.log(avg); // => 7.333...

    /* 数値を扱う命令　7.333....をわかりやすく操作 */
    //  console.log(Math.floor(avg)); // 7 小数点以下を切り捨ててくれる
    //  console.log(Math.ceil(avg));  //　8 小数点以下を切り上げ
    //  console.log(Math.round(avg));  // 7 四捨五入
    //  console.log(Math.toFixed(3));  // 7.33 小数点以下3桁まで表示

    // console.log(Math.random()); // 0以上1未満で数値がランダムに生成される

    //  }

    // -----------------------------------------

    // ランダムな数値を表示------------------------

    // {

    /* ランダムの数値の表示構文 */
    // Math.random() // 0以上1未満なので1は入らない
    // Math.random() * 3 // 0以上3未満 3は入らない 小数点以下も入る
    // Math.floor(Math.random() * 3) // 小数点をきり捨てて0以上3未満
    // Math.floor(Math.random() * (n + 1)) // 0, ..., n
    // Math.floor(Math.random() * (max + 1 - min)) + min // min, ..., max

    /* 例文 */
    // console.log(Math.floor(Math.random() * 6) + 1); // 1から6までのランダムな数字を表示

    // }

    // -----------------------------------------

    // 現在日時を取得-----------------------------

    // {
    //     const d = new Date();

    /* 現在月日 5月8日 */
    // console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
    // getMonth() + 1, プラス1する理由は月は表示が0から始まるので、 + 1をしないと１ヶ月目の表示がされてしまう
    // }

    //日本時間以外も取得したい場合は、getTime();

    /* 現在日時 */
    // const d = new Date(); //new Date();で表示できる
    // console.log(d);

    /* 年月日構文 */
    // d.getFullYear(); //年 2021
    // d.getMonth(); //月 0-11 (Jan:0, Feb:1, ...) jsでは0-11で表示される
    // d.getDate(); //日 1-31
    // d.getDay(); //日 0-6 (sun:0, mon:1, ...)
    // d.getHours(); //時間 0-23
    // d.getMinutes(); //分 0-59
    // d.getSeconds(); //秒 0-59
    // d.getMilliseconds(); //ミリ秒 0-999 1ms = 1/1000 sec

    // -----------------------------------------

    //特定の日時を取得-----------------------------

    // {
    //     const d = new Date(2019, 10); // 2019/11/01 00:
    //     //あとから日付を操作したい場合setで始まる命令を使う
    //     d.setHours(10, 20, 30); // 2019/11/01 10:20:30(10時20分30秒)
    //     d.setDate(31); // 2019/12.01 10:20:30  11月は30日までしかないので自動で補正してくれる
    //     d.setDate(d.getDate() + 3); // 2019/12.01 10:20:30から三日後に設定する。 => 2019/12/04
    //     console.log(d);
    // }

    // -----------------------------------------

    //alert(), confirm()を使う-------------------

    // {
    // alert('hello'); //警告や確認のダイアログ
    /* この確認のダイアログの選択によって表示を変える */
    //     const answer = confirm('削除しますか？');
    //     if (answer) {   //true
    //         console.log('削除しました');
    //     } else {   //false
    //         console.log('キャンセルしました');
    //     }

    // }

    // -----------------------------------------

    // タイマー機能-------------------------------

    // {
    // let i = 0; //カウンター用の変数
    /* showTime()が3回実行されたときに止めるようにする */
    // function showTime() {
    //     console.log(new Date());
    //     i++;
    //     if (i > 2) { //iが２より大きくなったら止まる
    //         clearInterval(intervalId); // clearInterval()という命令に下のintervalIdを代入
    //     }
    // }

    // const intervalId = setInterval(showTime, 1000); //関数とミリ秒単位の数値を渡すと関数をミリ秒間隔で繰り返し実行してくれる
    // showTimeの後に()をつけないことに注意 関数を実行したときに返ってくる値をsetInterval()に渡すことになるので
    // 今回は返り値がないのでその場合undefinedを渡すことになる

    // }

    // -----------------------------------------

    // setTimeout-------------------------------

    // {
    //     let i = 0;
    //     //繰り返し
    //     function showTime() {
    //         console.log(new Date());
    //         setTimeout(showTime, 1000);
    //         const timeoutId = setTimeout(showTime, 1000);
    //         i++;
    //         if (i > 2) {
    //             clearTimeout(timeoutId);
    //         }
    //     }

    //     showTime();
    // }

    // -----------------------------------------

    //setIntervalとsetTimeoutの違い--------------

    /* setInterval */
    // 一定の時間ごとに処理を実行する命令。
    // たとえば1000ミリ秒間隔で300ミリ秒かかる処理を実行した場合、
    //     [___ | ___　 1 個で1000ミリ], [ | 300 ミリ]

    // 処理が300ミリでも1000ミリで繰り返す
    // 処理が1200でも設定が1000ミリであれば処理が重なっていってシステムに負荷がかかる場合がある
    // ___ | ___ ___ | ___ ___ | ___ ___ | ___

    /* setTimeout */
    // setIntervalとは違い、 一定の時間ではなく1000ミリ秒後に処理が300ミリ秒かかるのであれば300ミリ秒で処理する。
    // それを繰り返す。 なので、 処理が重なることはなくシステムが重くならない。

    // -----------------------------------------

    // 例外処理----------------------------------

    // {
    // const name = 'taguchi';
    // const name = 5;
    /* 例外処理 */
    // try {
    //     console.log(name.toUpperCase()); //例外に関する情報を出すだけでFinish!まで表示してくれる
    // } catch (e) {
    //     console.log(e); //例外が起きた時の処理(今回が文字列でしか使えないtoUpperCase()を数値にしている)
    // }
    // console.log(name.toUpperCase()); //文字列を大文字にするときの命令 toUpperCase(),文字列にしか使えない

    // console.log('Finish!'); //try{}を書くことによってFinish!まで続けて表示される。
    // }

    // -----------------------------------------

    // オブジェクトが複数--------------------------

    // 例：匿名で文章を投稿できるSNS

    // {
    // 文章といいね数を管理するようなオブジェクトを複数入れる。
    // const posts = [
    //   {
    //   text: 'JavaScriptの勉強中...',
    //   likeCount: 0,
    //   },
    //   {
    //   text: 'プログラミング楽しい！',
    //   likeCount: 0,
    //   },
    // ];
    // 関数を使ってpostを受け取ったらpostのtextとlikeCountプロパティを表示する
    // showに表示する部分を入れる
    // function show(post) {
    //   console.log(`${post.text} - ${post.likeCount}いいね`); //テンプレートリテラルで表示させる
    // }
    // 上で定義したshowを呼び出す
    // show(posts[0]); //最初の投稿を表示するので0
    //   }

    // -----------------------------------------

    // メソッド-----------------------------------

    // {

    // const posts = [
    // {
        //  posts[0]
        //  text: 'JavaScriptの勉強中...',
        //  likeCount: 0,
        //  show: function show() { //[post内にあるのでfunction show(post)のpostはいらない]
        //   //[同じオブジェクト内のプロパティにアクセスするにはthisというキーワードを使う]
        //  console.log(`${this.text} - ${this.likeCount}いいね`); 
        //  },

        // 上と同じ意味
        // show() {
        //   console.log(`${this.text} - ${this.likeCount}いいね`); 
        // }
      // },
    // {
        // posts[1]
        //   text: 'プログラミング楽しい！',
        //   likeCount: 0,
        //   show() {
        //     console.log(`${this.text} - ${this.likeCount}いいね`); 
        //   }
    // },
    // ];

    // show(posts[0]);
    //   posts[0].show(); //posts[0]にメソッドを定義したのでこのようにかく
    //   posts[1].show(); 

    //   }
   
    // -----------------------------------------

    // クラスの構造-------------------------------

    // テンプレート
    // class Post {
    //   constructor(text) { //初期化するメソッド //textはインスタンスごとに違う値にしたいので引数に渡す
        // 初期化するとインスタンスのプロパティがセットされる
    //     this.text = ???; // クラスから作られるインスタンスをクラス内ではthisで表現する
    //     this.likeCount = 0;
    //   }
    //  show() {...},
    // }

    // new Post('Hello')とするとtextにHelloと入ったインスタンスが生成される

    // インスタンス(テンプレートのtextがさまざまな形で生成される)
    //  {
    //    text: 'Hello',
    //    likeCount: 0,
    //    show() {...},
    //  }

    // -----------------------------------------

    // クラスの例文------------------------------------

      // {
        /* クラス ここから */
        // class Post {
        //   constructor(text) { //constructorで初期化して引数にtextを入れてインスタンスごとに違う値を入れる
        //     this.text = text;
        //     this.likeCount = 0;
        //   }
        //   show() {
        //     console.log(`${this.text} - ${this.likeCount}いいね`); 
        //   }
        // }
      /* ここまでクラス */
      
      /* ここからインスタンス */
        // const posts = [
        // new Post('JavaScriptの勉強中...'), // new 〇〇でインスタンスを生成
        // new Post('プログラミング楽しい！'),
        // ];
      /* ここまでインスタンス */
      
        // posts[0].show(); 
        // posts[1].show(); 
      
      // }

    // -----------------------------------------

    // カプセル化--------------------------------

    // {
      /* クラス ここから */
      // class Post {
      //   constructor(text) { //constructorで初期化して引数にtextを入れてインスタンスごとに違う値を入れる
      //     this.text = text;
      //     this.likeCount = 0;
      //   }
      //   show() {
      //     console.log(`${this.text} - ${this.likeCount}likes`); 
      //   }
    
      //   like() {
      //     this.likeCount++;
      //     this.show(); //likeの数をlikeメソッドだけで表示する場合はshowメソッドも呼び出してあげればいい
      //   }
      // }
     /* ここまでクラス */
    
     /* ここからインスタンス */
      // const posts = [
      // new Post('JavaScriptの勉強中...'), 
      // new Post('プログラミング楽しい！'),
      // ];
    /* ここまでインスタンス */
      // posts[0].like(); //likeメソッドを呼び出す
      // posts[0].show(); 
      // posts[1].show(); 
    
    // }

   // -----------------------------------------

   // 静的メソッド-------------------------------
   // インスタンスを使わずにクラスから直接呼び出す

    // {
      /* クラス ここから */
      // class Post {
      //   constructor(text) { 
      //     this.text = text;
      //     this.likeCount = 0;
      //   }
      //   show() {
      //     console.log(`${this.text} - ${this.likeCount}likes`); 
      //   }
    
      //   like() {
      //     this.likeCount++;
      //     this.show(); 
      //   }
    
        // 静的メソッド(インスタンスを経由せずに直接クラスから呼び出すメソッド)
        //this は使えない(静的メソッドではインスタンスを作らずに直接クラスから呼び出すのでインスタンスであるthisは使えない)
      //   static showInfo() { //クラスから直接呼び出すメソッドにしたいときはstaticをつける
      //     console.log('Post class version 1.0');
      //   }
      // }
     /* ここまでクラス */
    
     /* ここからインスタンス */
      // const posts = [
      // new Post('JavaScriptの勉強中...'), 
      // new Post('プログラミング楽しい！'),
      // ];
    /* ここまでインスタンス */
      // posts[0].like(); 
      // Post.showInfo(); //staticをつけて静的メソッドを作ったので [クラス名.メソッド名();]で呼び出せる
    
    // }

    // -----------------------------------------

    // スポンサークラスを追加-----------------------

    // {
      /* クラス ここから */
      // class Post {
      //   constructor(text) { 
      //     this.text = text;
      //     this.likeCount = 0;
      //   }
      //   show() {
      //     console.log(`${this.text} - ${this.likeCount}likes`); 
      //   }
    
      //   like() {
      //     this.likeCount++;
      //     this.show(); 
      //   }
      // }
      /* ここまでクラス */
      
      //スポンサーのクラス
      // class SponsoredPost {
      //   constructor(text,sponsor) { 
      //     this.text = text;
      //     this.likeCount = 0;
      //     this.sponsor = sponsor;
      //   }
      //   show() {
      //     console.log(`${this.text} - ${this.likeCount}likes`); 
      //     console.log(`... sponsored by ${this.sponsor}`);
      //   }
    
      //   like() {
      //     this.likeCount++;
      //     this.show(); 
      //   }
      // }
     /* ここまでクラス */
    
     /* ここからインスタンス */
    //   const posts = [
    //   new Post('JavaScriptの勉強中...'), 
    //   new Post('プログラミング楽しい！'),
    //   new SponsoredPost('3分動画でマスターしよう','dotinstall'),
    //   ];
    
    //   posts[2].show();
    //   posts[2].like();
    // }

    // -----------------------------------------

    // クラスの継承-------------------------------

    // {
      /* クラス ここから */
      // class Post {  //親クラス
      //   constructor(text) { 
      //     this.text = text;
      //     this.likeCount = 0;
      //   }
      //   show() {
      //     console.log(`${this.text} - ${this.likeCount}likes`); 
      //   }
    
      //   like() {
      //     this.likeCount++;
      //     this.show(); 
      //   }
      // }
      /* ここまでクラス */
    
      //スポンサーのクラス
      //クラスの継承
      //このクラスにはlikeメソッドはないが、継承することでlikeも継承される
      // extends Postを追加
      // class SponsoredPost extends Post{ //子クラス
      //   constructor(text,sponsor) { 
      //     super(text);  //子クラスでthisを使うにはsuper();をつける 
      //     // superをつけると親クラスのconstructorが呼び出される親クラスで引数にtextを入れているのでtextを入れる
      //     this.sponsor = sponsor;
      //   }
      //   show() {
      //     super.show(); //親クラスのshowメソッドを呼び出せばいいので
      //     console.log(`... sponsored by ${this.sponsor}`);
      //   }
    
      //   like() {
      //     this.likeCount++;
      //     this.show(); 
      //   }
      // }
     /* ここまでクラス */
    
     /* ここからインスタンス */
    //   const posts = [
    //   new Post('JavaScriptの勉強中...'), 
    //   new Post('プログラミング楽しい！'),
    //   new SponsoredPost('3分動画でマスターしよう','dotinstall'),
    //   ];
    
    //   posts[2].show();
    //   posts[2].like();
    // }

    // -----------------------------------------

