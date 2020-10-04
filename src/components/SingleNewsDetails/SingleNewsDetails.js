import React, { useState, Fragment } from "react";
import { Layout, Typography, Image } from "antd";
import {
  LikeOutlined,
  LikeFilled
} from '@ant-design/icons';
import "./SingleNewsDetails.css";
import { useEffect } from "react";

const { Content } = Layout;
const { Title } = Typography;

const SingleNewsDetails = (props) => {
  const {
    favorites,
    location
  } = props;
  const [liked, setLiked] = useState(false)
  useEffect(() => {
    favorites.some((favorite) => {
      if (favorite.publishedAt === location.state.data.publishedAt) {
        setLiked(true)
        return true;
      }
      return false
    })
  }, [location.state.data.publishedAt, favorites])
  if (location.state.data) {
    const {
      title,
      urlToImage,
      url,
      content,
      id,
      isContentAvailable,
    } = location.state.data;
    return (
      <Layout className="wrapper">
        <Title>{title}</Title>
        <div>
          {!liked ?
            <LikeOutlined className="likeBtn" onClick={() => {
              props.setFavorites(id)
              setLiked(true)
            }
            } />
            :
            <LikeFilled className="likedBtn" />
          }
        </div>
        <center>
          <Image src={urlToImage} width={"50%"} style={{ marginTop: "20px" }} />
        </center>
        <Content>
          {
            <Fragment>
              <Typography style={{ fontSize: "22px", padding: "40px" }}>
                {content}
                {isContentAvailable && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                )}
              </Typography>
            </Fragment>
          }
        </Content>
      </Layout>
    );
  }
  return null;
};

export default SingleNewsDetails;
