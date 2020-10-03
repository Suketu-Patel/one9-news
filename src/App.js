import React from "react"; // example of default export ...
import { Router, Link } from "@reach/router";
import "antd/dist/antd.css";
import { SearchParams, SingleNewsDetails } from "./components"; // example of named exports ....
import { Menu, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <HomeOutlined />
              One9 News
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: "50px" }}>
        <Router>
          <SearchParams path="/" />
          <SingleNewsDetails path="/details/:id" />
        </Router>
      </Content>
    </div>
  );
};

export default App;
