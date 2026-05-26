/* ============================================
   SCTV Marketing School - JavaScript
   ============================================ */

// クイズデータ
const quizData = {
  1: [
    {
      q: "マーケティングの目的を、いちばん正しく言い表しているのはどれ？",
      options: [
        "商品をできるだけ多く製造すること",
        "お客様に買ってもらえるしくみをつくること",
        "営業担当者を増やして売り込みを強化すること",
        "ライバル会社よりも安く売ること"
      ],
      correct: 1,
      feedback: "正解！マーケティングは「お客様に自然に選んでもらえる状態」をつくる活動です。売り込まなくても売れるしくみを設計するのがゴールです。"
    },
    {
      q: "マーケティングの4P、当てはまらないのはどれ？",
      options: [
        "Product（製品）",
        "Price（価格）",
        "People（人材）",
        "Promotion（販促）"
      ],
      correct: 2,
      feedback: "正解！4Pは Product / Price / Place / Promotion の4つ。Peopleは含まれません（後発の7Pでは入りますが基本の4Pには入りません）。"
    },
    {
      q: "今の時代、商品が売れるためにいちばん大事なのはどれ？",
      options: [
        "とにかく良いものを作れば自然と売れる",
        "選択肢が多い中で「なぜうちか」を伝え続ける",
        "値段をライバル会社より安くする",
        "営業マンが粘り強く売り込む"
      ],
      correct: 1,
      feedback: "正解！今は選択肢が無数にある時代。「知ってもらう」「選ばれる理由を伝える」ことがすべての出発点です。"
    }
  ],
  2: [
    {
      q: "「全世代に届けたい」とCMを作った結果、よくある失敗は？",
      options: [
        "全世代から大絶賛される",
        "メッセージがぼやけて誰にも刺さらない",
        "予算が大幅に余る",
        "若い世代だけに刺さる"
      ],
      correct: 1,
      feedback: "正解！誰にでも届けようとすると、結局誰の心にも届きません。ターゲットを絞ることで、はじめてメッセージが鋭くなります。"
    },
    {
      q: "「ペルソナ」とは何のこと？",
      options: [
        "ざっくりとした客層のこと",
        "競合他社の代表者のこと",
        "ターゲットの中の、たった一人の具体的な人物像",
        "新商品につける愛称のこと"
      ],
      correct: 2,
      feedback: "正解！ペルソナは「実在しそうな一人」を描くこと。年齢・職業・困りごとまで具体的にすることで、響く言葉が見えてきます。"
    },
    {
      q: "佐野ケーブルテレビが新CMで「子育てママ」「学生」「社会人」を登場させているのは、なぜ？",
      options: [
        "出演料を抑えるため",
        "とりあえず人数を多くしたかったため",
        "それぞれが具体的なペルソナで、見た人が自分と重ねやすいから",
        "撮影が簡単だったから"
      ],
      correct: 2,
      feedback: "正解！具体的なシーンを見せることで「これ、私のことだ」と感じてもらえます。ペルソナが明確だからこそ、感情に刺さるのです。"
    }
  ],
  3: [
    {
      q: "「ポジショニング」とは？",
      options: [
        "社内での役職のこと",
        "お客様の頭の中で「うちはこういう会社」と覚えてもらうこと",
        "店舗の立地を決めること",
        "営業エリアを区切ること"
      ],
      correct: 1,
      feedback: "正解！「○○といえば佐野ケーブルテレビ」と思い出してもらえる位置取りを作るのがポジショニングです。"
    },
    {
      q: "USP（独自の強み）として、佐野ケーブルテレビらしい例はどれ？",
      options: [
        "全国どこにでもある大手の安心感",
        "業界最安値の月額料金",
        "地域密着・無料訪問サポート",
        "海外向けのサービス展開"
      ],
      correct: 2,
      feedback: "正解！地域密着・顔の見える関係・訪問サポートは、大手キャリアには真似できない独自の強みです。"
    },
    {
      q: "「下り1Gbpsの光ファイバー回線」をお客様目線で伝えるなら？",
      options: [
        "通信規格IEEE 802.3に準拠した安定接続",
        "家族みんなが同時に動画を見ても、止まらない",
        "PON方式による低コスト光通信",
        "FTTH方式の最終形態を採用"
      ],
      correct: 1,
      feedback: "正解！スペックではなく「お客様にとってどう良いのか」という価値の言葉に翻訳することが大事です。"
    }
  ],
  4: [
    {
      q: "SNSに動画を投稿することで得られる最大のメリットは？",
      options: [
        "テレビCMを見ない若い世代と接点を作れる",
        "印刷コストを完全にゼロにできる",
        "高齢のお客様のサポートが不要になる",
        "営業マンを採用しなくて済む"
      ],
      correct: 0,
      feedback: "正解！特に20〜30代はテレビをほぼ見ません。SNSは「知らない人に知ってもらう」最強の入り口です。"
    },
    {
      q: "AIDMAの法則で、SNSのショート動画が主に担当する段階は？",
      options: [
        "Action（行動・申込）",
        "Memory（記憶）",
        "Desire（欲求）",
        "Attention（注意・認知）"
      ],
      correct: 3,
      feedback: "正解！SNS動画はまず「知ってもらう（Attention）」が役割。そこからCM→LP→キャンペーンへとお客様を運んでいきます。"
    },
    {
      q: "CMやチラシを作る前に、必ず自問すべき3つの問いは？",
      options: [
        "予算は？納期は？担当者は？",
        "誰に？何を感じてほしい？何をしてほしい？",
        "色は？文字は？写真は？",
        "印刷部数は？配布日は？回収方法は？"
      ],
      correct: 1,
      feedback: "正解！「ターゲット・メッセージ・期待する行動」がブレない制作物が、結果を出します。"
    }
  ],
  5: [
    {
      q: "KGIとKPIの違いとして正しいのは？",
      options: [
        "KGIは最終目標、KPIはそこに至る中間目標",
        "KGIは社員向け、KPIはお客様向けの指標",
        "KGIは月次、KPIは年次の指標",
        "どちらも同じ意味で、呼び方が違うだけ"
      ],
      correct: 0,
      feedback: "正解！KGI（最終ゴール）にたどり着くまでに、何をどれだけ達成すべきかを示すのがKPIです。"
    },
    {
      q: "ファネル（漏斗）の考え方で、もっとも大事なのは？",
      options: [
        "全段階で同じ人数を維持すること",
        "どこで離脱が多いかを見て、そこを改善すること",
        "とにかく入り口の数を増やし続けること",
        "最後の申込数だけを見て判断すること"
      ],
      correct: 1,
      feedback: "正解！SNSは見られているのにLP訪問が少ない、LPは来るけど申込が少ない──どこに問題があるかを特定するのがファネル分析です。"
    },
    {
      q: "PDCAサイクルの「C」が表すのは？",
      options: [
        "Create（創造）",
        "Communicate（伝達）",
        "Check（検証）",
        "Customer（顧客）"
      ],
      correct: 2,
      feedback: "正解！Plan→Do→Check→Action。やりっぱなしではなく「測って改善する」ことで、マーケティングは進化します。"
    }
  ],
  6: [
    {
      q: "「本気のあなたを応援する」というキャッチコピーが効果的なのは、なぜ？",
      options: [
        "短くて覚えやすいから",
        "お客様の感情に寄り添い「これ、私のことだ」と感じてもらえるから",
        "他社が使っていないから",
        "社長の好きな言葉だから"
      ],
      correct: 1,
      feedback: "正解！人は論理より感情で動きます。「わかってくれている」と感じた瞬間、その会社が選ばれる候補になります。"
    },
    {
      q: "「キャンペーンで2万円キャッシュバック＋他社違約金最大2万円還元」が担う役割は？",
      options: [
        "申込みの最後の一押し（背中を押す）",
        "サービスの認知度を上げる",
        "競合の悪口を言う",
        "社員のモチベーションを上げる"
      ],
      correct: 0,
      feedback: "正解！「気になっているけど踏ん切りがつかない」お客様の背中を押すのがキャンペーンの役割。AIDMAでいうActionの段階です。"
    },
    {
      q: "マーケティングについて、もっとも大事な心構えは？",
      options: [
        "マーケティング担当者だけが考えればいい",
        "一度作ったら何年も使い回す",
        "お客様の声を聞き、試して、改善し続けること",
        "競合と同じことをやれば安心"
      ],
      correct: 2,
      feedback: "正解！マーケティングはゴールのない継続的な活動。現場のあなたが聞いたお客様の一言が、次の施策の大ヒントになります。"
    }
  ]
};

// 状態管理
const state = {
  currentQuiz: {},
  scores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  completed: { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false },
  visited: new Set()
};

// 学習開始
function startLearning() {
  document.getElementById('chapter1').scrollIntoView({ behavior: 'smooth' });
}

// クイズ初期化
function initQuiz(chapter) {
  state.currentQuiz[chapter] = {
    index: 0,
    score: 0,
    answered: false
  };
  renderQuiz(chapter);
}

// クイズの描画
function renderQuiz(chapter) {
  const container = document.getElementById(`quiz${chapter}`);
  const quizState = state.currentQuiz[chapter];
  const questions = quizData[chapter];
  
  if (quizState.index >= questions.length) {
    renderQuizResult(chapter);
    return;
  }
  
  const q = questions[quizState.index];
  
  // 進捗ドット
  let dotsHtml = '<div class="quiz-progress">';
  for (let i = 0; i < questions.length; i++) {
    let cls = '';
    if (i < quizState.index) cls = 'done';
    else if (i === quizState.index) cls = 'active';
    dotsHtml += `<div class="qp-dot ${cls}"></div>`;
  }
  dotsHtml += '</div>';
  
  // 選択肢
  let optionsHtml = '<div class="q-options">';
  q.options.forEach((opt, i) => {
    optionsHtml += `<button class="q-option" onclick="answerQuiz(${chapter}, ${i})">${opt}</button>`;
  });
  optionsHtml += '</div>';
  
  container.innerHTML = `
    <div class="quiz-question">
      ${dotsHtml}
      <div class="q-text">Q${quizState.index + 1}. ${q.q}</div>
      ${optionsHtml}
    </div>
  `;
}

// 回答処理
function answerQuiz(chapter, choice) {
  const quizState = state.currentQuiz[chapter];
  if (quizState.answered) return;
  quizState.answered = true;
  
  const questions = quizData[chapter];
  const q = questions[quizState.index];
  const isCorrect = choice === q.correct;
  
  if (isCorrect) quizState.score++;
  
  // ボタンに正解/不正解の色をつける
  const buttons = document.querySelectorAll(`#quiz${chapter} .q-option`);
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === choice) btn.classList.add('wrong');
  });
  
  // フィードバック表示
  const container = document.getElementById(`quiz${chapter}`);
  const fbClass = isCorrect ? 'correct-fb' : 'wrong-fb';
  const fbLabel = isCorrect ? '⭕ 正解！' : '❌ 残念...';
  const correctText = !isCorrect ? `<br><br><strong>正解：${q.options[q.correct]}</strong>` : '';
  
  const fbHtml = `
    <div class="q-feedback ${fbClass}">
      <div class="q-feedback-label">${fbLabel}</div>
      <div>${q.feedback}${correctText}</div>
    </div>
    <button class="q-next-btn" onclick="nextQuiz(${chapter})">
      ${quizState.index + 1 < questions.length ? '次の問題へ →' : '結果を見る →'}
    </button>
  `;
  
  container.querySelector('.quiz-question').insertAdjacentHTML('beforeend', fbHtml);
}

// 次の問題へ
function nextQuiz(chapter) {
  const quizState = state.currentQuiz[chapter];
  quizState.index++;
  quizState.answered = false;
  renderQuiz(chapter);
}

// クイズ結果
function renderQuizResult(chapter) {
  const container = document.getElementById(`quiz${chapter}`);
  const quizState = state.currentQuiz[chapter];
  const total = quizData[chapter].length;
  const score = quizState.score;
  
  state.scores[chapter] = score;
  state.completed[chapter] = true;
  updateProgress();
  
  let emoji, msg;
  if (score === total) {
    emoji = '🎯';
    msg = '完璧です！この章の内容を完全に理解できています。';
  } else if (score >= total - 1) {
    emoji = '🎉';
    msg = '素晴らしい！ほぼ理解できています。';
  } else if (score >= total / 2) {
    emoji = '👍';
    msg = 'いい調子です。気になるところは章を読み返してみましょう。';
  } else {
    emoji = '📖';
    msg = 'もう一度章を読み直してみるとよさそうです。';
  }
  
  const nextChapterBtn = chapter < 6 
    ? `<button class="cta-btn" onclick="document.getElementById('chapter${chapter + 1}').scrollIntoView({behavior:'smooth'})"><span>次の章へ</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`
    : `<button class="cta-btn" onclick="showCompletion()"><span>修了画面へ</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
  
  const retryBtn = `<button class="q-next-btn" style="background:transparent;color:var(--orange-600);border:2px solid var(--orange-300);margin-top:8px;" onclick="initQuiz(${chapter})">もう一度挑戦</button>`;
  
  container.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-emoji">${emoji}</div>
      <div class="quiz-result-score">${score}</div>
      <div class="quiz-result-max">/ ${total} 問正解</div>
      <div class="quiz-result-msg">${msg}</div>
      ${nextChapterBtn}
      <div>${retryBtn}</div>
    </div>
  `;
}

// 進捗の更新
function updateProgress() {
  const total = Object.keys(state.completed).length;
  const done = Object.values(state.completed).filter(v => v).length;
  const percent = Math.round((done / total) * 100);
  document.getElementById('progressFill').style.width = percent + '%';
  document.getElementById('progressPercent').textContent = percent;
}

// 修了画面の表示
function showCompletion() {
  const total = Object.values(state.scores).reduce((a, b) => a + b, 0);
  const maxScore = 18;
  
  document.getElementById('totalScore').textContent = total;
  
  let stars, message;
  if (total >= 16) {
    stars = '⭐⭐⭐⭐⭐';
    message = 'マーケティングの基本がしっかり身についています！<br>これからは現場の視点で、お客様の声を施策に活かしていきましょう。';
  } else if (total >= 12) {
    stars = '⭐⭐⭐⭐';
    message = 'よく理解できています。<br>気になった章を時々見返しながら、実践でアウトプットしていきましょう。';
  } else if (total >= 8) {
    stars = '⭐⭐⭐';
    message = '基本は押さえられました。<br>章末クイズを何度か繰り返すと、より定着しますよ。';
  } else {
    stars = '⭐⭐';
    message = 'お疲れさまでした。<br>もう一度、興味のある章から復習してみてください。';
  }
  
  document.getElementById('scoreStars').innerHTML = stars;
  document.getElementById('completionMessage').innerHTML = message;
  
  const comp = document.getElementById('completion');
  comp.style.display = 'block';
  comp.scrollIntoView({ behavior: 'smooth' });
}

// 章の閲覧を検出
function observeChapters() {
  const chapters = document.querySelectorAll('.chapter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        state.visited.add(id);
      }
    });
  }, { threshold: 0.2 });
  
  chapters.forEach(ch => observer.observe(ch));
}

// 要素の初回表示時にフェードイン
function observeFadeIn() {
  const els = document.querySelectorAll('.content-block, .quiz-section, .chapter-card');
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  els.forEach(el => observer.observe(el));
}

// ログイン処理
function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const error = document.getElementById('loginError');
  if (input === '2121') {
    sessionStorage.setItem('sctvAuth', 'true');
    document.getElementById('loginOverlay').style.display = 'none';
  } else {
    error.style.display = 'block';
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordInput').focus();
  }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  // 認証チェック
  if (sessionStorage.getItem('sctvAuth') === 'true') {
    document.getElementById('loginOverlay').style.display = 'none';
  }

  // クイズ初期化
  for (let i = 1; i <= 6; i++) {
    initQuiz(i);
  }

  observeChapters();
  observeFadeIn();
});
