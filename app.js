const quiz = [
    {
        level: '★',
        field: '歴史',
        question: "今日は何曜日ですか？",
        answer: ['月曜日', '火曜日', '日曜日', '木曜日'],
        correct: '日曜日'
    },
    {
        level: '★',
        field: '歴史',
        question: '猪木のマフラーの色は何色ですか？',
        answer: ['青', '赤', '黄色', '緑'],
        correct: '赤'
    },
    {
        level: '★',
        field: '歴史',
        question: 'スラムダンクの主人公の名前は何',
        answer: ['流川　楓', '赤木　憲武', '仙道　アキラ', '桜木　花道'],
        correct: '桜木　花道'

    },
    {
        level: '★★',
        field: '歴史',
        question: "創生くんの誕生日は何日ですか",
        answer: ['12月10日', '3月16日', '4月10日', '11月26日'],
        level: '★',
        field: '歴史',
        correct: '12月10日'

    },
    {
        level: '★★',
        field: '歴史',
        question: "雄生くんの誕生日は何日ですか❓",
        answer: ['3月9日', '10月10日', '12月24日', '3月16日'
        ],
        correct: '3月9日'
    },
    {
        level: '★★★',
        field: '歴史',
        question: "大魔王ゴリゴーラの必殺技は何",
        answer: [
            'スファナティックバーン',
            'コルチーナボルチーナ',
            'ふわふわ気分',
            'プリプリゴリゴリざえもん'
        ],
        correct: 'スファナティックバーン'
    },
    {
        level: '★',
        field: '歴史',
        question: "おじゃる丸の持っている道具はなに",
        answer: [
            'しゃく',
            '小石',
            'スマホ',
            'プリン'
        ],
        correct: 'しゃく'
    },
    {
        level: '★',
        field: '地理',
        question: "諏訪湖から流れている川の名前は何",
        answer: [
            '天龍川',
            '四万十川',
            'アマゾン川',
            '虻川'
        ],
        correct: '天龍川'
    },
    {
        level: '★',
        field: '歴史',
        question: "ゆーも君は大きくなったら何になるの❓",
        answer: [
            '人間',
            'ドラゴン',
            'ジェノスピノ',
            'ウーモ'
        ],
        correct: 'ウーモ'
    },
    {
        level: '★',
        field: '歴史',
        question: "サンタクロースはどこから来るの❓",
        answer: [
            'フィンランド🇫🇮',
            'スウェーデン🇸🇪',
            'アメリカ🇺🇸',
            '日本🇯🇵'
        ],
        correct: 'フィンランド🇫🇮'
    },
    {
        level: '★',
        field: '歴史',
        question: "アニメ、おじゃる丸と一緒にいる虫の名前は",
        answer: [
            'とんぼ',
            'かずま',
            'でんぼ',
            'ツッキー'
        ],
        correct: 'でんぼ'
    },
    {
        level: '★',
        field: '歴史',
        question: "1ポモドーロは何分ですか🍅",
        answer: [
            '60分',
            '30分',
            '25分',
            '10分'
        ],
        correct: '25分'
    },
    {
        level: '★',
        field: '歴史',
        question: "マイクラで一番強いモンスターはなに",
        answer: [
            'ウィザー',
            'エンダードラゴン',
            'エンダーマン',
            'ウィザースケルトン'
        ],
        correct: 'エンダードラゴン'
    },
    {
        level: '★',
        field: '歴史',
        question: "この世界で一番高くなる木は❓",
        answer: [
            '杉',
            'レッドウッド（セコイア）',
            'バオバブ',
            'イチョウ'
        ],
        correct: 'レッドウッド（セコイア）'
    },
    {
        level: '★',
        field: '歴史',
        question: "ポモドーロトレーニングのポモドーロの意味はなに",
        answer: [
            'ドイツ語で筋肉',
            'フランス語で足',
            'イタリア語でトマト',
            'フィリピン語でカボチャ'
        ],
        correct: 'イタリア語でトマト'
    },
    {
        level: '★',
        field: '歴史',
        question: "X線を発見したことで有名なレントゲンが生まれたのは何年ですか❓",
        answer: [
            '1920年',
            '1867年',
            '1845年',
            '1832年'
        ],
        correct: '1845年'
    },
    {
        level: '★',
        field: '歴史',
        question: "砂時計のくびれの部分ことをなんという",
        answer: [
            'オリフィス',
            'ベゼル',
            'プリモウォーモ',
            'リベロ'
        ],
        correct: 'オリフィス'
    },
    {
        level: '★★',
        field: '戦国時代',
        question: "1575年　織田信長vs武田勝頼が戦った戦いは❓",
        answer: [
            '長篠の戦い',
            '島原の乱',
            '小牧、長久手の戦い',
            '川中島の戦い'
        ],
        correct: '長篠の戦い'
    },
    {
        level: '★',
        field: '戦国時代',
        question: "長篠の戦い（1575年）　織田信長が使った武器は❓",
        answer: [
            '火縄銃',
            'マシンガン',
            'オノ',
            'ヤリ'
        ],
        correct: '火縄銃'
    }, {
        level: '★★',
        field: '戦国時代',
        question: "長篠の戦いで織田信長と戦った武将は誰❓",
        answer: [
            '武田　勝頼',
            '武田　信玄',
            '徳川　家康',
            '豊臣 秀吉'
        ],
        correct: '武田　勝頼'
    },
    {
        level: '★★',
        field: '戦国時代',
        question: "長篠の戦いは何年にありましたか❓",
        answer: [
            '1575年',
            '1603年',
            '1505年',
            '1571年'
        ],
        correct: '1575年'
    },
    {
        level: '★★',
        field: '戦国時代',
        question: "武田　勝頼はどこの国に人ですか❓",
        answer: [
            '甲斐国',
            '信濃国',
            '美濃国の国',
            '三河の国'
        ],
        correct: '甲斐国'
    },
    {
        level: '★★★',
        field: 'マイクラ',
        question: "「マイクラ」　エンドでヘッドをおいて触ると爆発する❓",
        answer: [
            '⭕️',
            '❌',
            '増える',
            '消える'
        ],
        correct: '⭕️'
    },
    {
        level: '★',
        field: 'アニメ',
        question: "アニメ　鬼滅の刃に「いのすけ」という登場人物はいない",
        answer: [
            '⭕️',
            '❌',
            'オノスケはいる',
            'ゆーも君が出ている'
        ],
        correct: '❌'
    }, {
        level: '★',
        field: 'アニメ',
        question: "ゾイでの最高IQを10とすると「デスレックス」のIQは何になる❓",
        answer: [
            '10',
            '3',
            '7',
            '1'
        ],
        correct: '7'
    }, {
        level: '★',
        field: '歴史',
        question: "この中で草食恐竜🦕はどれ",
        answer: [
            'ステゴサウルス',
            'Tーレックス',
            'スピノサウルス',
            'プテラノドン'
        ],
        correct: 'ステゴサウルス'
    }, {
        level: '★★',
        field: '戦国時代',
        question: "1560年　織田信長VS今川義元の戦いを何というか❓",
        answer: [
            '桶狭間の戦い',
            '長篠の戦い',
            '応仁の乱',
            'ゆーも君の戦い'
        ],
        correct: '桶狭間の戦い'
    }, {
        level: '★★',
        field: '戦国時代',
        question: "「桶狭間の戦い」で「織田信長」と戦った武将の名前はなに❓",
        answer: [
            '今川義元',
            '豊臣秀吉',
            '明智光秀',
            'アントニオ猪木'
        ],
        correct: '今川義元'
    }, {
        level: '★★★',
        field: '戦国時代',
        question: "桶狭間の戦いの前に織田信長が舞った舞は何❓",
        answer: [
            '敦盛',
            'タンゴ',
            '清盛',
            'オクラホマミキサー'
        ],
        correct: '敦盛'
    }, {
        level: '★★★',
        field: '戦国時代',
        question: "織田信長と今川義元が戦った桶狭間の戦いの時の天候は❓",
        answer: [
            '大雨☔️',
            '晴れ☀️',
            '大雪⛄️',
            '雷⚡️'
        ],
        correct: '大雨☔️'
    },
    {
        level: '★★',
        field: '戦国時代',
        question: "桶狭間の戦いで織田信長の仲間だった武将は誰❓",
        answer: [
            '徳川　家康',
            '武田　信玄',
            '今川　義元',
            '北澤　貴幸'
        ],
        correct: '徳川　家康'
    },
    {
        level: '★',
        field: '戦国時代',
        question: "今川義元が支配していた駿河国は今の何県ですか❓",
        answer: [
            '静岡県',
            '愛知県',
            '長野県',
            '岐阜県'
        ],
        correct: '静岡県'
    }, {
        level: '★★',
        field: '安土桃山時代',
        question: "織田信長が舞った敦盛　最初はなんと始まる❓",
        answer: [
            '人生50年',
            '川の流れのように',
            '前前前世から僕は',
            '宿命'
        ],
        correct: '人生50年'
    }, {

        level: '★',
        field: '安土桃山時代',
        question: "桶狭間の戦いので勝った武将は誰ですか❓",
        answer: [
            '織田　信長',
            '今川　義元',
            '桜木　花道',
            'アントニオ猪木'
        ],
        correct: '織田　信長'
    },
    {
        level: '★★',
        field: '安土桃山時代',
        question: "織田信長が立てたお城は何❓",
        answer: [
            '安土城',
            '大阪城',
            '名古屋城',
            '松本城'
        ],
        correct: '安土城'
    },
    {
        level: '★★',
        field: '安土桃山時代',
        question: "織田信長が立てた安土城はどこにあるの❓",
        answer: [
            '滋賀県',
            '京都府',
            '岐阜県',
            '豊岡村'
        ],
        correct: '滋賀県'
    },
    {
        level: '★',
        field: '安土桃山時代',
        question: '織田信長が使っていた印は何❓',
        answer: ['天下布武', '天下統一', '風林火山', '四民平等'],
        correct: '天下布武'
    }, {
        level: '★',
        field: '安土桃山時代',
        question: '天下布武の印を使っていた人は誰❓',
        answer: ['織田　信長', '武田　信玄', '豊臣　秀吉', '足利　義昭'],
        correct: '織田　信長'
    },
    {
        level: '★★★',
        field: '安土桃山時代',
        question: "本能寺の変は何年にあったのかな❓",
        answer: [
            '1582年',
            '1600年',
            '1992年',
            '1301年'
        ],
        correct: '1582年'
    },
    {
        level: '★',
        field: '安土桃山時代',
        question: "本能寺の変で織田信長と戦った武将の名前は❓",
        answer: [
            '明智　光秀',
            '豊臣　秀吉',
            '毛利　元就',
            '今川　義元'
        ],
        correct: '明智　光秀'
    },
    {
        level: '★',
        field: '安土桃山時代',
        question: "織田信長が敗れた場所は",
        answer: [
            '本能寺',
            '銀閣寺',
            '善光寺',
            '法隆寺'
        ],
        correct: '本能寺'
    },
    {
        level: '★★',
        field: '安土桃山時代',
        question: "織田信長が最後に残した言葉とは何",
        answer: [
            '是非に及ばず',
            '汝ここにあり',
            '人生に悔いなし',
            '人生50年'
        ],
        correct: '是非に及ばず'
    },
    {
        level: '★',
        field: '幕末',
        question: "松下村塾で有名な人は誰❓",
        answer: [
            '吉田　松蔭',
            '高杉　晋作',
            '桂　小五郎',
            '伊藤　博文'
        ],
        correct: '吉田　松蔭'
    },
    {
        level: '★★',
        field: '幕末',
        question: "吉田松蔭の出身地は長州藩って今の何県かな❓",
        answer: [
            '山口県',
            '鳥取県',
            '島根県',
            '鹿児島県'
        ],
        correct: '山口県'
    },
    {
        level: '★',
        field: '幕末',
        question: "吉田松蔭が乗り込んだのは何",
        answer: [
            '黒船⛴',
            '飛行機🛩',
            '馬車🐴',
            '電車🚃'
        ],
        correct: '黒船⛴'
    },
    {
        level: '★★',
        field: '幕末',
        question: "吉田松蔭が怒ったのはどうして",
        answer: [
            '幕府が勝手にアメリカと条約を結んだから',
            '長州藩の人が働かないから',
            '松下村塾の経営が傾いたから',
            'アメリカ人が嫌いだから'
        ],
        correct: '幕府が勝手にアメリカと条約を結んだから'
    },
    {
        level: '★★',
        field: '幕末',
        question: "松下村塾の塾生で違うのは誰❓",
        answer: [
            '井伊　直弼',
            '久坂　玄瑞',
            '桂　小五郎',
            '高杉　晋作'
        ],
        correct: '井伊　直弼'
    },
    {
        level: '★★★',
        field: '幕末',
        question: "尊王攘夷とはどんな意味ですか❓",
        answer: [
            '天皇を大切にして外国を追い払う',
            '天皇を倒して外国の文化を取り入れる',
            '天皇と外国を仲良くさせる',
            '天皇と外国を攻撃して自分が一番になる'
        ],
        correct: '天皇を大切にして外国を追い払う'
    },
    {
        level: '★★',
        field: '幕末',
        question: "薩長同盟を成立させた立役者は誰❓",
        answer: [
            '坂本　龍馬',
            '高杉　晋作',
            '近藤　勇',
            '吉田　松蔭'
        ],
        correct: '坂本　龍馬'
    },
    {
        level: '★',
        field: '幕末',
        question: "江戸幕府が終わりになった出来事はなに❓",
        answer: [
            '大政奉還',
            '鎖国',
            '参勤交代',
            'コロナ感染症'
        ],
        correct: '大政奉還'
    }, {
        level: '★',
        field: '幕末',
        question: "1854年　アメリカのペリーは何に乗ってきた❓",
        answer: [
            '黒船',
            'ジェット機🛩',
            'タイタニック号⛴',
            '戦艦大和'
        ],
        correct: '黒船'
    }, {
        level: '★',
        field: '幕末',
        question: "薩摩と長州が1866年に手を結んだ同盟の名前は❓",
        answer: [
            '薩長同盟',
            'さつまいも同盟',
            '長州力連合軍',
            'ゴリゴリ同盟'
        ],
        correct: '薩長同盟'
    }, {
        level: '★',
        field: '幕末',
        question: "井伊直弼が結んだ条約とは何❓",
        answer: [
            '日米修好通商条約',
            '日中友好条約',
            '日韓和新条約',
            '指切りげんまん'
        ],
        correct: '日米修好通商条約'
    },
    {
        level: '★★',
        field: '幕末',
        question: "井伊直弼が殺された理由とは何❓",
        answer: [
            '幕府に逆らう人を処刑したから',
            '鎖国をしようとしたから',
            '江戸幕府を東京に変えようとしたから',
            '東京オリンピックを開こうとしたから'
        ],
        correct: '幕府に逆らう人を処刑したから'
    },
    {
        level: '★',
        field: '幕末',
        question: "井伊直弼が殺された事件を何という❓",
        answer: [
            '桜田門外の変',
            '赤門外の変',
            '何かが変',
            '凱旋門の変'
        ],
        correct: '桜田門外の変'
    }, {
        level: '★★★',
        field: '幕末',
        question: '井伊直弼が殺された桜田門外の変は何年にあったのかな❓',
        answer: [
            '1860年',
            '1660年',
            '1960年',
            '1760年'
        ],
        correct: '1860年'
    }, {
        level: '★',
        field: '幕末',
        question: "井伊直弼はなぜアメリカ🇺🇸と日米修好通商条約を結んだのか❓",
        answer: [
            'アメリカと戦っても勝てないと思ったから。',
            '日本の製品を売り出したかったから。',
            'アメリカが大好きだったから。',
            '日本の文化を広げたかったから。'
        ],
        correct: 'アメリカと戦っても勝てないと思ったから。'
    }, {
        level: '★',
        field: '幕末',
        question: "1860年　日米修好通商条約を結んだ人は誰❓",
        answer: [
            '井伊　直弼',
            '吉田　松蔭',
            '徳川　慶喜',
            '坂本　龍馬'
        ],
        correct: '井伊　直弼'
    },
    {
        level: '★',
        field: '幕末',
        question: "1863年　薩摩とイギリスが戦った戦争の名前は",
        answer: [
            '薩英戦争',
            'さつまいも戦争',
            '応仁の乱',
            '薩長同盟'
        ],
        correct: '薩英戦争'
    },
    {
        level: '★',
        field: '幕末',
        question: "薩英戦争が怒ったきっかけは何❓",
        answer: [
            'イギリス人が殿様の行列を横切ったから',
            'イギリス人がさつまいも🍠を横取りしようとしたから',
            '薩摩（さつま）はイギリスが嫌いだったから。',
            'イギリスが黒船で来たから。'
        ],
        correct: 'イギリス人が殿様の行列を横切ったから'
    },
    {
        level: '★★★',
        field: '幕末',
        question: "1863年薩英戦争　鹿児島湾に設置したものは何❓",
        answer: [
            '砲台',
            '望遠鏡',
            '火縄銃',
            'エンチャントした竹ヤリ'
        ],
        correct: '砲台'
    },
    {
        level: '★★',
        field: '歴史',
        question: "長州藩とは今の何県ですか❓",
        answer: [
            '山口県',
            '島根県',
            '鹿児島県',
            '福島県'
        ],
        correct: '山口県'
    },
    {
        level: '★',
        field: '幕末',
        question: "新撰組の隊長の名前は何❓",
        answer: [
            '近藤　勇',
            '沖田　総司',
            '土方　歳三',
            '坂本　龍馬'
        ],
        correct: '近藤　勇'
    },
    {
        level: '★★',
        field: '幕末',
        question: "新撰組は何をした人たちかな❓",
        answer: [
            '尊王攘夷はを取り締まった。',
            '外国と戦った🥷',
            '泥棒を捕まえた人たち',
            '火事を消す人達'
        ],
        correct: '尊王攘夷はを取り締まった。'
    },
    {
        level: '★★',
        field: '幕末',
        question: "新撰組の副隊長は誰",
        answer: [
            '近藤　勇',
            '沖田　総司',
            '土方　歳三',
            '西郷　隆盛'
        ],
        correct: '土方　歳三'
    },
    {
        level: '★★★',
        field: '幕末',
        question: "船中八策を考えたのは誰ですか❓",
        answer: [
            '坂本　龍馬',
            '吉田　松蔭',
            '徳川　慶喜',
            '西郷　隆盛'
        ],
        correct: '坂本　龍馬'
    },
    {
        level: '★★',
        field: '幕末',
        question: "坂本龍馬が考えた船中八策とはどんなもの❓",
        answer: [
            '日本の新しい方針を8つ考えたもの',
            '外国との戦争の仕方を書いたもの',
            '海の危険性について知らせるもの',
            '船の作り方を8段階にわけて描いた設計図'
        ],
        correct: '日本の新しい方針を8つ考えたもの'
    },
    {
        level: '★',
        field: '幕末',
        question: "江戸幕府　15代将軍は誰かな❓",
        answer: [
            '徳川　慶喜',
            '徳川　家康',
            '徳川　綱吉',
            '徳川　家茂'
        ],
        correct: '徳川　慶喜'
    },
    {
        level: '★',
        field: '幕末',
        question: "江戸幕府が朝廷に政権を返したことをなんという❓",
        answer: [
            '大政奉還',
            '船中八策',
            '風林火山',
            '焼肉定食'
        ],
        correct: '大政奉還'
    },
    {
        level: '★',
        field: '幕末',
        question: "江戸幕府　大政奉還　徳川慶喜　これに共通する年は❓",
        answer: [
            '1867年',
            '1998年',
            '1700年',
            '1830年'
        ],
        correct: '1867年'
    },
    {
        level: '★★★',
        field: '幕末',
        question: "戊辰戦争は何年にあったのかな❓",
        answer: [
            '1868年',
            '1988年',
            '1688年',
            '1768年'
        ],
        correct: '1868年'
    },
    {
        level: '★',
        field: '幕末',
        question: "戊辰戦争はなぜ行ったのかな❓",
        answer: [
            '徳川慶喜が新政府と対立した。',
            '勝海舟が江戸を支配しようとしたから',
            '西郷隆盛が外国と貿易を始めたから',
            '坂本龍馬が京都で殺されたから'
        ],
        correct: '徳川慶喜が新政府と対立した。'
    },
    {
        level: '★',
        field: '幕末',
        question: "1867年　戊辰戦争　徳川慶喜に共通する戦争は",
        answer: [
            '鳥羽・伏見の戦い',
            '元寇',
            '応仁の乱',
            '関ヶ原の合戦'
        ],
        correct: '鳥羽・伏見の戦い'
    },
    {
        level: '★★',
        field: '幕末',
        question: "戊辰戦争で対立したのは何",
        answer: [
            '旧幕府軍と新政府軍',
            '旧幕府軍と駿河国',
            '新政府軍と西郷隆盛',
            '江戸幕府とイギリス'
        ],
        correct: '旧幕府軍と新政府軍'
    },
    {
        level: '★★',
        field: '幕末',
        question: "1868年　戊辰戦争が始まった最初の戦は❓",
        answer: [
            '鳥羽伏見の戦い',
            '長篠の戦い',
            '賤ヶ岳の戦い',
            '応仁の乱'
        ],
        correct: '鳥羽伏見の戦い'
    },
    {
        level: '★★',
        field: '幕末',
        question: "戊辰戦争で江戸を攻めないように西郷隆盛と話し合いをした人は誰",
        answer: [
            '勝　海舟',
            '徳川　慶喜',
            '織田　信長',
            '伊藤　博文'
        ],
        correct: '勝　海舟'
    },
    {
        level: '★',
        field: '明治時代',
        question: '明治政府の指導者と活躍、鹿児島出身、西南戦争を起こした人は誰❓',
        answer: ['西郷　隆盛', '山形　有朋', '岩倉　具視', '大久保　利通'],
        correct: '西郷　隆盛'
    },
    {
        level: '★★',
        field: '明治時代',
        question: '西郷隆盛と西南戦争に共通するのは何❓',
        answer: ['明治政府に不満を持つ氏族',
            '江戸幕府を作りたいと思った武士',
            '近代国家を作ろうとした政治家',
            '開国をしたいと思った外国'],
        correct: '明治政府に不満を持つ氏族'
    }, {
        level: '★',
        field: '明治時代',
        question: '西郷隆盛と同じ出身（薩摩藩）で仲良しだった人は誰❓',
        answer: ['大久保　利通', '岩倉　具視', '坂本　龍馬', '高杉　晋作'],
        correct: '大久保　利通'
    }, {
        level: '★★★',
        field: '明治時代',
        question: '大久保利通は外国を見学した後に思ったことは❓',
        answer: ['まずは国内の産業を発展させるべきだ❗️',
            '外国と戦争をして領土を広げよう',
            'これからは鎖国の時代だ。',
            '幕府を復活させて昔に戻ろう'],
        correct: 'まずは国内の産業を発展させるべきだ❗️'
    }, {
        level: '★',
        field: '明治時代',
        question: '西郷隆盛が起こした西南戦争があったのはいつ❓',
        answer: ['1877年', '1900年', '1500年', '1777年'],
        correct: '1877年'
    }, {
        level: '★',
        field: '明治時代',
        question: '板垣退助の出身地はどこ',
        answer: ['土佐藩（高知）', '薩摩藩（鹿児島）', '長州藩（山口）', '尾張藩（愛知）'],
        correct: '土佐藩（高知）'
    }, {
        level: '★',
        field: '明治時代',
        question: '板垣退助は何をした人かな❓',
        answer: ['自由民権運動', '大政奉還', '薩英戦争', '大日本帝国憲法を作る'],
        correct: '自由民権運動'
    }, {
        level: '★★',
        field: '明治時代',
        question: '板垣退助が行った自由民権運動の主張とは❓',
        answer: ['国民も政治に参加しよう', '政治は役人が行おう', '武士が政治を行ったほうがいいよ', '幕府を復活させよう'],
        correct: '国民も政治に参加しよう'
    }, {
        level: '★★★',
        field: '明治時代',
        question: '板垣　退助「板垣死すとも⭕️⭕️は死せず」 ⭕️に入る言葉とは',
        answer: ['自由', '正義', '笑顔', '努力'],
        correct: '自由'
    }, {
        level: '★',
        field: '明治時代',
        question: '初代内閣総理大臣は誰',
        answer: ['伊藤　博文', '板垣　泰介', '西郷　隆盛', '徳川　慶喜'],
        correct: '伊藤　博文'
    },
    {
        level: '★★',
        field: '明治時代',
        question: '日清戦争があったのは何年ですか❓',
        answer: ['1894年', '1994年', '1684年', '1759年'],
        correct: '1894年'
    },
    {
        level: '★',
        field: '明治時代',
        question: '日清戦争で戦ったのは、日本とどこ❓',
        answer: ['中国', 'アメリカ', 'イギリス', 'ドイツ'],
        correct: '中国'
    },
    {
        level: '★',
        field: '明治時代',
        question: '日清戦争が起こったきっかけは何',
        answer: ['朝鮮半島に軍隊を置きたかったから', '中国が日本に攻めてきたから', '日本が鎖国をしようとしたから', '朝鮮が日本と条約を結んだから'],
        correct: '朝鮮半島に軍隊を置きたかったから'
    },
    {
        level: '★★★',
        field: '明治時代',
        question: '日清戦争　外務大臣　下関条約に共通する自分とは❓',
        answer: ['陸奥　宗光', '伊藤　博文', '山形　有知', '西郷　隆盛'],
        correct: '陸奥　宗光'
    },
    {
        level: '★★',
        field: '明治時代',
        question: '日清戦争後に日本と清（中国）が結んだ条約は❓',
        answer: ['下関条約', '日米修好通商条約', '日中同盟', '仲直り条約'],
        correct: '下関条約'
    }

];

// 問題の最終行です。

// if($menu_checked == true){
//     location.reload(true);
// }

// クイズの設定管理をしています。
const $time_set = document.getElementById('time_set');
const $start_quiz = document.getElementById('js_start');
const $level = document.getElementById('js_level');
const $field = document.getElementsByName('js_field');

const level_len = $level.length
const $menu_checked = document.getElementById('menu');
const quiz_len = quiz.length;
// クイズを作成している
const $field_list = document.getElementById('field_list');
// console.log($field_list);
// 完全に生成されたクイズ
const quiz_perf = [];

// セレクトされたクイズをランダムに並べ替える
const quiz_random_arr = [];
// 問題の数を定義
let quiz_kazu;
const quiz_max = 30, quiz_mim = 1;

// 問題を表示させるための処理
const $question_see = document.getElementById('js_quesiton_see');
const $question_see2 = document.getElementById('js_quesiton_see2');

const $level_see = document.getElementById('js_level_see');
const $field_see = document.getElementById('js_field_see');
// const $star=document.getElementById('js_level_see');
const $question = document.getElementById('js_question');
const $button = document.getElementsByTagName('button');
const $back_menu = document.getElementById('back_menu');
const $js_question_len = document.getElementById('js_question_len');
const $js_time_set = document.getElementById('js_time_set');


$menu_checked.checked = true;

// 問題数を入れている
// console.log('クイズの問題すうを定義する',js_question_len);

// 制限時間の設定
function limt_time() {
    for (i = 1; i < 60; i++) {
        let newTag = document.createElement('option');
        newTag.innerHTML = 305 - (i * 5);
        $time_set.appendChild(newTag);
    };
    // return;
};

limt_time();

const set_time = () => {
    for (i = 1; i < $time_set.length; i++) {
        if ($time_set[0].selected == true) {
            alert('制限時間がないけどスタート');
            return;
        };
        if ($time_set[i].selected == true) {
            t = $time_set.value
            console.log('時間', $time_set.value);
            $js_time_set.innerHTML = t;
            return t;
        };
    };
};

// set_time();


// クイズの問題数を定義している
function mondaisuu() {
    for (i = quiz_mim; i <= quiz_max; i = i + quiz_mim) {
        let newTag = document.createElement('option');
        // console.log(i);
        newTag.innerHTML = i;
        $js_question_len.appendChild(newTag);
    };
    kazu_select();
};

const kazu_select = () => {
    let r = $js_question_len.length;
    // console.log('問題数の数⭕',r)
    for (i = 0; i < r; i++) {
        if ($js_question_len[i].selected == true) {
            quiz_kazu = $js_question_len[i].value;
            // console.log('これはクイズの問題数です', quiz_kazu);
        }
    }
};


mondaisuu();




// 分野別の重複していないリストを作成している。
let field_arr = [];
field_arr.push('すべて');
for (i = 0; i < quiz_len; i++) {
    field_arr.push(quiz[i].field);
}




// // 重複を削除した配列 　▶▶▶　field_result
let field_result = field_arr.filter(function (x, i, self) {
    return self.indexOf(x) === i;
});

// console.log(field_result);

addOption();


// リストを元にHTMLへ追加
function addOption() {
    // セレクトタグを取得

    // optionタグを作成する
    const field_arr_len = field_result.length;

    for (i = 0; i < field_arr_len; i++) {

        let option = document.createElement('option');
        option.text = field_result[i];
        option.value = field_result[i];
        $field_list.appendChild(option);
    };
};


// クイスのレベル（難易度）
let quiz_arr = []
// ★の数でレベルを判定しています。
const level_select = () => {
    let quiz_arr = [];
    // すべてを選択した場合
    if ($level[0].selected == true) {
        quiz_arr = quiz;
        // それ以外の★を選択した場合
    } else {
        for (l = 0; l < level_len; l++) {
            if ($level[l].selected == true) {
                for (i = 0; i < quiz_len; i++) {
                    if ($level[l].value == quiz[i].level) {
                        quiz_arr.push(quiz[i]);
                    }
                }
            }
        }
    };
    // console.log(quiz_arr);

    // const quiz_perf=[];
    // console.log('フィールドリストの値です',$field_list[q].selected);
    if ($field_list[0].selected == true) {
        for (p = 0; p < quiz_arr.length; p++) {
            quiz_perf.push(quiz_arr[p]);
            console.log('すべてが選択されました');
        }
    } else {
        for (f = 0; f < $field_list.length; f++) {

            for (q = 0; q < quiz_arr.length; q++) {
                if ($field_list[f].selected == true) {
                    if ($field_list[f].value == quiz_arr[q].field) {
                        quiz_perf.push(quiz_arr[q])
                    };
                };
            };
        };
    };
    if (quiz_perf.length == 0) {
        alert('対象となる問題がありません');
        $menu_checked.checked = false;
        return;
    };
    // ここまでの処理でフィルターのかかったクイズの配列をつくった

    // console.log(quiz_perf);
    const quiz_index = quiz_perf.length;
    // console.log('クイズのインデックス', quiz_index);

    // ランダムな問題を発生させる処理

    // ランダムな数字を生成します。
    const quiz_random = (t) => {
        let x = 0;
        // tにクイズインデックスの値を入れる
        const min = 0, max = t;
        x = Math.floor(Math.random() * (max - min) + min);
        // console.log('ランダムな値を返す',x);
        return x;
    };
    // とりあえずランダムな問題を５問用意する

    for (i = 0; i < quiz_kazu; i++) {
        let ttt = quiz_random(quiz_index);
        quiz_random_arr.push(quiz_perf[ttt]);
    };
    console.log('クイズのランダムな配列', i, quiz_random_arr);



    // そのを値にいれる
    quiz_set(quiz_index);

    // クイズをスタートさせる処理

};

// 時間をスタートさせる
// 時間の値を取得する



// console.log($star,$question,$button);
// ボタンを押したときの処理
$start_quiz.addEventListener('click', () => {
    set_time()
    kazu_select();
    level_select();
    startTime();
    // quiz_start();
    // console.log('時間のセットタイム⭕',set_time());
});


// 時間をスタートさせる
let t = set_time();
const startTime = () => {
    // return t;
    console.log('⭕', t);
    let set_inter = setInterval(function () {
        t--;
        $js_time_set.innerHTML = t
        console.log(t)
        
        if(t == 0){
            clearInterval(set_inter);
            $question.textContent =  '正解数は' + t + '/' + quiz_kazu + '残念　時間切れだったよ🍎　 メニューを押してね😊'
            for (i = 0; i < button_len; i++) {
                $button[i].disabled = true;
                $button[i].textContent = '😣😣時間切れ😣😣';
                // return t;
            }
            // alert('時間切れです');
        };

    }, 1000);

};


// 😊ここからが問題の運用
const button_len = $button.length
let q_len = 0;
let x = 0;
let total_ans = 0;
// 問題を表示させる
const quiz_set = (t) => {

    // tにクイズインデックスの値を入れる
    const min = 0, max = 3;
    x = Math.floor(Math.random() * (max - min) + min);
    // return x;


    // const ran_number =  quiz_random(t);
    // console.log('まっｋスうなクイズの値',x);

    // 問題を表示させる処理を実行
    $question_see.textContent = q_len + 1;
    $question_see2.textContent = quiz_kazu;
    $level_see.textContent = quiz_random_arr[q_len].level;
    $field_see.textContent = quiz_random_arr[q_len].field;
    $question.textContent = quiz_random_arr[q_len].question;
    // ボタンを表示させる

    // ランダムなボタン配列を作る

    // ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
    // ランダムなボタンを発生させる。
    const arr = [0, 1, 2, 3];
    function random_arr() {
        var a = arr.length;

        // シャッフルアルゴリズム
        while (a) {
            var j = Math.floor(Math.random() * a);
            // console.log(j + 'ランダムな値');
            var t = arr[--a];
            arr[a] = arr[j];
            arr[j] = t;
        }
    };
    random_arr();
    console.log('ランダムな配列', arr);
    // ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

    for (i = 0; i < button_len; i++) {
        $button[arr[i]].textContent = quiz_random_arr[q_len].answer[i];
    };
};

for (i = 0; i < button_len; i++) {
    $button[i].addEventListener('click', (e) => {
        click_handler(e);
    });
};

const click_handler = (e) => {
    if (e.target.textContent === quiz_random_arr[q_len].correct) {
        alert('正解😊');
        total_ans++;

    } else {
        alert('❌不正解' + '\n【' + quiz_random_arr[q_len].correct + '】' + 'だよーん😣');
    }
    q_len++;

    if (q_len == quiz_kazu) {
        // alert('終了しました');
        // ここへ終了したときの処理を書く
        quiz_end(total_ans);
    } else {
        console.log('クイズ出題数', q_len)
        quiz_set();

    }

}

const quiz_end = (t) => {
    $question.textContent = '正解数は' + t + '/' + quiz_kazu + 'です😊' + 'メニューを押してね😊'
    for (i = 0; i < button_len; i++) {
        $button[i].disabled = true;
        $button[i].textContent = '😊😊😊';
        // return t;
    }
    // タイマーセットが上手いかないのでここで値を取る
    // let time  =$js_time_set;
    // console.log(time);
    
}
