
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log(data.results.shop[0].access);
console.log(data.results.shop[0].address);
console.log(data.results.shop[0].budget.name);
console.log(data.results.shop[0].catch);
console.log(data.results.shop[0].genre.name);
console.log(data.results.shop[0].name);
console.log(data.results.shop[0].open);
console.log(data.results.shop[0].station_name);
console.log(data.results.shop[0].sub_genre.name);

console.log(data.results.shop[1].access);
console.log(data.results.shop[1].address);
console.log(data.results.shop[1].budget.name);
console.log(data.results.shop[1].catch);
console.log(data.results.shop[1].genre.name);
console.log(data.results.shop[1].name);
console.log(data.results.shop[1].open);
console.log(data.results.shop[1].station_name);
console.log(data.results.shop[1].sub_genre.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
let c = 0;
function printDom(data) {
if(c>0){
  let w = document.querySelector('div#result');
w.remove();
}
c=1;
div = document.createElement('div');
div.id = 'result';
let body = document.querySelector('body');
body.insertAdjacentElement('beforeend',div);
let p = document.createElement('p');
p.id = 'kensakukekka'
p.textContent = '検索結果は'+data.results.shop.length+'件';
div.insertAdjacentElement('beforeend',p);

for(let i=0;i<data.results.shop.length;i++){
let ps = document.createElement('strong');
ps.id = 'pstrong';
let p = document.querySelector('div#result');
p.insertAdjacentElement('beforeend', ps);
ps.textContent = '検索結果'+(i+1)+'件目';

let h2 = document.createElement('h2');
h2.id = 'size';
ps.insertAdjacentElement('afterend', h2);
h2.textContent = data.results.shop[i].name;

let l = document.createElement('li');
let u = document.createElement('ul');
h2.insertAdjacentElement('afterend', u);
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('アクセス: ')+data.results.shop[i].access; 
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('住所: ')+data.results.shop[i].address;
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('予算: ')+data.results.shop[i].budget.name;
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('キャッチコピー: ')+data.results.shop[i].catch;
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('ジャンル: ')+data.results.shop[i].genre.name;
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('営業時間: ')+data.results.shop[i].open;
l = document.createElement('li');
u.insertAdjacentElement('beforeend', l);
l.textContent = ('最寄駅: ')+data.results.shop[i].station_name;
//l = document.createElement('li');
//u.insertAdjacentElement('beforeend', l);
//l.textContent = ('サブジャンル: ')+data.results.shop[i].sub_genre.name;
}
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#kensaku');
b.addEventListener('click', sendRequest);




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let k = document.querySelector('input[name="kensakuki-"]');
  let ke = (k.value);
  

  let G;
  if(ke === '居酒屋'){
    G = 'G001';
  } else if(ke === 'ダイニングバー・バル'){
    G = 'G002';
  } else if(ke === '創作料理'){
    G = 'G003';
  } else if(ke === '和食'){
    G = 'G004';
  } else if(ke === '洋食'){
    G = 'G005'
  } else if(ke === 'イタリアン・フレンチ'){
    G = 'G006';
  } else if(ke === '中華'){
    G = 'G007';
  } else if(ke === '焼肉・ホルモン'){
    G = 'G008';
  } else if(ke === 'アジア・エスニック料理'){
    G = 'G009';
  } else if(ke === '各国料理'){
    G = 'G010';
  } else if(ke === 'カラオケ・パーティ'){
    G = 'G011';
  } else if(ke === 'バー・カクテル'){
    G = 'G012';
  } else if(ke === 'ラーメン'){
    G = 'G013';
  } else if(ke === 'カフェ・スイーツ'){
    G = 'G014';
  } else if(ke === 'その他グルメ'){
    G = 'G015';
  } else if(ke === 'お好み焼き・もんじゃ'){
    G = 'G016';
  } else if(ke === '韓国料理'){
    G = 'G017'
  } 

  if(G === 'G001'||G === 'G002'||G === 'G003'|| G === 'G004'|| G === 'G005'|| G === 'G006'|| G === 'G007'|| G === 'G008'|| G === 'G009'|| G === 'G010'|| G === 'G011'|| G === 'G012'|| G === 'G013'|| G === 'G014'|| G === 'G015'|| G === 'G016'|| G === 'G017'){
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+ G +'.json';

  axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
  }else {
    console.log('対応したものを入れてください')
  }
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data; 
  printDom(data);

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること

