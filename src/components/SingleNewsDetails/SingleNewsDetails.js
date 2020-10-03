import React, { Fragment } from "react";
import { Layout, Typography, Image } from "antd";
import "./SingleNewsDetails.css";

const { Content } = Layout;
const { Title } = Typography;

const SingleNewsDetails = ({ location }) => {
  if (location.state.data) {
    const {
      title,
      urlToImage,
      url,
      content,
      isContentAvailable,
    } = location.state.data;
    return (
      <Layout className="wrapper">
        <Title>{title}</Title>
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
