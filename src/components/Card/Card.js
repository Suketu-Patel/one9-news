import React from 'react';
import './styles.css';

function Card(props) {
  const {source, author, title, description, urlToImage: url , content} = props.news;
  console.log('source ', 'url', source, url);
  const width = 100;
  const height = 100;
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={url} width={width} height={height} alt="news" />
      </div>
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">{content}</div>
      </div>
    </div>
  )
}

export default Card;