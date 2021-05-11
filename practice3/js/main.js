'use strict';
{
 document.querySelector('ul').addEventListener('click', e => {
   
  if (e.target.nodeName === 'LI') { //li要素かどうかを判断
    e.target.classList.toggle('done'); //doneクラスをつけたり外したりする
  }
 });
}