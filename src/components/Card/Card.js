import React from "react";
import { Card } from "antd";
import { Link } from "@reach/router";
import "./styles.css";

const { Meta } = Card;

function CardComponent(props) {
  const {
    id,
    source,
    author,
    title,
    description,
    urlToImage,
    url,
    content,
  } = props.news; // here we have used javascript destructuring concept.....

  return (
    <Link to={`details/${id}`} state={{ data: props.news }}>
      <Card
        hoverable
        className="card-style"
        style={{ width: 400 }}
        cover={<img alt="example" src={urlToImage} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Link>
  );
}

export default CardComponent;
