import React, {useState} from "react"; // example of default export ...
import { Router, Link } from "@reach/router";
import "antd/dist/antd.css";
import { SearchParams, SingleNewsDetails } from "./components"; // example of named exports ....
import Favorites from './components/Favorites/Favorites';
import { Menu, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    setFavorites([...favorites, ...newsData.filter(singleNewsData => singleNewsData.id === id)]);
    console.log('here in addTo');
  }
  console.log('favorites', favorites);
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
          <Menu.Item key="2">
            <Link to="/favorites" style={{ textDecoration: "none" }}>
              Favorites
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: "50px" }}>
        <Router>
          <SearchParams path="/" setNewsData= {setNewsData} newsData={newsData} />
          <SingleNewsDetails path="/details/:id" setFavorites={addToFavorites}/>
          <Favorites path="/favorites" favorites={favorites} />
        </Router>
      </Content>
    </div>
  );
};

export default App;
