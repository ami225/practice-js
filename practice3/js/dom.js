// DOM-------------------------------------------------

// ブラウザの仕組みを理解
// ブラウザはHTMLを読み込むと内部的にDocument Object Model(DOM)という
// データ構造が作られる。
// <body>
//   <p>Hello</p>
//   <button>OK</button>
// </body>

/* [DOM] */
// | body |
//  ↪︎ p
//  ↪︎button

// その内容に応じてページが描画がされるという仕組みになっている
// _____________________
// |                    |
// |  Hello             |
// |  OK                |
// |                    |
// |                    |
// |____________________|
// JavaScriptが操作しているのはあくまでDOMであってHTMLの方ではない
// Javascriptで内容を書き換えたとしても、HTMLファイルが書き換えられるわけではない
// 例
/* HTML */
// <!DOCTYPE html>
// <html>
//   <head><title>My Site</title></head>
//   <body>Hello!</body>
// </html>

/* DOM */
// それぞれのデータはNodeと呼ばれていてNodeツリー、DOMツリーと呼ばれる
// => 〇〇がNodeの種類名
// document 
//   doctype  
//   html  // => Element
//     head  // => Element
//       title  //  => Element
//         'My Site' // => text
//   ↩︎__ //文章内での改行や余白もNodeとなる // => text
//   body  // => Element
//     'Hello!'

// 親子関係や兄弟関係で呼ばれる。headからしてhtmlはParent Node, titleはChild Nodeとよぶ
// また↩︎__とbodyは同じなので兄弟関係となり、Sibling Nodeと呼ばれる
// 例  文章内の改行や余白、字下げもNodeとなるが先頭と末尾のものを
// __<head><title>My Site</title></head>
// 　<body>Hello!</body> ↩︎

//------------------------------------------------------------------------------

// 要素を操作---------------------------------------------------------------------

// {
  // function update() {
    // querySelector()というメソッドで文書内の特定の要素を取得
    /* 書き方3種類 */
    // document.querySelector('h1').textContent = 'Changed!'; //変えるテキストはtextContentで表現できる
    // document.querySelector('#target').textContent = 'Changed!'; 
    // document.getElementById('target').textContent = 'Changed!'; 
  // }
  // setTimeout(update, 1000); //1秒後に変わるようにする
// }

//------------------------------------------------------------------------------

// 複数の要素を取得----------------------------------------------------------------

// {
  // function update() {
    // id属性がついて入れば
    // document.getElementById('target').textContent = 'Changed!'; 
    // document.querySelector('p').textContent = 'Changed!';  //querySelectorは探してきた最初のものにしか適用しない
    // document.querySelectorAll('p')[1].textContent = 'Changed!'; //querySelectorAll('p')[1]で何番目の要素に適用すればいいか決められる
    //forEachで全ての要素を処理できる
//     document.querySelectorAll('p').forEach((p, index) => {  //何番目のpかどうかも表示したい場合は引数にindexとpを入れる
//       p.textContent = `${index}番目のpです！`;
//     });
//   }
//   setTimeout(update, 1000); 
// }

//------------------------------------------------------------------------------

// 要素の取得方法 -----------------------------------------------------------------

// id属性がついていたら   getElementById('target)
// 一つの要素を取得するなら  querySelector('section h1')
// 複数の要素を取得するなら  querySelectorAll('ul > li')
    // その他の方法        getElementsByTagName('h1') => 要素名
    // その他の方法        getElementsByTagClassName('box') => クラス名
                        
//------------------------------------------------------------------------------

// addEventListener-------------------------------------------------------------
// htmlでボタンを定義<button>Run</button>
// {
  //第１引数にイベントの種類を文字列で渡してあげる
  // clickすれば変更するためにアロー関数で定義
//   document.querySelector('button').addEventListener('click', () => { 
//     document.getElementById('target').textContent = 'Changed!'; 
//   });
// }

//------------------------------------------------------------------------------

//className---------------------------------------------------------------------

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const targetNode = document.getElementById('target');

//    targetNode.className = 'my-color';  
   //ボタンをクリックするとhtmlで書いているボーダーは消えてmy-colorのみ適応される
   //  targetNode.className = 'my-color my-border'; //ボーダーも表示したまま適応させたい場合はmy-borderも書き込む
   //class属性はtitle属性などと同じようにclassと書けばいいわけではなく
   //JavaScriptではclassは予約語もあるのでclassと書くと違う意味になってしまうので、classNameとかく

//   });
// }

//------------------------------------------------------------------------------

//classList---------------------------------------------------------------------

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const targetNode = document.getElementById('target');

  //  targetNode.className = 'my-color my-border'; 
  /* classListを使う */
  //  targetNode.classList.add ('my-color'); //既存のクラスの設定(my-border)にmy-colorを新しく追加してくれる
  /* contains 特定のクラスがついているかどうかを調べる */
  // if (targetNode.classList.contains('my-color') === true) { //my-colorのクラスがついている場合
  //    targetNode.classList.remove('my-color'); //クラスを消す
  //  } else {  // my-colorクラスがついていない場合
  //    targetNode.classList.add('my-color'); //クラスをつける
  //  }

//   targetNode.classList.toggle('my-color'); //classListにtoggleをつけると上記で書いたif条件分岐と同じになる

//   });
// }

//------------------------------------------------------------------------------

// カスタムデータ属性を使う---------------------------------------------------------

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const targetNode = document.getElementById('target');

    // カスタムデータ属性は書き方が例外、data-translationではなくdataset.translation
//     targetNode.textContent = targetNode.dataset.translation; //Runを押すと英語になる
//   });
// }


// HTML
// <!-- カスタムデータ属性(data-translation) -->
//     <h1 id ="target" data-translation="Dotinstall">ドットインストール</h1> 

//------------------------------------------------------------------------------

// 要素を追加---------------------------------------------------------------------

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const item2 = document.createElement('li'); //要素を追加
//     item2.textContent = 'item 2'; //中身のテキスト
    //DOMツリーに追加
    // const ulNode = document.querySelector('ul'); //DOMツリーに追加するためにまずulを取得する
//     const ul = document.querySelector('ul'); //DOMツリーに追加するためにまずulを取得する
//     ul.appendChild(item2);  //appendChildでitem2をulの子要素の末尾に追加
//   });
// }

//------------------------------------------------------------------------------

// 要素の複製、挿入する-------------------------------------------------------------

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true); //falseにすると要素の中身を複製しないことになるので空のli要素が作られる
    //item0をitem1とitem2の間に複製したいので
//     const ul = document.querySelector('ul')  //親要素であるulと
//     const item2 = document.querySelectorAll('li')[2]; //item2の要素を取得
//     ul.insertBefore(copy, item2); //insertBeforeでcopyをitem2の前に挿入してねと書いてあげる
//     });
// }

// HTML
/* { <body>
      <button>Run</button>
      <ul>
        <li>item 0</li>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      <script src="js/main.js"></script>
    </body> } */

//------------------------------------------------------------------------------

// 要素の削除---------------------------------------------------------------------

//要素を消す
// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const item1 = document.querySelectorAll('li')[1]; //消す要素を取得
    // item1.remove(); //消す //これでは古いものに適応できない場合がある

    // 親Node.removeChild(削除するNode) //item1.remove();とは別の消し方
//     document.querySelector('ul').removeChild(item1);  //querySelectorで親要素を取得して,消す要素を取得
//   });
// }
//HTML
/* <body>
    <button>Run</button>
  <ul>
    <li>item 0</li>
    <li>item 1</li>
    <li>item 2</li>
  </ul>
    <script src="js/main.js"></script>
</body> */

//------------------------------------------------------------------------------

// input要素を操作----------------------------------------------------------------

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const li = document.createElement('li'); //liを作成
//     const text = document.querySelector('input'); //input要素に入力された値を使いたいのでまずは要素を取得しておく
//     li.textContent = text.value; //入力された値はvalue属性で取得できる
//     document.querySelector('ul').appendChild(li); // li要素を追加('')はつけない！！

    // テキストをAddすると入力フォームからテキストが消える
  //   text.value = ''; 
  //   text.focus();
  // });
// }

// HTML

/* <body>
    <input type="text">
    <button>Add</button>
    <ul>
    </ul>
    <script src="js/main.js"></script>
  </body> */

  // ____________________   ____
//  |____________________| |Add|

//------------------------------------------------------------------------------

// selectboxを操作する------------------------------------------------------------

// HTML
/* <body>
  <select>
    <!-- <option>赤</option>
    <option>青</option>
    <option>黄</option> -->
    <!-- 値の名前を別で表示させたい場合は -->
    <!-- value属性で追加すればボタンを押した後にred,blue,yellowでli要素に追加される -->
    <option value="red">赤</option>
    <option value="blue">青</option>
    <option value="yellow">黄</option>
  </select>
  <button>Add</button>
  <ul>
  </ul>
  <script src="js/main.js"></script>
</body> */

// main.js

// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const li = document.createElement('li'); //li要素を作成
//     const color = document.querySelector('select'); //今回はいろを選ぶので定数名はcolorにしてselectを取得
//     li.textContent = `${color.value} - ${color.selectedIndex}`; 
    //liのtextContentに値をセットしたいがselectの場合valueプロパティで選択された値、selectedIndexプロパティで選択された値が何番目かを取得できる
//     document.querySelector('ul').appendChild(li);  //取得したcolorのli要素を追加する
//   });
// }

//------------------------------------------------------------------------------

// ラジオボタン-------------------------------------------------------------------
// HTML
  /* <body>
      <input type="radio" name="color" value="red"> 赤
      <input type="radio" name="color" value="blue"> 青
      <input type="radio" name="color" value="yellow"> 黄
      <button>Add</button>
      <ul>
      </ul>
      <script src="js/main.js"></script>
    </body> */

//main.js
// {
//   document.querySelector('button').addEventListener('click', () => { 
//     const colors = document.querySelectorAll('input'); //htmlのinputを全て取得
//     let selectedColor; //選択された値を保持しておきたいので変数を宣言

    // ループ処理
//     colors.forEach(color => {
//       if (color.checked === true) { //要素がチェックされていたらtrue
//         selectedColor = color.value; //selectedColorにチェックされている値を代入
//       }
//     });

//     const li = document.createElement('li');// liを作成
//     li.textContent = selectedColor; //li.textContentに選択された値を入れる
//     document.querySelector('ul').appendChild(li); //liを追加
//   });
// }

//------------------------------------------------------------------------------

//チェックボックス-----------------------------------------------------------------
// HTML

/* <body>
      <input type="checkbox" value="red"> 赤
      <input type="checkbox" value="blue"> 青
      <input type="checkbox" value="yellow"> 黄
      <button>Add</button>
      <ul>
      </ul>
      <script src="js/main.js"></script>
   </body> */

// main.js

// {
//   document.querySelector('button').addEventListener('click', () => {
//    const colors = document.querySelectorAll('input'); //input要素を取得、複数なのでquerySelectorAll
//    const selectedColors = []; //チェックボックスは複数選択可能なので配列で保持

//    colors.forEach(color => {
//      if (color.checked === true) { //値にチェックしているか
//        selectedColors.push(color.value);　//selectedColorsに追加する場合pushを使う
//      }
//    });
//   const li = document.createElement('li');
  // li.textContent = selectedColors.join(' , ');
  // li.textContent = selectedColors; //文字列で表現されるときは[ , ]区切りになるので[ , ]区切りの場合はjoinをかかなくてもいい
  // => 赤と青を選んだら  red,blueと文字列で[ , ]で区切って表示される
//   document.querySelector('ul').appendChild(li); //li要素を追加
// 　});
// }

//------------------------------------------------------------------------------

// イベント----------------------------------------------------------------------
// {
  // ダブルクリックのイベント
  // buttonを取得してダブルクリックしたら
  // document.querySelector('button').addEventListener('dblclick', () => {
  //   console.log('Double Clicked!');
  // });
  // マウス動かしたらのイベント
//   document.addEventListener('mousemove', () => {
//     console.log('moved!');
//   });
// }

//------------------------------------------------------------------------------

// イベントオブジェクト------------------------------------------------------------

// {
  // ダブルクリックのイベント
  // buttonを取得してダブルクリックしたら
  // document.querySelector('button').addEventListener('dblclick', () => {
  //   console.log('Double Clicked!');
  // });
  // マウス動かしたらのイベント (XY座標で表示 左上にマウスを持っていくと0に近い数字になる)
  // document.addEventListener('mousemove', e => {
  //   // console.log('moved!');
  //   console.log(e.clientX, e.clientY);
  // });

  // 文書内でキーを押したときに何のキーが押されたかを表示する
//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   });
// }

//------------------------------------------------------------------------------

// フォームで使われるイベント--------------------------------------------------------
//HTML
/* <body>
    <textarea></textarea>
    <script src="js/main.js"></script>
   </body> */

//main.js

// {
//   const text = document.querySelector('textarea');
  //テキストエリアにフォーカスしたときにfocusとコンソールに表示
  // text.addEventListener('focus', () => {
  //   console.log('focus');
  // });
  // //テキストエリア以外の場所をクリックしたときにblurと表示する
  // text.addEventListener('blur', () => {
  //   console.log('blur');
  // });
  // inputは内容が更新されたとき
  // text.addEventListener('input', () => {
    // console.log('input');
  //   console.log(text.value.length); // => 1 2 3と表示されて文字数が出る
  // });
  // changeは内容の更新が確定したとき
  // text.addEventListener('change', () => {
  //   console.log('change');
  // });

  //------------------------------------------------------------------------------

  // フォームを送信-----------------------------------------------------------------
  //HTML

  /* <body>
      <!-- formタグはエンターキーを押せばクリックしなくても送信される -->
      <form> 
        <input type="text">
        <button>Post</button> 
        <!-- フォームタグの中に<input type="text">が一つに場合はbuttonタグがなくてもエンターキーを押せば送信される -->
      </form>
      <script src="js/main.js"></script>
     </body> */

  //main.js
  // {
  //   document.querySelector('form').addEventListener('submit', e => {
  //     e.preventDefault();  
      //フォームを送信するとページ遷移して一瞬だけsubmitを表示してリロードされるので
      // イベントオブジェクトを渡して,([.addEventListener('submit', e =>]　eのこと)e.preventDefault();というメソッドを追加
  //     console.log('submit!')
  //   });
  // }

  //------------------------------------------------------------------------------
  
  //イベントの伝播------------------------------------------------------------------

  // Nodeツリー

  //一つずつにaddEventListener()をつけてもいいが
  //  Node
  //   Node
  //   Node  
  //     Node  addEventListener() 
  //     Node  addEventListener()
  //     Node  addEventListener()
  //     ↪︎click!をここでしたときに親要素にも伝播するので
  //     Node  addEventListener()

  // Node
  // 　Node
  // 　Node　　addEventListener()ここだけつけても良い
  // 　　Node
  // 　　Node
  // 　　Node
  // 　　Node

  //上記で親にaddEventListener()につけた場合は
  //Eventオブジェクトを使えば
  // Node
  // 　Node
  // 　Node　  EventListenerを追加した要素はe.currentTargetで取得できる
  // 　　Node
  // 　　Node  クリックした要素はe.target
  // 　　Node
  // 　　Node


  //例
  //HTML
  /* <!DOCTYPE html>
      <html lang="ja">

      <head>
          <meta charset="utf-8">
          <title>JavaScript Basics</title>
          <style>
            li {
              cursor: pointer;
            }
            li.done{
              text-decoration: line-through;//打ち消し線がつく
            }
          </style>
      </head>

      <body>
        <ul> <!-- e.currentTarget -->
          <li>Todo</li>
          <li>Todo</li> <!-- e.target -->
          <li>Todo</li>
        </ul>
        <script src="js/main.js"></script>
      </body>

      </html> */

  //main.js

  // {
  //   document.querySelector('ul').addEventListener('click', e => {
  //    if (e.target.nodeName === 'LI') { //li要素かどうかを判断
  //      e.target.classList.toggle('done'); //doneクラスをつけたり外したりする
  //    }
  //   });
  //  }

  //------------------------------------------------------------------------------