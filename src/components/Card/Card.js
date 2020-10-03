import React from 'react';
import { Card } from 'antd';
import './styles.css';

const { Meta } = Card;

function CardComponent(props) {
  const { source, author, title, description, urlToImage, url, content } = props.news;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card
        hoverable
        className="card-style"
        style={{ width: 400 }}
        cover={<img alt="example" src={urlToImage} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </a>
  )
}

export default CardComponent;