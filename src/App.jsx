import React from 'react';
import './App.css';

const sections = [
  {
    icon: '💡',
    title: '仕組みから動かす、現場ドリブンな実務支援',
    content: [
      '社内の役職が退職 → 方針・実務が宙に浮く',
      'ナンバー2／右腕不在 → ボトルネックが集中',
      'MD不足 → 商品計画がブラックボックス化',
      '属人化 → 誰も仕組みを引き継げない',
    ],
    image: '/assets/section1.jpg',
  },
  {
    icon: '✅',
    title: 'まるっと任せられること',
    content: [
      '「人に依存しない」商品計画・在庫管理・販促を再構築',
      '現場の効率動作を自動化・可視化して拡張',
      'デザイナー／物流／店舗スタッフと接続する仕様化',
    ],
    image: '/assets/section2.jpg',
  },
  {
    icon: '📦',
    title: 'ディストリビューター導入による進化',
    content: [
      '小ロット・客注・納品まで最小単位で運用可能',
      '売上を取りやすい場所への戦略投入',
      '「在庫を持たずに売る」モデルの支援',
    ],
    image: '/assets/section3.jpg',
  },
  {
    icon: '🎯',
    title: '我々の仕事とは？',
    content: [
      '「現場に合った正解」を“仕組み”に変換',
      '誰でも再現できる業務設計へ',
    ],
    image: '/assets/section4.jpg',
  },
  {
    icon: '🔑',
    title: 'こんな企業にフィット',
    content: [
      '役職が辞めて現場が止まりそうなとき',
      '属人化から抜け出したいとき',
      '現場のノウハウを形式知化したいとき',
      'ディストリ型で販路開拓したいとき',
    ],
    image: '/assets/section5.jpg',
  },
  {
    icon: '🧭',
    title: '実務の7フェーズ',
    table: [
      ['交渉・営業', '百貨店や商業施設との出店交渉・日程調整'],
      ['商品管理', 'SKUごとの数量・納品・補充の自動化・最適化'],
      ['販促設計', 'VMD／CADで設計し、売場レイアウトも提案'],
      ['準備・設営', '設営マニュアル、ポスター設置、導線確保'],
      ['オペレーション', 'スタッフ手配・マニュアル共有・運営'],
      ['分析・撤収', '売上・在庫回収・改善点のドキュメント化'],
      ['成果最大化', '成果が出れば常設展開・取引拡大も視野'],
    ],
    image: '/assets/section6.jpg',
  },
];

export default function App() {
  return (
    <main className="container">
      <h1 className="main-title">仕組み化支援｜プレゼン資料</h1>
      {sections.map((sec, index) => (
        <div className="card" key={index}>
          <img src={sec.image} alt={sec.title} className="card-image" />
          <h2 className="card-title">
            {sec.icon} {sec.title}
          </h2>
          {sec.content && (
            <ul className="card-content">
              {sec.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          )}
          {sec.table && (
            <table className="card-table">
              <tbody>
                {sec.table.map(([label, desc], i) => (
                  <tr key={i}>
                    <td className="table-label">{label}</td>
                    <td className="table-desc">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </main>
  );
}
