import React from 'react';
import './Card.css';

export default function Card({ title, image, content }) {
  return (
    <article className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <ul className="card-content">
          {content.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
