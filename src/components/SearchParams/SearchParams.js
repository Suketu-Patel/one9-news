import React, { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../../api";
import Cards from "../Cards";
import { Input, Spin } from "antd";
import "./SearchParams.css";

const { Search } = Input;

const SearchParams = () => {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("ipl");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchResult();
  }, [search]);

  const fetchResult = async () => {
    const newsData = await api.get(`q=${search}`);
    addIdentifierAndPreProcessNewsData(newsData.articles);
    setNewsData(newsData.articles);
    setLoading(false);
  };

  const addIdentifierAndPreProcessNewsData = (data = []) => {
    data.map((eachData) => {
      eachData["id"] = uuidv4();
      if (eachData["content"]) {
        eachData["content"] = eachData["content"].substring(0, 201);
        eachData["isContentAvailable"] = true;
      } else {
        eachData["content"] = "No Content";
        eachData["isContentAvailable"] = false;
      }
      return null;
    });
  };
  return (
    <Fragment>
      <Search
        placeholder="Topic"
        enterButton="Search Topic"
        size="large"
        style={{ width: "400px" }}
        onSearch={(value) => setSearch(value)}
      />

      {loading ? (
        <Spin className="loader" tip="Loading..." />
      ) : (
        <Cards newsData={newsData} />
      )}
    </Fragment>
  );
};

export default SearchParams;