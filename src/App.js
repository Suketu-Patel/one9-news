import React from 'react';
import { Router, Link } from "@reach/router"
import 'antd/dist/antd.css';
import SearchParams from './components/SearchParams.js';
import { Menu, Layout } from 'antd';

const { Header, Content } = Layout;

const App = () => {

  return (
    <div className="App">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/" style={{ textDecoration: "none" }}>Simple News App</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: '50px' }}>
        <Router>
          <SearchParams path="/" />
        </Router>
      </Content>
    </div>
  );
}

export default App;
