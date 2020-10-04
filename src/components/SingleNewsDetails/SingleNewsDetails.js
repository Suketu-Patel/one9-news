import React, { Fragment } from "react";
import { Layout, Typography, Image } from "antd";
import "./SingleNewsDetails.css";

const { Content } = Layout;
const { Title } = Typography;

const SingleNewsDetails = (props) => {
  console.log('props', props)
  if (props.location.state.data) {
    const {
      title,
      urlToImage,
      url,
      content,
      id,
      isContentAvailable,
    } = props.location.state.data;
    return (
      <Layout className="wrapper">
        <div onClick={() => props.setFavorites(id)}><Title>{title}</Title></div>
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
