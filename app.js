const quiz = [
    {
        question: "今日は何曜日ですか？",
        answer: ['月曜日','火曜日','水曜日','木曜日'],  
        correct: '水曜日'
    },
    {
        question: '猪木のマフラーの色は何色ですか？',
        answer: ['青','赤','黄色','緑'],
        correct: '赤'
    },
    {
        question: 'スラムダンクの主人公の名前は何',
        answer:['流川　楓','赤木　憲武','仙道　アキラ','桜木　花道'] ,
        correct: '桜木　花道'

    },
    {
        question: "創生くんの誕生日は何日ですか",
        answer:['12月10日','3月16日','4月10日','11月26日'],
        correct:'12月10日'

    },
    {
        question:"雄生くんの誕生日はなんいちですか",
        answer:['3月9日','10月10日','12月24日','3月16日'
        ], 
        correct: '3月9日'
    },
    {
        question:"大魔王ゴリゴーラの必殺技は何",
        answer:[
            'スファナティックバーン',
            'コルチーナボルチーナ',
            'ふわふわ気分',
            'プリプリゴリゴリざえもん'
        ], 
        correct: 'スファナティックバーン'
    },
    {
        question:"おじゃる丸の持っている道具はなに",
        answer:[
            'しゃく',
            '小石',
            'スマホ',
            'プリン'
        ], 
        correct: 'しゃく'
    },
	 {
        question:"諏訪湖から流れている川の名前は何",
        answer:[
            '天龍川',
            '四万十川',
            'アマゾン川',
            '虻川'
        ], 
        correct: '天龍川'
    },
	 {
        question:"ゆーも君は大きくなったら何になるの❓",
        answer:[
            '人間',
            'ドラゴン',
            'ジェノスピノ',
            'ウーモ'
        ], 
        correct: 'ウーモ'
    },
	 {
        question:"サンタクロースはどこから来るの❓",
        answer:[
            'フィンランド🇫🇮',
            'スウェーデン🇸🇪',
            'アメリカ🇺🇸',
            '日本🇯🇵'
        ], 
        correct: 'フィンランド🇫🇮'
    },
	{
        question:"アニメ、おじゃる丸と一緒にいる虫の名前は",
        answer:[
            'とんぼ',
            'かずま',
            'でんぼ',
            'ツッキー'
        ], 
        correct: 'でんぼ'
    },
	{
        question:"1ポモドーロは何分ですか🍅",
        answer:[
            '60分',
            '30分',
            '25分',
            '10分'
        ], 
        correct: '25分'
    },
	{
        question:"マイクラで一番強いモンスターはなに",
        answer:[
            'ウィザー',
            'エンダードラゴン',
            'エンダーマン',
            'ウィザースケルトン'
        ], 
        correct: 'エンダードラゴン'
    },
	{
        question:"この世界で一番高くなる木は❓",
        answer:[
            '杉',
            'レッドウッド（セコイア）',
            'バオバブ',
            'イチョウ'
        ], 
        correct: 'レッドウッド（セコイア）'
    },
	{
        question:"ポモドーロトレーニングのポモドーロの意味はなに",
        answer:[
            'ドイツ語で筋肉',
            'フランス語で足',
            'イタリア語でトマト',
            'フィリピン語でカボチャ'
        ], 
        correct: 'イタリア語でトマト'
    },
	{
        question:"X線を発見したことで有名なレントゲンが生まれたのは何年ですか❓",
        answer:[
            '1920年',
            '1867年',
            '1845年',
            '1832年'
        ], 
        correct: '1845年'
    },
	{
        question:"砂時計のくびれの部分ことをなんという",
        answer:[
            'オリフィス',
            'ベゼル',
            'プリモウォーモ',
            'リベロ'
        ], 
        correct: 'オリフィス'
    },
	{
        question:"1575年　織田信長vs武田勝頼が戦った戦いは❓",
        answer:[
            '長篠の戦い',
            '島原の乱',
            '小牧、長久手の戦い',
            '川中島の戦い'
        ], 
        correct: '長篠の戦い'
    },
	{
        question:"長篠の戦い（1575年）　織田信長が使った武器は❓",
        answer:[
            '火縄銃',
            'マシンガン',
            'オノ',
            'ヤリ'
        ], 
        correct: '火縄銃'
    },{
        question:"長篠の戦いで織田信長と戦った武将は誰❓",
        answer:[
            '武田　勝頼',
            '武田　信玄',
            '徳川　家康',
            '豊臣 秀吉'
        ], 
        correct: '武田　勝頼'
    },
	{
        question:"長篠の戦いは何年にありましたか❓",
        answer:[
            '1575年',
            '1603年',
            '1505年',
            '1571年'
        ], 
        correct: '1575年'
    },
	{
        question:"武田　勝頼はどこの国に人ですか❓",
        answer:[
            '甲斐国',
            '信濃国',
            '美濃国の国',
            '三河の国'
        ], 
        correct: '甲斐国'
    },
	{
        question:"「マイクラ」　エンドでヘッドをおいて触ると爆発する❓",
        answer:[
            '⭕️',
            '❌',
            '増える',
            '消える'
        ], 
        correct: '⭕️'
    },
	{
        question:"アニメ　鬼滅の刃に「いのすけ」という登場人物はいない",
        answer:[
            '⭕️',
            '❌',
            'オノスケはいる',
            'ゆーも君が出ている'
        ], 
        correct: '⭕️'
    },{
        question:"ゾイドの最高IQを10とすると「デスレックス」のIQは何になる❓",
        answer:[
            '10',
            '3',
            '7',
            '1'
        ], 
        correct: '7'
    },{
        question:"この中で草食恐竜🦕はどれ",
        answer:[
            'ステゴサウルス',
            'Tーレックス',
            'スピノサウルス',
            'プテラノドン'
        ], 
        correct: 'ステゴサウルス'
    },{
        question:"1560年　織田信長VS今川義元の戦いを何というか❓",
        answer:[
            '桶狭間の戦い',
            '長篠の戦い',
            '応仁の乱',
            'ゆーも君の戦い'
        ], 
        correct: '桶狭間の戦い'
    },{
        question:"「桶狭間の戦い」で「織田信長」と戦った武将の名前はなに❓",
        answer:[
            '今川義元',
            '豊臣秀吉',
            '明智光秀',
            'アントニオ猪木'
        ], 
        correct: '今川義元'
    },{
        question:"桶狭間の戦いの前に織田信長が舞った舞は何❓",
        answer:[
            '敦盛',
            'タンゴ',
            '清盛',
            'オクラホマミキサー'
        ], 
        correct: '敦盛'
    }
	


];
// ｛
// question:"",
//     answer:[
//         '',
//         '',
//         '',
//         ''
//     ], 
//     correct: ''
//      ｝
// console.log(quiz);

// 配列を作る



// ボタンを定義
const $button = document.getElementsByTagName('button');
const button_length = $button.length;
let button_index = 0
// クイズの問題数を定義しています

console.log(quiz.length);
let t = quiz.length
// console.log(t);

// let q = 9
let quiz_index = 0

// 問題の数を設定しています。数字を変更すればOK
const quiz_length = 9

// 正解数のカウントをします
let correct_index = 0

// ランダムな数字を生成します。
let x = 0;
const quiz_random = () => {
	const min =0, max = t;
	x =Math.floor(Math.random()*(max-min)+min);
};



// ランダムなボタンを発生させる。
const arr = [0,1,2,3];
function random_arr() {
       var a = arr.length;
    
    // シャッフルアルゴリズム
    while(a){
        var j = Math.floor(Math.random() * a);
        // console.log(j + 'ランダムな値');
        var t = arr[--a];
        arr[a] = arr[j];
        arr[j]=t;
    }
    
// console.log(arr);

    // arr.forEach(function (value) {
    //     console.log(value)
    // });
 
};

const quiz_set= ()=>{
		quiz_random();
        // btn_random();
        random_arr();
        // console.log(arr);
        document.getElementById('js_question').textContent = quiz[x].question;
        for(i =0; i < button_length; i++){
            // console.log('配列を作る');
            f = arr[i];
            $button[i].textContent = quiz[x].answer[f]; 
        };
        // 正誤判定
        // document.getElementById('js_correct').textContent = "";
};
quiz_set();
    
// 答える　// 正誤判定」
for(i=0; i<button_length; i++){
    $button[i].addEventListener('click',(e) =>{
        click_handler(e);
    });
};

// 問題の正誤判定をしています
const click_handler = (e)=>{
    if (quiz[x].correct === e.target.textContent){
        // 正解
        // 正解の音を鳴らす
        document.getElementById('kieru').play();
        alert('正解です😊');
        document.getElementById('js_correct').textContent = '正解';
		correct_index++;
    }else{
        // 不正解
        // 不正解の音を鳴らす
        document.getElementById('don').play();
        alert('不正解です😑');
        document.getElementById('js_correct').textContent = '不正解';
    };
    // クイズを終了させる処理です
    quiz_end();
};


// クイズを終了させる処理です。
const quiz_end=() =>{
  
    if(quiz_index < quiz_length){
        // window.alert('お疲れさまでした');
        quiz_index++;
        console.log(quiz_index);
        // document.getElementById('gameover').play();

    }else{
        document.getElementById('zenbu').play();     
		tt = quiz_length + 1 ;	
		
		
        window.alert('終了します。' + '正解数'+ correct_index +'/' + tt +'です😀');
		window.alert('次の問題へ行きます‼️');
		quiz_index=0;
		correct_index = 0
		
    };
    quiz_set();
};



// 重複なしのランダムな数字を作る方法
// 重複チェック用の配列
// const randams = [









// let hand_index = 0
// ボタンの文字を入力します。
// while(button_index < button_length)
// {
// $button[button_index].textContent = quiz[quiz_index].answer[button_index];
// button_index++;
// };


// const question = "今日は何曜日ですか？";
// const answer = [
//             '月曜日',
//             '火曜日',
//             '水曜日',
//             '木曜日'
//         ];
// const correct = '月曜日';

// 正誤判定欄の取得
// document.getElementById('js_correct').textContent='開始';

// 履歴◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
// 2020-11-17
// ◎問題表示　
// ◎正誤判定
// 2020/11/18
// ◎問題を配列にする
// ◎問題を順番に表示させる
// ３問作成する。


// 得点の表示

// アラートではなくボタンで次の問題を表示でる。
// ランダムで問題を表示できる。
