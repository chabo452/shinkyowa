import React from 'react';
import Card from './Card';

const sampleContent = [
  'ここに説明文1',
  'ここに説明文2',
  'ここに説明文3',
];

export default function CardTest() {
  return (
    <div style={{ padding: '2rem' }}>
      <Card
        title='サンプルカードタイトル'
        image='/assets/sample-image.jpg'
        content={sampleContent}
      />
    </div>
  );
}
