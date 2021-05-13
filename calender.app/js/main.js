'use strict';

console.clear();

{
  const year = 2020;
  const month = 4; //5月 (0から始まるので一個小さくする)


  function getCalenderTail() {
    const dates = [];
    // 最後にかかれる今月の最終週の翌月分の日付を求めるには今月の末日が週の何日目か求めて引いてあげる
    const lastDay = new Date(year, month + 1, 0).getDay(); //今月の末日は翌月の0日とすれば出る

    //今月の末日(lastDay)から７を引けば最終週の翌月分が出る
    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }

    console.log(dates);
  }


  //先月分取得
  function getCalenderHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate(); //今月の0日目とすると先月の末日を求める
    const n = new Date(year, month, 1).getDay();
    //今月の1日は週の何日目に当たるかを調べることで1日までの先月分の日数を求める

    //dから1日ずつさかのぼりつつn日分の日付が欲しいので、ループを回す
    for (let i = 0; i < n; i++) {
      // 30
      // 29, 30
      // 28, 29, 30
      //dからさかのぼって日付を入れるためにループを回す。上記のように先頭に数値を入れていくので
      // unshiftを使って入れる。
      dates.unshift({
        date: d - i, 
        isToday: false, //先月分のデータなのでfalse
        isDisabled: true, //薄くするかどうかはtrue
      });
    }

    console.log(dates);
  }

  function getCalenderBody() {
    const dates = []; //date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();
    //末日は翌月1日の1日前という意味で翌月の0日を指定すれば末日を取得することができる
    for (let i = 1; i <= lastDate; i++) {
      // iを1から末日までとして, iを1ずつ増やして
      dates.push({
        //dateには日付
        date: i,
        //todayをつけるかどうかを真偽値で保持
        isToday: false,
        //disabledも真偽値で保持
        isDisabled: false, //前月、翌月のために作られたクラスなので今月分にはつかないのでfalse
      }); //datesにiを1ずつ増やせばいい
    }
    console.log(dates);
  }
  // getCalenderBody(); //関数の実行
  // getCalenderHead(); //関数の実行
  getCalenderTail();
}