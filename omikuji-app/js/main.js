'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    //switch文を短くかくにはresultsを使う
    // const results = ['大吉', '中吉', '凶','末吉'];
    // const results = ['大吉', '大吉', '大吉','大吉', '凶'];
    // const n = Math.floor(Math.random() * results.length); //ランダムな整数値を0, 1, 2の範囲で表示させる
    // btn.textContent = results[n];
    //さらに短くするにはresults[n]のnを使わずそのまま配列に処理を入れ込んでしまう
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
     
    /* 確率を操作 */
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; // 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉'; //15%
    } else {
      btn.textContent = '凶'; //80%
    }
    //nの数値によって表示を変化
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}