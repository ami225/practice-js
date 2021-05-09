'use strict';



{
  /* クラス ここから */
  class Post {  //親クラス
    constructor(text) { 
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}likes`); 
    }

    like() {
      this.likeCount++;
      this.show(); 
    }
  }
  /* ここまでクラス */

  //スポンサーのクラス
  //クラスの継承
  //このクラスにはlikeメソッドはないが、継承することでlikeも継承される
  // extends Postを追加
  class SponsoredPost extends Post{ //子クラス
    constructor(text,sponsor) { 
      super(text);  //子クラスでthisを使うにはsuper();をつける 
      // superをつけると親クラスのconstructorが呼び出される親クラスで引数にtextを入れているのでtextを入れる
      this.sponsor = sponsor;
    }
    show() {
      super.show(); //親クラスのshowメソッドを呼び出せばいいので
      console.log(`... sponsored by ${this.sponsor}`);
    }

    like() {
      this.likeCount++;
      this.show(); 
    }
  }
 /* ここまでクラス */

 /* ここからインスタンス */
  const posts = [
  new Post('JavaScriptの勉強中...'), 
  new Post('プログラミング楽しい！'),
  new SponsoredPost('3分動画でマスターしよう','dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}