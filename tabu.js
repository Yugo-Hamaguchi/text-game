const qize = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: ['スーパーファミコン',
            'プレイステーション',
            'ニンテンドースイッチ',
            'ニンテンドーDS'],
        correct: 'ニンテンドーDS',

    },
    {
        question: '糸井重里が企画に関わった、ニンテンドーの看板ゲームといえば？',
        answers: ['MOTHER2',
            'スーパーマリオブラザーズ2',
            'SPドンキーコング',
            '星のカービィ'],
        correct: 'MOTHER2',

    },
    {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: ['フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'],
        correct: 'セシル',
    }];

const qizeLength = qize.lengt;
let qizeIndex = 0;

const CreateQize = () => {
    document.getElementById('js-question').textContent = qize[qizeIndex].question;
}