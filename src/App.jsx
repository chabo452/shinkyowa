import React from 'react';
import './App.css';

const sections = [
  {
    icon: '🧠',
    title: '議事録自動化｜Whisper × Notion連携',
    text: '音声データをWhisperで文字起こしし、GAS経由でNotionへ自動登録。日付・内容・要約を自動分類し、議事録整理の手間をゼロに。'
  },
  {
    icon: '📦',
    title: '在庫分析支援｜アパレル現場対応',
    text: '売上・在庫データ5万件超をもとに自動可視化。商品ID・SKU・店舗別の回転数・粗利を見える化し、仕入とMDの判断を高速化。'
  },
  {
    icon: '📤',
    title: 'ディストリ業務支援｜納品帳票・CSV出力自動化',
    text: '出荷現場で使える帳票（納品書・ラベル・管理CSVなど）を、テンプレ化＋1クリックで出力。型番・数量・納品先を自動整形。'
  },
  {
    icon: '🛍️',
    title: 'POPUP運用｜SATOプリンタ × 在庫連携',
    text: 'POPUP現場で使うSATOラベル発行、Squareとの連携、商品在庫の連動を一括管理。担当者が現場で迷わない運用設計を支援。'
  },
  {
    icon: '🔁',
    title: '自動転送フロー｜GAS × Drive × Notion',
    text: 'ローカルの音声データをGoogle Driveへアップロード → 自動文字起こし → GAS経由でNotionへ送信という自動パイプラインを構築。'
  },
  {
    icon: '🛠️',
    title: '業務改善ツール群｜通知・DB連携・テンプレ出力',
    text: 'LINE通知・Googleスプレッドシート連携・帳票テンプレート自動生成など、業務を止めずに回すための業務支援ツールを開発。'
  },
  {
    icon: '🔥',
    title: '私たちのしごと｜POPUP｜ディストリビュート｜MD',
    text: '「人手が足りない」「右腕がいない」「Excelが限界」など、現場で起きるリアルな課題に、代行＋仕組み化の両輪で支援します。'
  },
  {
    icon: '💸',
    title: '料金プラン｜POPUP〜MD設計〜仕組み化導入',
    table: [
      ['POPUPパッケージ（交渉・設営・VMD・撤収まで）', '¥200,000〜／1拠点'],
      ['ディストリ構築（現場最適化・在庫連携）', '¥150,000〜／1案件'],
      ['MDシート＋PL/BS＋数値設計', '¥120,000〜／1ブランド'],
      ['仕組み導入（シート／CSV生成／自動化など）', '¥80,000〜／1セット'],
    ]
  },
  {
    icon: '🧰',
    title: '料金プラン｜ツール・ドキュメント自動生成・連携',
    table: [
      ['CSV一括生成ツール（Excel対応・シート整形）', '¥30,000〜'],
      ['社内データ整理（クラウド連携・GASなど）', '¥50,000〜'],
      ['ドキュメント自動生成（指示書・発注書など）', '¥40,000〜'],
      ['LINE通知／Google連携などのカスタム支援', '¥30,000〜'],
    ]
  },
  {
    icon: '💡',
    title: 'お困りごと別｜おすすめプラン',
    table: [
      ['「ナンバー2が辞めた／右腕がいない」', 'MD＋仕組み代行（¥120,000〜）'],
      ['「現場が分かりやすい資料を作れない」', 'シート生成＆CSV自動整理（¥30,000〜）'],
      ['「商品が作れない／売上がない」', 'ディストリ設計＆現場連携（¥150,000〜）'],
      ['「POPUP全部まかせたい」', 'フルパッケージ（¥200,000〜）'],
    ]
  }
];

function App() {
  return (
    <div className="App">
      <h1>現場と業務をつなぐ、仕組み設計のプロフェッショナル</h1>
      <p className="subtitle">― 自動化 × 実務対応 × 保守まで任せられる ―</p>
      {sections.map((section, index) => (
        <div className="card" key={index}>
          <h2>{section.icon} {section.title}</h2>
          {section.text && <p>{section.text}</p>}
          {section.table && (
            <table>
              <tbody>
                {section.table.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
